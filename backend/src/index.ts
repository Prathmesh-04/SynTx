import express from "express"
import { SigninSchema, submissionSchema, UserSchema } from "./types/types";
import { prisma } from "./lib/prisma";
import { fetchingData, SigninQuery, SubmissionQuery, verifying } from "./queries";
import cors from "cors";
import session from "express-session"
import { RedisStore } from "connect-redis";
import { redis } from "./lib/redis";

const app = express();
const store = new RedisStore({
    client: redis,
})

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(session({
    secret: process.env.SESSION_SECRET!,
    store: store,
    resave: false,
    saveUninitialized: false,

    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000*60*60*3
    }
}))
app.use(express.json())

app.post("/signup", async (req,res)=>{
    const parsedResponse = UserSchema.safeParse(req.body)
    if(!parsedResponse.success){
        console.log(parsedResponse.error.issues[0]?.message);
        res.status(400).json({
            message: parsedResponse.error.issues
        })
        return
    }
    const userName = parsedResponse.data.username
    const email = parsedResponse.data.email
    const password = await Bun.password.hash(parsedResponse.data.password)

    try{
        await prisma.user.create({
            data: {
                userName,
                email,
                password
            }
        })
        res.status(201).json({
            message: "The data have been added to the database"
        })
    }catch(err : any ){

        if( err.code === "P2002" ){
            return res.status(409).json({
                message: "Username or email already exists",
            });
        } 

        res.status(400).json({
            message: "Internal Server Error"
        })
    }

})

app.get("/me", async (req,res)=>{
    if(!req.session.userId){
        return res.status(401).json({
            message: "Unauthorised"
        })
    }

    const user = await verifying(req.session.userId)

    if(!user){
        return res.status(400).json({
            message: "User not found"
        })
    }

    res.status(200).json({
        user
    })
})

app.post("/signin", async (req,res)=>{
    const parsedResponse = SigninSchema.safeParse(req.body)
    if(!parsedResponse.success){
        console.log(parsedResponse.error.issues[0]?.message);
        res.status(400).json({
            message: parsedResponse.error.issues
        })
        return
    }

    const user = await SigninQuery(parsedResponse.data.keyword,parsedResponse.data.password)

    if(!user.check){
        res.status(400).json({
            message: "Enter password is incorrect"
        })
        return;
    }

    req.session.userId = user.user?.userId
    console.log(req.session.id)
    console.log("Sign in successful")
    res.status(200).json({
        message: "You have been signed in successfully"
    })
})


app.post("/submission", async (req,res)=>{

    const parsedResponse = submissionSchema.safeParse(req.body)
    if(!parsedResponse.success){
        console.log(parsedResponse.error.issues[0]?.message);
        res.status(400).json({
            message: parsedResponse.error.issues
        })
        return
    }

    const {sourceCode, input, language} = parsedResponse.data
    const userId = req.session.userId

    if(!userId){
        res.status(401).json({
            message: "Unauthorised"
        })
        return
    }

    try {
        const submission = await SubmissionQuery(userId, sourceCode, language, input)
        
        console.log("Going to push in the redis")
        
        await redis.lPush("problems", JSON.stringify({ 
            submissionId: submission.id
        }));
        
        res.status(200).json({
            message:"Submission has been made to the database",
            submission
        })

    }catch(error){
        console.error(error)
        res.status(500).json({
            message:"Failed to create submission"
        })
    }
})


app.get("/submission/:submissionId", async (req,res)=>{
    const id = parseInt(req.params.submissionId)
    const data = await fetchingData(id)
    console.log(data);

    if(!data){
        return res.status(400).json({
            message: "No record found"
        })
    }

    return res.status(200).json({
        message: "Found record successfully",
        data
    })
})

app.post("/logout", (req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.error(err)
            return res.status(500).json({
                message: "Failed to logout"
            })
        }
        res.clearCookie("connect.sid")
        res.status(200).json({
            message: "Logged out successfully"
        })
    })
})


app.listen(3000)
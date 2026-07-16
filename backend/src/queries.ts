import { prisma } from "./lib/prisma";

export async function SigninQuery(keyword : string , pass : string ){

    const user = await prisma.user.findFirst({
        where: {
            OR : [ {userName : keyword }, {email : keyword }]
        },
        select: {password : true , userId : true} 
    })

    const check = await Bun.password.verify(pass,user?.password!)
    return {check, user};
}

export async function verifying(id : string) {
    const user = await prisma.user.findUnique({
        where: { userId : id},
        select: {
            email : true,
            userName : true
        }
    })

    return user
}

export async function SubmissionQuery(userId : string , sourceCode: string , language : string , input : string ){

    console.log("Going for a submission")
    return prisma.submission.create({
        data: {
            language: language,
            sourceCode: sourceCode,
            status: "processing",
            input: input,
            userId: userId,
        }
    })
}


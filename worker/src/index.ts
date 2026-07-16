import { createClient } from "redis";
import { prisma } from "./libs/prisma";
import axios from "axios";

const client = createClient()
client.connect()
    .then(async () =>{
        while(true){
            const response = await client.BRPOP("problems",0)
            if(!response){
                continue;
            }
            const job = await JSON.parse(response.element)
            console.log(job.submissionId)
            const res = await prisma.submission.findUnique({
                where: {
                    id: job.submissionId
                }
            })
            console.log(res)

            //Making the use of the API Judge 0
            const data = {
                source_code : res?.sourceCode,
                language_id : res?.language,
                stdin : res?.input
            }

            const result = await axios({
                method: 'post',
                url: 'https://ce.judge0.com/submissions/?base64_encoded=false&wait=true', 
                data : data
            })

            const output = [result.data.stdout, result.data.status]

            console.log("This is the response that we are getting ")
            console.log(output)
            
        }
})



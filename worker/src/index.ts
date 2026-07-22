import { createClient } from "redis";
import { prisma } from "./libs/prisma";
import axios from "axios";
import { languages } from "../../frontend/src/lib/languages"
import { resultSubmission } from "./libs/queries";

const client = createClient({
    url:process.env.REDIS_URL,
})
client.connect()
    .then(async () =>{
        while(true){
            const response = await client.BRPOP("problems",0)
            if(!response){
                continue;
            }

            const job = await JSON.parse(response.element)
            
            const submission = await prisma.submission.findUnique({
                where: {
                    id: job.submissionId
                }
            })

            if(!submission){
                console.log("Submission not found");
                continue;
            }

            const language = languages.find( 
                (lang) => lang.label === submission.language
            );

            console.log(language)
            if(!language){
                console.log("Language did not match");
                continue;
            }

            //Making the use of the API Judge 0
            const data = {
                source_code : submission.sourceCode,
                language_id :  language.judge0Id,
                stdin : submission.input
            }

            const result = await axios({
                method: 'post',
                url: 'https://ce.judge0.com/submissions/?base64_encoded=false&wait=true', 
                data : data
            })

            console.log("This is the response that we are getting ")
            console.log(result.data)

            await resultSubmission(
                job.submissionId,
                result.data.stdout,
                result.data.time,
                String(result.data.memory),
                result.data.compile_output,
                result.data.message,
                result.data.status.description,
            )

        }
})



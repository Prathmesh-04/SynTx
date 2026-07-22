import { prisma } from "./prisma";

type outputType = [
    output : string,
    status: {
        id: number,
        description : string
    }
];

export async function resultSubmission(
    submissionId: number,
    stdout: string | null,
    time: string | null,
    memory: string | null ,
    compile_output: string | null,
    message: string | null,
    statusDescription: string,
){
    const updatedSubmission = await prisma.submission.update({
        where : {
            id : submissionId,
        },
        data: {
            output: stdout,
            time: time,
            memory: memory,
            compile_output: compile_output, 
            message: message,
            status: statusDescription
        }
    })
}

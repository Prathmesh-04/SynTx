import { outputRequest } from "@/api/submission"
import { useCompilerStore } from "@/lib/CompilerStore"
import { useEffect } from "react"
import { NoExecution } from "./States/NoExecution"
import { Running } from "./States/Running"
import { Failed } from "./States/Failed"
import { Accepted } from "./States/Accepted"

export function OutputBox(){

    const submissionId = useCompilerStore((state) => state.submissionId)
    const executionResult = useCompilerStore((state)=>state.executionResult)
    const setOutput = useCompilerStore((state)=>state.setExecutionResult)


    useEffect(()=>{
        if( submissionId === -1 ) return;

        const interval = setInterval(async()=>{
            const result = await outputRequest(submissionId)
            if( result.data.status !== "processing"){
                clearInterval(interval)
                console.log("result: ",result.data)
                setOutput({
                    status: result.data.status,
                    output: result.data.output,
                    executionTime: result.data.time,
                    memory: result.data.memory,
                    compiler_output: result.data.compile_output,
                    message: result.data.message
                })
            }
        },1000);

        return ()=> clearInterval(interval)
    },[submissionId])

    if( submissionId === -1 ) return <NoExecution />
    if( executionResult === null ) return <Running />
    if( executionResult?.status === "Accepted" )return <Accepted />

    return <Failed />
    
}
import { useCompilerStore } from "@/lib/CompilerStore";
import { OutputWrapper } from "../OutputWrapper";


export function Accepted(){

    const executionResult = useCompilerStore((state)=>state.executionResult)
    console.log(executionResult)

    return (
        <OutputWrapper>
            <div className="
            h-full
            w-full 
            min-w-0
            min-h-0
            p-2 
            font-mono 
            text-gray-400 
            overflow-x-auto 
            overflow-y-auto 
            [&::-webkit-scrollbar]:h-1 
            [&::-webkit-scrollbar]:w-1 
            [&::-webkit-scrollbar-track]:bg-zinc-900 
            [&::-webkit-scrollbar-thumb]:bg-zinc-500 
            [&::-webkit-scrollbar-thumb]:rounded-xl">
                <pre className="w-max min-w-full text-gray-500 whitespace-pre">
                    {executionResult?.output}
                </pre>
            </div>
            <div className="p-2 pl-5 flex border-t border-zinc-800 items-center gap-5">
                <span className="text-sm text-zinc-400">Execution Time: {executionResult?.executionTime}ms</span>
                <span className="text-sm text-zinc-400">Memory : {executionResult?.memory} </span>
            </div>
        </OutputWrapper>
    )
}
import { useCompilerStore } from "@/lib/CompilerStore";
import { OutputWrapper } from "../OutputWrapper";

export function Failed(){


    const executionResult = useCompilerStore((state)=>state.executionResult)

    return (
        <OutputWrapper>
            <div className="flex-1 min-h-0 p-2 font-mono text-sm text-gray-500">
                <span>{executionResult?.message}</span>
                <span>{executionResult?.compiler_output}</span>
            </div>
        </OutputWrapper>
    )
}
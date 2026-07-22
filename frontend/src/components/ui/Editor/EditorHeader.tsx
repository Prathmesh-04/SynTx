import { useCompilerStore } from "@/lib/CompilerStore";
import { TextButton } from "../TextButton";
import { useEffect, useState, type ChangeEvent } from "react";
import type { languageModel } from "@/lib/languages";
import { submitting } from "@/api/submission";

export function EditorHeader(){
    const content = useCompilerStore((state) => state.content)
    const input = useCompilerStore((state) => state.input)
    const language = useCompilerStore((state) => state.language )
    const setLanguage = useCompilerStore((state) => state.setLanguage )
    const setContent = useCompilerStore((state) => state.setContent )
    const submissionId = useCompilerStore((state) => state.submissionId )
    const setSubmissionId = useCompilerStore((state) => state.setSubmissionId )
    const executionResult = useCompilerStore((state) => state.executionResult)
    const setExecutionResult = useCompilerStore((state) => state.setExecutionResult)

    async function handleSubmit(){
        if(content === "")return;
        setExecutionResult(null);

        const response = await submitting({
            sourceCode: content,
            input: input,
            language: language
        })

        console.log(response)

        setSubmissionId(response.submission.id)
    }

    function ResetContent(){
        setContent("")
    }
    return(
        <div className="border-b border-zinc-800 rounded-xl flex justify-between h-10 items-center p-6 m-2">
            <div className="
                relative
                text-zinc-400
                transition-all
                duration-200
                hover:text-white
                hover:cursor-pointer

                after:absolute
                after:left-1/2
                after:-translate-x-1/2
                after:-bottom-1
                after:h-px
                after:w-full
                after:origin-center
                after:scale-x-0
                after:bg-white
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
                ">
                <select name="" id="" className="outline-none hover:cursor-pointer" 
                value={language}
                onChange={(e : ChangeEvent<HTMLSelectElement> ) => setLanguage(e.target.value as languageModel)}>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <div className="flex gap-6">
                <TextButton 
                onClick={ResetContent} 
                disabled={ submissionId !== -1 && !executionResult }>
                    Reset
                </TextButton>

                <h1>|</h1>

                <TextButton
                onClick={handleSubmit}
                disabled={ submissionId !== -1 && !executionResult }>
                    Run
                </TextButton>
            </div>
        </div>
    )
}
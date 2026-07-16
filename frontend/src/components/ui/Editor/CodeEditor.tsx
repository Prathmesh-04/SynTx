import { useCompilerStore } from "@/lib/CompilerStore";
import { EditorHeader } from "./EditorHeader";
import Editor from '@monaco-editor/react'

export function CodeEditor(){

    const language = useCompilerStore((state) => state.language)
    const content = useCompilerStore((state) => state.content)
    const setContent = useCompilerStore((state) => state.setContent)

    console.log(content)
    return(
        <div className="flex-7 border border-zinc-800 flex flex-col rounded-xl">
            <EditorHeader/>
            <div className="mx-2 mb-2 border border-zinc-800 flex-1 rounded-xl overflow-hidden">
                <Editor 
                theme="vs-dark"
                options={{
                    wordWrap: "off",
                    fontFamily: "JetBrains Mono",
                    fontLigatures: true,
                    minimap: { enabled: false },
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    cursorStyle: "line-thin",
                    cursorBlinking: "smooth",
                    matchBrackets: "always"
                }}
                height="100%"
                language={language}
                value={content}
                onChange={(ele)=>setContent(ele ?? "")}
                />
            </div>
        </div>
    )
}
import { CodeEditor } from "@/components/ui/Editor/CodeEditor";
import { InputBox } from "@/components/ui/InputBox";
import { NavBar } from "@/components/ui/NavBar";
import { OutputBox } from "@/components/ui/OutputBox";
import { type languageModel } from "@/lib/languages";
import { useState } from "react";



export function Compiler(){
    const[language, setLanguage] = useState<languageModel>("cpp")


    return (
        <div className="relative min-h-dvh overflow-hidden bg-[#0a0a0a] text-white flex 
        flex-col flex-20">
            <NavBar />
            <div className="flex-1 flex p-4 gap-2 ">
                <CodeEditor />
                <div className="flex-3 rounded-3xl flex flex-col gap-2">
                    <InputBox />
                    <OutputBox />
                </div>
            </div>
        </div>
    )
}
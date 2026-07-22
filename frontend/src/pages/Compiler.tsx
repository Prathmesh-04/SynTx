import { CodeEditor } from "@/components/ui/Editor/CodeEditor";
import { InputBox } from "@/components/ui/InputBox";
import { NavBar } from "@/components/ui/NavBar";
import { OutputBox } from "@/components/ui/Ouput/OutputBox";


export function Compiler(){

    return (
        <div className="relative min-h-dvh overflow-hidden bg-[#0a0a0a] text-white flex 
        flex-col flex-20 h-dvh">
            <NavBar />
            <div className="flex-1 flex p-4 gap-2 min-h-0 min-w-0">
                <CodeEditor />
                <div className="flex-3 min-w-0 rounded-3xl flex flex-col gap-2 min-h-0">
                    <InputBox />
                    <OutputBox />
                </div>
            </div>
        </div>
    )
}
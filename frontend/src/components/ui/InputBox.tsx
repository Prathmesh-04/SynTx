import { useCompilerStore } from "@/lib/CompilerStore"

export function InputBox(){

    const input = useCompilerStore((state) => state.input)
    const setInput = useCompilerStore((state) => state.setInput)

    return (
        <div className="flex-3 min-h-0 rounded-xl border border-zinc-800 flex flex-col">
            <div className="p-2 pl-5 flex border-b border-zinc-800 items-center">
                <span className="text-sm text-zinc-400">stdin</span>
            </div>
            <div className="flex-1 min-h-0 p-2">
                <textarea
                wrap="off"
                className="
                h-full
                w-full
                p-1
                font-mono
                resize-none
                outline-none
                text-gray-400
                [&::-webkit-scrollbar]:h-1
                [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:bg-zinc-900
              [&::-webkit-scrollbar-thumb]:bg-zinc-500
                [&::-webkit-scrollbar-thumb]:rounded-xl
                "
                value={input} 
                onChange={e => setInput(e.target.value)}>
                </textarea>
            </div>
        </div>
    )
}
import type { PropsWithChildren } from "react"

export function OutputWrapper({children} : PropsWithChildren){
    return (
        <div className="flex-4 min-w-0 min-h-0 rounded-xl border border-zinc-800 flex flex-col overflow-hidden">
            <div className="p-2 pl-5 flex border-b border-zinc-800 items-center">
                <span className="text-sm text-zinc-400">Output</span>
            </div>
            {children}
        </div>
    )
}
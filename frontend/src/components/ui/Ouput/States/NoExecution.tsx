import { OutputWrapper } from "../OutputWrapper";

export function NoExecution(){
    return (
        <OutputWrapper>
            <div className="flex-1 min-h-0 p-2 font-mono flex items-center justify-center">
                <span>No Code Executed</span>
            </div>
        </OutputWrapper>
    )
}
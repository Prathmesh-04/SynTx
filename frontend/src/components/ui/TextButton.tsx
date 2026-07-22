import type { ButtonHTMLAttributes } from "react"

type TextButtonProp = ButtonHTMLAttributes<HTMLButtonElement> &{
    children : React.ReactNode
}

export function TextButton( {children , ...props } : TextButtonProp){
        return(
            <button {...props} className="
                relative
                text-zinc-400
                transition-all
                duration-200
                enabled:hover:text-white
                enabled:hover:cursor-pointer

                disabled:cursor-not-allowed
                disabled:text-zinc-600
                disabled:after:scale-x-0

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
                enabled:hover:after:scale-x-100

                
                ">{children}</button>
        )
}
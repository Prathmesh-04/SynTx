import type { ButtonHTMLAttributes } from "react"

type TextButtonProp = ButtonHTMLAttributes<HTMLButtonElement> &{
    children : React.ReactNode
}

export function TextButton( {children , ...props } : TextButtonProp){
        return(
            <button className="
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
                ">{children}</button>
        )
}
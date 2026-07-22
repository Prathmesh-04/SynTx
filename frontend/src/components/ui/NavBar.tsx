import { logout } from "@/api/auth"
import { useCompilerStore } from "@/lib/CompilerStore"
import { useNavigate } from "react-router-dom"

export function NavBar(){

    const username = useCompilerStore((state)=>state.username)
    const navigate = useNavigate()
    async function handleLogout(){
        await logout()
        navigate("/signin")
    }
    return (
        <header className="
            font-inter
            flex
            h-16
            w-full
            items-center
            justify-between
            border-b
            border-zinc-800
            bg-[#0a0a0a]/90
            px-6
            backdrop-blur-md
            ">
            <div className="text-xl flex gap-2 items-center">
                <span className="font-light text-zinc-400">What's up, </span>
                <button className="
                relative
                font-semibold
                transition-colors
                duration-300
                hover:text-zinc-300
                cursor-pointer
                
                after:absolute
                after:left-1/2
                after:bottom-0
                after:h-px
                after:w-full
                after:-translate-x-1/2
                after:scale-x-0
                after:bg-zinc-300
                after:origin-center
                after:transition-transform
                after:duration-300
                hover:after:scale-x-100
                ">{username}</button>
            </div>

            <div className="text-2xl flex gap-5 items-center">
                <button 
                onClick={()=> window.open("https://github.com/Prathmesh-04/SynTx","_blank")}
                className="
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
                ">Github</button>

                <span>|</span>

                <button onClick={handleLogout} className="
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
                ">Logout</button>
            </div>
        </header>
    )
}
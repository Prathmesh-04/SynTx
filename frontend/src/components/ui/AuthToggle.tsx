import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AuthToggle(){
    const navigate = useNavigate()

    const [active, setActive] = useState("signup");

    function signup(){
        setActive("signup")
        navigate("/")
    }

    function signin(){
        setActive("signin")
        navigate("/signin")
    }

    return(
        <div className="mb-8 flex items-center gap-3 ">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 via-sky-500 to-indigo-500 shadow-lg shadow-sky-500/30 ">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 flex-col justify-center">
          
          <div className="flex relative mx-6 px-2 rounded-2xl py-0.5">
            <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-4xl bg-transparent transition-all duration-1000 border-white border
            ${active === "signup" ? "left-1" : "left-[calc(50%+2px)]"}`}></div>


            <button className="relative z-10 flex-1 py-2 text-xl font-semibold text-white hover:cursor-pointer" onClick={signup}>Sign up</button>


            <button className="relative z-10 flex-1 py-2 text-xl font-semibold text-white hover:cursor-pointer" onClick={signin}>Sign in</button>
          </div>
        </div>
      </div>
    );
}
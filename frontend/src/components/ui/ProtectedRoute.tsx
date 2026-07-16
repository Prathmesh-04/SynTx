import { me } from "@/api/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

type AuthStatus = "loading" | "authenticated" | "unauthenticated"

type ProtectedRouteProps = {
    children : React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps){
    const [status, setStatus] = useState<AuthStatus>("loading")
    useEffect(()=>{
        async function checkAuth(){
            try{
                await me();
                setStatus("authenticated")
            }catch(error){
                console.error(error)
                setStatus("unauthenticated")
            }
        }

        checkAuth();
    },[])

    if (status === "loading"){
        return (
            <div>
                <p>Loading.....</p>
            </div>
        )
    }

    if (status === "unauthenticated"){
        return <Navigate to="/signin" replace/>
    }

    if (status === "authenticated"){
        return children
    }
}

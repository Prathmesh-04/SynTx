import { Outlet } from "react-router-dom";
import { AuthToggle } from "./AuthToggle";


export function AuthLayout(){
    return (
            <main className="relative min-h-dvh overflow-hidden bg-[#0a0a0a] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(92,35,124,0.9),transparent_0_18%),radial-gradient(circle_at_78%_35%,rgba(255,255,255,0.05),transparent_0_20%),linear-gradient(180deg,#111111_0%,#0a0a0a_100%)]" />
                    
                    <div className="absolute inset-0 opacity-25 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[92px_92px]" />
    
                    <div className="relative mx-auto grid min-h-dvh max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-16">
                        <section className="flex flex-col justify-center">
                        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-slate-300">
                            Coding
                        </div>
    
                        <h1 className="max-w-2xl text-5xl font-light leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Your fastest path to practice and progress.
                        </h1>
    
                        <p className="mt-7 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                            Sign up, solve, and track your work in one focused place.
                        </p>
                        </section>
    
                        <section className="flex items-center justify-center lg:justify-end">
                        <div
                            className="relative w-full max-w-130 overflow-hidden rounded-4xl border border-white/10 bg-[#0e0e0e]/95 p-5 shadow-[0_24px_120px_rgba(0,0,0,0.55)] sm:p-6"
                        >
                            <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="absolute left-6 top-20 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
                            <AuthToggle />
                            <Outlet/>
                        </div>
                        </section>
                </div>
            </main>
        );
}
import { signup } from "@/api/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react"
import { useState } from "react"

export function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showpass, setShowpass] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  async function handelSignup(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)

    try {
      const response = await signup({
        username,
        email,
        password,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
      setErrorMessage("Unable to create your account right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  function showPass() {
    setShowpass((value) => !value)
  }

  return (
    <>
        <p className="mb-6 max-w-sm text-sm leading-6 text-slate-400">Create your account to start solving and tracking progress.</p>

        <form onSubmit={handelSignup} className="space-y-4">
            <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="username">
                Username
            </label>
            <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500 focus-visible:border-cyan-400/60 focus-visible:ring-cyan-400/20"
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="yourname"
                autoComplete="username"
                />
            </div>
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="email">
                Email
            </label>
            <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                className="h-12 border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500 focus-visible:border-cyan-400/60 focus-visible:ring-cyan-400/20"
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                />
            </div>
            </div>

            <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="password">
                Password
            </label>
            <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                className="h-12 border-white/10 bg-white/5 pl-10 pr-24 text-white placeholder:text-slate-500 focus-visible:border-cyan-400/60 focus-visible:ring-cyan-400/20"
                id="password"
                type={showpass ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                />
                <button
                type="button"
                onClick={showPass}
                className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label={showpass ? "Hide password" : "Show password"}
                >
                {showpass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showpass ? "Hide" : "Show"}
                </button>
            </div>
            </div>

            {errorMessage ? (
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</p>
            ) : null}

            <Button
            variant="secondary"
            type="submit"
            className="h-12 w-full bg-white text-slate-950 hover:bg-slate-100"
            disabled={isSubmitting}
            >
            <span>{isSubmitting ? "Creating account..." : "Create account"}</span>
            {!isSubmitting ? <ArrowRight className="h-4 w-4" /> : null}
            </Button>
        </form>
    </>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout } from "./components/ui/AuthLayout"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { ProtectedRoute } from "./components/ui/ProtectedRoute"
import { Compiler } from "./pages/Compiler"

export function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Compiler /> } />

            {/* <Route element={ <AuthLayout /> }>
                <Route path="/" element={ <Signup /> } />
                <Route path="/signin" element={ <Signin /> } />
            </Route>

            <Route 
                path="/compiler"
                element={
                    <ProtectedRoute> 
                        <Compiler />
                    </ProtectedRoute>
                }
            /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App

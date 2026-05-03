import { ToastContainer } from "react-toastify"

function AuthLayout({ children }) {
    return (
        <div className="min-h-full bg-[#FAF9F6] text-[#1A1A1A]">
            <main>
            {children}
            </main>
            <ToastContainer position="top-center" />
        </div>
        
    )
}

export default AuthLayout
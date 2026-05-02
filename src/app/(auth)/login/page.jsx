"use client";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { FaHome, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data Submitted:", data);
    }


    return (
        <div className="min-h-screen flex items-center justify-center p-5 sm:p-8 relative">

            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F6]/90 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full shadow-sm text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:border-[#FF8C00]/30 transition-all text-sm font-medium"
            >
                <FaHome className="text-[#FF8C00]" />
                <span>Go Home</span>
            </Link>

            <div className="w-full max-w-md bg-[#FAF9F6] rounded-3xl shadow-xl shadow-[#1A1A1A]/8 p-8 sm:p-10 ring-1 ring-[#1A1A1A]/[0.06]">

                <div className="text-center mb-10 space-y-2">
                    <h1 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">Welcome Back</h1>
                    <p className="text-[#1A1A1A]/55">Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A]/75 mb-1.5 ml-0.5">Email Address</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            placeholder="name@email.com"
                            className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-[#FAF9F6] ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-[#1A1A1A]/12 focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15'} text-[#1A1A1A] placeholder:text-[#1A1A1A]/35`}
                        />
                        {errors.email && <p className="text-red-600 text-xs mt-1.5 ml-0.5">{errors.email.message}</p>}
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1.5 ml-0.5">
                            <label className="block text-sm font-semibold text-[#1A1A1A]/75">Password</label>
                            <Link href="/forgot-password" className="text-xs text-[#FF8C00] hover:text-[#e67e00] font-medium transition-colors">
                                Forgot Password?
                            </Link>
                        </div>
                        <input
                            {...register("password", {
                                required: "Password is required"
                            })}
                            type="password"
                            placeholder="••••••••"
                            className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-[#FAF9F6] ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-[#1A1A1A]/12 focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15'} text-[#1A1A1A] placeholder:text-[#1A1A1A]/35`}
                        />
                        {errors.password && <p className="text-red-600 text-xs mt-1.5 ml-0.5">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center ml-0.5">
                        <input
                            id="remember"
                            type="checkbox"
                            className="h-4 w-4 rounded border-[#1A1A1A]/25 text-[#FF8C00] focus:ring-[#FF8C00]/40 cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-[#1A1A1A]/60 cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#FF8C00] hover:bg-[#e67e00] text-white font-bold py-3.5 shadow-lg shadow-[#FF8C00]/20 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-[#1A1A1A]/55 font-medium">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="text-[#FF8C00] hover:text-[#e67e00] font-semibold transition-colors">
                        Register now
                    </Link>
                </div>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#1A1A1A]/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase tracking-wider">
                        <span className="bg-[#FAF9F6] px-4 text-[#1A1A1A]/40 font-medium">Or login</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-2">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 border border-[#1A1A1A]/12 rounded-2xl hover:bg-[#1A1A1A]/[0.04] transition-colors text-sm font-semibold text-[#1A1A1A]/80"
                    >
                        <FcGoogle size={20} />
                        Google
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 border border-[#1A1A1A]/12 rounded-2xl hover:bg-[#1A1A1A]/[0.04] transition-colors text-sm font-semibold text-[#1A1A1A]/80"
                    >
                        <FaGithub size={20} />
                      Github
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login

"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { FaEye, FaGithub, FaHome, FaRegEyeSlash } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from "react-toastify";

function Register() {

     // google log in--
    const handleGoogleLogin = async()=> {
        const data = await authClient.signIn.social({
        provider: "google",
  });
    }
    // github log in--
    const handleGithubLogin = async() =>{
        const data = await authClient.signIn.social({
        provider: "github"
    });
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    // pass see er toggleing
    const [isShowPass, setIsShowPass] = useState(false);

    const onSubmit = async (data) => {
        console.log("Form data Submitted", data);
        
        const  { email, name, photo, password} = data;

        const {data: res, error} = await authClient.signUp.email({
        name: name, // required
        email: email, // required
        password: password, // required
        image: photo,
        callbackURL: "/",
        });
        console.log(res, error);

        if(error){
                    toast.warning(error.message)
                }
                if(res){
                    toast.success('Account Register Successful')
                }
        };


    return (
        <section className="min-h-screen flex items-center justify-center p-5 sm:p-8 relative">
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 bg-[#FAF9F6]/90 backdrop-blur-md border border-[#1A1A1A]/10 rounded-full shadow-sm text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:border-[#FF8C00]/30 transition-all text-sm font-medium"
            >
                <FaHome className="text-[#FF8C00]" />
                <span>Go Home</span>
            </Link>

            <div className="w-full max-w-md bg-[#FAF9F6] rounded-3xl shadow-xl shadow-[#1A1A1A]/8 p-8 sm:p-10 ring-1 ring-[#1A1A1A]/[0.06]">

                <div className="text-center mb-10 space-y-2">
                    <h1 className="font-heading text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight">Create Account</h1>
                    <p className="text-[#1A1A1A]/55">Join us by filling out the details below</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A]/75 mb-1.5 ml-0.5">Full Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Your Name"
                            className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-[#FAF9F6] ${errors.name ? 'border-red-500' : 'border-[#1A1A1A]/12 focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15'} text-[#1A1A1A] placeholder:text-[#1A1A1A]/35`}
                        />
                        {errors.name && <p className="text-red-600 text-xs mt-1.5 ml-0.5">{errors.name.message}</p>}
                    </div>

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
                            className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-[#FAF9F6] ${errors.email ? 'border-red-500' : 'border-[#1A1A1A]/12 focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15'} text-[#1A1A1A] placeholder:text-[#1A1A1A]/35`}
                        />
                        {errors.email && <p className="text-red-600 text-xs mt-1.5 ml-0.5">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#1A1A1A]/75 mb-1.5 ml-0.5">Photo URL (Optional)</label>
                        <input
                            {...register("photo")}
                            type="url"
                            placeholder="https://image-link.com"
                            className="w-full px-4 py-3.5 rounded-2xl border border-[#1A1A1A]/12 outline-none focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15 transition-all bg-[#FAF9F6] text-[#1A1A1A] placeholder:text-[#1A1A1A]/35"
                        />
                    </div>

                    <div className='relative'>
                        <label className="block text-sm font-semibold text-[#1A1A1A]/75 mb-1.5 ml-0.5">Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "At least 6 characters" }
                            })}
                            type={isShowPass ? "text" : "password"}
                            placeholder="••••••••"
                            className={`w-full px-4 py-3.5 rounded-2xl border outline-none transition-all bg-[#FAF9F6] ${errors.password ? 'border-red-500' : 'border-[#1A1A1A]/12 focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15'} text-[#1A1A1A] placeholder:text-[#1A1A1A]/35`}
                        />
                        <span className=" absolute right-2 top-10 cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>
                                                {isShowPass ? <FaEye /> : <FaRegEyeSlash /> }
                                                </span>

                        {errors.password && <p className="text-red-600 text-xs mt-1.5 ml-0.5">{errors.password.message}</p>}
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full rounded-full bg-[#FF8C00] hover:bg-[#e67e00] text-white font-bold py-3.5 shadow-lg shadow-[#FF8C00]/20 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-[#1A1A1A]/55 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#FF8C00] hover:text-[#e67e00] font-semibold transition-colors">
                        Login
                    </Link>
                </div>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#1A1A1A]/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase tracking-wider">
                        <span className="bg-[#FAF9F6] px-4 text-[#1A1A1A]/40 font-medium">Or register with </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-2">
                    <button onClick={handleGoogleLogin}
                        type="button"
                        className="flex items-center cursor-pointer justify-center gap-2 py-3 border border-[#1A1A1A]/12 rounded-2xl hover:bg-[#1A1A1A]/[0.20] transition-colors text-sm font-semibold text-[#1A1A1A]/80"
                    >
                        <FcGoogle size={20} />
                        Google
                    </button>
                    <button onClick={handleGithubLogin}
                        type="button"
                        className="flex items-center justify-center gap-2 py-3 border border-[#1A1A1A]/12 rounded-2xl hover:bg-[#1A1A1A]/[0.20] cursor-pointer transition-colors text-sm font-semibold text-[#1A1A1A]/80"
                    >
                        <FaGithub size={20} />
                        Github
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Register

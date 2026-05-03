"use client";
import { Home, Menu, ShoppingBag, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Navbar() {
    const { data: session, isPending} = authClient.useSession();
    const user = session?.user;
    console.log(user);
    
    const userName = user?.name || user?.email?.split("@")[0] || "User";
    const userImage = user?.image;
    


    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', icon: <Home size={18} strokeWidth={1.75} />, href: '/' },
        { name: 'Products', icon: <ShoppingBag size={18} strokeWidth={1.75} />, href: '/products' },
        { name: 'About Us', icon: <UserRound size={18} strokeWidth={1.75} />, href: '/about-us' },
        { name: 'My Profile', icon: <UserRound size={18} strokeWidth={1.75} />, href: '/my-profile' },
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-[#1A1A1A]/8 bg-[#FAF9F6]/72 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgba(26,26,26,0.04)] supports-[backdrop-filter]:bg-[#FAF9F6]/65">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex justify-between items-center h-[4.5rem]">

                    <Link href="/" className="shrink-0 group flex items-center gap-1">
                        <span className="font-heading text-3xl sm:text-[2rem] tracking-tight text-[#1A1A1A]">
                            Sun<span className="text-[#FF8C00]">Cart</span>
                        </span>
                        <span className="hidden sm:inline-block ml-2 h-6 w-px bg-[#1A1A1A]/15 group-hover:bg-[#FF8C00]/40 transition-colors" aria-hidden />
                        <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 font-medium pl-2">
                            Luxe
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out ${isActive
                                        ? 'bg-[#1A1A1A] text-[#FAF9F6] shadow-md shadow-[#1A1A1A]/15'
                                        : 'text-[#1A1A1A]/75 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/[0.06] hover:-translate-y-0.5'
                                        }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {isPending ? ( <span className="loading loading-spinner text-warning"></span> ) : user ? (
                        <div className="hidden md:flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A]/[0.04] ring-1 ring-[#1A1A1A]/10">
                                {userImage ? (
                                    <img
                                        src={userImage}
                                        alt={userName}
                                        className=" uppercase h-9 w-9 rounded-full object-cover ring-1 ring-[#1A1A1A]/10"
                                    />
                                ) : (
                                    <div className="h-9 w-9 rounded-full bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold flex items-center justify-center">
                                        {userName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <p className="text-sm font-medium text-[#1A1A1A]/80">
                                    Welcome, <span className="text-[#1A1A1A]">{userName}</span>
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={async () => await authClient.signOut()}
                                className="px-6 py-2.5 text-sm font-semibold rounded-full bg-[#1A1A1A] text-[#FAF9F6] ring-1 ring-[#1A1A1A]/10 shadow-md shadow-[#1A1A1A]/15 hover:bg-[#2a2a2a] hover:text-white hover:ring-[#FF8C00]/35 hover:shadow-lg hover:shadow-[#FF8C00]/20 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-3">
                        
                        <button>
                            <Link
                            href="/login"
                            className="px-6 py-2.5 text-sm font-semibold rounded-full bg-[#1A1A1A] text-[#FAF9F6] ring-1 ring-[#1A1A1A]/10 shadow-md shadow-[#1A1A1A]/15 hover:bg-[#2a2a2a] hover:text-white hover:ring-[#FF8C00]/35 hover:shadow-lg hover:shadow-[#FF8C00]/20 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Login
                        </Link>
                        </button>

                        <button>
                        <Link
                            href="/register"
                            className="px-6 py-2.5 text-sm font-semibold rounded-full bg-[#FF8C00] text-white shadow-md shadow-[#FF8C00]/25 hover:bg-[#e67e00] hover:shadow-lg hover:shadow-[#FF8C00]/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Register
                        </Link>
                        </button>
                    </div>
                    )
                }

                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="p-2.5 rounded-full text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/[0.06] transition-colors"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out bg-[#FAF9F6]/95 backdrop-blur-lg border-t border-[#1A1A1A]/8 ${isOpen ? 'max-h-[min(100vh,28rem)]' : 'max-h-0 border-t-0'}`}>
                <div className="px-5 pt-4 pb-8 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${isActive
                                    ? 'bg-[#1A1A1A] text-[#FAF9F6] font-semibold'
                                    : 'text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/[0.06] hover:pl-5'
                                    }`}
                            >
                                {link.icon} {link.name}
                            </Link>
                        );
                    })}

                    {user ? (
                        <div className="pt-5 mt-2 border-t border-[#1A1A1A]/10 flex flex-col gap-3">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#1A1A1A]/[0.04] ring-1 ring-[#1A1A1A]/10">
                                {userImage ? (
                                    <img
                                        src={userImage}
                                        alt={userName}
                                        className="h-9 w-9 rounded-full object-cover ring-1 ring-[#1A1A1A]/10"
                                    />
                                ) : (
                                    <div className="h-9 w-9 rounded-full bg-[#1A1A1A] text-[#FAF9F6] text-xs font-semibold flex items-center justify-center">
                                        {userName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <p className="text-sm font-medium text-[#1A1A1A]/80">
                                    Welcome, <span className="text-[#1A1A1A]">{userName}</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={async () => {
                                    await authClient.signOut();
                                    setIsOpen(false);
                                }}
                                className="w-full py-3.5 text-center font-semibold text-[#FAF9F6] rounded-full bg-[#1A1A1A] ring-1 ring-[#1A1A1A]/12 hover:bg-[#2a2a2a] transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="pt-5 mt-2 border-t border-[#1A1A1A]/10 flex flex-col gap-3">
                            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-3.5 text-center font-semibold text-[#1A1A1A] rounded-2xl bg-[#FAF9F6] ring-1 ring-[#1A1A1A]/12 hover:bg-[#1A1A1A]/[0.04] transition-colors">
                                Login
                            </Link>
                            <Link href="/register" onClick={() => setIsOpen(false)} className="w-full py-3.5 text-center font-semibold text-white rounded-full bg-[#FF8C00] shadow-md shadow-[#FF8C00]/25">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

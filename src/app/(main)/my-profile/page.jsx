"use client";
import { authClient } from '@/lib/auth-client';
import { MapPin, Calendar, ShieldCheck, Mail, User } from 'lucide-react';
import React from 'react';

function MyProfilePage() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="alert alert-error shadow-lg max-w-sm">
                    <span>Please login to view your profile.</span>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-10 px-6">
            {/* Main Luxury Card */}
            <div className="card w-full max-w-xl bg-white shadow-2xl ring-1 ring-[#1A1A1A]/5 rounded-[2.5rem] overflow-hidden">
                
                {/* Profile Header / Cover Style Overlay */}
                <div className="h-32 bg-gradient-to-r from-[#1A1A1A] to-[#333333] relative">
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                        <div className="avatar">
                            <div className="w-24 h-24 rounded-full ring ring-[#FF8C00] ring-offset-base-100 ring-offset-2 bg-white">
                                {user.image ? (
                                    <img src={user.image} alt={user.name} />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-3xl font-bold text-[#1A1A1A]">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Body */}
                <div className="card-body items-center text-center pt-16 pb-10 px-8">
                    {/* User Identity */}
                    <div className="space-y-1 mb-6">
                        <h2 className="card-title text-2xl font-bold text-[#1A1A1A] uppercase tracking-tight">
                            {user.name}
                        </h2>
                        <div className="badge badge-outline border-[#FF8C00] text-[#FF8C00] font-semibold py-3">
                            <ShieldCheck size={14} className="mr-1" /> GOLD MEMBER
                        </div>
                    </div>

                    {/* Info List - Niche Niche Grouped */}
                    <div className="w-full space-y-4 pt-4 border-t border-[#1A1A1A]/5">
                        
                        {/* Email */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[#1A1A1A]/50">
                                <Mail size={16} />
                                <span>Email</span>
                            </div>
                            <span className="font-medium text-[#1A1A1A]">{user.email}</span>
                        </div>

                        {/* Country - Custom Info */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[#1A1A1A]/50">
                                <MapPin size={16} />
                                <span>Location</span>
                            </div>
                            <span className="font-medium text-[#1A1A1A]">Bangladesh</span>
                        </div>

                        {/* Join Date - Fake Info */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[#1A1A1A]/50">
                                <Calendar size={16} />
                                <span>Joined</span>
                            </div>
                            <span className="font-medium text-[#1A1A1A]">May 2026</span>
                        </div>

                        {/* Account Status */}
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[#1A1A1A]/50">
                                <User size={16} />
                                <span>Status</span>
                            </div>
                            <span className="text-success font-bold uppercase text-[10px] tracking-widest">Verified</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="card-actions w-full mt-8">
                        <button className="btn btn-block rounded-2xl bg-[#1A1A1A] text-white border-none hover:bg-[#FF8C00] transition-all duration-300 shadow-lg shadow-[#1A1A1A]/10">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MyProfilePage;
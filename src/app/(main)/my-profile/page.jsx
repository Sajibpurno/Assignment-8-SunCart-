"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';

function MyProfilePage() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    if (!user) {
        return <div className="p-10 text-center">Please login to view your profile.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>
            
            <div className="bg-[#FAF9F6] p-8 rounded-3xl ring-1 ring-[#1A1A1A]/10 shadow-sm flex items-center gap-6">
                {/* User Image */}
                {user.image ? (
                    <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full border-2 border-[#FF8C00]" />
                ) : (
                    <div className="w-24 h-24 rounded-full bg-[#1A1A1A] text-white text-3xl flex items-center justify-center font-bold">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                )}

                {/* User Details */}
                <div>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] uppercase tracking-wide">
                        {user.name}
                    </h2>
                    <p className="text-[#1A1A1A]/60">{user.email}</p>
                    <p className="mt-2 text-sm font-medium px-3 py-1 bg-[#FF8C00]/10 text-[#FF8C00] rounded-full inline-block">
                        Active Member
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyProfilePage;




// MyProfilePage
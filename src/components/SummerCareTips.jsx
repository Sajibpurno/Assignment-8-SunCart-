import { skinTips } from '@/data/home-page-cards-data'
import React from 'react'

function SummerCareTips() {
    return (
        <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-10 bg-[#FAF9F6] border-t border-[#1A1A1A]/[0.06]">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16 sm:mb-20 max-w-2xl mx-auto space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#1A1A1A]/45 font-medium">Wellness</p>
                    <h2 className="font-heading text-4xl sm:text-[2.75rem] text-[#1A1A1A] tracking-tight">
                    The Summer Rituals
                    </h2>
                    <p className="text-[#1A1A1A]/60 text-lg leading-relaxed">
                    Master the art of seasonal radiance. Curated essentials designed to keep you cool, protected, and effortlessly glowing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {skinTips.map((tip) => (
                        <div
                            key={tip.id}
                            className={`group p-8 sm:p-9 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-[#1A1A1A]/8 transition-all duration-500 ${tip.bgColor}`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] flex items-center justify-center mb-7 ring-1 ring-[#1A1A1A]/[0.06] group-hover:scale-105 transition-transform duration-300">
                                {tip.icon}
                            </div>
                            <h3 className="font-heading text-xl text-[#1A1A1A] mb-3 tracking-tight">
                                {tip.title}
                            </h3>
                            <p className="text-[#1A1A1A]/60 leading-relaxed text-[15px]">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-20 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#1A1A1A] text-[#FAF9F6] shadow-xl shadow-[#1A1A1A]/20 ring-1 ring-white/10">
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="font-heading text-xl sm:text-2xl text-[#FAF9F6]">Find Your Perfect Fit</h4>
                        <p className="text-[#FAF9F6]/65 text-sm sm:text-base max-w-md">
                        Don't guess your style. Get expert advice on the best summer gear and skincare to stay fresh all season long.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="shrink-0 px-9 py-3.5 rounded-full bg-[#FF8C00] text-white font-semibold hover:bg-[#e67e00] transition-colors duration-300 shadow-lg shadow-black/25"
                    >
                        Chat with Expert
                    </button>
                </div>

            </div>
        </section>
    )
}

export default SummerCareTips

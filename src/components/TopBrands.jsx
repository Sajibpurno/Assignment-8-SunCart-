import { brands } from '@/data/home-page-cards-data'

function TopBrands() {
    return (
        <section className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-[#1A1A1A]/[0.06]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12 sm:mb-14">
                    <div className="h-px w-14 bg-[#FF8C00] shrink-0" />
                    <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-1">Partners</p>
                        <h2 className="font-heading text-xl sm:text-2xl text-[#1A1A1A] tracking-tight">
                        Collaborating with the Finest
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-12 items-center">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default py-2"
                        >
                            <div className={`${brand.color} group-hover:scale-110 transition-transform duration-300`}>
                                {brand.icon}
                            </div>
                            <span className="text-sm sm:text-base font-semibold text-[#1A1A1A]/80 tracking-tight text-center">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TopBrands

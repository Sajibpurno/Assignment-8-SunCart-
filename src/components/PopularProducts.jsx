import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import ProductCart from './ProductCart'
import { summerProducts } from '@/data/summer_products'

function PopularProducts() {
    return (
        <section className="py-20 sm:py-24 px-6 sm:px-8 lg:px-10 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#1A1A1A]/45 font-medium">Featured</p>
                        <h2 className="font-heading text-4xl sm:text-[2.75rem] text-[#1A1A1A] tracking-tight leading-tight">
                            Popular Products
                        </h2>
                    </div>
                    <Link
    href="/products"
    className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF8C00] text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#e67e00] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,140,0,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(255,140,0,0.6)] hover:-translate-y-0.5 group"
>
    See more
    <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
</Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                    {
                        summerProducts?.slice(0, 6).map(product => (
                            <ProductCart key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularProducts

import { productAdditionalInfo } from "@/data/home-page-cards-data";
import { summerProducts } from "@/data/summer_products";
import { RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import React from "react"

function ProductDetailsPage({ params }) {
    const { productName } = React.use(params);
    const decodedName = decodeURIComponent(productName);

    console.log(decodedName);
    const product = summerProducts.find(item => item.name === decodedName);

    if (!product) {
        return (
            <div className="min-h-[40vh] flex items-center justify-center px-6 py-16 text-[#1A1A1A]/60 bg-[#FAF9F6]">
                Product not found
            </div>
        );
    }

    return (
        <section className="py-14 sm:py-20 px-6 sm:px-8 lg:px-10 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    <div className="w-full lg:w-[42%] shrink-0">
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#FAF9F6] ring-1 ring-[#1A1A1A]/[0.08] shadow-lg shadow-[#1A1A1A]/8">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full lg:flex-1 space-y-6 sm:space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-[#1A1A1A]/[0.06] text-[#FF8C00] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider ring-1 ring-[#1A1A1A]/10">
                                {product.brand}
                            </span>
                            <h1 className="font-heading text-4xl sm:text-[2.75rem] text-[#1A1A1A] leading-tight tracking-tight">
                                {product.name}
                            </h1>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[#FF8C00]">
                                <Star fill="currentColor" size={18} />
                                <span className="text-[#1A1A1A] font-semibold">{product.rating}</span>
                                <span className="text-[#1A1A1A]/45 text-sm">(120+ Reviews)</span>
                            </div>
                            <div className="h-4 w-px bg-[#1A1A1A]/15 hidden sm:block" />
                            <p className={`text-sm font-semibold ${product.stock > 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                            </p>
                        </div>

                        <p className="font-heading text-4xl text-[#1A1A1A] tracking-tight">
                            ${product.price}
                        </p>

                        <p className="text-[#1A1A1A]/65 leading-relaxed text-lg max-w-2xl">
                            {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <button
                                type="button"
                                className="flex-1 rounded-full bg-[#FF8C00] text-white py-4 font-semibold shadow-lg shadow-[#FF8C00]/25 hover:bg-[#e67e00] hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                Add to Cart
                            </button>
                            <button
                                type="button"
                                className="flex-1 py-4 rounded-full bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-all duration-300 cursor-pointer"
                            >
                                Buy Now
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#1A1A1A]/10">
                            <div className="flex items-center gap-3">
                                <Truck className="text-[#FF8C00]" size={24} strokeWidth={1.75} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">Free Delivery</p>
                                    <p className="text-xs text-[#1A1A1A]/50">On orders over $100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <RotateCcw className="text-[#FF8C00]" size={24} strokeWidth={1.75} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">30 Days Return</p>
                                    <p className="text-xs text-[#1A1A1A]/50">Hassle free exchange</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-[#FF8C00]" size={24} strokeWidth={1.75} />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-[#1A1A1A]">100% Authentic</p>
                                    <p className="text-xs text-[#1A1A1A]/50">Genuine product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        productAdditionalInfo.map(info => (
                            <div key={info.id} className="bg-[#FAF9F6] backdrop-blur-sm p-8 sm:p-9 rounded-3xl ring-1 ring-[#1A1A1A]/[0.08] shadow-sm hover:shadow-lg transition-shadow duration-300 space-y-4">
                                <div className="w-12 h-12 bg-[#1A1A1A]/[0.06] rounded-2xl flex items-center justify-center text-[#FF8C00]">
                                    {info.icon}
                                </div>
                                <h3 className="font-heading text-xl text-[#1A1A1A]">{info.title}</h3>
                                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                                    {info.description}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default ProductDetailsPage

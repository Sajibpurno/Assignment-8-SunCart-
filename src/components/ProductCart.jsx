import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function ProductCart({ product }) {
    return (
        <article className="group flex w-full flex-col overflow-hidden rounded-3xl bg-[#FAF9F6] shadow-sm ring-1 ring-[#1A1A1A]/[0.06] transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1A1A1A]/15">

            <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-52 md:h-[192px]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* সব সময় দেখা: শুধু নাম আর স্টার (রেফ ২) */}
            <div className="flex shrink-0 items-start justify-between gap-3 px-4 pb-2 pt-3 sm:px-5 sm:pt-4">
                <h3 className="font-heading text-base font-semibold leading-snug text-[#1A1A1A] line-clamp-2 sm:text-lg">
                    {product.name}
                </h3>
                <div className="flex shrink-0 items-center gap-1 text-[#FF8C00]">
                    <FaStar size={14} className="opacity-90" />
                    <span className="text-sm font-medium text-[#1A1A1A]/55">{product.rating}</span>
                </div>
            </div>

            {/* মোবাইল: সব ডিটেইল সব সময় */}
            <div className="mt-1 flex flex-col space-y-3 border-t border-[#1A1A1A]/10 px-4 pb-4 pt-4 sm:px-5 md:hidden">
                <p className="text-xl font-semibold text-[#FF8C00]">${product.price}</p>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/70 line-clamp-3">{product.description}</p>
                <Link
                    href={`/products/${product.name}`}
                    className="block w-full rounded-lg bg-[#FF8C00] py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#e67e00]"
                >
                    View Details
                </Link>
            </div>

            {/* ডেস্কটপ: হোভারে ভিতরে স্ক্রোল-ডাউন ফিল — প্রাইস, টেক্সট, বাটন (রেফ ১) */}
            <div className="hidden shrink-0 flex-col overflow-hidden px-4 pb-4 sm:px-5 md:flex md:pb-4">
                <div
                    className="max-h-0 overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:!max-h-[300px] motion-reduce:transition-none group-hover:max-h-[300px]"
                >
                    <div className="space-y-3 border-t border-[#1A1A1A]/10 pb-1 pt-4">
                        <p className="text-xl font-semibold text-[#FF8C00]">${product.price}</p>
                        <p className="text-sm leading-relaxed text-[#1A1A1A]/75 line-clamp-3">
                            {product.description}
                        </p>
                        <Link
                            href={`/products/${product.name}`}
                            className="block w-full rounded-lg bg-[#FF8C00] py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#e67e00]"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCart

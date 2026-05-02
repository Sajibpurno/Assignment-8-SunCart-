"use client";
import ProductCart from "@/components/ProductCart"
import { summerProducts } from "@/data/summer_products"
import { Search } from "lucide-react"
import { useState } from "react";

function AllProductsPage() {
    const [products, setProducts] = useState(summerProducts);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const filteredProducts = summerProducts.filter(product =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setProducts(filteredProducts)
        setSearchTerm("")
    }

    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] py-14 sm:py-20 px-6 sm:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-16">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.28em] text-[#1A1A1A]/45 font-medium">Catalog</p>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.25rem] tracking-tight text-[#1A1A1A] leading-tight">
                            All <span className="text-[#FF8C00]">Products</span>
                        </h1>
                    </div>

                    <div className="relative w-full md:max-w-md">
                        <Search
                            onClick={handleSearch}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF8C00] cursor-pointer"
                            size={20}
                            strokeWidth={1.75}
                        />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search by product name..."
                            className="w-full bg-[#FAF9F6] border border-[#1A1A1A]/12 rounded-full py-3.5 pl-12 pr-5 focus:outline-none focus:border-[#FF8C00]/50 focus:ring-2 focus:ring-[#FF8C00]/15 transition-all text-[#1A1A1A] placeholder:text-[#1A1A1A]/35 shadow-sm"
                        />
                    </div>
                </div>
                {
                    products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
                            {
                                products.map(product => (
                                    <ProductCart key={product.id} product={product} />
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-[#1A1A1A]/50 text-center py-16 rounded-3xl border border-dashed border-[#1A1A1A]/15 bg-[#FAF9F6]">
                            No products found.
                        </p>
                    )
                }
            </div>
        </main>
    )
}

export default AllProductsPage

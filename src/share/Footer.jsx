import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IoLogoFacebook } from 'react-icons/io';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { RiMastercardLine, RiPaypalLine, RiVisaLine } from 'react-icons/ri';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A1A1A] text-[#FAF9F6]/90 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

                    <div className="lg:col-span-4 space-y-5">
                        <Link href="/" className="inline-block">
                            <span className="font-heading text-2xl tracking-tight text-[#FAF9F6]">
                                Sun<span className="text-[#FF8C00]">Cart</span>
                            </span>
                        </Link>
                        <p className="text-[#FAF9F6]/60 text-sm leading-relaxed max-w-sm">
                            Premium summer essentials — eyewear, skincare, and resort-ready layers. Crafted selection, understated luxury.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-white/5 text-[#FAF9F6]/80 hover:bg-[#FF8C00] hover:text-white transition-all duration-300">
                                <IoLogoFacebook size={18} />
                            </a>
                            <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-white/5 text-[#FAF9F6]/80 hover:bg-[#FF8C00] hover:text-white transition-all duration-300">
                                <FaSquareInstagram size={18} />
                            </a>
                            <a href="#" aria-label="X" className="p-2.5 rounded-full bg-white/5 text-[#FAF9F6]/80 hover:bg-[#FF8C00] hover:text-white transition-all duration-300">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-heading text-lg text-[#FAF9F6] mb-5 tracking-tight">Shop</h3>
                        <ul className="space-y-3 text-sm text-[#FAF9F6]/55">
                            <li><Link href="/products" className="hover:text-[#FF8C00] transition-colors duration-200">All Products</Link></li>
                            <li><Link href="/sunglasses" className="hover:text-[#FF8C00] transition-colors duration-200">Sunglasses</Link></li>
                            <li><Link href="/outfits" className="hover:text-[#FF8C00] transition-colors duration-200">Summer Outfits</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="font-heading text-lg text-[#FAF9F6] mb-5 tracking-tight">Support</h3>
                        <ul className="space-y-3 text-sm text-[#FAF9F6]/55">
                            <li><Link href="/privacy-policy" className="hover:text-[#FF8C00] transition-colors duration-200">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[#FF8C00] transition-colors duration-200">Terms of Service</Link></li>
                            <li><Link href="/faq" className="hover:text-[#FF8C00] transition-colors duration-200">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4 space-y-5">
                        <h3 className="font-heading text-lg text-[#FAF9F6] tracking-tight">Newsletter</h3>
                        <p className="text-sm text-[#FAF9F6]/55 leading-relaxed">
                            Join for edits, restocks, and private sale previews. No spam — unsubscribe anytime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email</label>
                            <input
                                id="footer-email"
                                name="email"
                                type="email"
                                placeholder="Your email address"
                                autoComplete="email"
                                suppressHydrationWarning
                                className="flex-1 min-w-0 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-[#FAF9F6] placeholder:text-[#FAF9F6]/35 outline-none focus:border-[#FF8C00]/60 focus:ring-2 focus:ring-[#FF8C00]/20 transition-all"
                            />
                            <button
                                type="button"
                                suppressHydrationWarning
                                className="shrink-0 rounded-full bg-[#FF8C00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#e67e00] transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </div>

                        <div className="space-y-3 text-sm text-[#FAF9F6]/55 pt-2">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#FF8C00] shrink-0 mt-0.5" />
                                <span>123 Surma tower, Sylhet City, SunCart-3000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#FF8C00] shrink-0" />
                                <span>+880 1306 909 153</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#FF8C00] shrink-0" />
                                <span>support@suncart.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-14 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-[#FAF9F6]/45 text-center md:text-left">
                        © {currentYear} <span className="font-medium text-[#FAF9F6]/70">SunCart</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 opacity-90">
                        <RiVisaLine size={34} className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] cursor-pointer transition-colors" />
                        <RiMastercardLine size={34} className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] cursor-pointer transition-colors" />
                        <RiPaypalLine size={34} className="text-[#FAF9F6]/70 hover:text-[#FAF9F6] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

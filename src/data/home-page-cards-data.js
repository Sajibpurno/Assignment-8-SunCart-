import { 
    Award, 
    GlassWater, 
    Info, 
    Leaf, 
    ShieldCheck, 
    Sparkles, 
    Sun, 
    Trees, 
    Waves, 
    Wind, 
    Shirt
  } from "lucide-react";
  import { BsSunFill } from "react-icons/bs";
  import { HiFire } from "react-icons/hi";
  import { MdBeachAccess } from "react-icons/md";

export const slides = [
    {
        badge: "Summer Sale",
        title: "Up to 50% OFF",
        badgeIcon: <BsSunFill />,
        subtitle: "Shop sunglasses, outfits & beach essentials",
        cta: "Shop Now",
        bg: "from-orange-500/30 to-yellow-400/10",
        image: "/banner-5.jpg",
    },
    {
        badge: "Beach Ready",
        title: "Coastal Vibes Only",
        badgeIcon: <MdBeachAccess />,
        subtitle: "Everything you need for the perfect beach day",
        cta: "Shop Beach",
        bg: "from-amber-600/25 to-orange-300/15",
        image: "/banner-1.jpg",
    },
    {
        badge: "Fresh Arrival",
        title: "Sunset Collection",
        badgeIcon: <BsSunFill />,
        subtitle: "New summer arrivals for your daily essentials",
        cta: "Discover Now",
        bg: "from-orange-500/30 to-amber-300/10",
        image: "/banner-3.png",
    },
    {
        badge: "Limited Offer",
        title: "Weekend Flash Deal",
        badgeIcon: <HiFire />,
        subtitle: "Grab your favorites before stock runs out",
        cta: "Grab Deal",
        bg: "from-amber-500/30 to-yellow-300/10",
        image: "/banner-4.png",
    },
];

export const skinTips = [
    {
        id: 1,
        title: "UV Shielding",
        description: "Use high-grade SPF 50+ and pair with polarized sunglasses for total protection against harsh summer rays.",
        icon: <ShieldCheck className="w-8 h-8 text-[#FF8C00]" />, // Sun protection er poriborte Shield use kora hoise security-r vibe dite
        bgColor: "bg-white shadow-sm border border-orange-100"
    },
    {
        id: 2,
        title: "Pure Hydration",
        description: "Maintain your summer glow by staying hydrated with electrolyte-rich drinks and seasonal organic fruits.",
        icon: <GlassWater className="w-8 h-8 text-[#008080]" />, // Droplets er cheye GlassWater ekhon beshi trendy
        bgColor: "bg-white shadow-sm border border-teal-100"
    },
    {
        id: 3,
        title: "Linen Comfort",
        description: "Choose our breathable linen and organic cotton collections to stay cool and stylish in peak humidity.",
        icon: <Shirt className="w-8 h-8 text-slate-600" />, // Fabric er jonno Shirt icon-ta ekdom perfect
        bgColor: "bg-white shadow-sm border border-slate-100"
    },
    {
        id: 4,
        title: "Evening Care",
        description: "Refresh your skin after a sun-filled day with lightweight, soothing gels and antioxidant serums.",
        icon: <Sparkles className="w-8 h-8 text-emerald-600" />, // Glow ba care er jonno Sparkles icon-ta khub premium lage
        bgColor: "bg-white shadow-sm border border-emerald-100"
    }
]

export const brands = [
    { id: 1, name: "SOLARA", icon: <Sun className="w-6 h-6" />, color: "text-[#1A1A1A]" }, // Deep Charcoal for minimalist luxury
    { id: 2, name: "AURELIA", icon: <Sparkles className="w-6 h-6" />, color: "text-[#D4AF37]" }, // Metallic Gold vibe
    { id: 3, name: "VIVANTE", icon: <Waves className="w-6 h-6" />, color: "text-[#004953]" }, // Midnight Teal
    { id: 4, name: "ORPHIC", icon: <ShieldCheck className="w-6 h-6" />, color: "text-[#722F37]" }, // Wine Red/Burgundy
    { id: 5, name: "ELYSIAN", icon: <Trees className="w-6 h-6" />, color: "text-[#2E473B]" }, // Forest Green
    { id: 6, name: "LUMIÈRE", icon: <Wind className="w-6 h-6" />, color: "text-[#5D3FD3]" }, // Royal Iris
]

export const productAdditionalInfo = [
    {
        id: 1,
        icon: <Award size={24} />,
        title: "Premium Quality",
        description: "Each product is crafted with high-grade materials ensuring maximum durability for the summer season. Our brand {product.brand} focuses on both style and comfort."
    },
    {
        id: 2,
        icon: <Leaf size={24} />,
        title: "Eco-Friendly & Care",
        description: "Store in a cool, dry place. For long-lasting use, clean with a damp microfiber cloth. Our products are made from sustainable sources wherever possible."
    },
    {
        id: 3,
        icon: <Info size={24} />,
        title: "Shipping & Support",
        description: "We ship globally with tracking provided. Our 24/7 support team is always ready to help you with your purchase and technical questions."
    },
]
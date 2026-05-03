import dns from 'node:dns';
dns.setServers(["8.8.8.8","8.8.4.4"])

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


const playfair = Playfair_Display({
    variable: "--font-playfair",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "SunCart",
    description: "Premium summer essentials — curated for you.",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${playfair.variable} ${inter.variable} h-full`}
        >
            <body
                className={`${inter.className} min-h-full bg-[#FAF9F6] text-[#1A1A1A] antialiased`}
            >
                <main>
                {children}
                </main>
                
            </body>
        </html>
    );
}

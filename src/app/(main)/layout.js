import Navbar from "@/share/Navbar";
import Footer from "@/share/Footer";

function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-full bg-[#FAF9F6]">
            <Navbar />
            <main className="grow px-0">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout

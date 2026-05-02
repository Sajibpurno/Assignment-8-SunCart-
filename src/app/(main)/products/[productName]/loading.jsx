
function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6]/90 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-5">
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 border-2 border-[#1A1A1A]/10 rounded-full" />
                    <div className="absolute inset-0 border-2 border-[#FF8C00] border-t-transparent rounded-full animate-spin" />
                </div>
                <p className="text-[#1A1A1A]/45 text-sm font-medium tracking-[0.15em] uppercase animate-pulse">
                    Loading
                </p>
            </div>
        </div>
    )
}

export default Loading

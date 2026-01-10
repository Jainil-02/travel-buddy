import Image from "next/image"
import { Star, Bookmark, Bot } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[520px] rounded-2xl overflow-hidden flex items-end">
      <Image
        src="/images/KyotoBig.png"
        alt="Kyoto destination"
        fill
        priority
        unoptimized
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      <div className="relative z-10 p-8 md:p-12 max-w-3xl text-white flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-bold uppercase">
            Top Destination
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-yellow-400">
            <Star size={14} fill="currentColor" /> 4.9 / 5
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Kyoto, Japan
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-xl">
          Experience the timeless blend of ancient traditions and modern life in
          Japan&apos;s cultural capital.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="h-12 px-6 rounded-3xl bg-primary text-white font-bold flex items-center gap-2 hover:opacity-90">
            <Bookmark size={18} />
            Save to Itinerary
          </button>

          <button className="h-12 px-6 rounded-3xl bg-white/10 border border-white/20 text-white font-bold flex items-center gap-2 hover:bg-white/20">
            <Bot size={18} />
            Ask AI Assistant
          </button>
        </div>
      </div>
    </section>
  )
}

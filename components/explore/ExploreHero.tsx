"use client"

import { MapPin, Search } from "lucide-react"
import Image from "next/image"

export default function ExploreHero() {
  return (
    <section className="relative w-full h-[400px] flex items-end px-6 py-8 md:p-12">
      {/* Background */}
      <Image
        src="/images/exploreBG.png"
        alt="Topographic exploration background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />

      {/* Content */}
      <div className="relative w-full max-w-4xl flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Explore the World
          </h1>

          <div className="flex items-center gap-2">
            <MapPin className="text-primary" size={18} />
            <h2 className="text-muted-foreground text-lg">
              450+ Destinations found matching your preferences
            </h2>
          </div>
        </div>

        {/* Search */}
        <div className="w-full bg-card/60 backdrop-blur-md p-2 rounded-3xl border border-border flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 h-12 md:h-14">
            <Search className="text-muted-foreground" size={18} />
            <input
              placeholder="Where do you want to go?"
              className="bg-transparent w-full ml-2 text-foreground placeholder:text-muted-foreground focus:outline-none text-base md:text-lg"
            />
          </div>

          <button className="h-12 md:h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-3xl transition-all shadow-lg shadow-primary/25">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

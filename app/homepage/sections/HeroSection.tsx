"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full py-6 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1680px] rounded-3xl overflow-hidden relative min-h-[600px] flex flex-col items-center justify-center text-center p-6 md:p-12">
        <div className="absolute inset-0 bg-cover bg-center z-0">
          {/* Background Image */}
          <Image
            src="/images/hero.png"
            alt="Stunning aerial view of tropical islands and blue ocean water"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay (optional) */}
          {/* <div className="absolute inset-0 bg-black/10" /> */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-0"></div>
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-md">
              Your Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Travel Companion
              </span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light">
              Experience the world with precision. Plan, book, and explore
              seamlessly with the first AI designed for wanderlust.
            </p>
          </div>
          <div className="w-full max-w-2xl rounded-full">
            <label className="flex flex-col md:flex-row w-full bg-white/90 backdrop-blur-xl border border-slate-700/50 p-2 rounded-full shadow-full">
              <div className="flex w-full items-center px-4 py-2 md:py-0">
                <span className="material-symbols-outlined text-slate-400 mr-3">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:ring-0 text-base md:text-lg"
                  placeholder="Where to? Try '5 days in Tokyo for foodies'..."
                />
              </div>
              <button className="mt-2 md:mt-0 w-full md:w-auto min-w-[140px] h-12 rounded-full bg-blue-600 hover:bg-primary text-white font-bold flex items-center justify-center gap-2 transition-all">
                <span className="material-symbols-outlined text-[20px]">
                  flight_takeoff
                </span>
                Plan Trip
              </button>
            </label>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="flex items-center gap-2 h-10 pl-3 pr-5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all">
              <span className="material-symbols-outlined text-yellow-400">
                wand_stars
              </span>
              <span className="text-sm font-medium">Start AI Planner</span>
            </button>
            <button className="flex items-center gap-2 h-10 pl-3 pr-5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all ">
              <span className="material-symbols-outlined text-blue-300">
                public
              </span>
              <span className="text-sm font-medium">Explore Map</span>
            </button>
            <button className="flex items-center gap-2 h-10 pl-3 pr-5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all">
              <span className="material-symbols-outlined text-green-300">
                chat
              </span>
              <span className="text-sm font-medium">Ask Assistant</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Search,
  Plane,
  Sparkles,
  Globe,
  MessageCircle,
  PlaneTakeoff,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full px-4 md:px-8 py-8 flex justify-center">
      <div className="relative w-full max-w-[1680px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px] overflow-hidden rounded-3xl flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/images/hero.png"
          alt="Tropical islands and blue ocean"
          fill
          priority
          className="object-cover"
        />

        {/* Light / Dark overlay */}
        {/* Theme-aware gradient overlay */}
        <div
          className="
    absolute inset-0 z-0
    bg-gradient-to-b
    from-transparent
    via-transparent
    to-background
    dark:from-black/70
    dark:via-black/50
    dark:to-background
  "
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              Your Intelligent <br />
              <span
                className="text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-300 to-white"
              >
                Travel Companion
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-body">
              Plan, book, and explore effortlessly with AI-powered travel
              intelligence built for modern explorers.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full max-w-2xl">
            <div
              className="
      flex items-center
      bg-card/90 dark:bg-card/80 backdrop-blur-xl
      border border-border
      rounded-full
      p-2
      shadow-xl
      gap-2
    "
            >
              {/* Input */}
              <div className="flex items-center px-4 h-12 flex-1 min-w-0">
                <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
                <input
                  className="
          w-full bg-transparent outline-none
          text-foreground placeholder:text-muted-foreground
          font-body text-base
          truncate
        "
                  placeholder="Where to? Try “5 days in Tokyo for foodies”…"
                />
              </div>

              {/* Button */}
              <Link href="/assistant">
                <Button
                  className="
                  h-12
                  w-12 md:w-auto
                  px-0 md:px-6
                  rounded-full
                  font-semibold
                  bg-primary hover:opacity-90
                  flex items-center justify-center gap-2
                  shrink-0
                "
                >
                  <PlaneTakeoff className="w-5 h-5" />
                  <span className="hidden md:inline">Plan Trip</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <ActionButton
              icon={<Sparkles className="w-4 h-4 text-yellow-300" />}
              label="Start AI Planner"
            />
            <ActionButton
              icon={<Globe className="w-4 h-4 text-blue-300" />}
              label="Explore Map"
            />
            <Link href="/assistant">
              <ActionButton
                icon={<MessageCircle className="w-4 h-4 text-green-300" />}
                label="Ask Assistant"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small reusable internal component (local-only) */
function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      className="flex items-center gap-2 h-10 pl-3 pr-5 rounded-full
      bg-white/20 hover:bg-white/30 backdrop-blur-md
      border border-white/20 text-white transition-all"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

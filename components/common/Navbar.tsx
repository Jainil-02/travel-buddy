"use client"

import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Plane className="text-primary" />
          Travel Buddy
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#">Destinations</a>
          <a href="#">Planning Tools</a>
          <a href="#">Community</a>
          <a href="#">About</a>
        </nav>

        <div className="flex gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button>Join Premium</Button>
        </div>
      </div>
    </header>
  )
}

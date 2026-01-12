"use client"

import { Menu } from "lucide-react"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import ProfileSidebar from "./ProfileSidebar"
import ProfileSidebarSheet from "./ProfileSidebarSheet"

export default function ProfileMenuButton() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center gap-2 h-11 px-4 rounded-xl border border-border bg-card text-sm font-semibold">
            <Menu size={18} />
            Profile Menu
          </button>
        </SheetTrigger>

        <ProfileSidebarSheet />
      </Sheet>
    </div>
  )
}

"use client"

import { ChevronUp } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"

export default function ComparisonDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={clsx(
        "fixed bottom-0 left-0 w-full z-40 transition-transform duration-300",
        open ? "translate-y-0" : "translate-y-[60%]"
      )}
    >
      <div className="bg-card border-t border-border rounded-t-2xl shadow-xl">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-2">
            <span className="size-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <span className="font-semibold text-sm">
              Items in Comparison
            </span>
          </div>

          <ChevronUp
            className={clsx(
              "transition-transform",
              open && "rotate-180"
            )}
          />
        </div>

        {/* Drawer content placeholder */}
        <div className="p-4 text-sm text-muted-foreground">
          Comparison items will appear here
        </div>
      </div>
    </div>
  )
}

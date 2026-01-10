"use client"

import { X } from "lucide-react"

export default function FullScreenDrawer({
  title,
  children,
  onClose,
}: {
  title?: string
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div
      className="
        fixed inset-0 z-50
        bg-background
        w-screen h-screen
        animate-in slide-in-from-bottom duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-border bg-card w-full">
        <h2 className="text-sm font-bold text-foreground">
          {title ?? "Planner"}
        </h2>

        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-muted"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="w-full h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide">
        <div className="w-full min-h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

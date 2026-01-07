"use client"

import { X } from "lucide-react"

export default function BottomSheet({
  children,
  onClose,
}: {
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      
      {/* Overlay */}
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="
          bg-card rounded-t-2xl
          max-h-[85vh] overflow-y-auto
          border-t border-border
          animate-slide-up
        "
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Draft Itinerary</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

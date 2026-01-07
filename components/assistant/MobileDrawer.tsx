"use client";

import { X } from "lucide-react";

export default function MobileDrawer({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer (LEFT) */}
      <div
        className="
     left-0 top-0 h-full
    w-72 bg-card border-r border-border
    px-2 py-12 animate-slide-in-left
    relative
  "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
      absolute right-4 top-4
      p-2 rounded-lg
      hover:bg-muted
      text-foreground
    "
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {children}
      </div>
    </div>
  );
}

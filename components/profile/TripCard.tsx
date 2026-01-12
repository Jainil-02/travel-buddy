"use client"

import Image from "next/image"
import {
  Calendar,
  ArrowRight,
  Share2,
  FileDown,
  Trash2,
  Edit3,
  Eye,
} from "lucide-react"

export type TripStatus = "upcoming" | "draft" | "completed"

export type TripCardProps = {
  title: string
  locationImage: string
  dateLabel: string
  status: TripStatus
  tags?: string[]
  actions?: ("view" | "edit" | "delete" | "share" | "download")[]
}

export default function TripCard({
  title,
  locationImage,
  dateLabel,
  status,
  tags = [],
  actions = ["view"],
}: TripCardProps) {
  return (
    <article className="h-full flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative h-48">
        <StatusBadge status={status} />

        <Image
          src={locationImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-lg font-bold leading-tight hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <Calendar size={14} />
            {dateLabel}
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-border">
          {/* Desktop actions */}
          <div className="hidden sm:flex items-center justify-between">
            <PrimaryAction status={status} />
            <SecondaryActions actions={actions} />
          </div>

          {/* Mobile actions */}
          <div className="flex sm:hidden flex-col gap-3">
            <PrimaryAction status={status} full />
            <SecondaryActions actions={actions} center />
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------ Sub Components ------------------ */

function StatusBadge({ status }: { status: TripStatus }) {
  const map = {
    upcoming: "Upcoming",
    draft: "Draft",
    completed: "Completed",
  }

  const color = {
    upcoming: "bg-white/90 text-primary",
    draft: "bg-foreground/80 text-background",
    completed: "bg-green-100 text-green-700",
  }

  return (
    <span
      className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold backdrop-blur ${color[status]}`}
    >
      {map[status]}
    </span>
  )
}

function PrimaryAction({
  status,
  full,
}: {
  status: TripStatus
  full?: boolean
}) {
  const label =
    status === "draft"
      ? "Continue Planning"
      : status === "completed"
      ? "View Itinerary"
      : "View Details"

  const Icon =
    status === "draft" ? Edit3 : status === "completed" ? Eye : ArrowRight

  return (
    <button
      className={`flex items-center justify-center gap-2 text-sm font-bold hover:text-primary transition-colors ${
        full ? "w-full" : ""
      }`}
    >
      {label}
      <Icon size={16} />
    </button>
  )
}

function SecondaryActions({
  actions,
  center,
}: {
  actions: string[]
  center?: boolean
}) {
  const map = {
    share: Share2,
    download: FileDown,
    delete: Trash2,
  }

  return (
    <div
      className={`flex items-center gap-1 ${
        center ? "justify-center" : ""
      }`}
    >
      {actions.map((action) => {
        const Icon = map[action as keyof typeof map]
        if (!Icon) return null

        return (
          <button
            key={action}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <Icon size={16} />
          </button>
        )
      })}
    </div>
  )
}

"use client"

import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  rating: number
  quote: string
}

export default function TestimonialCard({
  name,
  role,
  image,
  rating,
  quote,
}: TestimonialCardProps) {
  return (
    <div
      className="
        bg-card
        border border-border
        rounded-2xl
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Rating */}
      <div className="flex gap-1 text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, i) =>
          i + 1 <= rating ? (
            <Star key={i} className="w-4 h-4 fill-yellow-400" />
          ) : i + 0.5 === rating ? (
            <StarHalf key={i} className="w-4 h-4 fill-yellow-400" />
          ) : (
            <Star key={i} className="w-4 h-4 text-muted-foreground" />
          )
        )}
      </div>

      {/* Quote */}
      <p className="text-muted-foreground italic mb-6 leading-relaxed">
        “{quote}”
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="relative size-10 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">
            {name}
          </p>
          <p className="text-xs text-muted-foreground">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

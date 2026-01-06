"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface TripCardProps {
  image: string
  title: string
  meta: string
  price: string
  rating: number
  match: string
}

export default function TripCard({
  image,
  title,
  meta,
  price,
  rating,
  match,
}: TripCardProps) {
  return (
    <div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-card/80 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-semibold text-foreground">
            {rating}
          </span>
        </div>

        {/* Match */}
        <div className="absolute bottom-3 left-3 bg-primary/90 px-3 py-1.5 rounded-lg">
          <span className="text-xs font-bold text-primary-foreground uppercase tracking-wide">
            {match} Match
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-1">
        {title}
      </h3>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{meta}</span>
        <span className="font-semibold text-foreground">
          {price}
        </span>
      </div>
    </div>
  )
}

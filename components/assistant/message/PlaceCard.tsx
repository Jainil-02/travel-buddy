"use client"

import Image from "next/image"
import { Star, MapPin, Plus } from "lucide-react"

type PlaceCardProps = {
  title: string
  location: string
  rating: number
  price: string
  tags: string[]
  image: string
}

export function PlaceCard({
  title,
  location,
  rating,
  price,
  tags,
  image,
}: PlaceCardProps) {
  return (
    <div
      className="
        group relative w-72
        bg-card rounded-3xl overflow-hidden
        border border-border
        shadow-card
        hover:shadow-xl hover:-translate-y-1
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Image */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Rating */}
        <div
          className="
            absolute top-3 right-3
            bg-background/90 backdrop-blur
            px-2 py-1 rounded-lg
            flex items-center gap-1
            shadow-sm
          "
        >
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <MapPin className="w-4 h-4 text-primary" />
          {location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-2 py-1 rounded-md
                bg-muted text-muted-foreground
                text-[10px] font-semibold
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-dashed border-border">
          <span className="text-foreground text-sm font-bold">{price}</span>

          <button
            className="
              size-8 rounded-full
              bg-muted text-muted-foreground
              flex items-center justify-center
              hover:bg-primary hover:text-primary-foreground
              transition-colors
            "
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

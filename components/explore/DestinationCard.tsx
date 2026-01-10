"use client"

import Image from "next/image"
import {
  Heart,
  MapPin,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react"

interface DestinationCardProps {
  title: string
  country: string
  price: string
  rating: number
  image: string
  tags: string[]
  aiPick?: boolean
}

export default function DestinationCard({
  title,
  country,
  price,
  rating,
  image,
  tags,
  aiPick,
}: DestinationCardProps) {
  return (
    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {aiPick && (
          <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-lg shadow flex items-center gap-1">
            <Sparkles size={12} />
            AI Pick
          </div>
        )}

        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur text-white transition-colors">
          <Heart size={18} />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Bottom overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h3 className="text-white text-xl font-bold">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin size={14} />
              {country}
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white/10 backdrop-blur border border-white/20 px-2 py-1 rounded-lg">
            <Star size={14} className="text-yellow-400" />
            <span className="text-white text-sm font-bold">
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-border">
          <span className="text-sm text-muted-foreground">
            From{" "}
            <strong className="text-foreground text-base">
              {price}
            </strong>
          </span>

          <button className="opacity-0 group-hover:opacity-100 transition-opacity text-primary text-sm font-bold flex items-center gap-1">
            Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

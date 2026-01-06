"use client"

import TripCard from "@/components/cards/TripCard"
import { ArrowRight } from "lucide-react"

const trips = [
  {
    image: "/trips/kyoto.png",
    title: "Kyoto, Japan",
    meta: "7 Days • Cultural Immersion",
    price: "From $1,200",
    rating: 4.9,
    match: "98%",
  },
  {
    image: "/trips/santorini.png",
    title: "Santorini, Greece",
    meta: "5 Days • Romantic Getaway",
    price: "From $1,800",
    rating: 4.8,
    match: "95%",
  },
  {
    image: "/trips/bali.png",
    title: "Bali, Indonesia",
    meta: "10 Days • Adventure & Nature",
    price: "From $900",
    rating: 4.7,
    match: "92%",
  },
  {
    image: "/trips/cinque-terre.png",
    title: "Cinque Terre, Italy",
    meta: "6 Days • Coastal Hiking",
    price: "From $1,500",
    rating: 5.0,
    match: "99%",
  },
]

export default function TrendingTripsSection() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-[1680px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Trending Trips
        </h2>

        <button className="text-primary font-medium flex items-center gap-1 hover:underline">
          View all
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
        {trips.map((trip) => (
          <TripCard key={trip.title} {...trip} />
        ))}
      </div>
    </section>
  )
}

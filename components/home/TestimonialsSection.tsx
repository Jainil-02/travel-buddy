"use client"

import TestimonialCard from "@/components/cards/TestimonialCard"

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    image: "/images/sarah.png",
    rating: 5,
    quote:
      "Travel Buddy saved me at least 10 hours of planning. The AI suggested spots in Lisbon I would never have found on my own.",
  },
  {
    name: "Mark Chen",
    role: "Family Trips",
    image: "/images/mark.png",
    rating: 5,
    quote:
      "The budget calculator is a game changer. We managed a 2-week Japan trip and stayed exactly on budget thanks to the alerts.",
  },
  {
    name: "Elena Rodriguez",
    role: "Backpacker",
    image: "/images/elena.png",
    rating: 4.5,
    quote:
      "I love the community features. Found a travel buddy for my hike in Peru and we're still friends today.",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-16 border-y border-border bg-background">
      <div className="max-w-[1680px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          Loved by explorers worldwide
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

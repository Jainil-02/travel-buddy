"use client"

import FeatureCard from "@/components/cards/FeatureCard"
import {
  Bot,
  Compass,
  Hotel,
  Plane,
  Wallet,
  Route,
  Luggage,
  Users,
} from "lucide-react"

const features = [
  {
    title: "AI Planner",
    description: "Generate detailed itineraries in seconds.",
    icon: Bot,
    bg: "bg-blue-500/10",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Explore",
    description: "Discover hidden gems and local favorites.",
    icon: Compass,
    bg: "bg-purple-500/10",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Hotels",
    description: "Smart booking with price prediction.",
    icon: Hotel,
    bg: "bg-orange-500/10",
    color: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Flights",
    description: "Track prices and find best routes.",
    icon: Plane,
    bg: "bg-sky-500/10",
    color: "text-sky-600 dark:text-sky-400",
  },
  {
    title: "Budget",
    description: "Estimate costs and track spending.",
    icon: Wallet,
    bg: "bg-green-500/10",
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Route",
    description: "Optimize daily travel logistics.",
    icon: Route,
    bg: "bg-teal-500/10",
    color: "text-teal-600 dark:text-teal-400",
  },
  {
    title: "Packing",
    description: "AI-generated checklist based on weather.",
    icon: Luggage,
    bg: "bg-rose-500/10",
    color: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Community",
    description: "Connect with fellow travelers.",
    icon: Users,
    bg: "bg-indigo-500/10",
    color: "text-indigo-600 dark:text-indigo-400",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-12 px-4 md:px-8 max-w-[1680px] mx-auto w-full">
      {/* Header */}
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Everything you need
        </h2>
        <p className="text-muted-foreground">
          Powerful tools designed to make your journey effortless.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconBgClass={feature.bg}
            iconColorClass={feature.color}
          />
        ))}
      </div>
    </section>
  )
}

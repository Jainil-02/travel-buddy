import FeaturesSection from "@/components/home/FeaturesSection"
import HeroSection from "@/components/home/HeroSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import TrendingTripsSection from "@/components/home/TrendingTripSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrendingTripsSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  )
}

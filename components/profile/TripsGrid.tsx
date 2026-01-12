import TripCard, { TripCardProps } from "./TripCard"

const trips: TripCardProps[] = [
  {
    title: "Summer in Santorini",
    locationImage: "/images/trips/santorini.jpg",
    dateLabel: "Aug 12 – Aug 20, 2024",
    status: "upcoming",
    tags: ["Leisure", "Beach"],
    actions: ["view", "share", "download"],
  },
  {
    title: "Tokyo Tech Tour",
    locationImage: "/images/trips/tokyo.jpg",
    dateLabel: "Dates TBD",
    status: "draft",
    tags: ["Technology", "Food"],
    actions: ["edit", "delete"],
  },
  {
    title: "NYC Business Trip",
    locationImage: "/images/trips/nyc.jpg",
    dateLabel: "Jan 10 – Jan 15, 2024",
    status: "completed",
    tags: ["Business"],
    actions: ["view", "download"],
  },
  {
    title: "Iceland Expedition",
    locationImage: "/images/trips/iceland.jpg",
    dateLabel: "Dec 01 – Dec 10, 2024",
    status: "upcoming",
    tags: ["Adventure", "Nature"],
    actions: ["view", "share", "download"],
  },
]

export default function TripsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
      {trips.map((trip) => (
        <TripCard key={trip.title} {...trip} />
      ))}
    </section>
  )
}

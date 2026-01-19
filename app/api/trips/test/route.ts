import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET() {
  // 1. Create or find user
  const user = await prisma.user.upsert({
    where: { email: "test@travelbuddy.dev" },
    update: {},
    create: {
      email: "test@travelbuddy.dev",
      name: "Test User",
    },
  })

  // 2. Create a trip (MATCHES SCHEMA)
  const trip = await prisma.trip.create({
    data: {
      userId: user.id,
      destination: "Udaipur",

      startDate: new Date("2026-02-10"),
      endDate: new Date("2026-02-13"),

      travelers: "2",
      budgetRange: "60000",
      pace: "relaxed",

      interests: ["culture", "food"],
      mustVisit: ["City Palace", "Lake Pichola"],

      itinerary: {},

      // status is optional (defaults to DRAFT)
    },
  })

  // 3. Fetch all trips for user
  const trips = await prisma.trip.findMany({
    where: { userId: user.id },
  })

  return NextResponse.json({
    success: true,
    user,
    tripCreated: trip,
    totalTrips: trips.length,
  })
}

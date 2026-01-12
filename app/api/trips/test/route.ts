import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET() {
  // 1. Create user (or find existing)
  const user = await prisma.user.upsert({
    where: { email: "test@travelbuddy.dev" },
    update: {},
    create: {
      email: "test@travelbuddy.dev",
      name: "Test User",
    },
  })

  // 2. Create a trip
  const trip = await prisma.trip.create({
    data: {
      userId: user.id,
      destination: "Udaipur",
      travelers: 2,
      budget: 60000,
      preferences: {
        interests: ["culture", "food"],
        pace: "relaxed",
      },
      aiDraft: {},
      itinerary: {},
    },
  })

  // 3. Read trips
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

import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Travel Buddy API is healthy 🚀",
  })
}

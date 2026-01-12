// app/api/test/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    gemini: !!process.env.GEMINI_API_KEY,
    unsplash: !!process.env.UNSPLASH_ACCESS_KEY,
    supabase: !!process.env.SUPABASE_URL,
    database: !!process.env.DATABASE_URL,
  })
}

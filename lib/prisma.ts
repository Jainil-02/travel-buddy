import { PrismaClient } from "@prisma/client"

declare global {
  // Prevent hot-reload from creating multiple instances
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["error"],
  })

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}

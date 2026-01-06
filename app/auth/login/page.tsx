"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Compass,
  Eye,
  EyeOff,
  Star,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background text-foreground">
      
      {/* LEFT: FORM */}
      <div className="flex w-full flex-col justify-between px-6 py-8 lg:w-1/2 lg:px-20 xl:px-32">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Compass className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold">Travel Buddy</span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center py-10">
          <div className="mb-10 max-w-md">
            <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Please enter your details to sign in and continue your journey.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-6">
            
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Email or Username</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-xl"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-14 rounded-xl pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login */}
            <Button className="h-14 rounded-xl text-base font-bold">
              Log In
            </Button>

            {/* Divider */}
            <div className="relative my-4 flex items-center">
              <div className="grow border-t border-border" />
              <span className="mx-4 text-sm text-muted-foreground">
                Or continue with
              </span>
              <div className="grow border-t border-border" />
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="h-12 flex-1 gap-2 rounded-xl"
              >
                {/* Google SVG kept */}
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.766 12.2764..." />
                </svg>
                Google
              </Button>

              <Button
                variant="outline"
                className="h-12 flex-1 gap-2 rounded-xl"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.5 12.625..." />
                </svg>
                Apple
              </Button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-sm text-muted-foreground">
          New here?{" "}
          <Link href="/register" className="font-bold text-primary hover:underline">
            Create an account
          </Link>
        </div>
      </div>

      {/* RIGHT: HERO (Desktop only) */}
      <div className="relative hidden w-1/2 lg:flex">
        <div className="absolute inset-4 overflow-hidden rounded-3xl">
          
          <Image
            src="/images/loginBG.png"
            alt="Traveler exploring canyon at sunset"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 p-12 text-white">
            <blockquote className="mb-6 max-w-lg text-2xl font-medium leading-relaxed">
              “Travel Buddy made planning my 3-month trip across Asia seamless.”
            </blockquote>

          </div>

          {/* Location */}
          <div className="absolute right-8 top-8 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md text-white">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Grand Canyon, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

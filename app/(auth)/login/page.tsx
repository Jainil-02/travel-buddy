"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Eye,
  EyeOff,
  Star,
  MapPin,
  PlaneTakeoff,
  Mail,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* LEFT: FORM */}
      <div className="flex w-full flex-col justify-between px-6 py-8 lg:w-1/2 lg:px-16 xl:px-28">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PlaneTakeoff className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Travel Buddy</span>
          </Link>
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
            <div>
              <label className=" text-sm  font-medium">Email or Username</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />

                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 h-12 rounded-xl"
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
              </div>
              <div className="flex justify-end mt-2">
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
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
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
            <h3 className="text-4xl font-bold leading-tight mb-4 max-w-lg">
              <blockquote>
                “The best way to predict the future is to create it.”
              </blockquote>
            </h3>
            <p className="text-lg text-gray-300 max-w-md">
              Experience the future of travel with personalized itineraries
              crafted just for you.
            </p>
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
  );
}

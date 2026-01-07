"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PlaneTakeoff,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="flex w-full flex-col justify-between px-6 py-8 lg:w-1/2 lg:px-16 xl:px-28">
        {/* Header (SAME AS LOGIN) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <PlaneTakeoff className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Travel Buddy</span>
          </Link>
        </div>

        <div className="flex flex-1 flex-col justify-center py-10">
          {/* Heading (MATCH LOGIN) */}
          <div className="mb-10 max-w-md">
            <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl">
              Create your account
            </h1>
            <p className="text-muted-foreground">
              Join Travel Buddy and start planning smarter.
            </p>
          </div>

          {/* FORM */}
          <form className="flex w-full max-w-md flex-col gap-6">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  className="pl-10 h-12 rounded-xl"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  className="pl-10 h-12 rounded-xl"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Passwords */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 h-12 rounded-xl"
                    placeholder="Create password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Confirm Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="pl-10 pr-10 h-12 rounded-xl"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" className="mt-1 accent-primary" />I agree
              to the{" "}
              <Link
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </label>

            {/* Submit */}
            <Button className="h-14 rounded-xl text-base font-bold">
              Create Account
            </Button>

            {/* Divider */}
            <div className="relative my-4 flex items-center">
              <div className="grow border-t border-border" />
              <span className="mx-4 text-sm text-muted-foreground">
                Or continue with
              </span>
              <div className="grow border-t border-border" />
            </div>

            {/* Social buttons (NOW BELOW FORM) */}
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
        <div className="text-sm text-muted-foreground">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
      {/* RIGHT: HERO (Desktop only) */}
      <div className="relative hidden w-1/2 lg:flex">
        <div className="absolute inset-4 overflow-hidden rounded-3xl">
          <Image
            src="/images/registerBG.png"
            alt="Traveler exploring canyon at sunset"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

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

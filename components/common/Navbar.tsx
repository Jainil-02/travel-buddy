"use client";

import { useState } from "react";
import { Compass, Menu, PlaneTakeoff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const navLinks = [
  { label: "Destinations", href: "#" },
  { label: "Planning Tools", href: "#" },
  { label: "Community", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-[1680px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="inline-flex items-center gap-3">
              <PlaneTakeoff className="w-7 h-7 text-primary" />
              <span className="text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
                Travel Buddy
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />

            {/* Desktop-only buttons */}
            <Link href="/login">
              <Button
                variant="ghost"
                className="hidden md:inline-flex text-foreground bg-muted/80 hover:bg-muted/40 font-semibold"
              >
                Sign In
              </Button>
            </Link>

            <Button className="hidden md:inline-flex rounded-xl font-semibold">
              Join Premium
            </Button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            fixed inset-0 z-50
            bg-background
            dark:bg-background
          "
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <span className="text-lg font-bold text-foreground">Menu</span>
            <button
              className="p-2 rounded-lg hover:bg-muted"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Menu Content */}
          <nav
            className="
              flex flex-col items-center gap-6 px-6 py-10 text-center
              bg-background/95 dark:bg-background/95
              backdrop-blur-xl
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Actions */}
            <div className="w-full max-w-sm pt-8 border-t border-border flex flex-col gap-3">
              {/* <ThemeToggle /> */}
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="w-full text-foreground bg-muted/90 hover:bg-muted/80"
                >
                  Sign In
                </Button>
              </Link>

              <Button className="w-full rounded-xl font-semibold">
                Join Premium
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

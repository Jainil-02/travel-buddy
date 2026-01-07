"use client"

import {
  Compass,
  Globe,
  Camera,
  Mail,
  LucideIcon,
  PlaneTakeoff
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer */}
      <div className="max-w-[1680px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Travel Buddy
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The world’s most intelligent travel companion. Plan better,
              travel smarter, and explore further.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-2">
              <FooterIcon icon={Globe} />
              <FooterIcon icon={Camera} />
              <FooterIcon icon={Mail} />
            </div>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={["Features", "Pricing", "API"]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={["Blog", "Community", "Help Center"]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Legal"]}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1680px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Travel Buddy AI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------------- Helpers ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: string[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-semibold text-foreground">
        {title}
      </h4>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  )
}

function FooterIcon({ icon: Icon }: { icon: LucideIcon  }) {
  return (
    <a
      href="#"
      className="
        p-2 rounded-full
        text-muted-foreground
        hover:text-primary
        hover:bg-primary/10
        transition-all
      "
    >
      <Icon className="w-5 h-5" />
    </a>
  )
}

function FooterLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </a>
  )
}

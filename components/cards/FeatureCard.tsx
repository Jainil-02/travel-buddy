"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgClass?: string;
  iconColorClass?: string;
  href?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  iconBgClass = "bg-primary/10",
  iconColorClass = "text-primary",
}: FeatureCardProps) {
  return (
    <div
      className="
    group cursor-pointer
    bg-card
    border border-border
    rounded-2xl
    p-5 md:p-6
    transition-all duration-300 ease-out
    hover:border-primary/50
    hover:shadow-xl
    hover:-translate-y-1
    hover:scale-[1.02]
  "
    >
      <Link href={href || "#"}>
        {/* Icon */}
        <div
          className={`
    size-12 rounded-xl
    flex items-center justify-center
    mb-4
    transition-all duration-300
    group-hover:scale-110
    group-hover:rotate-[-2deg]
    ${iconBgClass}
    ${iconColorClass}
  `}
        >
          <Icon className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {description}
        </p>
      </Link>
    </div>
  );
}

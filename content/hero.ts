import { RadarIcon, ShieldCheckIcon, ZapIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import type { Feature, Stat } from "@/types"

export const hero = {
  eyebrow: siteConfig.tagline,
  title: ["Deliver", "Anything.", "Anywhere."],
  description: siteConfig.description,
  primaryCta: { title: "Get Started Free", href: "#download" },
  secondaryCta: { title: "See How It Works", href: "#how-it-works" },
}

export const heroHighlights: Feature[] = [
  { title: "Instant Matching", description: "", icon: ZapIcon },
  { title: "Live Tracking", description: "", icon: RadarIcon },
  { title: "Insured Deliveries", description: "", icon: ShieldCheckIcon },
]

export const heroStats: Stat[] = [
  { value: "50K+", label: "Deliveries completed" },
  { value: "2,400+", label: "Active riders" },
  { value: "98.2%", label: "On-time rate" },
  { value: "4.9★", label: "App store rating" },
]

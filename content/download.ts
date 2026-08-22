import { BikeIcon, MonitorIcon, SmartphoneIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import type { AppCard, StoreLink } from "@/types"

export const download = {
  eyebrow: "Download",
  title: "Start delivering",
  titleAccent: "today.",
  description: `${siteConfig.name} is available for both customers and riders on iOS and Android. Download the app that fits your role and get started in minutes.`,
  socialProof: "Joined by 12,800+ users already",
}

export const storeLinks: StoreLink[] = [
  {
    label: "Download on the",
    name: "App Store",
    href: siteConfig.links.appStore,
    icon: Icons.appStore,
  },
  {
    label: "Get it on",
    name: "Google Play",
    href: siteConfig.links.playStore,
    icon: Icons.playStore,
  },
]

export const appCards: AppCard[] = [
  {
    name: "Customer App",
    description: "Send packages, track riders, manage wallet",
    audience: "Merchants & Individuals",
    icon: SmartphoneIcon,
    href: siteConfig.links.appStore,
  },
  {
    name: "Rider App",
    description: "Accept jobs, navigate, track earnings",
    audience: "Delivery Riders",
    icon: BikeIcon,
    href: siteConfig.links.playStore,
  },
]

export const adminCard: AppCard = {
  name: "Admin Panel",
  description: "Web dashboard for platform management",
  audience: "Operations",
  icon: MonitorIcon,
  href: "/admin",
}

import {
  BikeIcon,
  PackageCheckIcon,
  PlugZapIcon,
  WalletIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import type { Feature } from "@/types"

export const merchants = {
  eyebrow: "For businesses",
  title: ["Dispatch at scale.", "Run your own", "fleet."],
  description: `Vendors, stores and logistics companies get a console of their own on ${siteConfig.name} — dispatch deliveries, onboard your riders, and see every order and naira in one place.`,
  cta: "Register your business",
  ctaNote: "Free to register. A FIAMOVE admin reviews every business.",
  /** Sends people to the console app, which owns registration and sessions. */
  ctaHref: `${siteConfig.consoleUrl}/signup`,
  signInHref: `${siteConfig.consoleUrl}/login`,
}

export const merchantFeatures: Feature[] = [
  {
    title: "Dispatch in seconds",
    description:
      "Create a delivery, and either assign one of your own riders or drop it into the open marketplace.",
    icon: PackageCheckIcon,
  },
  {
    title: "Bring your own riders",
    description:
      "Onboard your riders, see who is online, and follow each of their deliveries end to end.",
    icon: BikeIcon,
  },
  {
    title: "Earnings and reports",
    description:
      "Daily, weekly and monthly earnings per rider, with completion rates and fleet mix.",
    icon: WalletIcon,
  },
  {
    title: "An API for your checkout",
    description:
      "Create deliveries straight from your store, quote fares live, and track them with webhooks.",
    icon: PlugZapIcon,
  },
]

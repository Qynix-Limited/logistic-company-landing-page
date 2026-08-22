import {
  BikeIcon,
  ListChecksIcon,
  MapPinIcon,
  NavigationIcon,
  PowerIcon,
  RadarIcon,
  TagIcon,
  UserCheckIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react"

import type { AudienceSteps } from "@/types"

export const howItWorks = {
  eyebrow: "How it works",
  title: "Built for everyone",
  titleAccent: "on the delivery chain.",
}

export const audiences: AudienceSteps[] = [
  {
    id: "merchants",
    label: "Merchants",
    steps: [
      {
        title: "Enter Pickup & Drop-off",
        icon: MapPinIcon,
        description:
          "Add your customer's address and your business pickup location. Save frequent customers for one-tap repeat orders.",
      },
      {
        title: "Choose Vehicle Type",
        icon: BikeIcon,
        description:
          "Select Bike for small packages or Tricycle for bulkier items. Pricing updates instantly based on your choice.",
      },
      {
        title: "Rider Auto-Assigned",
        icon: UserCheckIcon,
        description:
          "Our AI matches the nearest available rider in seconds — no manual selection, no waiting on calls.",
      },
      {
        title: "Track Until Delivered",
        icon: RadarIcon,
        description:
          "Watch your rider move in real time on the map. Get push alerts at every status change from pickup to delivery.",
      },
    ],
  },
  {
    id: "individuals",
    label: "Individuals",
    steps: [
      {
        title: "Set Your Route",
        icon: MapPinIcon,
        description:
          "Drop a pin or type an address for pickup and destination. No account setup marathon required.",
      },
      {
        title: "See the Price Upfront",
        icon: TagIcon,
        description:
          "Fares are calculated before you book. What you see is what you pay — no surprises on arrival.",
      },
      {
        title: "Get Matched in Seconds",
        icon: ZapIcon,
        description:
          "The nearest verified rider accepts your request automatically and heads to your pickup point.",
      },
      {
        title: "Follow Every Step",
        icon: RadarIcon,
        description:
          "Live map tracking plus notifications at pickup, in transit, and delivery confirmation.",
      },
    ],
  },
  {
    id: "riders",
    label: "Riders",
    steps: [
      {
        title: "Go Online",
        icon: PowerIcon,
        description:
          "Open the app and set yourself available. No forced shifts, no penalties for taking breaks.",
      },
      {
        title: "Accept the Jobs You Want",
        icon: ListChecksIcon,
        description:
          "Every request shows pickup, drop-off and payout before you accept. Take what works for you.",
      },
      {
        title: "Navigate Turn-by-Turn",
        icon: NavigationIcon,
        description:
          "Built-in directions from your current location to pickup, then straight to the delivery address.",
      },
      {
        title: "Get Paid, Track Earnings",
        icon: WalletIcon,
        description:
          "Daily, weekly and monthly breakdowns so you always know exactly what you have earned.",
      },
    ],
  },
]

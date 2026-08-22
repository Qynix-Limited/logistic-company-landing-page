import {
  BellIcon,
  ChartColumnIcon,
  MapPinIcon,
  RepeatIcon,
  TagIcon,
  UserCheckIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react"

import type { Feature } from "@/types"

export const customerApp = {
  eyebrow: "Customer app",
  title: "Everything a",
  titleAccent: "Merchant",
  titleRest: "needs to ship faster.",
  description:
    "One app serving both Merchants and Individuals. Each user type gets a tailored experience from the moment they register — with the right tools for their use case.",
}

export const customerFeatures: Feature[] = [
  {
    title: "Rider Auto-Assignment",
    description:
      "Nearest available rider matched instantly. No calls, no manual dispatching.",
    icon: UserCheckIcon,
  },
  {
    title: "Live Map Tracking",
    description: "Watch your rider in real time from pickup to delivery door.",
    icon: MapPinIcon,
  },
  {
    title: "Wallet & Pay-Per-Delivery",
    description:
      "Top up your wallet or pay per delivery. Full transaction history included.",
    icon: WalletIcon,
  },
  {
    title: "Real-Time Notifications",
    description: "Push alerts at every stage — assigned, picked up, delivered.",
    icon: BellIcon,
  },
  {
    title: "Quick Re-Order",
    description:
      "Repeat any past delivery in one tap. No re-entering addresses.",
    icon: RepeatIcon,
  },
  {
    title: "Save Frequent Customers",
    description: "Store regular recipient details for fast repeat dispatching.",
    icon: UsersIcon,
  },
  {
    title: "Business Summary",
    description: "Track total deliveries and spending at a glance.",
    icon: ChartColumnIcon,
  },
  {
    title: "Clear Status Labels",
    description: "Pending → Assigned → Picked Up → In Transit → Delivered.",
    icon: TagIcon,
  },
]

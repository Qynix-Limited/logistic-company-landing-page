import {
  BellRingIcon,
  ChartColumnIcon,
  NavigationIcon,
  PowerIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import type { EarningsBar, Feature, Stat } from "@/types"

export const riderApp = {
  eyebrow: "Rider app",
  title: ["Earn more.", "Ride on", "your terms."],
  description: `The ${siteConfig.name} Rider App gives delivery agents full control — go online when ready, accept the jobs you want, and track every naira earned in real time.`,
}

export const riderFeatures: Feature[] = [
  {
    title: "Go Online / Offline Anytime",
    description:
      "You set your availability. No forced shifts, no penalties for taking breaks.",
    icon: PowerIcon,
  },
  {
    title: "Instant Job Alerts",
    description:
      "New requests arrive with pickup, drop-off, and estimated payout visible before you accept.",
    icon: BellRingIcon,
  },
  {
    title: "Built-In Navigation",
    description:
      "Turn-by-turn directions from your current location to pickup, then to delivery.",
    icon: NavigationIcon,
  },
  {
    title: "Daily, Weekly & Monthly Earnings",
    description:
      "A clear breakdown of your income so you always know where you stand.",
    icon: ChartColumnIcon,
  },
]

export const riderEarnings = {
  period: "This week",
  total: "₦98,700",
  delta: "+24.3%",
  bars: [
    { day: "Mon", value: 32 },
    { day: "Tue", value: 28 },
    { day: "Wed", value: 24 },
    { day: "Thu", value: 46 },
    { day: "Fri", value: 58 },
    { day: "Sat", value: 100 },
    { day: "Sun", value: 41 },
  ] satisfies EarningsBar[],
  summary: [
    { value: "12", label: "Today's Jobs" },
    { value: "₦1,400", label: "Avg. per Job" },
    { value: "7.5h", label: "Online Hours" },
  ] satisfies Stat[],
}

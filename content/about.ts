import {
  GaugeIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react"

import type { Milestone, Stat, TeamMember, Value } from "@/types"

export const aboutPage = {
  eyebrow: "About us",
  title: "Built for the people",
  titleAccent: "who move the city.",
  description:
    "FIAMOVE started with a simple observation: the merchants driving Nigeria's social commerce boom were running logistics out of WhatsApp threads and phone calls. We thought they deserved better.",
}

export const aboutStory = {
  eyebrow: "Our story",
  title: "From group chats to",
  titleAccent: "a real dispatch network.",
  paragraphs: [
    "Thousands of sellers build entire businesses on Instagram and WhatsApp. When an order comes in, the hard part is not the sale — it is finding a rider who will show up, agreeing a fare, and hoping the package arrives.",
    "We built FIAMOVE to replace that scramble. AI matching finds the nearest verified rider in seconds, pricing is fixed before you confirm, and every package is trackable from pickup to doorstep.",
    "Riders get the other half of the deal: full control of when they work, jobs they can see before accepting, and earnings that settle the moment a delivery completes.",
  ],
}

export const aboutStats: Stat[] = [
  { value: "50K+", label: "Deliveries completed" },
  { value: "2,400+", label: "Verified riders" },
  { value: "98.2%", label: "On-time rate" },
  { value: "12,800+", label: "Merchants and individuals" },
]

export const aboutValues: Value[] = [
  {
    title: "Speed with proof",
    description:
      "Fast is only useful if you can see it. Every claim we make is backed by a live status, a timestamp and a tracking link.",
    icon: GaugeIcon,
  },
  {
    title: "Riders are partners",
    description:
      "No forced shifts, no hidden deductions. Riders choose their jobs and see exactly what they earn before they accept.",
    icon: HandshakeIcon,
  },
  {
    title: "Trust by default",
    description:
      "ID checks, vehicle verification and insured deliveries are standard — not an upgrade you have to pay for.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Built for small business",
    description:
      "The tools that big logistics firms take for granted, priced and designed for someone selling from their phone.",
    icon: UsersIcon,
  },
]

export const aboutMilestones: Milestone[] = [
  {
    year: "2024",
    title: "The first hundred deliveries",
    description:
      "A pilot with 30 Lagos merchants and 12 riders, coordinated on a spreadsheet, proved the matching model worked.",
  },
  {
    year: "2025",
    title: "AI matching goes live",
    description:
      "Manual dispatch was replaced by automatic rider assignment, cutting average match time from 14 minutes to under a minute.",
  },
  {
    year: "2026",
    title: "Rider app and admin panel",
    description:
      "Dedicated apps for riders and operators shipped, alongside wallets, insured deliveries and real-time tracking for recipients.",
  },
  {
    year: "Next",
    title: "Beyond Lagos",
    description:
      "Abuja and Port Harcourt onboarding begins, with inter-city routes and scheduled bulk dispatch on the roadmap.",
  },
]

/** Placeholder roster — swap for real names and roles before launch. */
export const aboutTeam: TeamMember[] = [
  { name: "Operations Lead", role: "Rider network", initials: "OL" },
  { name: "Engineering Lead", role: "Platform and apps", initials: "EL" },
  { name: "Merchant Success", role: "Onboarding and support", initials: "MS" },
  { name: "Trust & Safety", role: "Verification and claims", initials: "TS" },
]

import { BikeIcon, LifeBuoyIcon, MailIcon, StoreIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import type { ContactChannel } from "@/types"

export const contactPage = {
  eyebrow: "Contact us",
  title: "Talk to a human,",
  titleAccent: "not a ticket queue.",
  description:
    "Whether you are shipping your first order, signing up a rider fleet or chasing a package, there is a direct line for it below.",
}

export const contactChannels: ContactChannel[] = [
  {
    title: "Email us",
    description:
      "General enquiries, partnerships and press. We reply within one business day.",
    action: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: MailIcon,
  },
  {
    title: "WhatsApp support",
    description:
      "Fastest route for anything about a live delivery. Open 8am – 9pm daily.",
    action: "Start a chat",
    href: siteConfig.links.whatsapp,
    icon: LifeBuoyIcon,
    external: true,
  },
  {
    title: "Become a merchant",
    description:
      "Bulk dispatch, team accounts and pay-per-delivery for growing stores.",
    action: "Talk to sales",
    href: `mailto:${siteConfig.contact.email}?subject=Merchant%20enquiry`,
    icon: StoreIcon,
  },
  {
    title: "Ride with us",
    description: "Sign up, document verification and anything about payouts.",
    action: "Rider onboarding",
    href: `mailto:${siteConfig.contact.email}?subject=Rider%20onboarding`,
    icon: BikeIcon,
  },
]

export const contactSubjects = [
  { value: "general", label: "General enquiry" },
  { value: "merchant", label: "Merchant / business" },
  { value: "rider", label: "Rider onboarding" },
  { value: "support", label: "Delivery support" },
  { value: "partnership", label: "Partnership or press" },
] as const

export const contactHours = [
  { label: "Support hours", value: "Mon – Sun, 8:00am – 9:00pm WAT" },
  { label: "Email response", value: "Within 1 business day" },
  { label: "Head office", value: "Lagos, Nigeria" },
]

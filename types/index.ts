import type { LucideIcon } from "lucide-react"

/** Any icon we render: a lucide icon or one of our brand SVGs. */
export type IconComponent =
  LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>

export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  title: string
  items: NavItem[]
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  title: string
  description: string
  icon: IconComponent
}

export interface Step {
  title: string
  description: string
  icon: IconComponent
}

export type Audience = "merchants" | "individuals" | "riders"

export interface AudienceSteps {
  id: Audience
  label: string
  steps: Step[]
}

export interface AppCard {
  name: string
  description: string
  audience: string
  icon: IconComponent
  href: string
}

export interface StoreLink {
  label: string
  name: string
  href: string
  icon: IconComponent
}

export interface DashboardStat {
  value: string
  label: string
  delta: string
  icon: IconComponent
}

export type DeliveryStatus =
  "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered"

export interface DeliveryRow {
  id: string
  from: string
  to: string
  rider: string
  status: DeliveryStatus
  fare: string
}

export interface EarningsBar {
  day: string
  value: number
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  title: string
  description: string
  icon: IconComponent
  items: FaqItem[]
}

export interface Value {
  title: string
  description: string
  icon: IconComponent
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  initials: string
}

export interface ContactChannel {
  title: string
  description: string
  action: string
  href: string
  icon: IconComponent
  external?: boolean
}

export type ContactSubject =
  "general" | "merchant" | "rider" | "support" | "partnership"

export interface ContactFormState {
  status: "idle" | "success" | "error"
  message: string
  errors: Partial<Record<"name" | "email" | "subject" | "message", string>>
}

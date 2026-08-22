import { ActivityIcon, BanknoteIcon, BikeIcon, UsersIcon } from "lucide-react"

import type { DashboardStat, DeliveryRow } from "@/types"

export const admin = {
  eyebrow: "Admin panel",
  title: "Full visibility.",
  titleAccent: "Zero technical knowledge needed.",
}

export const adminStats: DashboardStat[] = [
  {
    value: "47",
    label: "Active Deliveries",
    delta: "+12 today",
    icon: ActivityIcon,
  },
  {
    value: "12,840",
    label: "Total Users",
    delta: "+84 this week",
    icon: UsersIcon,
  },
  {
    value: "183",
    label: "Riders Online",
    delta: "of 2,400 total",
    icon: BikeIcon,
  },
  {
    value: "₦842K",
    label: "Today's Revenue",
    delta: "+18% vs avg",
    icon: BanknoteIcon,
  },
]

export const adminDeliveries: DeliveryRow[] = [
  {
    id: "QF-4821",
    from: "Ikeja",
    to: "Lekki Phase 1",
    rider: "Adebayo K.",
    status: "In Transit",
    fare: "₦2,800",
  },
  {
    id: "QF-4820",
    from: "Yaba",
    to: "Victoria Island",
    rider: "Chidi O.",
    status: "Delivered",
    fare: "₦1,600",
  },
  {
    id: "QF-4819",
    from: "Surulere",
    to: "Ajah",
    rider: "Emeka U.",
    status: "Picked Up",
    fare: "₦3,200",
  },
  {
    id: "QF-4818",
    from: "Agege",
    to: "Ikoyi",
    rider: "Seun B.",
    status: "Pending",
    fare: "₦4,100",
  },
]

import {
  BikeIcon,
  CreditCardIcon,
  PackageIcon,
  ShieldCheckIcon,
} from "lucide-react"

import type { FaqCategory } from "@/types"

export const faqPage = {
  eyebrow: "FAQ",
  title: "Questions,",
  titleAccent: "answered.",
  description:
    "Everything merchants, individuals and riders ask before their first delivery. Still stuck? Our team replies within one business day.",
}

export const faqCategories: FaqCategory[] = [
  {
    id: "deliveries",
    title: "Deliveries",
    description: "Booking, matching and tracking a package.",
    icon: PackageIcon,
    items: [
      {
        question: "How long does it take to get matched with a rider?",
        answer:
          "Most orders are matched in under 60 seconds. Our AI picks the nearest available rider for your vehicle type — there is no manual dispatching and no waiting on calls.",
      },
      {
        question: "Which areas do you cover?",
        answer:
          "We currently operate across Lagos, with Abuja and Port Harcourt rolling out next. If you enter a pickup outside our coverage, the app tells you before you pay.",
      },
      {
        question: "Can I schedule a delivery for later?",
        answer:
          "Yes. Choose a pickup window when you book and the order enters the queue automatically. You will get a push notification when a rider is assigned.",
      },
      {
        question: "What if my rider cannot reach the recipient?",
        answer:
          "The rider waits 10 minutes at no extra cost, then contacts you in-app. You can redirect the package to a new address or have it returned for the standard return fare.",
      },
      {
        question: "How do I track my package?",
        answer:
          "Every order has a live map with your rider's position, the current status label and an ETA that updates in real time. Recipients get a tracking link by SMS.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payments",
    description: "Fares, wallets and settlement.",
    icon: CreditCardIcon,
    items: [
      {
        question: "How is the fare calculated?",
        answer:
          "Fares are based on distance, vehicle type and demand at the time of booking. You always see the exact price before you confirm — there are no surprise charges after delivery.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Card, bank transfer and your QynixFleet wallet. Merchants can also enable pay-per-delivery so the recipient pays the rider on arrival.",
      },
      {
        question: "Do you charge a subscription fee?",
        answer:
          "No. QynixFleet is free to join for merchants, individuals and riders. We take a small commission per completed delivery, which is shown in your business summary.",
      },
      {
        question: "How do refunds work?",
        answer:
          "If a delivery fails through no fault of yours, the fare is returned to your wallet within 24 hours. Wallet balances can be withdrawn to your bank at any time.",
      },
    ],
  },
  {
    id: "riders",
    title: "For Riders",
    description: "Onboarding, jobs and earnings.",
    icon: BikeIcon,
    items: [
      {
        question: "What do I need to sign up as a rider?",
        answer:
          "A valid means of ID, a rider's permit, proof of your vehicle and a smartphone. Verification usually completes within 48 hours of submitting your documents.",
      },
      {
        question: "Do I have to work fixed hours?",
        answer:
          "Never. You go online when you want and offline when you are done. There are no shift targets and no penalties for taking a break.",
      },
      {
        question: "Can I decline a job?",
        answer:
          "Yes. Every request shows the pickup, drop-off and estimated payout before you accept, so you only take the jobs that work for you.",
      },
      {
        question: "When do I get paid?",
        answer:
          "Earnings land in your in-app wallet the moment a delivery is marked complete. Withdraw to your bank daily, weekly or monthly — whichever you prefer.",
      },
    ],
  },
  {
    id: "trust",
    title: "Safety & Trust",
    description: "Verification, insurance and data.",
    icon: ShieldCheckIcon,
    items: [
      {
        question: "Are riders verified?",
        answer:
          "Every rider passes ID checks, vehicle verification and a background review before their first job. Their name, photo and plate number show in your app on every delivery.",
      },
      {
        question: "Are my packages insured?",
        answer:
          "Yes. Standard deliveries carry insurance cover against loss and damage in transit. High-value items can be declared at booking for extended cover.",
      },
      {
        question: "What items can I not send?",
        answer:
          "Cash, illegal substances, weapons, live animals and hazardous materials. The full list appears at booking, and riders may refuse any package that breaches it.",
      },
      {
        question: "How is my data handled?",
        answer:
          "Addresses and contact details are used only to complete your deliveries and are never sold. See our Privacy Policy for the full detail.",
      },
    ],
  },
]

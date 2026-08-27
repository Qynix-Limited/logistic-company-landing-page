export const siteConfig = {
  name: "FIAMOVE",
  legalName: "FIAMOVE Logistics & Technology",
  tagline: "Logistics & Technology",
  description:
    "FIAMOVE connects social sellers and merchants with verified riders for fast, trackable deliveries across the city. Real-time tracking, instant matching, zero stress.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fiamove.com",
  locale: "en_NG",
  keywords: [
    "delivery app",
    "logistics",
    "dispatch rider",
    "package delivery",
    "real-time tracking",
    "social sellers",
  ],
  links: {
    x: "https://x.com/fiamove",
    instagram: "https://instagram.com/fiamove",
    whatsapp: "https://wa.me/2340000000000",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
  contact: {
    email: "hello@fiamove.com",
    whatsapp: "WhatsApp Support",
  },
} as const

export type SiteConfig = typeof siteConfig

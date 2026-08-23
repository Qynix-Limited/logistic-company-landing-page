export const siteConfig = {
  name: "FIAMOVE",
  tagline: "AI-powered delivery",
  description:
    "FIAMOVE connects social sellers and merchants with verified riders for fast, trackable deliveries across the city. Real-time tracking, instant matching, zero stress.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://FIAMOVE.com",
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
    x: "https://x.com/FIAMOVE",
    instagram: "https://instagram.com/FIAMOVE",
    whatsapp: "https://wa.me/2340000000000",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
  contact: {
    email: "hello@FIAMOVE.ng",
    whatsapp: "WhatsApp Support",
  },
} as const

export type SiteConfig = typeof siteConfig

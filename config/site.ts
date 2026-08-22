export const siteConfig = {
  name: "QynixFleet",
  tagline: "AI-powered delivery",
  description:
    "QynixFleet connects social sellers and merchants with verified riders for fast, trackable deliveries across the city. Real-time tracking, instant matching, zero stress.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qynixfleet.com",
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
    x: "https://x.com/qynixfleet",
    instagram: "https://instagram.com/qynixfleet",
    whatsapp: "https://wa.me/2340000000000",
    appStore: "https://apps.apple.com",
    playStore: "https://play.google.com",
  },
  contact: {
    email: "hello@qynixfleet.ng",
    whatsapp: "WhatsApp Support",
  },
} as const

export type SiteConfig = typeof siteConfig

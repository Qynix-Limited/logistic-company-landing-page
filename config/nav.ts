import { siteConfig } from "@/config/site"
import type { FooterColumn, NavItem } from "@/types"

/** Root-absolute so the hash targets still resolve from /about, /faq, /contact. */
export const mainNav: NavItem[] = [
  { title: "How It Works", href: "/#how-it-works" },
  { title: "Features", href: "/#features" },
  { title: "For Riders", href: "/#riders" },
  { title: "About", href: "/about" },
  { title: "FAQ", href: "/faq" },
]

export const footerNav: FooterColumn[] = [
  {
    title: "Platform",
    items: [
      { title: "Customer App", href: "/#features" },
      { title: "Rider App", href: "/#riders" },
      { title: "Admin Panel", href: "/#admin" },
      { title: "Download", href: "/#download" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "FAQ", href: "/faq" },
      { title: "Help Center", href: "/faq" },
      {
        title: "WhatsApp Chat",
        href: siteConfig.links.whatsapp,
        external: true,
      },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
]

import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google"

/**
 * These variables are attached to `<html>` in app/layout.tsx so `:root` and every
 * descendant can resolve them. `@theme inline` in globals.css composes them into
 * the font-sans / font-display / font-mono utilities with real fallback stacks.
 */
export const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const fontDisplay = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
})

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const fontVariables = [
  fontSans.variable,
  fontDisplay.variable,
  fontMono.variable,
].join(" ")

import { Geist, Geist_Mono } from "next/font/google"

/**
 * Geist Sans + Geist Mono, matching the FIAMOVE console so type is shared
 * across the product. These variables are attached to `<html>` in
 * app/layout.tsx so `:root` and every descendant can resolve them; `@theme
 * inline` in globals.css composes them into the font utilities with fallbacks.
 */
export const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const fontVariables = [fontSans.variable, fontMono.variable].join(" ")

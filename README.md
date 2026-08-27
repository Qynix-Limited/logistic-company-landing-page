# FIAMOVE — Landing Page

Marketing site for FIAMOVE, built with Next.js 16 (App Router), React 19,
Tailwind CSS v4 and shadcn/ui. Light and dark mode throughout.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

| Script              | What it does                   |
| ------------------- | ------------------------------ |
| `npm run dev`       | Dev server on :3000            |
| `npm run build`     | Production build               |
| `npm run typecheck` | `tsc --noEmit`                 |
| `npm run lint`      | ESLint                         |
| `npm run format`    | Prettier + Tailwind class sort |

## Structure

```
app/
  layout.tsx    Root layout: fonts, metadata, providers
  (site)/       Route group sharing SiteHeader + SiteFooter
    page.tsx      Landing page
    about/        About us
    faq/          FAQ (grouped accordions)
    contact/      Contact + server-action form
  globals.css, sitemap.ts, robots.ts
components/
  ui/           shadcn primitives (owned source — edit freely)
  common/       Container, Section, SectionHeading, IconBadge, cards, stats
  layout/       Header, footer, mobile nav, logo, theme toggle, socials
  sections/     Hero, HowItWorks, CustomerApp, RiderApp, AdminPanel, Download
  mockups/      Product shots: phone frame, earnings card, admin dashboard
  providers/    Theme, tooltip and toast providers
  icons.tsx     Brand SVGs (lucide v1 dropped brand marks)
config/         site.ts (name, URLs, contact) and nav.ts
content/        Section copy and data — no copy lives in components
hooks/          use-scroll, use-media-query, use-mounted
lib/            utils (cn), fonts
types/          Shared data shapes
```

**Copy and data live in `content/`,** typed by `types/index.ts`. Sections read
from there and compose primitives from `components/common` and `components/ui`,
so a section file stays layout-only.

## Branding

The palette is sampled directly off the fiamove logo lockup
(`public/images/fiamovelogo.png`): **azure #0070FC** and **amber #FEA503**.
The `--brand-*` and `--amber-*` ramps in `app/globals.css` are the single
source of truth — `--primary`, `--ring` and the accents all derive from them.

Three separations are deliberate, and the comment in `globals.css` says so:

1. `--primary` (azure) vs `--destructive` (red). The console hit this: when
   they matched, Delete and Confirm looked identical.
2. `--accent-brand` (amber) vs `--warning`. The logo amber sits almost on top
   of a typical warning yellow, so warning is pushed toward orange.
3. In dark mode `--primary-foreground` is dark ink, not white — white on the
   dark-mode azure reaches only ~2.8:1.

`brand-600`/`amber-600` are a hair darker than the logo so white-on-primary
and accent text clear WCAG AA on the light surface; `brand-500`/`amber-500`
hold the exact logo values for fills and the mark.

Use the theme-aware pair for accent text and icons rather than a fixed step,
which only reads well in one theme:

| Token          | Light       | Dark        |
| -------------- | ----------- | ----------- |
| `brand-accent` | `brand-600` | `brand-400` |
| `accent-brand` | `amber-600` | `amber-400` |

### Logo

The source PNG has a black plate baked in, so it cannot sit on a light header.
`public/images/` holds three derived, transparent assets: `fiamove-logo-light`
(ink wordmark), `fiamove-logo-dark` (white wordmark) and `fiamove-mark` (the
chevrons alone, used for `app/icon.png`). `Logo` swaps the two lockups with
CSS, not the theme hook, so the right one paints on the server render.

## Theming

`next-themes` drives a `class` on `<html>`; Tailwind reads it via
`@custom-variant dark` in `app/globals.css`. Light, dark and system are all
supported, with no flash on load. The design is dark-first, so `defaultTheme`
is `dark`; the toggle still offers Light, Dark and System. Surface tokens
(background, card, border, muted) are ported from the FIAMOVE console so the
marketing site and the product read as one system.

## Typography

Geist Sans + Geist Mono, matching the console, loaded via `next/font/google`
in `lib/fonts.ts` and attached to `<html>` so `:root` and every descendant can
resolve them:

| Role | Font       | Used by                                             |
| ---- | ---------- | --------------------------------------------------- |
| Sans | Geist Sans | `body`, `font-sans`, `font-display`, `font-heading` |
| Mono | Geist Mono | `eyebrow`, status pills, table headers, `font-mono` |

`@theme inline` composes each Next font variable into a stack with real system
fallbacks. Because `@theme inline` does not emit the variables to `:root`,
plain CSS rules cannot read `--font-mono` directly — use the utility
(`@apply font-mono`) as the `eyebrow` utility does.

## Pages

`app/(site)/` is a route group: it adds no URL segment, but gives every page the
shared `SiteHeader` / `SiteFooter` chrome from one layout.

| Route      | Content source                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------- |
| `/`        | `content/hero.ts`, `how-it-works.ts`, `customer-app.ts`, `rider-app.ts`, `admin.ts`, `download.ts` |
| `/about`   | `content/about.ts`                                                                                 |
| `/faq`     | `content/faq.ts`                                                                                   |
| `/contact` | `content/contact.ts`                                                                               |

Inner pages open with the shared `PageHeader` (eyebrow, split-accent title,
description, optional children) rather than the landing `Hero`.

### Contact form

The form posts to a Server Action in `app/(site)/contact/actions.ts` via
`useActionState`, so validation runs on the server with no client validation
library. It currently validates and logs — **wire an email or CRM provider at
the `TODO` in that file before launch**, or submissions go nowhere.

# logistic-company-landing-page

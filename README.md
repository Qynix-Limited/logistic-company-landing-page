# QynixFleet — Landing Page

Marketing site for QynixFleet, built with Next.js 16 (App Router), React 19,
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

## Theming

`next-themes` drives a `class` on `<html>`; Tailwind reads it via
`@custom-variant dark` in `app/globals.css`. Light, dark and system are all
supported, with no flash on load. The design is dark-first, so `defaultTheme`
is `dark`; the toggle still offers Light, Dark and System.

Colors are CSS variables. The `--brand-*` ramp at the bottom of `globals.css`
feeds shadcn's `--primary` and `--ring` in both themes — change the ramp and the
whole site follows. `bg-brand-500`, `text-brand-600` etc. are available as
Tailwind utilities, plus a `text-brand-gradient` and an `eyebrow` utility.

## Typography

Three faces, loaded via `next/font/google` in `lib/fonts.ts` and attached to
`<html>` so `:root` and every descendant can resolve them:

| Role    | Font              | Used by                                             |
| ------- | ----------------- | --------------------------------------------------- |
| Display | Plus Jakarta Sans | `h1`–`h4`, `font-display`, `font-heading`           |
| Body    | Inter             | `body`, `font-sans`                                 |
| Mono    | Geist Mono        | `eyebrow`, status pills, table headers, `font-mono` |

`@theme inline` in `globals.css` composes each Next font variable into a stack
with real system fallbacks. Because `@theme inline` does not emit the variables
to `:root`, plain CSS rules cannot read `--font-mono` directly — use the
utility (`@apply font-mono`) as the `eyebrow` utility does.

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

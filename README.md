# NexusAI — Intelligent AI Automation Platform

A premium, high-converting landing page for an advanced AI-driven data automation platform. Built for the Frontend Battle Phase 1 hackathon.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict)
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (body) + JetBrains Mono (headers/monospace)

## Features

- **Hero Section** — Premium animated hero with gradient text, stats row, and dual CTAs
- **Bento Features Grid** — Responsive bento layout on desktop that transforms to an accordion on mobile with Context Lock state persistence
- **Pricing Matrix** — Dynamic multi-currency pricing (USD/INR/EUR) with monthly/annual billing toggle, 20% annual discount, and regional tariff calculation
- **Testimonials** — Intersection observer animated social proof
- **SEO** — Full metadata, OpenGraph, Twitter Cards, JSON-LD, robots.txt, sitemap.xml
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation, focus states, reduced motion
- **Performance** — Dynamic imports, CSS animations only (no JS animation libraries), 500ms entry timeline

## Scoring Features (100 Points)

1. **Logic, Architecture & State Isolation (40 pts)**
   - Multi-dimensional pricing matrix with dynamic calculation
   - No global re-renders on currency/billing change (localized DOM updates)
   
2. **SEO & Semantic HTML (30 pts)**
   - Semantic `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<blockquote>`
   - Complete meta headers, OG tags, Twitter cards, JSON-LD structured data
   - robots.txt + sitemap.xml

3. **UI/UX & Motion (30 pts)**
   - Responsive Bento-to-Accordion with Context Lock (active index transfers on resize)
   - Micro-interactions: 150-200ms ease-out on hovers/toggles
   - Layout transitions: 300-400ms ease-in-out
   - All animations use native CSS transitions (no Framer Motion, no external animation libs)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, Tailwind, custom properties
│   ├── layout.tsx           # Root layout with SEO, fonts, nav, footer
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Responsive navigation with mobile menu
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with entry animations
│   │   ├── BentoFeatures.tsx # Bento grid → Accordion responsive feature showcase
│   │   ├── Pricing.tsx      # Dynamic pricing with currency/billing controls
│   │   └── Testimonials.tsx # Social proof cards
│   └── ui/
│       ├── Icon.tsx         # SVG icon component (inline paths, no external deps)
│       └── Accordion.tsx    # Pure CSS accordion (zero dependencies)
├── hooks/
│   ├── use-pricing.ts       # Pricing state management (isolated)
│   └── use-bento-accordion.ts # Bento/Accordion context lock logic
├── lib/
│   └── pricing-utils.ts     # Price calculation engine
├── constants/
│   ├── pricing.ts           # Pricing configuration matrix
│   └── bento.ts             # Bento grid content configuration
└── types/
    └── index.ts             # TypeScript interfaces
public/
├── assets/                  # SVG icon assets
├── robots.txt
└── sitemap.xml
```

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Forbidden Libraries Compliance

This project uses **zero** banned dependencies:
- ✅ No Shadcn
- ✅ No Radix UI
- ✅ No HeadlessUI
- ✅ No Framer Motion
- ✅ No external animation libraries
- ✅ All transitions = native CSS animations/transitions
- ✅ All UI = hand-rolled components

## Deployment

Deploy to Vercel:

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Live Demo

[View Live Demo](https://nexus-ai-theta-two.vercel.app/)

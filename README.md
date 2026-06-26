# NexusAI

**Intelligent AI Automation Platform** — premium workflow automation for data teams.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-black?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-black?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-black?style=flat&logo=typescript)](https://www.typescriptlang.org/)

**Version:** `0.1.0`  
**License:** MIT  
**Live Demo:** https://nexusai.vercel.app  
**GitHub Repo:** *(add your public repo URL when publishing)*

---

## Hero Banner

A premium, high-converting landing page with a premium AI-themed hero, telemetry dashboard preview, dual CTA entry points, and grid/glow visual depth.

---

## Live Demo

- **Website:** https://nexusai.vercel.app

---

## About

NexusAI turns complex data workflow steps into a cohesive, AI-driven automation layer.

**Built for:** teams and builders who need faster throughput—without sacrificing reliability.

**Why this exists:** to provide a modern, SEO-clean, motion-rich landing experience with strict UI constraints (no banned component/animation libraries, semantic HTML first, and fast first-load orchestration).

---

## What’s Included (Key Highlights)

### Pricing & Currency Engine (Matrix-Driven)
- Monthly / Annual billing toggle
- Multi-currency display: **USD ($)**, **INR (₹)**, **EUR (€)**
- Dynamic computation via configuration matrix:
  - base tier rate
  - **20% annual discount**
  - regional tariff adjustments (per currency)
- Native formatting via `Intl.NumberFormat` with correct fractional rules (INR rounds to whole currency units)

### Bento Features → Mobile Accordion (Context Lock)
- Desktop: modern **Bento grid** feature nodes
- Mobile: touch-optimized **Accordion** refactor
- **Context Lock constraint:** when crossing the breakpoint during active interaction, the corresponding index context is preserved and the matching mobile panel opens smoothly.
- Animations use hardware-friendly **native CSS transitions**.

### SEO / Semantic HTML / Metadata
- Next.js `metadata` for:
  - title template + description
  - OpenGraph + Twitter cards
  - canonical URL + robots configuration
- JSON-LD structured data injected into the document head
- Semantic sections for crawlability and accessibility.

---

## Feature Showcase

| Category | Implemented Capabilities |
|---|---|
| Landing | Hero, Navbar, Footer, CTA anchors |
| Features | Bento grid (desktop) + Accordion (mobile) |
| Pricing | Dynamic matrix pricing with currency + billing |
| Social Proof | Testimonials section |
| SEO hygiene | OpenGraph, Twitter, JSON-LD, robots, canonical |
| Accessibility | ARIA attributes, focus rings, keyboard-friendly controls |
| Motion | CSS transitions (150–200ms micro-interactions, 300–400ms layout transitions) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI | React + TypeScript |
| Styling | Tailwind CSS v4 + custom utility classes |
| Fonts | `Inter` + `JetBrains Mono` (via Next font optimization) |
| Animations | Native CSS transitions (no animation component libraries) |

---

## Architecture (How it’s wired)

```text
src/
├── app/
│   ├── page.tsx                # Landing page composition
│   └── layout.tsx              # SEO metadata + root layout
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── BentoFeatures.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       └── FAQ.tsx
│   └── ui/
│       ├── Accordion.tsx     # Zero-dependency accordion
│       └── Icon.tsx
├── hooks/
│   ├── use-pricing.ts         # Localized state + isolated formatting
│   └── use-bento-accordion.ts # Resize breakpoint context lock
├── constants/
│   ├── pricing.ts            # Currency + tariff matrix + tier definitions
│   └── bento.ts              # Bento node configuration
└── lib/
    └── pricing-utils.ts      # Calculation + formatting utilities
```

---

## UI / UX Notes (Constraints honored)

- **No banned UI libraries**: the accordion and motion are implemented from scratch.
- **No runtime animation engines**: motion is handled with native CSS transitions.
- **State isolation focus (Pricing):** updates are scoped to localized DOM text nodes where prices are rendered.
- **Breakpoint refactor (Features):** desktop Bento and mobile Accordion use the same underlying `activeIndex` context.

---

## Performance & SEO

- Metadata-first rendering via Next.js `metadata`.
- Crawlable, semantic structure: `<main>`, `<section>`, `<article>`, `<footer>`.
- Entry and micro-interactions use short, targeted durations (kept under the orchestration cap).

---

## Accessibility

- Buttons and controls include appropriate ARIA attributes (`aria-expanded`, `aria-checked`, etc.).
- Focus states are visible using Tailwind focus-visible ring utilities.
- Accordion panels expose `role="region"` and `aria-controls` associations.

---

## Installation

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

---

## Deployment

This project is compatible with Vercel.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `feature/<name>`
3. Commit changes with clear messages.
4. Open a pull request.

---

## License

MIT

---

## Author

**NexusAI**  
Live: https://nexusai.vercel.app

---

## Footer

Built with semantic HTML, strict UI constraints, and motion designed to feel premium—not noisy.


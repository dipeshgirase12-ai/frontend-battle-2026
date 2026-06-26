# Frontend Battle Phase 1 - Implementation Plan

## Phase 1: Project Setup & Analysis [DONE]
- [x] Read problem statement (FB_Round_1.pdf)
- [x] Extract all SVG assets (13 icons)
- [x] Identify fonts: JetBrains Mono (headers), Inter (body)
- [x] Analyze scoring criteria (100 points total)
- [x] Identify forbidden libraries (no Shadcn, Radix, HeadlessUI, Framer Motion)

## Phase 2: Project Scaffolding
- [ ] Initialize Next.js 15 project with TypeScript & Tailwind CSS
- [ ] Configure fonts (JetBrains Mono + Inter via next/font)
- [ ] Set up project structure (src/app, components, hooks, lib, constants, types)
- [ ] Copy SVG assets to public/assets/
- [ ] Configure metadata, SEO, OG, JSON-LD
- [ ] Create robots.txt, sitemap.xml
- [ ] Create globals.css with custom properties

## Phase 3: Core Layout & Navigation
- [ ] Build Navbar component (semantic <header>, <nav>)
- [ ] Build Footer component
- [ ] Build Root Layout with proper meta tags
- [ ] Implement responsive container system
- [ ] Add reduced-motion support

## Phase 4: Feature 1 - Pricing Matrix with Currency Switcher (15 pts + 15 pts)
- [ ] Create pricing config matrix (multi-dimensional with base rates, discounts, regional tariffs)
- [ ] Build CurrencySwitcher component (INR/USD/EUR toggle with isolated state)
- [ ] Build BillingToggle component (Monthly/Annual with 20% discount)
- [ ] Build PricingCard component with dynamic price rendering
- [ ] Implement state isolation (no global re-renders on currency/billing change)
- [ ] Add micro-interactions (150-200ms ease-out)

## Phase 5: Feature 2 - Bento-to-Accordion with State Persistence (10 pts)
- [ ] Build BentoGrid component (desktop layout)
- [ ] Build Accordion component (mobile layout) - NO external libraries
- [ ] Implement Context Lock (active index transfers on resize)
- [ ] Add CSS transitions (300-400ms ease-in-out)
- [ ] Touch optimization (44px+ targets)

## Phase 6: Hero Section & Social Proof
- [ ] Build Hero with headline, subtext, CTA
- [ ] Integrate cube-16-solid SVG as brand mark
- [ ] Add entry animations (< 500ms TTI)
- [ ] Build Testimonials/Social Proof section

## Phase 7: Performance & Polish
- [ ] Audit with Lighthouse targets (Perf 95+, A11y 100, SEO 100, BP 100)
- [ ] Ensure no layout shifts (CLS=0)
- [ ] Verify 500ms entry timeline
- [ ] Test all breakpoints (320, 375, 768, 1024, 1440)
- [ ] Check keyboard navigation & ARIA
- [ ] Verify no console/TypeScript/ESLint errors

## Phase 8: Deployment & Judge Review
- [ ] Test: npm run build, npm run lint
- [ ] Self-review as judge - score & fix weakest areas
- [ ] Create README.md
- [ ] Final verification
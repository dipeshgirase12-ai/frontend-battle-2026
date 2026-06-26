"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#autonomy", label: "Autonomy" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#" className="flex items-center gap-2.5 text-white" aria-label="Home">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
            <svg className="h-5 w-5 text-accent" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
            </svg>
          </div>
          <span className="font-mono text-base font-bold tracking-tight">NexusAI</span>
        </a>

        <div className="hidden items-center gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="hidden h-9 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark md:inline-flex"
        >
          Get Started
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 hover:text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 18 18 6M6 6l12 12" />
            ) : (
              <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0b0b0b] md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-neutral-400 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-white">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

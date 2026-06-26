"use client";

import { usePricing } from "@/hooks/use-pricing";
import { CURRENCIES } from "@/constants/pricing";

export function Pricing() {
  const { currency, billing, tiers, setCurrency, setBilling, getFormattedPrice, getOriginalPrice, getBillingLabel } = usePricing();

  return (
    <section id="pricing" className="py-24" aria-label="Pricing plans">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">Pricing</h2>
          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Simple, transparent pricing</h3>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="inline-flex rounded-xl border border-neutral-800 bg-neutral-900/50 p-1" role="radiogroup" aria-label="Select currency">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`relative rounded-lg px-4 py-2 font-mono text-sm font-medium transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${
                  currency === c.code ? "bg-accent text-white shadow-lg shadow-accent/25" : "text-neutral-400 hover:text-white"
                }`}
                role="radio"
                aria-checked={currency === c.code}
                aria-label={`${c.code} - ${c.symbol}`}
              >
                {c.code} {c.symbol}
              </button>
            ))}
          </div>

          <div className="inline-flex rounded-xl border border-neutral-800 bg-neutral-900/50 p-1" role="radiogroup" aria-label="Select billing cycle">
            {(["monthly", "annual"] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBilling(cycle)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${
                  billing === cycle ? "bg-accent text-white shadow-lg shadow-accent/25" : "text-neutral-400 hover:text-white"
                }`}
                role="radio"
                aria-checked={billing === cycle}
              >
                {cycle === "monthly" ? "Monthly" : "Annual"}
                {cycle === "annual" && <span className="ml-1.5 text-xs text-success">Save 20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = getFormattedPrice(tier);
            const originalPrice = getOriginalPrice(tier);
            const isPopular = tier.popular;

            return (
              <article
                key={tier.id}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ease-in-out hover:border-neutral-700 ${
                  isPopular ? "border-accent/30 bg-accent/5 shadow-xl shadow-accent/10" : "border-neutral-800 bg-neutral-900/30"
                }`}
                aria-label={`${tier.name} plan`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-accent px-4 py-1 font-mono text-xs font-semibold text-white shadow-lg shadow-accent/25">
                      Most Popular
                    </span>
                  </div>
                )}

                <h4 className="font-mono text-sm font-semibold text-white">{tier.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white sm:text-5xl" data-tier={tier.id} data-currency={currency} data-billing={billing}>
                    {price}
                  </span>
                  <span className="text-sm text-neutral-500">{getBillingLabel(billing)}</span>
                  {originalPrice && <span className="ml-2 text-sm text-neutral-600 line-through">{originalPrice}</span>}
                </div>

                <ul className="mt-8 flex-1 space-y-3" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span className="text-sm text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-xl font-semibold text-sm transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${
                    isPopular
                      ? "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25"
                      : "border border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";

const testData = [
  {
    quote:
      "This platform transformed our data pipeline. We're processing 3x more data with half the team.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    quote:
      "The AI optimization engine alone saved us $50K in compute costs this quarter. Absolutely invaluable.",
    author: "Marcus Rivera",
    role: "VP Engineering, DataSync",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    quote:
      "We evaluated 12 automation platforms. This one stood out for its architecture and enterprise-grade reliability.",
    author: "Emily Nakamura",
    role: "Head of Infrastructure, CloudScale",
    gradient: "from-violet-500 to-purple-600",
  },
];

export function Testimonials() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="testimonials" className="py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
            Testimonials
          </h2>
          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Trusted by industry leaders
          </h3>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testData.map((t, i) => (
            <blockquote
              key={t.author}
              className={`relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-8 transition-all duration-700 ease-out ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className={`mb-6 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${t.gradient}`}
              >
                <svg
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.158 11 15c0 1.93-1.57 3.5-3.5 3.5-1.246 0-2.37-.556-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.158 21 15c0 1.93-1.57 3.5-3.5 3.5-1.246 0-2.37-.556-2.917-1.179z" />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-neutral-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-neutral-800 pt-4">
                <cite className="not-italic">
                  <div className="font-mono text-sm font-semibold text-white">{t.author}</div>
                  <div className="mt-0.5 text-xs text-neutral-500">{t.role}</div>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
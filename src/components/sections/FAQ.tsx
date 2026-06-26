"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can a team launch its first workflow?",
    answer: "Most teams connect core systems and launch a supervised workflow in the first week. Enterprise rollouts add policy review, SSO, and audit mapping.",
  },
  {
    question: "Can NexusAI run inside strict compliance environments?",
    answer: "Yes. The platform supports SSO, role-based access, versioned releases, approval gates, detailed execution logs, and data retention controls.",
  },
  {
    question: "Do we need engineers to maintain automations?",
    answer: "Engineering teams can extend the platform through APIs, but operators can maintain standard workflow logic through the visual canvas and rule controls.",
  },
  {
    question: "What happens when an agent is uncertain?",
    answer: "Uncertain work is routed to a human review queue with full context, suggested actions, and a reusable correction trail for future decisions.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24" aria-label="Common inquiries">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-tag">{"//0007 Common Inquiries"}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Answers for security, operations, and product teams.
          </h2>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="border-b border-white/10">
                <button
                  className="flex min-h-[72px] w-full items-center justify-between gap-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span className="font-mono text-sm font-semibold text-white">{item.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-neutral-400">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-7 text-neutral-400">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

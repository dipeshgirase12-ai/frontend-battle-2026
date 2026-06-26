"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const tabs = [
  {
    id: "discovery",
    label: "Discovery",
    title: "Map every signal before automation starts.",
    copy: "NexusAI inventories tools, data quality, owners, and policies before a workflow is allowed to execute.",
    icon: "search",
  },
  {
    id: "analysis",
    label: "Analysis",
    title: "Model decisions against real operating constraints.",
    copy: "Routing rules, cost thresholds, and SLA windows are evaluated with explainable traces for audit teams.",
    icon: "chart-pie",
  },
  {
    id: "training",
    label: "Training",
    title: "Continuously improve from approved outcomes.",
    copy: "Human corrections become weighted examples, creating safer automations without retraining from scratch.",
    icon: "cog-8-tooth",
  },
  {
    id: "deploy",
    label: "Deploy",
    title: "Ship monitored agents with rollback controls.",
    copy: "Versioned releases, live telemetry, and kill switches keep autonomous work governed in production.",
    icon: "arrow-trending-up",
  },
];

export function Autonomy() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section id="autonomy" className="py-24" aria-label="Engineered for autonomy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-tag">{"//0004 Engineered for Autonomy"}</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              A governed path from discovery to deployment.
            </h2>
          </div>
          <div className="flex overflow-x-auto border border-white/8 bg-white/[0.025] p-1" role="tablist" aria-label="Autonomy stages">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={active === index}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(index)}
                className={`h-11 px-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active === index ? "bg-white text-black" : "text-neutral-500 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="bg-[#121212] p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04] text-accent">
              <Icon name={current.icon} size={22} />
            </div>
            <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">{current.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-neutral-400">{current.copy}</p>
          </div>
          <div className="relative min-h-[350px] overflow-hidden bg-[#0d0d0d] bg-grid-sm p-8">
            <div className="absolute inset-x-8 top-10 grid grid-cols-4 gap-2">
              {tabs.map((tab, index) => (
                <div key={tab.id} className={`h-1 ${index <= active ? "bg-accent" : "bg-white/10"}`} />
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-lg border border-white/10 bg-[#171717] p-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-neutral-500">Wireframe / {current.label}</span>
                <span className="font-mono text-[0.62rem] text-success">READY</span>
              </div>
              <div className="mt-6 grid gap-3">
                {[72, 91, 58, 84].map((width, index) => (
                  <div key={width} className="flex items-center gap-3">
                    <div className="h-9 w-9 border border-white/10 bg-white/[0.04]" />
                    <div className="h-2 bg-white/12" style={{ width: `${width}%` }} />
                    <span className={`ml-auto h-2 w-2 rounded-full ${index <= active ? "bg-success" : "bg-neutral-700"}`} />
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-20 border border-white/8 bg-white/[0.025] p-3">
                    <div className="h-2 w-10 bg-white/15" />
                    <div className="mt-8 h-2 w-full bg-accent/40" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

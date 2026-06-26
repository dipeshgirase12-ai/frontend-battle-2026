"use client";

import { Icon } from "@/components/ui/Icon";

const workflowNodes = [
  { title: "Email Trigger", label: "INBOX", icon: "link-solid", x: "left-[12%]", y: "top-[18%]" },
  { title: "AI Agent", label: "CLASSIFY", icon: "search", x: "left-[43%]", y: "top-[38%]" },
  { title: "CRM Sync", label: "ENRICH", icon: "cube-16-solid", x: "left-[67%]", y: "top-[16%]" },
  { title: "Send Email", label: "REPLY", icon: "arrow-path", x: "left-[61%]", y: "top-[68%]" },
];

export function Workflow() {
  return (
    <section id="workflow" className="py-24" aria-label="Workflow builder">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-tag">{"//0003 Visual Automation"}</p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Build autonomous workflows on a live operations canvas.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400">
              Compose triggers, models, business rules, and actions in one auditable graph. Every node reports status, latency, and owner context as work moves through the system.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
              {[
                ["41ms", "Median routing"],
                ["18k", "Runs today"],
                ["99.99%", "Delivery SLA"],
                ["0.4%", "Exception rate"],
              ].map(([value, label]) => (
                <div key={label} className="border border-white/10 bg-white/[0.025] p-4">
                  <div className="metric-value text-2xl">{value}</div>
                  <div className="metric-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden border border-white/8 bg-[#111] canvas-grid">
            <div className="absolute left-4 top-4 z-10 flex flex-col gap-2 border border-white/8 bg-[#0b0b0b]/90 p-2 backdrop-blur">
              {["+", "D", "[]", "X"].map((item) => (
                <button
                  key={item}
                  className="flex h-10 w-10 items-center justify-center border border-white/8 text-sm text-neutral-300 transition hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Workflow tool ${item}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M160 112 C280 100, 310 190, 420 208" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 7" />
              <path d="M500 210 C610 210, 620 110, 735 105" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="5 7" />
              <path d="M505 238 C600 270, 595 330, 690 340" fill="none" stroke="rgba(16,185,129,0.45)" strokeWidth="1.5" />
            </svg>

            {workflowNodes.map((node, index) => (
              <div
                key={node.title}
                className={`absolute ${node.x} ${node.y} w-[190px] border border-white/10 bg-[#181818] p-4 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-white/20`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.58rem] tracking-[0.18em] text-neutral-500">{node.label}</span>
                  <span className="pulse-dot" />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.04] text-accent">
                    <Icon name={node.icon} size={18} />
                  </span>
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-white">{node.title}</h3>
                    <p className="mt-1 text-xs text-neutral-500">node.0{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 right-4 border border-success/30 bg-success/10 px-3 py-2 font-mono text-[0.62rem] tracking-[0.16em] text-success">
              RUNNING / 345 ACTIVE NODES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

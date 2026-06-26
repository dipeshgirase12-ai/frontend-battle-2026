export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-24" aria-label="Hero section">
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent-light/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">
          {/* Left: Copy */}
          <div className="flex-1 animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-3.5 py-1.5">
              <span className="pulse-dot" />
              <span className="font-mono text-[0.6rem] font-medium tracking-[0.2em] text-neutral-500 uppercase">
                {"//2026  System Online"}
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Power your future
              <br />
              <span className="gradient-text">with AI automation</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
              Enterprise-grade AI platform for workflow automation, data processing, and intelligent decision-making. Scale your operations with confidence.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark glow-indigo"
              >
                <span>Start Free Trial</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] px-7 text-sm font-medium text-neutral-400 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                View Documentation
              </a>
            </div>

            {/* Enterprise logo cloud */}
            <div className="mt-16">
              <p className="font-mono text-[0.6rem] font-medium tracking-[0.15em] text-neutral-600 uppercase">Trusted by leading enterprises</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-40">
                {["Aetna", "Cigna", "Anthem", "UnitedHealth", "Humana"].map((name) => (
                  <span key={name} className="font-mono text-xs font-semibold tracking-wider text-white uppercase">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="flex-1 animate-fade-in-up [animation-delay:160ms]">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#161616]">
                {/* Card header */}
                <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-danger" />
                    <span className="h-2 w-2 rounded-full bg-warning" />
                    <span className="h-2 w-2 rounded-full bg-success" />
                  </div>
                  <span className="font-mono text-[0.6rem] tracking-wider text-neutral-600 uppercase">Dashboard / Overview</span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="font-mono text-[0.55rem] text-success">Live</span>
                  </div>
                </div>

                {/* Card body — telemetry grid */}
                <div className="grid grid-cols-2 gap-px bg-white/5">
                  {[
                    { label: "System Load", value: "42%", chart: "M0 20 Q 10 5, 20 10 T 40 15 T 60 5 T 80 12 T 100 8", color: "text-accent" },
                    { label: "SLA Response", value: "99.97%", chart: "M0 10 Q 10 12, 20 8 T 40 10 T 60 7 T 80 9 T 100 5", color: "text-success" },
                    { label: "Token Usage", value: "1.4M", chart: "M0 18 Q 10 15, 20 16 T 40 12 T 60 14 T 80 10 T 100 10", color: "text-accent" },
                    { label: "Active Nodes", value: "345", chart: "M0 15 Q 10 10, 20 8 T 40 5 T 60 10 T 80 6 T 100 4", color: "text-accent" },
                  ].map((metric) => (
                    <div key={metric.label} className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[0.55rem] tracking-[0.15em] text-neutral-600 uppercase">{metric.label}</span>
                        <span className={`font-mono text-xs font-bold ${metric.color}`}>{metric.value}</span>
                      </div>
                      <svg className="mt-2 h-8 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d={metric.chart} fill="none" stroke="currentColor" strokeWidth="1.5" className={metric.color} opacity="0.6" />
                      </svg>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="h-0.5 w-0.5 rounded-full bg-success" />
                        <span className="font-mono text-[0.5rem] text-success">+2.4%</span>
                        <span className="font-mono text-[0.5rem] text-neutral-600">vs last hour</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow preview card (overlapping) */}
              <div className="relative -mt-4 ml-6 mr-6 overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a] p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-accent/10">
                    <svg className="h-3 w-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8.7 12 3l9 5.7v6.6L12 21l-9-5.7V8.7Z" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-mono text-[0.55rem] tracking-wider text-neutral-500 uppercase">Active Workflow / Data Pipeline v2</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {["Email Trigger", "AI Agent", "Transform", "Send Email"].map((node, i) => (
                    <div key={node} className="flex items-center gap-3">
                      <div className="flex h-7 items-center gap-1.5 rounded-md border border-white/5 bg-white/[0.03] px-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="font-mono text-[0.5rem] text-neutral-400">{node}</span>
                      </div>
                      {i < 3 && <svg className="h-3 w-3 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

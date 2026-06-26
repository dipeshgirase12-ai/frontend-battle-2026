'use client';

import { useBentoAccordion } from '@/hooks/use-bento-accordion';
import { Accordion } from '@/components/ui/Accordion';
import { Icon } from '@/components/ui/Icon';

const gradientMap: Record<string, string> = {
  'from-indigo-600 to-blue-500': 'from-indigo-500 to-blue-600',
  'from-emerald-600 to-teal-500': 'from-emerald-500 to-teal-600',
  'from-violet-600 to-purple-500': 'from-violet-500 to-purple-600',
  'from-amber-600 to-orange-500': 'from-amber-500 to-orange-600',
  'from-rose-600 to-pink-500': 'from-rose-500 to-pink-600',
  'from-cyan-600 to-sky-500': 'from-cyan-500 to-sky-600',
};

const spanClasses: Record<string, string> = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 row-span-1 md:col-span-1',
  lg: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
  xl: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
};

export function BentoFeatures() {
  const { items, activeIndex, isMobile, toggleAccordion, setActiveIndex } =
    useBentoAccordion();

  if (isMobile) {
    const accordionItems = items.map((item) => ({
      id: item.id,
      title: item.title,
      content: item.description,
    }));

    return (
      <section id="features" className="py-24" aria-label="Features">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
              Features
            </h2>
            <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Everything you need to automate
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              A comprehensive suite of AI-powered tools designed to transform your data workflows.
            </p>
          </div>
          <Accordion
            items={accordionItems}
            activeIndex={activeIndex}
            onToggle={toggleAccordion}
            className="mx-auto max-w-2xl"
          />
        </div>
      </section>
    );
  }

  return (
    <section id="features" className="py-24" aria-label="Features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
            Features
          </h2>
          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Everything you need to automate
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            A comprehensive suite of AI-powered tools designed to transform your data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 text-left transition-all duration-300 ease-in-out hover:border-neutral-700 hover:bg-neutral-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${
                activeIndex === index ? 'ring-1 ring-accent/50 border-accent/30' : ''
              } ${spanClasses[item.span] ?? 'col-span-1 row-span-1'}`}
              aria-pressed={activeIndex === index}
              aria-label={`${item.title} - ${item.description}`}
            >
              {/* Gradient accent */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 ${
                  activeIndex === index ? 'opacity-10' : 'group-hover:opacity-5'
                }`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradientMap[item.gradient] ?? 'from-indigo-500 to-blue-600'}`}
                >
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <h4 className="mb-2 font-mono text-sm font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <svg
                className={`absolute bottom-4 right-4 h-5 w-5 text-neutral-600 transition-all duration-200 ${
                  activeIndex === index ? 'rotate-45 text-accent' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

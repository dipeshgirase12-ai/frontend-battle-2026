'use client';

import { useEffect, useRef, useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  activeIndex: number | null;
  onToggle: (index: number) => void;
  className?: string;
}

export function Accordion({ items, activeIndex, onToggle, className = '' }: AccordionProps) {
  return (
    <div className={`w-full ${className}`} role="region" aria-label="Feature details">
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isOpen={activeIndex === index}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b border-neutral-800 transition-colors duration-200 ${
        isOpen ? 'bg-neutral-900/50' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span className="font-mono text-sm font-medium text-neutral-300">{item.title}</span>
        <svg
          className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        id={`accordion-content-${item.id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: contentHeight > 0 ? `${contentHeight}px` : '0px' }}
        role="region"
        hidden={!isOpen}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-sm leading-relaxed text-neutral-400">{item.content}</p>
        </div>
      </div>
    </div>
  );
}
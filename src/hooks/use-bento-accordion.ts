'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { BENTO_ITEMS } from '@/constants/bento';

const MOBILE_BREAKPOINT = 768;

export function useBentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? false : window.innerWidth < MOBILE_BREAKPOINT
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeIndexRef = useRef<number | null>(null);
  const previousLayoutRef = useRef<'mobile' | 'desktop' | null>(null);

  const checkMobile = useCallback(() => {
    const mobile = window.innerWidth < MOBILE_BREAKPOINT;
    const previousLayout = previousLayoutRef.current;
    const currentLayout = mobile ? 'mobile' : 'desktop';

    // Context Lock: Transfer active index on layout change
    if (previousLayout && previousLayout !== currentLayout && activeIndexRef.current !== null) {
      setIsTransitioning(true);
      // The index persists across layouts
      setTimeout(() => setIsTransitioning(false), 400);
    }

    previousLayoutRef.current = currentLayout;
    setIsMobile(mobile);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const toggleAccordion = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  // Sync ref for context lock
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  return {
    items: BENTO_ITEMS,
    activeIndex,
    isMobile,
    isTransitioning,
    toggleAccordion,
    setActiveIndex,
  };
}

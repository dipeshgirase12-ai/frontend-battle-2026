'use client';

import { useState, useCallback, useRef } from 'react';
import { Currency, BillingCycle, PricingTier } from '@/types';
import { calculatePrice, formatPrice, getBillingLabel } from '@/lib/pricing-utils';
import { PRICING_TIERS } from '@/constants/pricing';

export interface PricingState {
  currency: Currency;
  billing: BillingCycle;
}

export function usePricing() {
  const [state, setState] = useState<PricingState>({
    currency: 'USD',
    billing: 'monthly',
  });

  // Use refs to avoid re-renders - state isolation
  const currencyRef = useRef(state.currency);
  const billingRef = useRef(state.billing);

  const setCurrency = useCallback((currency: Currency) => {
    currencyRef.current = currency;
    setState((prev) => ({ ...prev, currency }));
  }, []);

  const setBilling = useCallback((billing: BillingCycle) => {
    billingRef.current = billing;
    setState((prev) => ({ ...prev, billing }));
  }, []);

  const getTierPrice = useCallback(
    (tier: PricingTier) => {
      return calculatePrice(tier, state.billing, state.currency);
    },
    [state.billing, state.currency]
  );

  const getFormattedPrice = useCallback(
    (tier: PricingTier) => {
      const { price } = calculatePrice(tier, state.billing, state.currency);
      return formatPrice(price, state.currency);
    },
    [state.billing, state.currency]
  );

  const getOriginalPrice = useCallback(
    (tier: PricingTier) => {
      const { originalPrice } = calculatePrice(tier, state.billing, state.currency);
      return originalPrice ? formatPrice(originalPrice, state.currency) : null;
    },
    [state.billing, state.currency]
  );

  return {
    ...state,
    tiers: PRICING_TIERS,
    setCurrency,
    setBilling,
    getTierPrice,
    getFormattedPrice,
    getOriginalPrice,
    getBillingLabel,
  };
}

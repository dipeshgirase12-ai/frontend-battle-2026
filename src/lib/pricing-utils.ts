import { Currency, BillingCycle, PricingTier, PricingMatrix } from '@/types';
import { CURRENCIES, ANNUAL_DISCOUNT, REGIONAL_TARIFFS } from '@/constants/pricing';

/**
 * Calculate the dynamic price based on tier, billing cycle, and currency.
 * Uses a multi-dimensional configuration matrix.
 * - baseRate: monthly USD base price
 * - annual discount: flat 20% off the monthly rate
 * - regional tariff: tax/vat adjustment per currency
 */
export function calculatePrice(
  tier: PricingTier,
  billing: BillingCycle,
  currency: Currency
): { price: number; originalPrice?: number } {
  const currencyConfig = CURRENCIES.find((c) => c.code === currency)!;
  const tariff = REGIONAL_TARIFFS[currency] ?? 0;

  // Calculate monthly base in target currency
  const monthlyInCurrency = tier.baseRate * currencyConfig.rate;

  if (billing === 'monthly') {
    // Monthly: base rate * currency rate * (1 + regional tariff)
    const price = monthlyInCurrency * (1 + tariff);
    return { price: roundPrice(price, currency) };
  }

  // Annual: 20% discount on monthly rate
  const annualDiscountedMonthly = tier.baseRate * (1 - ANNUAL_DISCOUNT);
  const annualInCurrency = annualDiscountedMonthly * currencyConfig.rate * (1 + tariff);

  return {
    price: roundPrice(annualInCurrency, currency),
    originalPrice: roundPrice(monthlyInCurrency * (1 + tariff), currency),
  };
}

function roundPrice(value: number, currency: Currency): number {
  // INR has no fractional for pricing; USD/EUR use 2 decimals
  if (currency === 'INR') {
    return Math.round(value);
  }
  return Math.round(value * 100) / 100;
}

/**
 * Format a price for display based on currency locale
 */
export function formatPrice(price: number, currency: Currency): string {
  const config = CURRENCIES.find((c) => c.code === currency)!;
  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: currency === 'INR' ? 0 : 2,
    maximumFractionDigits: currency === 'INR' ? 0 : 2,
  }).format(price);
}

/**
 * Get pricing matrix for all tiers, billing cycles, and currencies
 */
export function getPricingMatrix(
  tier: PricingTier,
  billing: BillingCycle,
  currency: Currency
): PricingMatrix {
  const { price, originalPrice } = calculatePrice(tier, billing, currency);
  return { tier, billing, currency, price, originalPrice };
}

/**
 * Get annual display label
 */
export function getBillingLabel(billing: BillingCycle): string {
  return billing === 'monthly' ? '/month' : '/month (billed annually)';
}
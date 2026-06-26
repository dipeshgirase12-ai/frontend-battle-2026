export interface PricingTier {
  id: string;
  name: string;
  description: string;
  baseRate: number; // Monthly base rate in USD
  features: string[];
  popular?: boolean;
  cta: string;
}

export type Currency = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';

export interface CurrencyConfig {
  code: Currency;
  symbol: string;
  rate: number; // Conversion rate from USD
  locale: string;
}

export interface PricingMatrix {
  tier: PricingTier;
  billing: BillingCycle;
  currency: Currency;
  price: number;
  originalPrice?: number;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  span: 'sm' | 'md' | 'lg' | 'xl';
}
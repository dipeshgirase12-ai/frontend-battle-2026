import { CurrencyConfig, PricingTier } from '@/types';

export const CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', rate: 1, locale: 'en-US' },
  { code: 'INR', symbol: '₹', rate: 83.5, locale: 'en-IN' },
  { code: 'EUR', symbol: '€', rate: 0.92, locale: 'de-DE' },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects getting started with AI automation.',
    baseRate: 29,
    features: [
      'Up to 1,000 API calls/month',
      'Basic AI automation workflows',
      'Email support within 48h',
      '1 team member',
      'Community access',
    ],
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Built for growing teams that need advanced AI capabilities and priority support.',
    baseRate: 79,
    popular: true,
    features: [
      'Up to 10,000 API calls/month',
      'Advanced AI automation workflows',
      'Priority email & chat support',
      '5 team members',
      'Custom integrations',
      'Analytics dashboard',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale AI automation with dedicated infrastructure and white-glove support.',
    baseRate: 249,
    features: [
      'Unlimited API calls',
      'Custom AI model training',
      'Dedicated account manager',
      'Unlimited team members',
      'SSO & advanced security',
      'SLA guarantee (99.99%)',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
  },
];

export const ANNUAL_DISCOUNT = 0.2; // 20% annual discount

export const REGIONAL_TARIFFS: Record<string, number> = {
  INR: 0.18, // 18% GST for India
  USD: 0.0,
  EUR: 0.19, // 19% VAT for EU
};
export interface PricingTier {
  period: string;
  price: string;
  detail?: string;
}

export interface Facility {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
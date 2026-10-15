export type ProductCategory = 'home' | 'commercial';

export interface ProductSpecification {
  label: string;
  value: string;
  detail?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  modelIdentifier: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  growingCapacity: number; // e.g. 8, 12, 72, 80
  growingCapacityUnit: string; // "slots"
  dimensions: {
    widthCm?: number;
    depthCm?: number;
    heightCm?: number;
    formatted: string;
  };
  waterCapacity: string; // e.g. "4.0 Litres", "6.5 Litres"
  waterAutonomy: string; // e.g. "2 to 3 weeks", "7 to 10 days"
  powerConsumption: string; // e.g. "15W (~2.5 - 3.5 kWh/month)"
  lighting: {
    ledCount?: number;
    type: string;
    modes?: string[];
    timerCycles?: string[];
  };
  growingMethod: string; // e.g. "Recirculating Hydroponic w/ Silent Pump"
  controlMethod: string; // e.g. "Digital Clock Display & Integrated Timer"
  supportedPlants: string[];
  enclosureMaterial: string;
  features: ProductFeature[];
  packageContents: string[];
  maintenanceInterval: string;
  warranty: string;
  priceFormatted?: string;
  availability: 'Launch Batch Pre-Order' | 'Commercial Consultation';
  intendedEnvironment: string;
  badge?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface PlantCategory {
  id: string;
  name: string;
  description: string;
}

export interface Plant {
  id: string;
  name: string;
  category: 'herbs' | 'greens' | 'fruiting' | 'edible-flowers' | 'microgreens';
  scientificName?: string;
  harvestTimeDays: string; // e.g. "21 - 30 days"
  difficulty: 'Beginner' | 'Easy' | 'Moderate';
  compatibleSystemSlugs: string[];
  description: string;
  culinaryUse: string;
  lightPreference: string;
  waterNeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'systems' | 'maintenance' | 'commercial' | 'delivery';
}

export interface QuizAnswer {
  audience?: 'home' | 'commercial' | 'family' | 'hospitality' | 'school';
  location?: 'countertop' | 'dining' | 'commercial-kitchen' | 'living-wall';
  priority?: 'compact' | 'yield' | 'fruiting' | 'app-control';
  space?: 'small' | 'medium' | 'large';
}

export interface RecommendationResult {
  product: Product;
  matchScore: number;
  reason: string;
  secondaryProduct?: Product;
}

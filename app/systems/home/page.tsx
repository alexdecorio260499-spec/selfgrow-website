import React from 'react';
import type { Metadata } from 'next';
import { Droplets, Zap, ShieldCheck, ChefHat } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Home & Countertop Hydroponic Planters | SelfGrow',
  description:
    'Compact, silent indoor planters for kitchen countertops. Discover the 8-Holes and 12-Holes smart hydroponic planters with automated LED lighting and low power consumption.',
};

export default function HomeSystemsPage() {
  const homeProducts = PRODUCTS.filter((p) => p.category === 'home');

  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sprout/40 border border-sage/30 rounded-full text-xs font-semibold text-forest uppercase tracking-wider">
              <ChefHat className="w-3.5 h-3.5" /> For Kitchens & Everyday Cooking
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Countertop Kitchen Gardens
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Designed to sit naturally on your kitchen counter, island, or sideboard. Harvest
              fragrant basil, fresh mint, coriander, and crisp baby lettuce right at the moment of
              cooking.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-charcoal">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Ultra-Low Power</h4>
                <p className="text-xs text-charcoal-muted">
                  Just 15W power draw — roughly 2.5 to 3.5 kWh per month.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0">
                <Droplets className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">2–3 Weeks Autonomy</h4>
                <p className="text-xs text-charcoal-muted">
                  4L to 6.5L self-contained tanks with clear visual water level gauges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">100% Soil-Free</h4>
                <p className="text-xs text-charcoal-muted">
                  Zero garden pests, mold, or weed seeds inside your food prep space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="bg-linen-light border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-3xl text-charcoal">
            Need higher capacity or commercial vertical farming?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto">
            Discover our multi-tier vertical cabinets offering 72 to 80 growing slots for
            restaurants, hotels, and serious growers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/systems/commercial" variant="primary">
              View Commercial Cabinets
            </Button>
            <Button href="/systems#compare" variant="outline">
              Compare All Models
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

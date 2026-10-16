import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Indoor Hydroponic Growing Systems Collection',
  description:
    'Discover SelfGrow countertop planters and commercial growing cabinets. Explore authentic specifications, water autonomy, and full-spectrum LED lighting across all 4 models.',
};

export default function SystemsPage() {
  const homeProducts = PRODUCTS.filter((p) => p.category === 'home');
  const commercialProducts = PRODUCTS.filter((p) => p.category === 'commercial');

  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Page Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sage font-bold">
              <span>Catalog & Specifications</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Indoor Hydroponic Systems
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Explore our range of soil-free, automated growing systems. From compact kitchen
              countertop units providing daily culinary herbs to multi-tier commercial cabinets for
              restaurants and hospitality.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button href="#home" variant="forest-outline" size="sm">
                Countertop Planters (8 & 12 Holes)
              </Button>
              <Button href="#commercial" variant="forest-outline" size="sm">
                Commercial Cabinets (72 & 80 Holes)
              </Button>
              <Button href="#compare" variant="ghost" size="sm">
                Compare Specifications Matrix ↓
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Catalog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1: Home Systems */}
        <section id="home" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 gap-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-sage font-semibold">
                Category 01
              </span>
              <h2 className="font-serif text-3xl text-charcoal">
                Home & Kitchen Countertop Planters
              </h2>
            </div>
            <Link
              href="/systems/home"
              className="text-xs font-semibold text-forest hover:underline inline-flex items-center gap-1"
            >
              Learn about countertop growing →
            </Link>
          </div>

          <p className="text-sm text-charcoal-muted max-w-2xl">
            Sleek, whisper-quiet hydroponic planters engineered to bring vibrant herbs, salad
            greens, and edible garnishes right onto your kitchen counter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {homeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Section 2: Commercial Systems */}
        <section id="commercial" className="scroll-mt-24 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border pb-4 gap-2">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-sage font-semibold">
                Category 02
              </span>
              <h2 className="font-serif text-3xl text-charcoal">
                Commercial & Architectural Cabinets
              </h2>
            </div>
            <Link
              href="/business"
              className="text-xs font-semibold text-forest hover:underline inline-flex items-center gap-1"
            >
              Explore commercial hospitality solutions →
            </Link>
          </div>

          <p className="text-sm text-charcoal-muted max-w-2xl">
            High-yield multi-tier vertical systems engineered for restaurants, luxury resorts,
            educational institutions, and corporate lobbies across Mauritius.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {commercialProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Comparison Callout */}
        <section className="bg-white border border-border rounded-sm p-8 sm:p-12 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Model Evaluation
          </span>
          <h2 className="font-serif text-3xl text-charcoal">
            Compare Specifications Side-by-Side
          </h2>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
            Review growing capacities, footprints, water tank autonomy, and power consumption
            across all four models in our interactive matrix.
          </p>
          <div className="pt-2">
            <Button href="/compare" variant="forest-outline" size="md">
              Open Comparison Matrix →
            </Button>
          </div>
        </section>
      </div>

      {/* Catalog CTA */}
      <section className="bg-linen-light border-t border-border py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-3xl text-charcoal">
            Ready to secure a system from our inaugural Mauritius batch?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto">
            Reserve today with priority delivery allocation and direct local support from our
            Tamarin team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact?type=pre-order" size="lg" variant="primary">
              Reserve First Batch System
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Speak With A Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

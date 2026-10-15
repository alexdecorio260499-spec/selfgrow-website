import React from 'react';
import type { Metadata } from 'next';
import PlantGuideGrid from '@/components/plants/PlantGuideGrid';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'What Can You Grow — Hydroponic Botanical Guide',
  description:
    'Explore 11+ culinary herbs, crisp salad greens, edible flowers, and fruiting crops compatible with SelfGrow indoor hydroponic systems in Mauritius.',
};

export default function WhatCanYouGrowPage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Hero Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Botanical Catalog & Culinary Pairing
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              What can you grow with SelfGrow?
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Explore lab-tested herbs, crisp lettuces, gourmet garnishes, and compact fruiting
              varieties. Filter by category, growth speed, or culinary use to plan your kitchen
              harvests.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Botanical Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PlantGuideGrid />
      </section>

      {/* Pro Tips Section */}
      <section className="bg-white border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Horticultural Wisdom
            </span>
            <h2 className="font-serif text-3xl text-charcoal">
              Tips for Continuous Kitchen Harvesting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="p-6 bg-linen-light border border-border rounded-sm space-y-2">
              <span className="font-mono text-xs font-semibold text-sage">TIP 01</span>
              <h3 className="font-serif text-lg text-charcoal font-semibold">
                Cut-and-Come-Again Harvesting
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-xs">
                For herbs like sweet basil and spearmint, prune just above a node (where two leaves
                branch out). The plant will respond by splitting into two new vigorous branches,
                doubling your harvest yield over time.
              </p>
            </div>

            <div className="p-6 bg-linen-light border border-border rounded-sm space-y-2">
              <span className="font-mono text-xs font-semibold text-sage">TIP 02</span>
              <h3 className="font-serif text-lg text-charcoal font-semibold">
                Staggered Planting Cycles
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-xs">
                Plant 3 to 4 pods every week rather than seeding all 12 at once. This ensures a
                continuous rotation of mature, crisp greens ready for daily cooking rather than a
                single overwhelming harvest.
              </p>
            </div>

            <div className="p-6 bg-linen-light border border-border rounded-sm space-y-2">
              <span className="font-mono text-xs font-semibold text-sage">TIP 03</span>
              <h3 className="font-serif text-lg text-charcoal font-semibold">
                Pruning Roots in High Volume
              </h3>
              <p className="text-charcoal-muted leading-relaxed text-xs">
                In multi-tier commercial cabinets or countertop planters after 2 months of vigorous
                growth, gently trim excess tangled root tips to maintain unrestricted pump flow and
                optimal aeration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-linen-light py-16 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-3xl text-charcoal">
            Find the right system for your favourite greens
          </h3>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
            Whether you want a 12-pod culinary herb bar or an 80-pod restaurant installation, we
            have an engineered hydroponic system ready for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/systems" variant="primary">
              View All Systems
            </Button>
            <Button href="/contact?type=pre-order" variant="outline">
              Reserve First Batch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

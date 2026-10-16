import React from 'react';
import type { Metadata } from 'next';
import ProductComparisonTable from '@/components/comparison/ProductComparisonTable';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Compare Indoor Hydroponic Systems | SelfGrow',
  description:
    'Compare growing capacity, water reservoir autonomy, power consumption, and dimensions across all four SelfGrow indoor hydroponic models.',
};

export default function ComparePage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Technical Comparison
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Compare All Four Systems
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Evaluate growing capacities, footprints, water tank autonomy, and power consumption
              side by side to select the ideal model for your space.
            </p>
          </div>
        </div>
      </section>

      {/* Main Table Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductComparisonTable />

        {/* Need Help Selecting Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-border rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl text-charcoal font-semibold">
              Unsure which model fits your everyday routine?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Answer 4 simple lifestyle questions to receive an instant verified recommendation.
            </p>
          </div>
          <Button href="/find-your-system" variant="secondary" size="md">
            Launch Product Selector
          </Button>
        </div>
      </section>
    </div>
  );
}

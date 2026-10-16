import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ProductSelectorQuiz from '@/components/selector/ProductSelectorQuiz';

export const metadata: Metadata = {
  title: 'Find Your System — Interactive Product Selector | SelfGrow',
  description:
    'Answer 4 simple lifestyle questions to receive an instant, tailored recommendation for your indoor hydroponic kitchen garden or commercial space.',
};

export default function FindYourSystemPage() {
  return (
    <div className="w-full bg-linen min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/systems"
            className="text-xs font-semibold text-charcoal-muted hover:text-forest inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to systems catalog
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sprout/40 border border-sage/30 rounded-full text-xs font-semibold text-forest uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> System Recommendation Tool
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Find Your Ideal System
          </h1>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            Answer 4 quick questions about your space, culinary goals, and routine to receive an
            instant match from our collection.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white border border-border rounded-sm p-6 sm:p-10 shadow-xs">
          <ProductSelectorQuiz />
        </div>
      </div>
    </div>
  );
}

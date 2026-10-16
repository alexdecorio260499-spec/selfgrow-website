'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function ProductComparisonTable() {
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);
  const [showSecondarySpecs, setShowSecondarySpecs] = useState(false);

  // Key differentiators for quick scannability
  const keyDifferentiators: Record<string, string> = {
    '12-holes-planter': 'Integrated clock timer & high pod density for kitchen counters',
    '8-holes-planter': 'Wider pod spacing with dual Veg & Flower/Fruit light spectrums',
    '72-holes-cabinet': '5-tier modular vertical layout for high-yield cooking & schools',
    '80-holes-cabinet': 'Sliding acrylic enclosure, per-tier cooling & WiFi smartphone app',
  };

  // Primary Scannable Attributes
  const primaryRows = [
    {
      name: 'Growing Capacity',
      extract: (p: typeof PRODUCTS[0]) => `${p.growingCapacity} growth pods`,
      highlight: true,
    },
    {
      name: 'Footprint & Dimensions',
      extract: (p: typeof PRODUCTS[0]) => p.dimensions.formatted,
    },
    {
      name: 'Intended Environment',
      extract: (p: typeof PRODUCTS[0]) => p.intendedEnvironment,
    },
    {
      name: 'Water Tank & Autonomy',
      extract: (p: typeof PRODUCTS[0]) => `${p.waterCapacity} (${p.waterAutonomy})`,
      highlight: true,
    },
    {
      name: 'Power Consumption',
      extract: (p: typeof PRODUCTS[0]) => p.powerConsumption,
    },
    {
      name: 'Key Differentiator',
      extract: (p: typeof PRODUCTS[0]) => keyDifferentiators[p.slug] || p.tagline,
      highlight: true,
    },
  ];

  // Secondary Technical Details (Expandable)
  const secondaryRows = [
    {
      name: 'LED Lighting Array',
      extract: (p: typeof PRODUCTS[0]) =>
        p.lighting.ledCount
          ? `${p.lighting.ledCount} High-PAR LEDs`
          : 'Multi-Tier Linear LED Bars',
    },
    {
      name: 'Circulation Technology',
      extract: (p: typeof PRODUCTS[0]) => p.growingMethod,
    },
    {
      name: 'Control Interface',
      extract: (p: typeof PRODUCTS[0]) => p.controlMethod,
    },
    {
      name: 'Warranty Coverage',
      extract: (p: typeof PRODUCTS[0]) => p.warranty,
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile Selector (< 1024px) */}
      <div className="lg:hidden space-y-4">
        <div className="text-xs uppercase tracking-wider text-charcoal-muted font-semibold">
          Select system to inspect:
        </div>
        <div className="grid grid-cols-2 gap-2">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              type="button"
              onClick={() => setSelectedMobileIndex(idx)}
              className={cn(
                'p-3 text-left border rounded-sm transition-all focus-visible:outline-forest flex flex-col justify-between',
                selectedMobileIndex === idx
                  ? 'bg-forest text-white border-forest shadow-xs'
                  : 'bg-white text-charcoal border-border hover:border-charcoal/40'
              )}
            >
              <span className="text-[10px] uppercase tracking-wider opacity-80">
                {prod.categoryLabel}
              </span>
              <span className="font-serif font-bold text-sm mt-0.5">{prod.name}</span>
              <span className="text-xs opacity-90 mt-1">{prod.growingCapacity} slots</span>
            </button>
          ))}
        </div>

        {/* Selected Mobile System Card */}
        {(() => {
          const p = PRODUCTS[selectedMobileIndex];
          return (
            <div className="bg-white border border-border rounded-sm p-6 space-y-6 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 bg-linen-light p-2 border border-border rounded-xs shrink-0">
                  <Image
                    src={p.mainImage}
                    alt={p.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <span className="text-xs text-sage uppercase tracking-wider font-semibold">
                    {p.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal font-bold">{p.name}</h3>
                  <div className="text-xs text-charcoal-muted mt-0.5 font-mono">
                    {p.modelIdentifier}
                  </div>
                </div>
              </div>

              {/* Primary specs list */}
              <div className="divide-y divide-border/60 border-y border-border/60 text-xs">
                {primaryRows.map((row) => (
                  <div key={row.name} className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-charcoal-muted font-medium w-1/3">{row.name}</span>
                    <span
                      className={cn(
                        'text-right flex-1 text-charcoal',
                        row.highlight && 'font-semibold text-forest'
                      )}
                    >
                      {row.extract(p)}
                    </span>
                  </div>
                ))}

                {showSecondarySpecs &&
                  secondaryRows.map((row) => (
                    <div key={row.name} className="py-2.5 flex items-start justify-between gap-4 bg-linen-light/30 px-1">
                      <span className="text-charcoal-muted font-medium w-1/3">{row.name}</span>
                      <span className="text-right flex-1 text-charcoal">
                        {row.extract(p)}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setShowSecondarySpecs(!showSecondarySpecs)}
                  className="text-xs font-semibold text-charcoal-muted hover:text-forest inline-flex items-center justify-center gap-1 py-1"
                >
                  {showSecondarySpecs ? 'Hide secondary specifications' : 'View more technical metrics'}
                  <ChevronDown
                    className={cn('w-3.5 h-3.5 transition-transform', showSecondarySpecs && 'rotate-180')}
                  />
                </button>
                <Button href={`/systems/${p.slug}`} size="sm" variant="forest-outline" className="w-full">
                  Explore {p.name} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Desktop Scannable Matrix (>= 1024px) */}
      <div className="hidden lg:block bg-white border border-border rounded-sm shadow-xs overflow-hidden">
        <table className="w-full border-collapse text-left">
          {/* Product Header Row */}
          <thead>
            <tr className="border-b border-border bg-linen-light/60">
              <th className="p-6 w-1/5 text-xs uppercase tracking-wider text-charcoal-muted font-semibold align-bottom">
                Model Attributes
              </th>
              {PRODUCTS.map((product) => (
                <th key={product.id} className="p-6 w-1/5 border-l border-border align-top">
                  <div className="space-y-3">
                    <div className="relative aspect-4/3 w-full bg-white border border-border/80 rounded-xs overflow-hidden p-2">
                      <Image
                        src={product.mainImage}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-sage font-semibold">
                        {product.modelIdentifier}
                      </span>
                      <h4 className="font-serif text-lg text-charcoal font-bold mt-0.5">
                        {product.name}
                      </h4>
                    </div>
                    <Link
                      href={`/systems/${product.slug}`}
                      className="text-xs font-semibold text-forest uppercase tracking-wider inline-flex items-center gap-1 hover:underline"
                    >
                      View system <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Primary Rows */}
          <tbody className="divide-y divide-border text-xs">
            {primaryRows.map((row) => (
              <tr key={row.name} className="hover:bg-linen-light/40 transition-colors">
                <td className="p-4 px-6 font-semibold text-charcoal bg-linen-light/30">
                  {row.name}
                </td>
                {PRODUCTS.map((product) => (
                  <td
                    key={product.id}
                    className={cn(
                      'p-4 px-6 border-l border-border text-charcoal-muted leading-relaxed',
                      row.highlight && 'font-medium text-charcoal'
                    )}
                  >
                    {row.extract(product)}
                  </td>
                ))}
              </tr>
            ))}

            {/* Expandable Secondary Rows */}
            {showSecondarySpecs &&
              secondaryRows.map((row) => (
                <tr key={row.name} className="bg-linen-light/20 hover:bg-linen-light/50 transition-colors">
                  <td className="p-4 px-6 font-medium text-charcoal-muted italic">
                    {row.name}
                  </td>
                  {PRODUCTS.map((product) => (
                    <td
                      key={product.id}
                      className="p-4 px-6 border-l border-border text-charcoal-muted leading-relaxed"
                    >
                      {row.extract(product)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>

        {/* Toggle secondary specifications footer bar */}
        <div className="p-4 bg-linen-light/80 border-t border-border flex items-center justify-between text-xs">
          <span className="text-charcoal-muted">
            {showSecondarySpecs ? 'Showing full technical parameters' : 'Showing primary comparison metrics'}
          </span>
          <button
            type="button"
            onClick={() => setShowSecondarySpecs(!showSecondarySpecs)}
            className="font-semibold text-forest hover:underline inline-flex items-center gap-1.5 focus-visible:outline-forest"
          >
            <span>{showSecondarySpecs ? 'Hide secondary metrics' : 'Show full engineering & electrical metrics'}</span>
            <ChevronDown
              className={cn('w-4 h-4 transition-transform', showSecondarySpecs && 'rotate-180')}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

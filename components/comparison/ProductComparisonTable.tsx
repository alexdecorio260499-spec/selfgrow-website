'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function ProductComparisonTable() {
  const [selectedMobileIndex, setSelectedMobileIndex] = useState(0);

  const comparisonAttributes = [
    {
      category: 'Capacity & Scale',
      rows: [
        {
          name: 'Growing Capacity',
          extract: (p: typeof PRODUCTS[0]) => `${p.growingCapacity} slots`,
          highlight: true,
        },
        {
          name: 'Target Environment',
          extract: (p: typeof PRODUCTS[0]) => p.intendedEnvironment,
        },
        {
          name: 'Footprint & Dimensions',
          extract: (p: typeof PRODUCTS[0]) => p.dimensions.formatted,
        },
      ],
    },
    {
      category: 'Water & Nutrient Autonomy',
      rows: [
        {
          name: 'Water Tank Reservoir',
          extract: (p: typeof PRODUCTS[0]) => p.waterCapacity,
          highlight: true,
        },
        {
          name: 'Autonomous Refill Interval',
          extract: (p: typeof PRODUCTS[0]) => p.waterAutonomy,
        },
        {
          name: 'Circulation Technology',
          extract: (p: typeof PRODUCTS[0]) => p.growingMethod,
        },
      ],
    },
    {
      category: 'Lighting & Energy',
      rows: [
        {
          name: 'LED Grow Array',
          extract: (p: typeof PRODUCTS[0]) =>
            p.lighting.ledCount
              ? `${p.lighting.ledCount} High-PAR LEDs`
              : 'Multi-Tier Linear LED Bars',
        },
        {
          name: 'Power Consumption',
          extract: (p: typeof PRODUCTS[0]) => p.powerConsumption,
        },
        {
          name: 'Lighting Controls',
          extract: (p: typeof PRODUCTS[0]) =>
            p.lighting.timerCycles ? p.lighting.timerCycles.join(', ') : 'Automated Cycle',
        },
      ],
    },
    {
      category: 'Intelligence & Features',
      rows: [
        {
          name: 'Control Interface',
          extract: (p: typeof PRODUCTS[0]) => p.controlMethod,
          highlight: true,
        },
        {
          name: 'Enclosure Material',
          extract: (p: typeof PRODUCTS[0]) => p.enclosureMaterial,
        },
        {
          name: 'Warranty & Support',
          extract: (p: typeof PRODUCTS[0]) => p.warranty,
        },
        {
          name: 'Availability',
          extract: (p: typeof PRODUCTS[0]) => p.availability,
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Mobile Model Selector Tabs (< 1024px) */}
      <div className="lg:hidden mb-6">
        <div className="text-xs uppercase tracking-wider text-charcoal-muted font-semibold mb-2">
          Select system to view details:
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
                  ? 'bg-forest text-white border-forest shadow-sm'
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

        {/* Mobile Detail Card for Active Selected System */}
        <div className="mt-4 bg-white border border-border rounded-sm p-6 shadow-xs">
          {(() => {
            const p = PRODUCTS[selectedMobileIndex];
            return (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 bg-linen-light p-2 border border-border rounded flex-shrink-0">
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
                    <div className="text-xs text-charcoal-muted mt-1">{p.modelIdentifier}</div>
                  </div>
                </div>

                <div className="divide-y divide-border/60 border-y border-border/60">
                  {comparisonAttributes.flatMap((cat) => cat.rows).map((row) => (
                    <div key={row.name} className="py-2.5 flex items-start justify-between text-xs gap-4">
                      <span className="font-medium text-charcoal-muted w-1/3 flex-shrink-0">
                        {row.name}
                      </span>
                      <span className={cn('text-right w-2/3', row.highlight ? 'font-semibold text-forest' : 'text-charcoal')}>
                        {row.extract(p)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <Button href={`/systems/${p.slug}`} variant="primary" className="w-full">
                    View Complete Specs & Details
                  </Button>
                  <Button href={`/contact?product=${p.slug}`} variant="outline" className="w-full">
                    Pre-Order This System
                  </Button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Desktop Full Table View (>= 1024px) */}
      <div className="hidden lg:block overflow-x-auto border border-border rounded-sm bg-white shadow-xs">
        <table className="w-full border-collapse text-left">
          {/* Table Header: 4 Products */}
          <thead>
            <tr className="border-b border-border bg-linen-light/60">
              <th className="p-6 w-1/5 border-r border-border align-bottom">
                <div className="text-xs uppercase tracking-wider text-sage font-bold">
                  System Comparison
                </div>
                <h3 className="font-serif text-2xl text-charcoal mt-1">4 Verified Models</h3>
                <p className="text-xs text-charcoal-muted mt-1">
                  From compact countertop planters to multi-tier commercial cabinets.
                </p>
              </th>
              {PRODUCTS.map((p) => (
                <th key={p.id} className="p-6 w-1/5 border-r border-border last:border-r-0 align-top">
                  <div className="flex flex-col h-full justify-between space-y-4">
                    <div>
                      {p.badge && (
                        <div className="mb-2">
                          <Badge variant="sprout" size="sm">
                            {p.badge}
                          </Badge>
                        </div>
                      )}
                      <div className="relative aspect-square w-full bg-white border border-border/80 rounded p-4 mb-3">
                        <Image
                          src={p.mainImage}
                          alt={p.name}
                          fill
                          sizes="200px"
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="text-xs uppercase tracking-wider text-sage font-semibold">
                        {p.categoryLabel}
                      </div>
                      <h4 className="font-serif text-xl text-charcoal font-bold mt-0.5">
                        {p.name}
                      </h4>
                      <div className="text-xs font-mono text-charcoal-muted mt-0.5">
                        {p.modelIdentifier}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Button href={`/systems/${p.slug}`} size="sm" variant="forest-outline" className="w-full">
                        View System
                      </Button>
                      <Button href={`/contact?product=${p.slug}`} size="sm" variant="primary" className="w-full">
                        Reserve Now
                      </Button>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body Groups */}
          <tbody className="divide-y divide-border">
            {comparisonAttributes.map((group) => (
              <React.Fragment key={group.category}>
                <tr className="bg-linen-light/80 border-t border-b border-border">
                  <th
                    colSpan={5}
                    className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-forest"
                  >
                    {group.category}
                  </th>
                </tr>
                {group.rows.map((row, rIdx) => (
                  <tr
                    key={row.name}
                    className={cn(
                      'transition-colors hover:bg-sprout/10',
                      rIdx % 2 === 0 ? 'bg-white' : 'bg-linen-light/20'
                    )}
                  >
                    <td className="p-4 px-6 text-xs font-medium text-charcoal-muted border-r border-border">
                      {row.name}
                    </td>
                    {PRODUCTS.map((prod) => (
                      <td
                        key={prod.id}
                        className={cn(
                          'p-4 px-6 text-xs border-r border-border last:border-r-0 align-top',
                          row.highlight ? 'font-semibold text-forest' : 'text-charcoal'
                        )}
                      >
                        {row.extract(prod)}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

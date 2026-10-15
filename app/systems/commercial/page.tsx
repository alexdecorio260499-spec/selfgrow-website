import React from 'react';
import type { Metadata } from 'next';
import { Building2, ShieldCheck, Cpu, Fan } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Commercial & Hospitality Hydroponic Cabinets | SelfGrow Mauritius',
  description:
    'Multi-tier architectural hydroponic cabinets engineered for restaurants, luxury resorts, and corporate dining in Mauritius. Discover the 72-Holes Cabinet and 80-Holes AM4-T.',
};

export default function CommercialSystemsPage() {
  const commercialProducts = PRODUCTS.filter((p) => p.category === 'commercial');

  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest text-sprout rounded-full text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> Commercial & Hospitality
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Architectural Living Grow Cabinets
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Designed for luxury resort restaurants, executive lounges, cocktail bars, and schools
              across Mauritius. Combine high-density daily harvest output with an awe-inspiring
              living dining room centerpiece.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Features Strip */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-charcoal">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest text-sprout flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Acrylic Enclosures</h4>
                <p className="text-xs text-charcoal-muted">
                  Sliding acrylic doors protect crops from kitchen grease and airborne dust.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest text-sprout flex items-center justify-center shrink-0">
                <Fan className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">Per-Tier Cross Ventilation</h4>
                <p className="text-xs text-charcoal-muted">
                  Dedicated silent fans maintain constant micro-climate air movement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-forest text-sprout flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-charcoal">App & Sensor Telemetry</h4>
                <p className="text-xs text-charcoal-muted">
                  WiFi mobile app control (AM4-T) for light cycles and irrigation monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Commercial Consultation CTA */}
      <section className="bg-forest text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-white">
            Schedule an on-site consultation in Mauritius
          </h3>
          <p className="text-sm text-white/80 max-w-xl mx-auto">
            Our Tamarin-based technical team provides floorplan space assessment, crop yield
            planning, electrical verification, and staff training for hotels and restaurants.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/business" variant="secondary" size="lg">
              Hospitality Solutions & Consultation
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Contact Our Commercial Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

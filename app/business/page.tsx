import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Building2,
  ChefHat,
  Wine,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
} from 'lucide-react';
import CommercialForm from '@/components/forms/CommercialForm';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Commercial Indoor Growing Solutions for Restaurants & Hotels | SelfGrow Mauritius',
  description:
    'Turn living herbs and greens into signature dining experiences. Discover commercial vertical hydroponics for Mauritian resorts, fine dining, cocktail lounges, and schools.',
};

export default function BusinessPage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Hero Header */}
      <section className="bg-forest text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sprout text-xs font-mono tracking-wider">
              <Building2 className="w-3.5 h-3.5" /> B2B & HOSPITALITY SOLUTIONS
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Living harvest displays for world-class gastronomy.
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Transform your dining room, cocktail bar, or kitchen with architectural hydroponic
              cabinets. Harvest living basil, delicate microgreens, and rare edible blossoms directly
              at table-side, elevating guest perception while eliminating refrigeration spoilage.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="#consultation" variant="secondary" size="lg">
                Book Commercial Consultation
              </Button>
              <Button
                href="/systems/commercial"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Inspect Commercial Models
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Key Value Propositions for Hospitality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border p-6 rounded-sm shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-charcoal">Visual Guest Centerpiece</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Modern diners value sustainability, provenance, and freshness. An architectural 4-tier
              growing cabinet in your dining room or open kitchen creates an unforgettable visual
              talking point.
            </p>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-charcoal">Zero Refrigeration Loss</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              In commercial kitchens, up to 40% of delicate plastic-packaged herbs turn black and
              slimy in walk-in chillers before being used. Hydroponic plants stay alive in water until
              the second they are plated.
            </p>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl text-charcoal">Pest & Dust Sealed</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              The SelfGrow AM4-T features sliding acrylic door panels and independent tier ventilation
              fans, sealing delicate crops against kitchen steam, airborne cooking oils, and dining
              room dust.
            </p>
          </div>
        </div>
      </section>

      {/* Target Sectors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Tailored Applications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Engineered for Hospitality, Education & Workspaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-border p-6 rounded-sm space-y-3">
            <ChefHat className="w-8 h-8 text-forest" />
            <h4 className="font-serif text-lg text-charcoal">Fine Dining & Resorts</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Deliver unmatched plate presentation with micro-coriander, purple shiso, edible
              borage blossoms, and sweet basil harvested right at the pass.
            </p>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm space-y-3">
            <Wine className="w-8 h-8 text-forest" />
            <h4 className="font-serif text-lg text-charcoal">Craft Cocktail Lounges</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Transform bar menus with intense, fragrant spearmint, rosemary, lemon balm, and
              decorative floral garnishes clipped in front of guests.
            </p>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm space-y-3">
            <GraduationCap className="w-8 h-8 text-forest" />
            <h4 className="font-serif text-lg text-charcoal">Schools & Universities</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Hands-on botanical education, STEM curriculum, and sustainable agriculture labs
              without needing outdoor land, pesticides, or weekend tilling.
            </p>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm space-y-3">
            <Building2 className="w-8 h-8 text-forest" />
            <h4 className="font-serif text-lg text-charcoal">Corporate Headquarters</h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Living biophilic design in executive boardrooms and cafeteria wellness spaces,
              showcasing company environmental commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Architecture: AM4-T Spotlight */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                Commercial Flagship Hardware
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                SelfGrow AM4-T 80-Holes Smart Cabinet
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Measuring 85 × 36 × 180 cm with a sleek aerospace-grade aluminium frame and sliding
                acrylic doors, the AM4-T is engineered specifically for commercial hospitality
                environments.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-charcoal block">
                      Independent Layer Cooling Fans:
                    </strong>
                    <span className="text-charcoal-muted">
                      Each growing tier has dedicated cross-ventilation to prevent stagnant moisture
                      and fortify stems.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-charcoal block">
                      Dual High-Efficiency Submersible Pumps:
                    </strong>
                    <span className="text-charcoal-muted">
                      Redundant circulation ensuring uninterrupted root oxygenation and nutrient
                      delivery across all 4 tiers.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <strong className="text-charcoal block">
                      iOS / Android WiFi Mobile Control:
                    </strong>
                    <span className="text-charcoal-muted">
                      Monitor temperature, adjust fan velocities, and automate lighting photoperiods
                      from any smartphone.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/systems/80-holes-cabinet" variant="forest-outline" size="sm">
                  View Full AM4-T Specifications →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 bg-linen-light p-6 border border-border rounded-sm shadow-sm overflow-hidden">
                <Image
                  src="/images/products/80-holes-front.jpg"
                  alt="SelfGrow AM4-T Commercial Hydroponic Cabinet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Consultation Form Section */}
      <section id="consultation" className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Tailored Consultation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Book an On-Site Assessment in Mauritius
          </h2>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
            Our Tamarin engineering team evaluates space requirements, power outlets, crop yield
            planning, and custom installation logistics.
          </p>
        </div>

        <CommercialForm />
      </section>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Droplets, Sun, Sparkles, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO */}
      <section className="relative bg-linen border-b border-border pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Messaging & 2 Focused CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12]">
                Freshness,{' '}
                <span className="italic font-normal text-forest">grown differently.</span>
              </h1>

              <p className="text-lg text-charcoal-muted max-w-xl leading-relaxed">
                Intelligent indoor hydroponic systems for modern kitchens and hospitality. Harvest
                clean, pesticide-free herbs and greens year-round in Mauritius.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="/systems" size="lg" variant="primary">
                  Explore the systems <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/how-it-works" size="lg" variant="outline">
                  How it works
                </Button>
              </div>
            </div>

            {/* Right Column: Hero Product Visual */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-square sm:aspect-4/3 bg-white rounded-sm border border-border p-6 shadow-sm overflow-hidden group">
                <div className="relative w-full h-full bg-linen-light rounded-xs overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/products/12-holes-main.jpg"
                    alt="SelfGrow 12-Holes Planter with vibrant herbs"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4 group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT COLLECTION */}
      <section className="py-20 lg:py-28 bg-linen-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                The Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Four systems. Every kitchen size.
              </h2>
              <p className="text-sm text-charcoal-muted">
                From compact countertop gardens to high-yield commercial cabinets.
              </p>
            </div>
            <Link
              href="/compare"
              className="text-xs font-semibold text-forest uppercase tracking-wider inline-flex items-center gap-1 hover:underline"
            >
              Compare all models side-by-side →
            </Link>
          </div>

          {/* 4 Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 lg:py-28 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Simple Growth
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Plant. Grow. Harvest.
            </h2>
            <p className="text-sm text-charcoal-muted">
              Three effortless steps from seed to plate without potting soil or garden dirt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 bg-linen-light border border-border rounded-sm space-y-3">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                01 / PLANT
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Drop In Pods</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Place seeds into organic peat sponges and insert them into the pods — zero soil,
                zero weeds, zero mess.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-linen-light border border-border rounded-sm space-y-3">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                02 / GROW
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Autonomous Care</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Automated LED lighting cycles and whisper-quiet water circulation nourish roots with
                essential minerals.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-linen-light border border-border rounded-sm space-y-3">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                03 / HARVEST
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Clip When Cooking</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Harvest vibrant herbs and crisp salad greens directly at the moment of plating,
                with continuous regrowth.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="text-xs font-semibold text-forest uppercase tracking-wider inline-flex items-center gap-1 hover:underline"
            >
              Learn more about our hydroponic method <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="py-20 lg:py-28 bg-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Why SelfGrow
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Cultivate with complete confidence.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Peak Kitchen Freshness
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Harvest living herbs seconds before plating, preserving essential aromatics lost in
                supermarket transit.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Effortless Growing
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Automated lighting schedules and generous water reservoirs require refilling only
                every 2 to 3 weeks.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                100% Pesticide-Free
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Pure dissolved mineral nutrients with zero soil-borne insect pests, weed seeds, or
                synthetic poisons.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Water & Space Efficiency
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Closed-loop recirculating reservoirs conserve up to 90% more water than outdoor soil
                farming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOME VERSUS COMMERCIAL APPLICATIONS */}
      <section className="py-20 lg:py-28 bg-linen-light border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Tailored Environments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Engineered for home and business.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel 1: Home Systems */}
            <div className="bg-white border border-border rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-forest/40 transition-colors">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-sage font-bold">
                  For Home Chefs & Families
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Countertop Kitchen Gardens
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Compact, whisper-quiet planters designed to sit naturally on your kitchen counter
                  or island, providing daily culinary greens with negligible power draw.
                </p>
                <div className="relative aspect-16/9 w-full bg-linen-light rounded-xs overflow-hidden border border-border/50">
                  <Image
                    src="/images/products/12-holes-front.jpg"
                    alt="SelfGrow Home Countertop Planter"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button href="/systems/home" variant="forest-outline" size="md">
                  Explore home planters →
                </Button>
              </div>
            </div>

            {/* Panel 2: Commercial Systems */}
            <div className="bg-white border border-border rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-forest/40 transition-colors">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-sage font-bold">
                  For Restaurants, Hotels & Bars
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Commercial Living Displays
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Architectural vertical cabinets with acrylic sliding doors and per-tier cooling,
                  serving as living harvest pantries and captivating dining room centerpieces.
                </p>
                <div className="relative aspect-16/9 w-full bg-linen-light rounded-xs overflow-hidden border border-border/50">
                  <Image
                    src="/images/products/80-holes-main.jpg"
                    alt="SelfGrow Commercial Growing Cabinet AM4-T"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button href="/business" variant="primary" size="md">
                  Explore commercial solutions →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL RESTRAINED CTA */}
      <section className="bg-forest text-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Ready to grow?
          </h2>
          <p className="text-base text-white/80 max-w-lg mx-auto leading-relaxed">
            Discover the right indoor growing system for your home kitchen or hospitality venue.
          </p>
          <div className="pt-2">
            <Button href="/systems" size="lg" variant="secondary">
              Explore the systems <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

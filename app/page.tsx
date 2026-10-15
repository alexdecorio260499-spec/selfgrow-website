import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Droplets,
  ShieldCheck,
  Sparkles,
  ChefHat,
  Building2,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { COMPANY } from '@/data/company';
import { FAQS } from '@/data/faqs';
import ProductCard from '@/components/products/ProductCard';
import ProductSelectorQuiz from '@/components/selector/ProductSelectorQuiz';
import ProductComparisonTable from '@/components/comparison/ProductComparisonTable';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const previewFaqs = FAQS.slice(0, 6);

  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-linen border-b border-border pt-12 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sprout/40 border border-sage/30 rounded-full">
                <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                <span className="text-xs font-medium text-forest tracking-wide uppercase">
                  Batch 01 Reservations Open — Mauritius
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12]">
                Freshness,{' '}
                <span className="italic font-normal text-forest">grown differently.</span>
              </h1>

              <p className="text-lg text-charcoal-muted max-w-2xl leading-relaxed">
                Elevate your daily cooking and dining with intelligent indoor hydroponic systems.
                Cultivate crisp culinary herbs, fresh salad leaves, and vibrant microgreens in your
                kitchen or restaurant — 100% soil-free, pesticide-free, and year-round.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button href="/systems" size="lg" variant="primary" className="shadow-sm">
                  Explore Systems <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button href="/contact?type=pre-order" size="lg" variant="forest-outline">
                  Reserve First Batch
                </Button>
                <Button href="#quiz" size="lg" variant="ghost" className="text-charcoal-muted">
                  System Selector Quiz ↓
                </Button>
              </div>

              {/* Micro Trust Points */}
              <div className="pt-6 border-t border-border/60 grid grid-cols-3 gap-4 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                  <span>100% Food-Grade BPA-Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-forest shrink-0" />
                  <span>Up to 90% Less Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-forest shrink-0" />
                  <span>Tamarin, Mauritius Based</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-4/5 bg-white rounded-sm border border-border p-4 shadow-lg overflow-hidden group">
                <div className="relative w-full h-full bg-linen-light rounded-xs overflow-hidden">
                  <Image
                    src="/images/products/12-holes-main.jpg"
                    alt="SelfGrow 12-Holes Indoor Hydroponic Planter with vibrant herbs"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-border p-3.5 rounded-xs shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-sage font-semibold">
                        Countertop Model
                      </span>
                      <h4 className="text-sm font-serif font-bold text-charcoal">
                        12-Holes Planter (SG-H12)
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-sprout/60 text-forest rounded-full">
                      4L Reservoir
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED METRICS STRIP */}
      <section className="bg-forest text-white py-12 border-y border-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {COMPANY.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-3xl sm:text-4xl font-serif text-sprout font-bold tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  {metric.label}
                </span>
                <span className="text-xs text-white/70 leading-snug">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE */}
      <section className="py-20 bg-linen-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                The Product Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
                Engineered for kitchens, built for abundance.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Button href="/systems" variant="outline" size="sm">
                View Full Specifications
              </Button>
              <Button href="#compare" variant="ghost" size="sm">
                Compare All 4 Models ↓
              </Button>
            </div>
          </div>

          {/* 4 Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 p-6 bg-white border border-border rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-charcoal">
                  Not sure which capacity suits your space?
                </h4>
                <p className="text-xs text-charcoal-muted">
                  Take our 60-second interactive quiz to find the perfect hydroponic match.
                </p>
              </div>
            </div>
            <Button href="#quiz" variant="secondary" size="sm">
              Launch Product Finder
            </Button>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (THE HYDROPONIC ADVANTAGE) */}
      <section className="py-20 bg-linen border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Effortless Growth Lifecycle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              How hydroponics simplifies your kitchen garden.
            </h2>
            <p className="text-sm text-charcoal-muted">
              No dirt under your fingernails, no outdoor soil weeds, and no guessing when to water.
              Here is how clean indoor living works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white border border-border p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-sage tracking-widest block mb-4">
                  01 / SEED & DROP
                </span>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Plant in Pods</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Place non-GMO seeds directly into organic peat sponges. Drop each sponge sleeve
                  into the recessed growth slots. No messy potting soil required.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/50 text-xs text-charcoal-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest" />
                <span>Zero soil-borne pests or fungi</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-border p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-sage tracking-widest block mb-4">
                  02 / AUTOMATE
                </span>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Autonomous Care</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Fill the graduated reservoir with water and balanced plant minerals. The silent
                  internal pump and full-spectrum LED canopy simulate natural sunlight automatically.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/50 text-xs text-charcoal-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest" />
                <span>2 to 3 weeks autonomy between refills</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-border p-8 rounded-sm relative flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-sage tracking-widest block mb-4">
                  03 / HARVEST
                </span>
                <h3 className="font-serif text-2xl text-charcoal mb-3">Clip & Cook</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  In as few as 20–25 days, harvest fragrant basil, mint, coriander, or tender baby
                  lettuce directly into your pan or salad bowl. Roots continue regenerating for
                  repeated cuts.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/50 text-xs text-charcoal-muted flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest" />
                <span>Maximum phytonutrients & crispness</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/how-it-works" variant="outline" size="md">
              Learn More About Hydroponic Science & Technology →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. DUAL USE CASES: HOME VS COMMERCIAL */}
      <section className="py-20 bg-linen-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Tailored Environments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              From compact countertops to luxury resort kitchens.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Home Card */}
            <div className="bg-white border border-border rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-forest/50 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-sprout/50 flex items-center justify-center text-forest">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-sage font-semibold">
                  For Home Chefs & Families
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Countertop Kitchen Gardens
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Never let a bunch of wilted supermarket herbs turn brown in your fridge again.
                  The 8-Holes and 12-Holes planters fit neatly next to your kettle or coffee maker,
                  giving you daily access to pure, living aromatics with negligible power draw.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-charcoal">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Whisper-quiet water circulation under 20dB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Adjustable telescopic lighting hood grows with tall herbs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Only ~15 Watts of power (approx. 3 kWh/month)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-charcoal">Models: SG-H08 & SG-H12</span>
                <Button href="/systems/home" variant="forest-outline" size="sm">
                  View Home Planters →
                </Button>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="bg-white border border-border rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-forest/50 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-forest text-sprout flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-wider text-sage font-semibold">
                  For Hospitality & Gastronomy
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
                  Commercial Living Displays
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Designed for high-volume resort kitchens, fine dining restaurants, cocktail
                  lounges, and school laboratories. The 72-Holes and 80-Holes AM4-T cabinets serve
                  as both living harvest pantries and captivating dining room architectural centerpieces.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-charcoal">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Sliding acrylic protection against grease and airborne dust</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Independent layer cooling ventilation & smartphone telemetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Full-service white glove installation & training in Mauritius</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-charcoal">Models: SG-C72 & AM4-T</span>
                <Button href="/business" variant="primary" size="sm">
                  Explore Commercial Solutions →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SELECTOR QUIZ */}
      <section id="quiz" className="py-20 bg-linen border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              System Recommendation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Find your ideal growing system.
            </h2>
            <p className="text-sm text-charcoal-muted">
              Answer 4 simple lifestyle questions to receive tailored recommendations based on
              your available space, dietary goals, and aesthetic preferences.
            </p>
          </div>

          <ProductSelectorQuiz />
        </div>
      </section>

      {/* 7. FULL COMPARISON MATRIX */}
      <section id="compare" className="py-20 bg-linen-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Side-By-Side Evaluation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Compare all four SelfGrow systems.
            </h2>
            <p className="text-sm text-charcoal-muted">
              Review verified technical specifications, tank capacities, lighting technologies, and
              automation features side by side.
            </p>
          </div>

          <ProductComparisonTable />
        </div>
      </section>

      {/* 8. WHAT CAN YOU GROW PREVIEW */}
      <section className="py-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                Botanical Compatibility
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mt-2">
                What can you grow with SelfGrow?
              </h2>
            </div>
            <Button href="/what-can-you-grow" variant="outline" size="sm">
              Explore Full Plant Database (11+ Varieties) →
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-linen-light p-6 border border-border rounded-sm">
              <span className="text-2xl mb-3 block">🌿</span>
              <h4 className="font-serif text-lg text-charcoal mb-1">Culinary Herbs</h4>
              <p className="text-xs text-charcoal-muted mb-3">
                Genovese Basil, Italian Parsley, Moroccan Spearmint, Coriander, Thyme.
              </p>
              <span className="text-[11px] font-mono text-sage">Harvest in 20–28 days</span>
            </div>

            <div className="bg-linen-light p-6 border border-border rounded-sm">
              <span className="text-2xl mb-3 block">🥬</span>
              <h4 className="font-serif text-lg text-charcoal mb-1">Crisp Greens</h4>
              <p className="text-xs text-charcoal-muted mb-3">
                Butterhead Lettuce, Lacinato Kale, Baby Spinach, Wild Rocket / Arugula.
              </p>
              <span className="text-[11px] font-mono text-sage">Harvest in 25–35 days</span>
            </div>

            <div className="bg-linen-light p-6 border border-border rounded-sm">
              <span className="text-2xl mb-3 block">🍓</span>
              <h4 className="font-serif text-lg text-charcoal mb-1">Fruiting Crops</h4>
              <p className="text-xs text-charcoal-muted mb-3">
                Alpine Strawberries, Micro-Dwarf Red Cherry Tomatoes, Sweet Chili Peppers.
              </p>
              <span className="text-[11px] font-mono text-sage">Continuous fruiting</span>
            </div>

            <div className="bg-linen-light p-6 border border-border rounded-sm">
              <span className="text-2xl mb-3 block">🌸</span>
              <h4 className="font-serif text-lg text-charcoal mb-1">Edible Flowers</h4>
              <p className="text-xs text-charcoal-muted mb-3">
                Blue Borage, Calendula, Nasturtiums for gourmet salad finishes and mixology.
              </p>
              <span className="text-[11px] font-mono text-sage">Harvest in 30–40 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MISSION & REGIONAL STORY (MAURITIUS) */}
      <section className="py-20 bg-linen border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                Our Story & Origin
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
                Nature within reach, from Tamarin to your table.
              </h2>
              <div className="space-y-4 text-sm text-charcoal-muted leading-relaxed">
                <p>
                  In tropical climates like Mauritius, outdoor garden herbs frequently suffer from
                  harsh midday UV radiation, heavy tropical downpours, pest outbreaks, or early
                  bolting. At the same time, imported supermarket herbs have often spent days inside
                  chilled cargo holds, losing their essential oils and crisp vitality.
                </p>
                <p>
                  Headquartered on Avenue des Lauriers Roses in Tamarin, SelfGrow was established to
                  give Mauritian homes, restaurants, and schools complete control over their fresh
                  food supply. By combining precise horticultural LED spectrums with closed-loop
                  recirculating hydroponics, our systems empower you to harvest clean, unadulterated
                  greens 365 days a year.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-forest">
                <span className="px-3 py-1.5 bg-white border border-border rounded-full">
                  📍 Tamarin, Mauritius Operations
                </span>
                <span className="px-3 py-1.5 bg-white border border-border rounded-full">
                  🚚 Island-Wide Priority Delivery
                </span>
                <span className="px-3 py-1.5 bg-white border border-border rounded-full">
                  🛡️ Local Warranty & Technical Support
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 bg-white p-6 border border-border rounded-sm shadow-sm overflow-hidden">
                <Image
                  src="/images/products/80-holes-front.jpg"
                  alt="SelfGrow Commercial Growing Cabinet AM4-T"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION PREVIEW */}
      <section className="py-20 bg-linen-light border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Everything you need to know.
            </h2>
            <p className="text-sm text-charcoal-muted">
              Have questions about electricity use, water maintenance, or local Mauritian delivery?
            </p>
          </div>

          <Accordion
            items={previewFaqs.map((faq) => ({
              id: faq.id,
              title: faq.question,
              content: faq.answer,
            }))}
          />

          <div className="mt-10 text-center">
            <Button href="/support" variant="outline" size="sm">
              View All 11 Verified FAQs & Support Guides →
            </Button>
          </div>
        </div>
      </section>

      {/* 11. FINAL FOREST GREEN CALL TO ACTION */}
      <section className="bg-forest text-white py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sprout text-xs font-mono tracking-wider">
            <span>LIMITED PRODUCTION ALLOCATION</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-white max-w-2xl mx-auto">
            Ready to grow your own fresh food year-round?
          </h2>

          <p className="text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Reserve your system from the inaugural Mauritian launch batch. Enjoy priority delivery,
            white-glove onboarding advice, and zero upfront obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button href="/contact?type=pre-order" size="lg" variant="secondary">
              Reserve First Batch System
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Contact Our Tamarin Team
            </Button>
          </div>

          <p className="text-xs text-white/60 pt-4">
            Direct customer assistance: contact@selfgrow.green • +230 5531 5041
          </p>
        </div>
      </section>
    </div>
  );
}

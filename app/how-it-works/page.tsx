import React from 'react';
import type { Metadata } from 'next';
import {
  Droplets,
  Sun,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'How It Works — The Science of Indoor Hydroponics',
  description:
    'Discover how SelfGrow hydroponic systems combine aerated mineral water with full-spectrum LED light arrays to grow fresh greens 30% faster with 90% less water.',
};

export default function HowItWorksPage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Hero Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              The Technology & Science
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.15]">
              How soil-free growing yields extraordinary flavour.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Traditional outdoor agriculture forces plant roots to search through heavy soil for
              scarce moisture and minerals. Hydroponics delivers pure oxygenated water and balanced
              nutrients directly to root tips, accelerating growth without synthetic chemicals or
              pesticides.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Step Process Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Simplicity by Design
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            The Three-Stage Growth Cycle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white border border-border rounded-sm p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                PHASE 01 / GERMINATION
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Insert Sponge & Seed</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Drop your seeds into clean, pre-formed bio-sponges made from organic coconut coir
                and peat. Place the sponges inside the reusable net cups. In 3 to 5 days under the
                warmth of the nursery dome, rootlets emerge and anchor themselves cleanly.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border/60 text-xs text-charcoal font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span>No weed seeds, no soil mess</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-border rounded-sm p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                PHASE 02 / VEGETATIVE GROWTH
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Autonomous Circulation</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                The whisper-quiet integrated pump circulates water every 30 minutes, delivering
                vital dissolved oxygen directly to the root zone. Meanwhile, custom-calibrated
                full-spectrum LEDs simulate optimal morning and midday sunlight on automated 12–16
                hour cycles.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border/60 text-xs text-charcoal font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span>30% faster growth than soil</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-border rounded-sm p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-sage tracking-widest block">
                PHASE 03 / CONTINUOUS HARVEST
              </span>
              <h3 className="font-serif text-2xl text-charcoal">Clip, Savor & Repeat</h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Whenever you cook, clip the outer leaves or herb stems. Because the root system
                remains healthy, oxygenated, and well-nourished in the reservoir, plants regenerate
                new foliage rapidly for weeks of continuous harvesting.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border/60 text-xs text-charcoal font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-forest" />
              <span>Zero refrigeration loss or food waste</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars of Hydroponic Science */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Engineered for absolute nutrient efficiency.
            </h2>
            <p className="text-sm text-charcoal-muted">
              Why indoor hydroponics outperforms traditional soil farming in taste, speed, and
              sustainability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pillar 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center text-forest shrink-0 border border-border">
                <Droplets className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-charcoal font-semibold">
                  Closed-Loop Water Conservation
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  In outdoor soil farming, over 80% of water evaporates or seeps deep into the
                  groundwater where plant roots cannot reach it. SelfGrow systems recirculate water
                  within a sealed reservoir, capturing nearly 100% of moisture for transpiration and
                  saving up to 90% of water.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center text-forest shrink-0 border border-border">
                <Sun className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-charcoal font-semibold">
                  Targeted Photosynthetic Spectrum
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Our custom LED arrays emit precise wavelengths: 450nm royal blue for thick, sturdy
                  foliage stems and essential oil development; 660nm deep red to stimulate robust
                  photosynthesis and floral initiation; and warm daylight white for visual kitchen
                  comfort.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center text-forest shrink-0 border border-border">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-charcoal font-semibold">
                  Zero Pesticides or Chemical Herbicides
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  By eliminating outdoor garden dirt, you eliminate soil-borne insect larvae, cutworms,
                  root aphids, and weed competition. Because plants are shielded indoors, they never
                  need to be sprayed with synthetic insecticides or chemical poisons.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center text-forest shrink-0 border border-border">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-charcoal font-semibold">
                  Direct Dissolved Mineral Nutrition
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Roots do not eat soil—they only absorb mineral ions dissolved in water (nitrogen,
                  phosphorus, potassium, calcium, magnesium, and iron). Hydroponics provides these
                  exact pure elemental salts in ideal ratios, allowing plants to expend all their
                  energy producing crisp, flavourful foliage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tropical Mauritius Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linen-light border border-border rounded-sm p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              The Mauritius Climate Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Why indoor hydroponics is tailor-made for our island.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              In Mauritius, outdoor cultivation often battles intense summer heatwaves that cause
              delicate herbs like coriander and basil to flower prematurely (bolting) and turn bitter.
              During cyclone seasons or heavy tropical rain events, outdoor soil gardens can wash away
              or drown in standing mud.
            </p>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              An indoor SelfGrow system operates in a stable, air-conditioned or shaded room
              environment. It provides consistent lighting photoperiods, protecting your gourmet
              crops from extreme heat spikes, torrential tropical rains, and outdoor pests.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/systems" variant="primary">
                Explore Compatible Systems
              </Button>
              <Button href="/what-can-you-grow" variant="outline">
                Browse What You Can Grow
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

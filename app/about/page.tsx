import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Heart,
  ShieldCheck,
  Leaf,
} from 'lucide-react';
import { COMPANY } from '@/data/company';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About SelfGrow — Nature Within Reach | Tamarin, Mauritius',
  description:
    'SelfGrow is dedicated to empowering Mauritian households and restaurants to grow pure, pesticide-free food indoors. Learn about our story, values, and Tamarin headquarters.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Hero Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Our Story & Heritage
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.12]">
              Nature within reach, grown right here in Mauritius.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              We started SelfGrow with a conviction: everyone deserves access to vibrant,
              living herbs and crisp greens — grown without dirt, without harmful chemicals, and
              without relying on vulnerable overseas supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-charcoal leading-relaxed text-sm sm:text-base">
            <span className="text-xs uppercase tracking-widest text-sage font-bold block">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Reimagining fresh food in a tropical island home.
            </h2>
            <p className="text-charcoal-muted">
              Living on a tropical island like Mauritius brings unparalleled beauty, but also
              distinct agricultural challenges: heavy seasonal rains that wash away topsoil, intense
              sunlight that causes herbs like cilantro and basil to flower prematurely (bolting), and
              persistent pest pressures requiring heavy pesticide sprays on conventional farms.
            </p>
            <p className="text-charcoal-muted">
              Meanwhile, supermarket produce spends days under chilled transportation, wrapped in
              single-use plastics, losing its essential oils and crisp vitality long before it
              reaches your dinner table.
            </p>
            <p className="text-charcoal-muted">
              Based out of Avenue des Lauriers Roses in Tamarin, SelfGrow was founded to bring
              horticultural control indoors. By coupling closed-loop recirculating water with
              scientifically calibrated LED spectrums, we created a way for Mauritian homes, hotels,
              and restaurants to enjoy 365 days of clean, unadulterated freshness.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-border rounded-sm">
                <span className="font-semibold text-forest block mb-1">
                  100% Soil-Free Cleanliness
                </span>
                <span className="text-charcoal-muted">
                  No garden mud, no weed seeds, and zero chemical insecticides in your living space.
                </span>
              </div>
              <div className="p-4 bg-white border border-border rounded-sm">
                <span className="font-semibold text-forest block mb-1">
                  90% Water Conservation
                </span>
                <span className="text-charcoal-muted">
                  Recirculating reservoirs protect precious island water resources.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 bg-white p-6 border border-border rounded-sm shadow-sm overflow-hidden">
              <Image
                src="/images/products/12-holes-main.jpg"
                alt="SelfGrow Kitchen Garden in Mauritius"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-border p-3 rounded-xs text-xs text-charcoal">
                <strong>Tamarin, Mauritius Operations</strong>
                <p className="text-charcoal-muted text-[11px] mt-0.5">
                  Local engineering, local inventory, local warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              What Guides Every SelfGrow System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">Integrity & Safety</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We use strictly food-grade, BPA-free ABS polymers and pure elemental mineral salts.
                No synthetic growth hormones, no deceptive marketing claims, and no compromises on
                the purity of your family’s food.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Island Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Every herb clipped fresh from your kitchen counter is one less bunch flown across
                oceans in cold storage and wrapped in single-use plastic. We minimise transport miles
                and plastic waste.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sprout/60 flex items-center justify-center text-forest">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal font-semibold">
                Genuine Local Commitment
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                We are not a distant dropshipper. Our team is located on Avenue des Lauriers Roses
                in Tamarin. When you need replacement nutrient packs, fresh organic sponges, or
                advice on your crops, we are a local phone call away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Location & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linen-light border border-border rounded-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-sage font-bold">
                Headquarters
              </span>
              <h3 className="font-serif text-3xl text-charcoal">
                Visit or Contact Us in Tamarin
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Our workshop and showroom welcome clients for pre-arranged consultations, system
                demonstrations, and starter seed pack pick-ups.
              </p>

              <div className="space-y-2 text-xs text-charcoal pt-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">Address:</span>
                  <span>{COMPANY.location.displayAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">Telephone:</span>
                  <a href={`tel:${COMPANY.contact.phone}`} className="text-forest hover:underline">
                    {COMPANY.contact.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">Email:</span>
                  <a href={`mailto:${COMPANY.contact.email}`} className="text-forest hover:underline">
                    {COMPANY.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold w-24">Hours:</span>
                  <span>{COMPANY.contact.hours}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center space-y-4">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch With Our Team
              </Button>
              <Button href="/systems" variant="outline" size="lg">
                Explore The Systems
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

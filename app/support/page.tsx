'use client';

import React, { useState, useMemo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
} from 'lucide-react';
import { FAQS } from '@/data/faqs';
import { COMPANY } from '@/data/company';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Principles' },
  { id: 'systems', label: 'Systems & Power' },
  { id: 'maintenance', label: 'Maintenance & Cleaning' },
  { id: 'delivery', label: 'Delivery & Warranty' },
  { id: 'commercial', label: 'Commercial & Hotels' },
];

export default function SupportPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === 'all') return FAQS;
    return FAQS.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-linen min-h-screen">
      {/* Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Customer Support & Knowledge Base
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Support & Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Find instant answers to common questions about operating your SelfGrow system,
              nutrient maintenance, electricity consumption, and our Mauritius warranty service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Support Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border p-6 rounded-sm space-y-2">
            <Phone className="w-6 h-6 text-forest" />
            <h3 className="font-serif text-lg text-charcoal font-semibold">Direct Telephone</h3>
            <p className="text-xs text-charcoal-muted">
              Call our support team in Tamarin for immediate troubleshooting assistance.
            </p>
            <a
              href={`tel:${COMPANY.contact.phone}`}
              className="text-sm font-semibold text-forest hover:underline block pt-2"
            >
              {COMPANY.contact.phoneFormatted}
            </a>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm space-y-2">
            <Mail className="w-6 h-6 text-forest" />
            <h3 className="font-serif text-lg text-charcoal font-semibold">Email Enquiries</h3>
            <p className="text-xs text-charcoal-muted">
              Send us photos of your plant progress or order questions anytime.
            </p>
            <a
              href={`mailto:${COMPANY.contact.supportEmail}`}
              className="text-sm font-semibold text-forest hover:underline block pt-2"
            >
              {COMPANY.contact.supportEmail}
            </a>
          </div>

          <div className="bg-white border border-border p-6 rounded-sm space-y-2">
            <MapPin className="w-6 h-6 text-forest" />
            <h3 className="font-serif text-lg text-charcoal font-semibold">Tamarin Showroom</h3>
            <p className="text-xs text-charcoal-muted">
              Avenue des Lauriers Roses, Tamarin, Mauritius.
            </p>
            <span className="text-xs text-charcoal-muted block pt-2">
              Mon – Fri: 9:00 AM – 5:00 PM MUT
            </span>
          </div>
        </div>

        {/* FAQs Filter & Accordion */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-4">
            <div>
              <h2 className="font-serif text-3xl text-charcoal">Frequently Asked Questions</h2>
              <p className="text-xs text-charcoal-muted mt-1">
                Showing {filteredFaqs.length} verified answers
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    'text-xs font-medium px-3.5 py-1.5 rounded-full transition-all focus-visible:outline-forest',
                    selectedCategory === cat.id
                      ? 'bg-forest text-white'
                      : 'bg-white text-charcoal border border-border hover:bg-linen-light'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion
              items={filteredFaqs.map((faq) => ({
                id: faq.id,
                title: faq.question,
                content: faq.answer,
              }))}
            />
          </div>
        </div>

        {/* Maintenance Guide Quick Reference */}
        <section className="bg-white border border-border p-8 sm:p-12 rounded-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-forest">
              <Wrench className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Best Practices</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
              Quick Hydroponic Maintenance Routine
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Keep your system running smoothly with these 4 simple steps:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-charcoal">
            <div className="p-4 bg-linen-light border border-border/80 rounded-xs space-y-2">
              <strong className="text-sm font-serif block text-forest">Every 7 – 10 Days</strong>
              <p className="text-charcoal-muted leading-relaxed">
                Check the clear visual water gauge on your tank. Top up with clean tap water and add
                the recommended drops of nutrient formula.
              </p>
            </div>

            <div className="p-4 bg-linen-light border border-border/80 rounded-xs space-y-2">
              <strong className="text-sm font-serif block text-forest">Every 3 – 4 Weeks</strong>
              <p className="text-charcoal-muted leading-relaxed">
                Adjust the telescopic lighting hood upwards as crops grow tall, keeping a 5–10 cm
                gap between top leaves and the LED panel.
              </p>
            </div>

            <div className="p-4 bg-linen-light border border-border/80 rounded-xs space-y-2">
              <strong className="text-sm font-serif block text-forest">Between Crop Rotations</strong>
              <p className="text-charcoal-muted leading-relaxed">
                Drain remaining reservoir water and rinse the tank with warm water. No harsh
                bleaches or detergents are required.
              </p>
            </div>

            <div className="p-4 bg-linen-light border border-border/80 rounded-xs space-y-2">
              <strong className="text-sm font-serif block text-forest">Long-Term Care</strong>
              <p className="text-charcoal-muted leading-relaxed">
                Inspect the water pump impeller every 6 months to ensure zero organic root tangles.
                Replace seed sponges with fresh SelfGrow bio-sponges.
              </p>
            </div>
          </div>
        </section>

        {/* Still need help CTA */}
        <div className="text-center space-y-4 pt-4">
          <h4 className="font-serif text-2xl text-charcoal">Can’t find what you’re looking for?</h4>
          <p className="text-sm text-charcoal-muted max-w-md mx-auto">
            Our local support specialists in Tamarin are ready to answer any questions about your
            system or crops.
          </p>
          <Button href="/contact" variant="primary">
            Send Us a Message
          </Button>
        </div>
      </div>
    </div>
  );
}

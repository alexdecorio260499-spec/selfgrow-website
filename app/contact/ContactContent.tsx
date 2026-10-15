'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/data/company';
import PreOrderForm from '@/components/forms/PreOrderForm';
import ContactForm from '@/components/forms/ContactForm';
import { cn } from '@/lib/utils';

export default function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'message' ? 'message' : 'pre-order';
  const initialProductSlug = searchParams.get('product') || undefined;

  const [activeTab, setActiveTab] = useState<'pre-order' | 'message'>(initialType);

  return (
    <div>
      {/* Header */}
      <section className="bg-linen-light border-b border-border py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Connect With Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal tracking-tight">
              Get in Touch or Reserve Your System
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              We are based in Tamarin, Mauritius. Reserve a unit from our inaugural launch batch
              with zero upfront obligation, or reach out to discuss custom home and restaurant
              installations.
            </p>

            {/* Tab Switcher */}
            <div className="inline-flex p-1 bg-white border border-border rounded-sm mt-4">
              <button
                type="button"
                onClick={() => setActiveTab('pre-order')}
                className={cn(
                  'px-5 py-2 text-xs font-semibold rounded-xs transition-all',
                  activeTab === 'pre-order'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-charcoal-muted hover:text-charcoal'
                )}
              >
                Launch Batch Reservation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('message')}
                className={cn(
                  'px-5 py-2 text-xs font-semibold rounded-xs transition-all',
                  activeTab === 'message'
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-charcoal-muted hover:text-charcoal'
                )}
              >
                General Enquiry / Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            {activeTab === 'pre-order' ? (
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h2 className="font-serif text-2xl text-charcoal">
                    Mauritius Launch Batch Reservation
                  </h2>
                  <p className="text-xs text-charcoal-muted mt-1">
                    No payment is required today. We will contact you to verify delivery address and
                    schedules.
                  </p>
                </div>
                <PreOrderForm initialProductSlug={initialProductSlug} />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="border-b border-border pb-4">
                  <h2 className="font-serif text-2xl text-charcoal">Send Us a Direct Message</h2>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Have a technical question, partnership idea, or custom setup query?
                  </p>
                </div>
                <ContactForm />
              </div>
            )}
          </div>

          {/* Contact Details & Operations Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-border rounded-sm p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-xl text-charcoal pb-3 border-b border-border">
                Tamarin Headquarters
              </h3>

              <div className="space-y-4 text-sm text-charcoal">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-sage font-semibold">
                      Location
                    </strong>
                    <span className="text-charcoal mt-0.5 block">
                      {COMPANY.location.street}
                    </span>
                    <span className="text-charcoal-muted text-xs">
                      {COMPANY.location.city}, {COMPANY.location.country} ({COMPANY.location.region})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-sage font-semibold">
                      Telephone
                    </strong>
                    <a
                      href={`tel:${COMPANY.contact.phone}`}
                      className="text-forest hover:underline font-medium mt-0.5 block"
                    >
                      {COMPANY.contact.phoneFormatted}
                    </a>
                    <span className="text-charcoal-muted text-xs">Direct local line</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-sage font-semibold">
                      Email
                    </strong>
                    <a
                      href={`mailto:${COMPANY.contact.email}`}
                      className="text-forest hover:underline font-medium mt-0.5 block"
                    >
                      {COMPANY.contact.email}
                    </a>
                    <span className="text-charcoal-muted text-xs">
                      Support: {COMPANY.contact.supportEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-sage font-semibold">
                      Operating Hours
                    </strong>
                    <span className="text-charcoal mt-0.5 block text-xs">
                      {COMPANY.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Commitment Card */}
            <div className="bg-linen-light border border-border rounded-sm p-6 space-y-3">
              <div className="flex items-center gap-2 text-forest">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-serif text-base text-charcoal font-semibold">
                  Local Servicing & Guarantee
                </h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                All pre-orders placed through our official website are backed by our local Tamarin
                team. You receive full local replacement warranty coverage, seed sponges, and
                nutrient supply continuity throughout Mauritius.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

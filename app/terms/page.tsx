import React from 'react';
import type { Metadata } from 'next';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms of Service | SelfGrow Mauritius',
  description:
    'Terms of service and launch batch pre-order policy for SelfGrow Ltd hydroponic systems in Mauritius.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-linen min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-border p-8 sm:p-12 rounded-sm shadow-xs space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Legal & Customer Agreement
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight mt-1">
            Terms of Service
          </h1>
          <p className="text-xs text-charcoal-muted mt-2">
            Last Updated: January 2025 • SelfGrow Ltd ({COMPANY.location.displayAddress})
          </p>
        </div>

        <div className="space-y-6 text-sm text-charcoal leading-relaxed border-t border-border pt-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">1. Acceptance of Terms</h2>
            <p className="text-charcoal-muted">
              By accessing our website (https://selfgrow.green) or submitting a pre-order reservation
              or enquiry, you agree to be bound by these Terms of Service. If you do not agree with
              any part of these terms, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">2. Launch Batch Pre-Order Policy</h2>
            <p className="text-charcoal-muted">
              SelfGrow is currently accepting reservations for our inaugural production batch in
              Mauritius. Submitting a reservation form:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-muted">
              <li>
                <strong>Requires No Immediate Payment:</strong> You are not billed or charged at the
                moment of form submission.
              </li>
              <li>
                <strong>Allocates Delivery Priority:</strong> Your submission reserves priority
                allocation in the sequence received.
              </li>
              <li>
                <strong>Is Non-Binding:</strong> You may cancel or modify your reservation at any time
                prior to dispatch by contacting us at {COMPANY.contact.email}.
              </li>
              <li>
                <strong>Requires Confirmation:</strong> Prior to shipment or final invoicing, a
                representative from our Tamarin team will contact you to confirm final delivery
                address, electrical setup requirements, and payment method.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">3. Warranty & Local Servicing</h2>
            <p className="text-charcoal-muted">
              All SelfGrow hardware sold in Mauritius comes with official local manufacturer warranty
              coverage:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-muted">
              <li>
                <strong>Home Countertop Models (SG-H08 & SG-H12):</strong> 1-Year Limited Warranty
                covering electronic timer controllers, LED light arrays, and submerged water pumps
                against manufacturing defects.
              </li>
              <li>
                <strong>Commercial Models (SG-C72 & AM4-T):</strong> 2-Year Commercial Warranty
                covering structural aluminum framing, dual pumps, ventilation assemblies, and
                electronic display telemetry.
              </li>
              <li>
                <strong>Exclusions:</strong> Warranty does not cover damage caused by physical drops,
                unauthorized electrical modifications, running pumps without water, or using
                corrosive non-hydroponic chemicals.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">4. Intellectual Property</h2>
            <p className="text-charcoal-muted">
              All text, graphic designs, logos, product photographs, and interface components
              displayed on this website are the intellectual property of SelfGrow Ltd. Unauthorized
              reproduction or commercial duplication is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">5. Governing Law & Jurisdiction</h2>
            <p className="text-charcoal-muted">
              These Terms of Service are governed by and construed in accordance with the laws of the
              Republic of Mauritius. Any disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the courts of Mauritius.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">6. Inquiries</h2>
            <p className="text-charcoal-muted">
              For any questions regarding these terms, please contact:
            </p>
            <div className="p-4 bg-linen-light border border-border rounded-xs text-xs space-y-1">
              <div>
                <strong>SelfGrow Ltd</strong>
              </div>
              <div>{COMPANY.location.displayAddress}</div>
              <div>Email: {COMPANY.contact.email}</div>
              <div>Phone: {COMPANY.contact.phoneFormatted}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

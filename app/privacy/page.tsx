import React from 'react';
import type { Metadata } from 'next';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | SelfGrow Mauritius',
  description:
    'Privacy Policy of SelfGrow Ltd. Learn how we handle and protect personal information collected via our website in compliance with the Mauritian Data Protection Act.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-linen min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-border p-8 sm:p-12 rounded-sm shadow-xs space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-muted mt-2">
            Last Updated: January 2025 • SelfGrow Ltd ({COMPANY.location.displayAddress})
          </p>
        </div>

        <div className="space-y-6 text-sm text-charcoal leading-relaxed border-t border-border pt-6">
          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">1. Introduction</h2>
            <p className="text-charcoal-muted">
              SelfGrow Ltd (&ldquo;SelfGrow&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website{' '}
              <a href="https://selfgrow.green" className="text-forest underline">
                https://selfgrow.green
              </a>
              . We are committed to safeguarding the privacy and personal data of our visitors,
              customers, and partners in accordance with the Mauritius Data Protection Act 2017
              (DPA) and international data protection standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">2. Information We Collect</h2>
            <p className="text-charcoal-muted">
              We collect information that you voluntarily provide to us when submitting reservation
              requests, pre-orders, commercial consultation forms, or general enquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-muted">
              <li>
                <strong>Contact Information:</strong> Full name, email address, telephone number, and
                delivery city/region within Mauritius.
              </li>
              <li>
                <strong>Commercial Details:</strong> Company/restaurant name, business type, and
                estimated unit volume for B2B enquiries.
              </li>
              <li>
                <strong>Communication Records:</strong> Specific questions, notes, or preferences
                provided in enquiry messages.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">3. Purpose and Legal Basis</h2>
            <p className="text-charcoal-muted">
              We process your personal information solely for the following legitimate purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-muted">
              <li>To register and allocate your launch batch system reservation.</li>
              <li>
                To contact you directly via phone or email to confirm delivery logistics,
                specifications, and answer technical questions.
              </li>
              <li>
                To schedule on-site commercial consultations and space assessments for hotels and
                restaurants.
              </li>
              <li>To provide customer support, warranty fulfillment, and replacement parts.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">4. Data Sharing and Disclosure</h2>
            <p className="text-charcoal-muted">
              SelfGrow never sells, rents, or trades your personal information to third-party data
              brokers or marketing agencies. We only share information with vetted service
              providers (such as local courier delivery drivers in Mauritius or secure transactional
              email dispatchers) strictly necessary to fulfil your requests.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">5. Data Retention & Your Rights</h2>
            <p className="text-charcoal-muted">
              Under the Mauritius Data Protection Act 2017, you have the right to request access to
              the personal data we hold about you, request rectification of inaccurate data, or
              request deletion of your contact records at any time. To exercise these rights, please
              contact us at{' '}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-forest underline">
                {COMPANY.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl text-charcoal">6. Contact Information</h2>
            <p className="text-charcoal-muted">
              If you have any questions regarding this Privacy Policy, please contact our Data
              Officer:
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

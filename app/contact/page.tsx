import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us & Reserve Launch Batch | SelfGrow Mauritius',
  description:
    'Contact SelfGrow in Tamarin, Mauritius. Reserve your indoor hydroponic growing system or get in touch for custom commercial installations.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-linen min-h-screen">
      <Suspense
        fallback={
          <div className="py-24 text-center text-charcoal-muted font-sans text-sm">
            Loading contact options...
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </div>
  );
}

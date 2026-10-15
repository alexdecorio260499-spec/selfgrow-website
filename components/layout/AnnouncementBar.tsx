import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-forest text-sprout px-4 py-2 text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-forest-dark">
      <Sparkles className="w-3.5 h-3.5 text-sprout animate-pulse flex-shrink-0" aria-hidden="true" />
      <span>
        Now accepting First-Batch Pre-Orders across Mauritius. Priority delivery & early-adopter support.
      </span>
      <Link
        href="/contact?type=pre-order"
        className="underline underline-offset-4 hover:text-white transition-colors inline-flex items-center gap-1 font-semibold ml-1"
      >
        Reserve your system <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </Link>
    </div>
  );
}

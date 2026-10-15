import React from 'react';
import { Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="w-full bg-linen min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white border border-border p-8 sm:p-12 text-center rounded-sm shadow-xs space-y-6">
        <div className="w-12 h-12 rounded-full bg-sprout/60 flex items-center justify-center text-forest mx-auto">
          <Compass className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-sage font-semibold">
            404 Error
          </span>
          <h1 className="font-serif text-3xl text-charcoal">Page Not Found</h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            The page or growing system you are looking for has been relocated or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md">
            Return Home
          </Button>
          <Button href="/systems" variant="outline" size="md">
            Browse Systems
          </Button>
        </div>
      </div>
    </div>
  );
}

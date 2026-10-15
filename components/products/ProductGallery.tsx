'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Display */}
      <div className="relative aspect-square sm:aspect-4/3 w-full bg-white border border-border rounded-sm overflow-hidden flex items-center justify-center p-8 shadow-xs">
        {activeImage && (
          <Image
            src={activeImage.src}
            alt={activeImage.alt || productName}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-6 transition-all duration-300"
            priority
          />
        )}
      </div>

      {/* Caption if provided */}
      {activeImage?.caption && (
        <p className="text-xs text-charcoal-muted italic px-1">
          {activeImage.caption}
        </p>
      )}

      {/* Thumbnails row (if multiple) */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Product Images">
          {images.map((img, idx) => (
            <button
              key={img.src + idx}
              type="button"
              role="tab"
              aria-selected={selectedIndex === idx}
              aria-label={`View image ${idx + 1} of ${productName}`}
              onClick={() => setSelectedIndex(idx)}
              className={cn(
                'relative w-20 h-20 flex-shrink-0 bg-white border rounded-xs p-2 overflow-hidden transition-all focus-visible:outline-forest',
                selectedIndex === idx
                  ? 'border-forest ring-1 ring-forest'
                  : 'border-border hover:border-charcoal/40 opacity-75 hover:opacity-100'
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

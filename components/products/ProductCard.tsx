import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Benefit-led one-liners (10-18 words)
  const benefitSentences: Record<string, string> = {
    '12-holes-planter':
      'Harvest fresh culinary herbs and baby greens right on your kitchen counter with automated care.',
    '8-holes-planter':
      'Wider pod spacing and dual light spectrums tailored for leafy greens, fruiting crops, and strawberries.',
    '72-holes-cabinet':
      'High-density 5-tier vertical growing cabinet engineered for chefs, schools, and serious home harvests.',
    '80-holes-cabinet':
      'Architectural 4-tier cabinet with acrylic sliding doors and per-tier ventilation for luxury hospitality.',
  };

  const benefitText = benefitSentences[product.slug] || product.tagline;

  // Intended audience label
  const audienceLabel =
    product.category === 'home'
      ? 'Home Kitchens & Families'
      : 'Restaurants, Hotels & Hospitality';

  return (
    <article className="group bg-white border border-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-charcoal/40 transition-all duration-300 hover:shadow-sm">
      <Link href={`/systems/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="relative aspect-square sm:aspect-4/3 w-full bg-linen-light p-8 overflow-hidden flex items-center justify-center border-b border-border/60">
          <span className="absolute top-4 left-4 z-10 text-[11px] font-mono tracking-wider px-2.5 py-1 bg-white/90 border border-border/80 text-charcoal font-medium rounded-xs shadow-2xs">
            {product.growingCapacity} Pods
          </span>
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-4 group-hover:scale-104 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="text-[11px] uppercase tracking-wider text-sage font-bold">
            {audienceLabel}
          </div>
          <h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-2">
            {benefitText}
          </p>
        </div>
      </Link>

      {/* Card Action Link */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          href={`/systems/${product.slug}`}
          className="text-xs font-semibold text-forest uppercase tracking-wider inline-flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          Explore system <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

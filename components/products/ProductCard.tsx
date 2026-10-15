import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Droplets, Grid } from 'lucide-react';
import { Product } from '@/types';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article className="group bg-white border border-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-charcoal/40 transition-all duration-300 hover:shadow-md">
      <div>
        {/* Image Container */}
        <div className="relative aspect-square sm:aspect-4/3 w-full bg-linen-light p-6 overflow-hidden flex items-center justify-center border-b border-border/50">
          {(product.badge || featured) && (
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="sprout">{product.badge || 'Featured'}</Badge>
            </div>
          )}
          <div className="absolute top-4 right-4 z-10 text-[11px] font-mono tracking-wider px-2 py-0.5 bg-white/90 border border-border/80 text-charcoal-muted rounded">
            {product.modelIdentifier}
          </div>
          <Image
            src={product.mainImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-xs uppercase tracking-wider text-sage font-semibold mb-1">
            {product.categoryLabel}
          </div>
          <h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors mb-2">
            <Link href={`/systems/${product.slug}`} className="focus-visible:outline-forest">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-2 mb-5">
            {product.shortDescription}
          </p>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-linen-light/60 border border-border/70 rounded-xs text-xs mb-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                <Grid className="w-3 h-3 text-sage" /> Capacity
              </span>
              <span className="font-medium text-charcoal mt-0.5">
                {product.growingCapacity} slots
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                <Droplets className="w-3 h-3 text-sage" /> Tank
              </span>
              <span className="font-medium text-charcoal mt-0.5 truncate">
                {product.waterCapacity.split(' ')[0]}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                <Zap className="w-3 h-3 text-sage" /> Power
              </span>
              <span className="font-medium text-charcoal mt-0.5 truncate">
                {product.powerConsumption.split(' ')[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-border/40 mt-auto">
        <Link
          href={`/systems/${product.slug}`}
          className="text-xs font-semibold text-forest uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
        >
          Explore System <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Button href={`/contact?product=${product.slug}`} size="sm" variant="forest-outline">
          Reserve
        </Button>
      </div>
    </article>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  Droplets,
  Zap,
  Grid,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  PackageCheck,
  Wrench,
} from 'lucide-react';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import ProductGallery from '@/components/products/ProductGallery';
import ProductSpecsTable from '@/components/products/ProductSpecsTable';
import PreOrderForm from '@/components/forms/PreOrderForm';
import Button from '@/components/ui/Button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'System Not Found | SelfGrow',
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      images: [
        {
          url: product.mainImage,
          width: 1000,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full bg-linen min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-linen-light border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-charcoal-muted">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
            <Link href="/systems" className="hover:text-forest transition-colors">
              Systems
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
            <Link
              href={`/systems/${product.category}`}
              className="hover:text-forest transition-colors capitalize"
            >
              {product.categoryLabel}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
            <span className="text-charcoal font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero / Gallery & Buying Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Product Purchasing & Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-sage">
                  {product.categoryLabel}
                </span>
                <span className="text-xs font-mono tracking-wider px-2.5 py-0.5 bg-white border border-border text-charcoal-muted rounded">
                  {product.modelIdentifier}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tight">
                {product.name}
              </h1>

              <p className="text-base text-forest font-medium italic">
                {product.tagline}
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-white border border-border rounded-sm">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                  <Grid className="w-3 h-3 text-sage" /> Capacity
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5">
                  {product.growingCapacity} slots
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-sage" /> Tank
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5">
                  {product.waterCapacity}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1">
                  <Zap className="w-3 h-3 text-sage" /> Power
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5">
                  {product.powerConsumption.split(' ')[0]}
                </span>
              </div>
            </div>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Availability & Reservation CTA */}
            <div className="p-5 bg-linen-light border border-border rounded-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-muted">Mauritius Status:</span>
                <span className="font-semibold text-forest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-forest" />
                  {product.availability}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs border-t border-border/60 pt-2">
                <span className="text-charcoal-muted">Warranty:</span>
                <span className="font-medium text-charcoal">{product.warranty.split('+')[0]}</span>
              </div>

              <div className="pt-2">
                <Button href="#reserve" size="lg" variant="primary" className="w-full">
                  Reserve This Model in Next Batch <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Trust Points */}
            <div className="space-y-2 text-xs text-charcoal-muted pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Zero soil, zero weeds, 100% pesticide-free produce</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Local warranty service & support from Tamarin, Mauritius</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Complete starter accessories & organic seed sponges included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Features Section */}
      <section className="bg-white border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Engineering Excellence
            </span>
            <h2 className="font-serif text-3xl text-charcoal">
              Key Features & Architectural Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-linen-light border border-border rounded-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-forest">
                  <Sparkles className="w-4 h-4" />
                  <h3 className="font-serif text-lg text-charcoal font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Technical Specifications Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Specs Table */}
          <div className="lg:col-span-7">
            <ProductSpecsTable product={product} />
          </div>

          {/* Right: Package Contents & What's In The Box */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-border rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-2 text-forest pb-3 border-b border-border">
                <PackageCheck className="w-5 h-5" />
                <h3 className="font-serif text-xl text-charcoal">What’s in the Box</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-charcoal">
                {product.packageContents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-linen-light border border-border rounded-sm p-6 space-y-3">
              <div className="flex items-center gap-2 text-sage pb-2 border-b border-border/60">
                <Wrench className="w-4 h-4" />
                <h4 className="font-serif text-base text-charcoal font-semibold">
                  Maintenance & Care
                </h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                {product.maintenanceInterval}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Pre-Order Reservation Form */}
      <section id="reserve" className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Launch Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Reserve your {product.name}
          </h2>
          <p className="text-sm text-charcoal-muted max-w-md mx-auto">
            Reserve with zero upfront obligation. Our team in Tamarin will contact you to confirm
            expected delivery schedules and answer any technical questions.
          </p>
        </div>

        <PreOrderForm initialProductSlug={product.slug} />
      </section>
    </div>
  );
}

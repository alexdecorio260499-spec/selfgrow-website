import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  Droplets,
  Zap,
  Grid,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  PackageCheck,
  Wrench,
  ChevronDown,
} from 'lucide-react';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { FAQS } from '@/data/faqs';
import ProductGallery from '@/components/products/ProductGallery';
import PreOrderForm from '@/components/forms/PreOrderForm';
import Accordion from '@/components/ui/Accordion';
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

  // Filter relevant FAQs based on category
  const relevantFaqIds =
    product.category === 'home'
      ? ['faq-1', 'faq-2', 'faq-3', 'faq-6']
      : ['faq-5', 'faq-11', 'faq-4', 'faq-10'];

  const productFaqs = FAQS.filter((f) => relevantFaqIds.includes(f.id));

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

      {/* 1. ABOVE THE FOLD: Image, Name, Value Proposition & Primary CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.gallery} productName={product.name} />
          </div>

          {/* Right: Essential Information & Direct Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-sage">
                  {product.categoryLabel}
                </span>
                <span className="text-xs font-mono tracking-wider px-2 py-0.5 bg-white border border-border text-charcoal-muted rounded">
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

            <p className="text-sm text-charcoal-muted leading-relaxed">
              {product.shortDescription}
            </p>

            {/* 2. Primary CTA */}
            <div className="pt-2">
              <Button href="#reserve" size="lg" variant="primary" className="w-full">
                {product.category === 'home'
                  ? 'Reserve this system'
                  : 'Enquire for commercial installation'}{' '}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <p className="text-[11px] text-charcoal-muted text-center mt-2">
                Launch batch priority in Mauritius • No upfront payment today
              </p>
            </div>

            {/* 3. Essential Specifications (4 Key Scannable Metrics) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white border border-border rounded-sm">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1 font-medium">
                  <Grid className="w-3 h-3 text-sage" /> Capacity
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5">
                  {product.growingCapacity} slots
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1 font-medium">
                  <Droplets className="w-3 h-3 text-sage" /> Autonomy
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5 truncate">
                  {product.waterAutonomy.split(' ')[0]} {product.waterAutonomy.split(' ')[1]}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1 font-medium">
                  <Maximize2 className="w-3 h-3 text-sage" /> Footprint
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5 truncate">
                  {product.dimensions.widthCm}×{product.dimensions.depthCm} cm
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-charcoal-muted flex items-center gap-1 font-medium">
                  <Zap className="w-3 h-3 text-sage" /> Power
                </span>
                <span className="font-semibold text-charcoal text-sm mt-0.5">
                  {product.powerConsumption.split(' ')[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRACTICAL BENEFITS (3 or 4 clear lifestyle & culinary benefits) */}
      <section className="bg-white border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sage font-bold">
              Why This System Fits
            </span>
            <h2 className="font-serif text-3xl text-charcoal">
              Practical Benefits for Everyday Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-linen-light border border-border rounded-sm space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-forest">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <h3 className="font-serif text-lg text-charcoal font-semibold">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATIONS & PROGRESSIVE DISCLOSURE (Compact table + Expandable technical details) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Specifications
          </span>
          <h2 className="font-serif text-3xl text-charcoal">
            Technical Details & Build Quality
          </h2>
        </div>

        {/* Primary Essential Specs Table */}
        <div className="bg-white border border-border rounded-sm overflow-hidden mb-6">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal w-1/3">System Model</td>
                <td className="py-3.5 px-6 text-charcoal-muted font-mono">{product.modelIdentifier}</td>
              </tr>
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal">Cultivation Capacity</td>
                <td className="py-3.5 px-6 text-charcoal-muted">{product.growingCapacity} {product.growingCapacityUnit}</td>
              </tr>
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal">Reservoir Capacity</td>
                <td className="py-3.5 px-6 text-charcoal-muted">{product.waterCapacity} ({product.waterAutonomy})</td>
              </tr>
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal">Full Dimensions</td>
                <td className="py-3.5 px-6 text-charcoal-muted">{product.dimensions.formatted}</td>
              </tr>
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal">Power Consumption</td>
                <td className="py-3.5 px-6 text-charcoal-muted">{product.powerConsumption}</td>
              </tr>
              <tr className="hover:bg-linen-light/50 transition-colors">
                <td className="py-3.5 px-6 font-medium text-charcoal">Warranty Coverage</td>
                <td className="py-3.5 px-6 text-charcoal-muted">{product.warranty}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Expandable Secondary Technical Details (Progressive Disclosure) */}
        <details className="group bg-linen-light border border-border rounded-sm overflow-hidden transition-all">
          <summary className="flex items-center justify-between p-4 cursor-pointer text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-forest select-none focus-visible:outline-forest">
            <span>View engineering, lighting & pump parameters</span>
            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="p-6 border-t border-border bg-white text-xs space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Lighting Array:</strong>
                <p className="text-charcoal-muted leading-relaxed">
                  {product.lighting.ledCount ? `${product.lighting.ledCount} LEDs — ` : ''}
                  {product.lighting.type}
                </p>
              </div>
              {product.lighting.timerCycles && product.lighting.timerCycles.length > 0 && (
                <div>
                  <strong className="block text-charcoal font-semibold mb-0.5">Automated Cycles:</strong>
                  <p className="text-charcoal-muted leading-relaxed">
                    {product.lighting.timerCycles.join(', ')}
                  </p>
                </div>
              )}
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Circulation Method:</strong>
                <p className="text-charcoal-muted leading-relaxed">{product.growingMethod}</p>
              </div>
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Control Interface:</strong>
                <p className="text-charcoal-muted leading-relaxed">{product.controlMethod}</p>
              </div>
              <div>
                <strong className="block text-charcoal font-semibold mb-0.5">Enclosure Material:</strong>
                <p className="text-charcoal-muted leading-relaxed">{product.enclosureMaterial}</p>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* 6. WHAT'S INCLUDED & LOCAL SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inbox Package */}
          <div className="bg-white border border-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-forest pb-3 border-b border-border">
              <PackageCheck className="w-5 h-5" />
              <h3 className="font-serif text-xl text-charcoal">What’s in the Box</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal">
              {product.packageContents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Maintenance & Local Support */}
          <div className="bg-white border border-border rounded-sm p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-sage pb-3 border-b border-border">
              <Wrench className="w-5 h-5" />
              <h3 className="font-serif text-xl text-charcoal">Care & Local Support</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              <p>
                <strong className="text-charcoal block">Routine Maintenance:</strong>
                {product.maintenanceInterval}
              </p>
              <p>
                <strong className="text-charcoal block">Tamarin Headquarters Support:</strong>
                All units include local Mauritian warranty backing, prompt parts availability, and
                direct customer service from our Tamarin team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELEVANT PRODUCT FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl text-charcoal">Frequently Asked Questions</h2>
        </div>

        <Accordion
          items={productFaqs.map((faq) => ({
            id: faq.id,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      </section>

      {/* 8. FINAL CLEAN RESERVATION CTA CARD */}
      <section id="reserve" className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs uppercase tracking-widest text-sage font-bold">
            Priority Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Reserve your {product.name}
          </h2>
          <p className="text-sm text-charcoal-muted max-w-md mx-auto">
            Zero upfront obligation. Our team in Tamarin will contact you to verify delivery
            schedules and answer any questions.
          </p>
        </div>

        <PreOrderForm initialProductSlug={product.slug} />
      </section>
    </div>
  );
}

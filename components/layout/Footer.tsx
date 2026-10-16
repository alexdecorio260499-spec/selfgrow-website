import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-linen-light border-t border-forest-dark pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center">
                <Image
                  src="/brand/logo.png"
                  alt="SelfGrow Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                SelfGrow
              </span>
            </Link>
            <p className="text-sm text-linen-light/80 leading-relaxed max-w-sm">
              Pioneering smart indoor hydroponics in Mauritius. We bring nature within reach with
              low-energy, fully automated growing systems designed for homes, restaurants, and
              forward-thinking businesses.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-linen-light transition-colors"
                aria-label="SelfGrow Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-linen-light transition-colors"
                aria-label="SelfGrow Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={COMPANY.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-linen-light transition-colors"
                aria-label="SelfGrow YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Growing Systems Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-sprout">
              Growing Systems
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/systems" className="text-linen-light/80 hover:text-white transition-colors">
                  All Systems Overview
                </Link>
              </li>
              <li>
                <Link href="/systems/12-holes-planter" className="text-linen-light/80 hover:text-white transition-colors">
                  12-Holes Planter
                </Link>
              </li>
              <li>
                <Link href="/systems/8-holes-planter" className="text-linen-light/80 hover:text-white transition-colors">
                  8-Holes Planter
                </Link>
              </li>
              <li>
                <Link href="/systems/72-holes-cabinet" className="text-linen-light/80 hover:text-white transition-colors">
                  72-Holes Cabinet
                </Link>
              </li>
              <li>
                <Link href="/systems/80-holes-cabinet" className="text-linen-light/80 hover:text-white transition-colors">
                  80-Holes AM4-T Cabinet
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-sprout hover:underline inline-flex items-center gap-1 font-medium pt-1">
                  Compare Systems <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/find-your-system" className="text-linen-light/80 hover:text-white transition-colors">
                  Find Your System Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore & Learn Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-sprout">
              Explore & Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works" className="text-linen-light/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/what-can-you-grow" className="text-linen-light/80 hover:text-white transition-colors">
                  What Can You Grow?
                </Link>
              </li>
              <li>
                <Link href="/business" className="text-linen-light/80 hover:text-white transition-colors">
                  For Hospitality & Business
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-linen-light/80 hover:text-white transition-colors">
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-linen-light/80 hover:text-white transition-colors">
                  FAQ & Support Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-linen-light/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mauritius Office Col */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-sprout">
              Mauritius Office
            </h4>
            <div className="space-y-3 text-sm text-linen-light/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sprout mt-0.5 flex-shrink-0" />
                <span>{COMPANY.location.displayAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sprout flex-shrink-0" />
                <a href={`tel:${COMPANY.contact.phone}`} className="hover:text-white transition-colors">
                  {COMPANY.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sprout flex-shrink-0" />
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sprout flex-shrink-0" />
                <span>{COMPANY.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-linen-light/60 gap-4">
          <p>© {currentYear} {COMPANY.legalName}. All rights reserved. Tamarin, Mauritius.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

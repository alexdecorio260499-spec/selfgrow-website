'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, Sprout, Building2, Home as HomeIcon, Sparkles, ArrowRightLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSystemsDropdownOpen(false);
  }, [pathname]);

  // Handle scroll state for refined sticky header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSystemsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSystemsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      label: 'Growing Systems',
      href: '/systems',
      isDropdown: true,
      items: [
        {
          title: 'All Systems',
          href: '/systems',
          description: 'Browse the full range of countertop planters and vertical cabinets',
          icon: Sprout,
        },
        {
          title: 'Home Systems',
          href: '/systems/home',
          description: 'Compact 8 and 12-pod countertop planters for everyday kitchens',
          icon: HomeIcon,
        },
        {
          title: 'Commercial Systems',
          href: '/systems/commercial',
          description: 'Multi-tier 72 and 80-pod architectural cabinets for hospitality',
          icon: Building2,
        },
        {
          title: 'Compare All Models',
          href: '/compare',
          description: 'Side-by-side comparison of capacities, footprints, and power draw',
          icon: ArrowRightLeft,
        },
      ],
    },
    { label: 'Compare', href: '/compare' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'What to Grow', href: '/what-can-you-grow' },
    { label: 'For Business', href: '/business' },
    { label: 'Our Story', href: '/about' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200 border-b',
        isScrolled
          ? 'bg-linen/95 backdrop-blur-md border-border shadow-xs'
          : 'bg-linen border-border/60'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-forest"
            aria-label="SelfGrow Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border shadow-xs bg-white flex items-center justify-center p-1">
              <Image
                src="/brand/logo.png"
                alt="SelfGrow Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-tight text-forest leading-none font-bold">
                SelfGrow
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-sage font-medium mt-0.5">
                Indoor Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.isDropdown) {
                return (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setSystemsDropdownOpen((prev) => !prev)}
                      aria-expanded={systemsDropdownOpen}
                      className={cn(
                        'text-sm font-medium transition-colors flex items-center gap-1.5 py-2 focus-visible:outline-forest',
                        isActive || systemsDropdownOpen
                          ? 'text-forest font-semibold'
                          : 'text-charcoal hover:text-forest'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200 text-muted-foreground',
                          systemsDropdownOpen && 'rotate-180 text-forest'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Refined Dropdown Menu */}
                    {systemsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 mt-2 p-3 bg-linen-light border border-border rounded-sm shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="space-y-1">
                          {link.items?.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-sm hover:bg-sprout/20 transition-colors group"
                              >
                                <div className="p-2 rounded bg-white border border-border/80 text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium text-charcoal group-hover:text-forest flex items-center justify-between">
                                    {item.title}
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-forest" />
                                  </div>
                                  <p className="text-xs text-charcoal-muted mt-0.5 line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1 focus-visible:outline-forest',
                    isActive
                      ? 'text-forest font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-forest'
                      : 'text-charcoal hover:text-forest'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/find-your-system"
              className="text-xs uppercase tracking-wider font-semibold text-forest hover:text-forest-dark transition-colors py-2 px-1 focus-visible:outline-forest flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              Find Your System
            </Link>
            <Button href="/contact" size="sm" variant="primary">
              Enquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-charcoal hover:text-forest rounded focus-visible:outline-forest"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[calc(20px+5rem)] z-50 lg:hidden bg-linen border-t border-border flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-sage font-semibold mb-2">
              Navigation
            </div>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                Home
              </Link>
              <div className="py-2 border-b border-border/50">
                <div className="text-lg font-serif text-charcoal mb-2">Growing Systems</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/systems"
                    className="block text-sm text-charcoal-muted hover:text-forest"
                  >
                    • All Growing Systems
                  </Link>
                  <Link
                    href="/systems/home"
                    className="block text-sm text-charcoal-muted hover:text-forest"
                  >
                    • Home & Countertop Planters
                  </Link>
                  <Link
                    href="/systems/commercial"
                    className="block text-sm text-charcoal-muted hover:text-forest"
                  >
                    • Commercial & Hospitality Cabinets
                  </Link>
                  <Link
                    href="/compare"
                    className="block text-sm text-charcoal-muted hover:text-forest font-medium text-forest"
                  >
                    • Compare All Models
                  </Link>
                  <Link
                    href="/find-your-system"
                    className="block text-sm text-charcoal-muted hover:text-forest font-medium text-forest"
                  >
                    • Find Your System (Quiz)
                  </Link>
                </div>
              </div>
              <Link
                href="/how-it-works"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                How It Works
              </Link>
              <Link
                href="/what-can-you-grow"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                What Can You Grow?
              </Link>
              <Link
                href="/about"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                Our Story
              </Link>
              <Link
                href="/business"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                For Business
              </Link>
              <Link
                href="/support"
                className="text-lg font-serif py-2 border-b border-border/50 text-charcoal hover:text-forest"
              >
                FAQ & Support
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-border mt-6 space-y-3">
            <Button href="/contact" size="lg" className="w-full">
              Enquire or Pre-Order
            </Button>
            <div className="text-center text-xs text-charcoal-muted">
              Tamarin, Mauritius • +230 5531 5041
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

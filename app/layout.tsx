import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import { COMPANY } from '@/data/company';

export const metadata: Metadata = {
  metadataBase: new URL('https://selfgrow.green'),
  title: {
    default: 'SelfGrow — Premium Indoor Hydroponic Growing Systems | Mauritius',
    template: '%s | SelfGrow',
  },
  description:
    'Grow clean, pesticide-free herbs and leafy greens year-round. Discover intelligent countertop planters and commercial growing cabinets engineered for modern homes and businesses.',
  keywords: [
    'hydroponics Mauritius',
    'indoor garden system',
    'smart planter',
    'countertop hydroponics',
    'grow fresh herbs at home',
    'commercial vertical farming Mauritius',
    'pesticide free vegetables',
    'SelfGrow',
  ],
  authors: [{ name: 'SelfGrow Ltd' }],
  creator: 'SelfGrow Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://selfgrow.green',
    title: 'SelfGrow — Freshness, grown differently',
    description:
      'Elegant, soil-free hydroponic growing systems for homes, restaurants, and schools. Experience year-round fresh harvests with up to 90% less water.',
    siteName: 'SelfGrow',
    images: [
      {
        url: '/images/products/12-holes-main.jpg',
        width: 1200,
        height: 1200,
        alt: 'SelfGrow 12-Holes Indoor Hydroponic Planter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SelfGrow — Freshness, grown differently',
    description: 'Indoor hydroponic growing systems designed for modern living and commercial hospitality.',
    images: ['/images/products/12-holes-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://selfgrow.green" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY.name,
              legalName: COMPANY.legalName,
              url: 'https://selfgrow.green',
              logo: 'https://selfgrow.green/brand/logo.png',
              description: COMPANY.missionStatement,
              address: {
                '@type': 'PostalAddress',
                streetAddress: COMPANY.location.street,
                addressLocality: COMPANY.location.city,
                addressCountry: 'MU',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: COMPANY.contact.phone,
                contactType: 'customer service',
                email: COMPANY.contact.email,
                availableLanguage: ['English', 'French'],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-linen text-charcoal flex flex-col min-h-screen">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-white focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

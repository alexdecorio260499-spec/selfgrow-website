# SelfGrow — Modern Website & Digital Experience

> **"Freshness, grown differently."**  
> Complete redesign and full-stack implementation for **SelfGrow Ltd** (`https://selfgrow.green`), operating out of Avenue des Lauriers Roses, Tamarin, Mauritius.

---

## 1. Project Overview & Creative Direction

This repository contains the production-ready website for **SelfGrow**, an indoor hydroponic growing systems company based in Mauritius.

- **Design Philosophy**: **Direction A — Botanical Minimalism**
- **Brand Palette**:
  - Forest Green (`#183C2E`) — Primary anchor, hero accents, key CTAs
  - Sage (`#829875`) — Botanical secondary, category tags, step indicators
  - Linen (`#F4F1E8`) — Warm paper background, high-comfort reading surface
  - Sprout (`#D6E4C8`) — Growth accents, reservation badges, highlights
  - Charcoal (`#252923`) — High-contrast, WCAG AAA compliant text body
  - Border Linen (`#E3E0D7`) — Hairline architectural borders
- **Typography**:
  - Headings: `DM Serif Display` (editorial warmth and botanical poise)
  - Body & Specs: `DM Sans` (clean, contemporary clarity)

---

## 2. Verified Systems & Product Data

All specifications and photography are derived from authentic product audits and verified laboratory specifications. No specs or reviews have been fabricated.

| Model | Code | Category | Capacity | Reservoir | Power | Key Feature |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **12-Holes Planter** | `SG-H12` | Home / Countertop | 12 slots | 4.0 Litres (2–3 wks) | 15 Watts | 139 LEDs, digital timer clock, telescopic hood |
| **8-Holes Planter** | `SG-H08` | Home / Countertop | 8 slots | 6.5 Litres (3–4 wks) | 15 Watts | 192 LEDs, dual spectral modes (Veg vs Fruit/Flower) |
| **72-Holes Cabinet** | `SG-C72` | Commercial / Vertical | 72 slots | 25 Litres | ~90 Watts | 5-tier shallow liquid flow, vertical kitchen harvest |
| **80-Holes Cabinet** | `AM4-T` | Commercial Flagship | 80 slots | 35 Litres | ~120 Watts | 4 tiers, sliding acrylic doors, per-tier fans, WiFi app |

---

## 3. Architecture & File Structure

```
selfgrow-website/
├── app/
│   ├── layout.tsx                    # Root layout with fonts, JSON-LD Schema, skip link, header, footer
│   ├── globals.css                   # Tailwind v4 theme tokens, color variables, focus styles
│   ├── page.tsx                      # Editorial Homepage (11 art-directed sections)
│   ├── not-found.tsx                 # Styled 404 error page
│   ├── sitemap.ts                    # Dynamic sitemap (all static & dynamic product URLs)
│   ├── robots.ts                     # Search engine crawler directives
│   ├── systems/
│   │   ├── page.tsx                  # Full catalog index with category anchors & comparison matrix
│   │   ├── home/page.tsx             # Countertop planters focus (SG-H08, SG-H12)
│   │   ├── commercial/page.tsx       # Commercial cabinets focus (SG-C72, AM4-T)
│   │   └── [slug]/page.tsx           # Dynamic SSG Product Detail Page (gallery, specs, pre-order form)
│   ├── how-it-works/page.tsx         # Hydroponic principles, nutrient delivery, Mauritius climate
│   ├── what-can-you-grow/page.tsx    # Botanical directory with category filtering & harvest guides
│   ├── business/page.tsx             # B2B hospitality, restaurants, resorts & schools
│   ├── about/page.tsx                # Tamarin origin story, brand values, local support
│   ├── support/page.tsx              # FAQ hub (11 verified items) & maintenance routine
│   ├── contact/
│   │   ├── page.tsx                  # Contact entry with Suspense boundary
│   │   └── ContactContent.tsx        # Pre-order reservation tab & general enquiry tab
│   ├── privacy/page.tsx              # Mauritian Data Protection Act 2017 compliant policy
│   ├── terms/page.tsx                # Launch batch reservation terms & local warranty policy
│   └── api/
│       ├── enquire/route.ts          # Server-validated pre-order reservation endpoint
│       └── contact/route.ts          # Server-validated message & consultation endpoint
├── components/
│   ├── ui/                           # Button, Badge, Accordion
│   ├── layout/                       # AnnouncementBar, Header, Footer
│   ├── products/                     # ProductCard, ProductGallery, ProductSpecsTable
│   ├── comparison/                   # ProductComparisonTable (desktop matrix + mobile switcher)
│   ├── selector/                     # ProductSelectorQuiz (4-step interactive weighted questionnaire)
│   ├── plants/                       # PlantGuideGrid (live search + category filter)
│   └── forms/                        # PreOrderForm, ContactForm, CommercialForm
├── data/
│   ├── company.ts                    # Verified company contacts, Tamarin address, metrics
│   ├── products.ts                   # Single source of truth for all 4 product models
│   ├── plants.ts                     # 11+ culinary herbs, crisp greens, fruiting crops, flowers
│   └── faqs.ts                       # 11 categorized verified FAQs
├── lib/
│   ├── mailer.ts                     # Decoupled email dispatcher with safe dev logging fallback
│   ├── utils.ts                      # Tailwind class merging helper
│   └── validations.ts                # Zod schemas for forms and API requests
└── public/
    ├── brand/logo.png                # Authentic SelfGrow logo
    └── images/products/              # Verified authentic product and cabinet photography
```

---

## 4. Key Interactive Components

1. **Product Comparison Table (`components/comparison/ProductComparisonTable.tsx`)**:
   - Comprehensive side-by-side technical matrix of all 4 models.
   - Dual view: Responsive desktop grid and tabbed mobile selector.
2. **Product Selector Quiz (`components/selector/ProductSelectorQuiz.tsx`)**:
   - 4-step lifestyle questionnaire calculating weighted match scores across all models.
   - Recommends best match with key reasons and direct pre-order links.
3. **Botanical Guide (`components/plants/PlantGuideGrid.tsx`)**:
   - Real-time search across plant names, descriptions, and culinary uses.
   - Category filtering (Herbs, Greens, Fruiting, Flowers, Microgreens).
4. **Server-Validated Forms (`components/forms/`)**:
   - Instant client-side validation using Zod schemas.
   - Server-side validation route returning unique reference numbers (`SG-RES-...` / `SG-MSG-...`).
   - Decoupled `mailer.ts` supporting Resend or falling back safely to structured console logging.

---

## 5. Getting Started & Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation
```bash
git clone https://github.com/selfgrow/selfgrow-website.git
cd selfgrow-website
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your keys (optional for local development, as the app includes safe logging fallbacks):
```env
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM="SelfGrow <onboarding@resend.dev>"
EMAIL_TO="contact@selfgrow.green"
NEXT_PUBLIC_SITE_URL="https://selfgrow.green"
```

### Running Locally
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm run start
```
Visit `http://localhost:3000` (or the port specified in `-p`).

---

## 6. Verification & Quality Assurance

- **Type Safety**: Fully typed with TypeScript (`npx tsc --noEmit` passes with 0 errors).
- **Linting**: Conforms to Next.js 15 ESLint rules (`npm run build` generates 24 static & dynamic pages with 0 errors).
- **Accessibility**: Form labels, ARIA expanded state, keyboard navigation, skip-to-content link, and WCAG AA contrast.
- **Technical SEO**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph cards, Twitter cards, and Schema.org `Organization` structured data.
- **Local Mauritian Operations**: Verified address (`Avenue des Lauriers Roses, Tamarin`), phone (`+230 55315041`), and email (`contact@selfgrow.green`).

---

© SelfGrow Ltd. Avenue des Lauriers Roses, Tamarin, Mauritius.

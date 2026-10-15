import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'sg-12-holes',
    name: '12-Holes Planter',
    slug: '12-holes-planter',
    modelIdentifier: 'SG-H12',
    category: 'home',
    categoryLabel: 'Home & Countertop',
    tagline: 'High-density daily fresh herbs and leafy greens on your kitchen counter.',
    shortDescription:
      'The quintessential countertop garden. Engineered with 12 growing pods, a 4-litre transparent-gauge water reservoir, 139 full-spectrum LEDs, and automated timer cycles for 2–3 weeks of effortless growth.',
    fullDescription:
      'Designed for contemporary kitchens and culinary lovers, the SelfGrow 12-Holes Planter brings farm-fresh basil, mint, parsley, and crisp baby greens right to your cooking station. Its smart LED canopy features 139 scientifically-balanced diodes simulating optimal solar spectra without radiant heat. An integrated clock display and 4 selectable photoperiod cycles (12h, 14h, 16h, 24h) orchestrate growth automatically, while the whisper-quiet submerged circulation pump ensures roots receive constant oxygen and mineral nutrients.',
    mainImage: '/images/products/12-holes-main.jpg',
    gallery: [
      {
        src: '/images/products/12-holes-main.jpg',
        alt: 'SelfGrow 12-Holes Planter with lush herbs and strawberries',
        caption: 'Full 12-pod configuration in sleek matte black finish.',
      },
      {
        src: '/images/products/12-holes-tank.jpg',
        alt: 'Large 4-litre capacity water tank and top refill port',
        caption: '4L graduated reservoir provides 2–3 weeks of autonomous hydration.',
      },
      {
        src: '/images/products/12-holes-front.jpg',
        alt: 'SelfGrow 12-Holes Planter with edible flowers and mixed greens',
        caption: 'Telescopic light hood adjusts seamlessly as crops mature.',
      },
    ],
    growingCapacity: 12,
    growingCapacityUnit: 'growth slots',
    dimensions: {
      widthCm: 38,
      depthCm: 18,
      heightCm: 45,
      formatted: '38 × 18 × 45 cm (adjustable hood height)',
    },
    waterCapacity: '4.0 Litres',
    waterAutonomy: '2 to 3 weeks between refills',
    powerConsumption: '15 Watts (~2.5 – 3.5 kWh / month)',
    lighting: {
      ledCount: 139,
      type: 'Full-spectrum LED panel (daylight white, deep red, royal blue)',
      timerCycles: ['12 hours', '14 hours', '16 hours', '24 hours continuous'],
    },
    growingMethod: 'Recirculating hydroponic deep water culture with auto-timed aerating pump',
    controlMethod: 'Front digital clock display with cycle selection touch keys',
    supportedPlants: [
      'Sweet Genovese Basil',
      'Italian Flat-Leaf Parsley',
      'Spearmint & Peppermint',
      'Fresh Coriander / Cilantro',
      'Butterhead & Romaine Lettuce',
      'Baby Spinach & Red Mustard',
      'Microgreens & Arugula',
      'Alpine Wild Strawberries',
    ],
    enclosureMaterial: 'Food-grade BPA-free matte black ABS with anodised aluminium telescopic post',
    features: [
      {
        title: '139 High-PAR Grow LEDs',
        description: 'Tuned spectrum promotes rapid photosynthesis and essential oil concentration for maximum herbal aroma.',
      },
      {
        title: 'Autonomous 4L Reservoir',
        description: 'Lasts 2–3 weeks without attention—grow effortlessly even while traveling or away on business.',
      },
      {
        title: 'Whisper-Quiet Circulation',
        description: 'Submerged ultra-quiet pump (<25dB) cycles every 30 minutes to maintain oxygenated nutrient flow.',
      },
      {
        title: 'Graduated Level Gauge',
        description: 'Clear front indicator allows instant inspection of water volume (1.3L, 2.2L, 3.1L, 4L Max).',
      },
    ],
    packageContents: [
      'SelfGrow 12-Holes Planter Base Unit (4L reservoir)',
      'Telescopic LED Grow Light Hood',
      '12 Reusable Grow Baskets & Bio-Degradable Sponge Pods',
      '12 Sprout Germination Domes',
      'Submerged Ultra-Quiet Water Pump (pre-installed)',
      'Low-Voltage DC Power Adapter (100–240V compatible)',
      'SelfGrow Mineral Nutrient Starter Pack (A + B formula)',
      'Comprehensive Quick-Start & Planting Manual',
    ],
    maintenanceInterval: 'Rinse reservoir and refill nutrients every 14–21 days.',
    warranty: '1-Year Limited Manufacturer Warranty + Local Mauritian Support',
    availability: 'Launch Batch Pre-Order',
    intendedEnvironment: 'Kitchen countertops, home breakfast nooks, apartment shelves, reception desks',
    badge: 'Most Popular for Home',
    seoTitle: 'SelfGrow 12-Holes Countertop Hydroponic Planter | Smart Indoor Gardening',
    seoDescription:
      'Discover the SelfGrow 12-Holes Planter. 4L water tank, 139 LEDs, digital timer, and 15W ultra-low power. Grow fresh culinary herbs and salad greens at home all year round.',
  },
  {
    id: 'sg-8-holes',
    name: '8-Holes Planter',
    slug: '8-holes-planter',
    modelIdentifier: 'SG-H08',
    category: 'home',
    categoryLabel: 'Home & Countertop',
    tagline: 'Deep reservoir and spacious pod layout optimized for fruiting crops and floral blooms.',
    shortDescription:
      'Sculpted with a generous 6.5-litre reservoir and 192 LEDs. Features dual spectral modes for vegetables or flowering & fruiting plants, making it ideal for dwarf cherry tomatoes, sweet peppers, and edible flowers.',
    fullDescription:
      'The SelfGrow 8-Holes Planter offers increased spacing between grow ports and a deeper 6.5L reservoir to accommodate root-heavy and bushy fruiting varieties. An intuitive top-mounted capacitive touch panel allows one-touch switching between "Vegetables" mode (enhanced blue light for compact foliage) and "Flowers & Fruits" mode (rich red wavelength stimulation for pollination and fruit set). Its 3-tier selectable photoperiod (6h, 8h, 12h) supports energy-conscious growing for homes, modern offices, and classrooms.',
    mainImage: '/images/products/8-holes-main.jpg',
    gallery: [
      {
        src: '/images/products/8-holes-main.jpg',
        alt: 'SelfGrow 8-Holes Planter with fruiting tomatoes and control panel',
        caption: 'Dual spectral controls with high output 192 LED array.',
      },
      {
        src: '/images/products/8-holes-office.jpg',
        alt: 'SelfGrow 8-Holes Planter in home office setting',
        caption: 'Quiet and architectural, fitting naturally into workspaces and living rooms.',
      },
    ],
    growingCapacity: 8,
    growingCapacityUnit: 'growth slots',
    dimensions: {
      widthCm: 35,
      depthCm: 26,
      heightCm: 48,
      formatted: '35 × 26 × 48 cm (adjustable hood height)',
    },
    waterCapacity: '6.5 Litres',
    waterAutonomy: '2 to 4 weeks between refills',
    powerConsumption: '15 Watts (~2.5 – 3.5 kWh / month)',
    lighting: {
      ledCount: 192,
      type: 'Dynamic dual-spectrum LED array (Vegetable & Fruiting modes)',
      modes: ['Vegetables Mode (Leafy vegetative growth)', 'Flowers & Fruits Mode (Flowering & fruiting induction)'],
      timerCycles: ['6 hours', '8 hours', '12 hours'],
    },
    growingMethod: 'Submerged root oxygenation with intermittent water circulation',
    controlMethod: 'Top capacitive touch panel with spectral mode and timer selectors',
    supportedPlants: [
      'Micro-Dwarf Cherry Tomatoes',
      'Mini Sweet Bell Peppers',
      'Alpine & Chandler Strawberries',
      'Edible Miniature Roses & Violas',
      'Gourmet Leaf Lettuces',
      'Bush Basil & French Tarragon',
      'Culinary Sage & Thyme',
    ],
    enclosureMaterial: 'Food-grade BPA-free sculpted warm ivory ABS with brushed aluminum stem',
    features: [
      {
        title: 'Dual Spectral Intelligence',
        description: 'Switch between leaf-optimised wavelengths and flower/fruit bloom spectra with a single tap.',
      },
      {
        title: 'Deep 6.5L Reservoir',
        description: 'Expanded water volume cushions nutrient temperature and extends refill intervals up to 4 weeks.',
      },
      {
        title: '192 Intense Diodes',
        description: 'High photon density enables vigorous flower bud formation and uniform tomato cluster ripening.',
      },
      {
        title: 'Wider Pod Pitch',
        description: 'Extra lateral clearance allows broader leaf canopy spread without crowding neighboring plants.',
      },
    ],
    packageContents: [
      'SelfGrow 8-Holes Planter Main Reservoir Body (6.5L)',
      '192-LED Touch-Controlled Grow Light Hood',
      '8 Specialized Grow Baskets & Mineral Peat Pods',
      '8 Pod Sprout Domes & Hole Plugs',
      'Integrated Circulation Pump Unit',
      'AC Power Adapter (Universal 110–240V)',
      'Liquid Nutrient Twin-Pack (Vegetative & Bloom)',
      'Illustrated Setup & Recipe Companion Guide',
    ],
    maintenanceInterval: 'Top up water monthly; flush reservoir between crop rotations.',
    warranty: '1-Year Limited Manufacturer Warranty + Local Mauritian Support',
    availability: 'Launch Batch Pre-Order',
    intendedEnvironment: 'Home kitchens, living room credenzas, private offices, educational science corners',
    badge: 'Best for Fruiting & Flowers',
    seoTitle: 'SelfGrow 8-Holes Hydroponic Planter | Dual-Spectrum Fruits & Herbs',
    seoDescription:
      'Grow cherry tomatoes, strawberries, and herbs indoors with the SelfGrow 8-Holes Planter. 6.5L tank, 192 LEDs, dual spectral modes, and silent water circulation.',
  },
  {
    id: 'sg-72-holes',
    name: '72-Holes Cabinet',
    slug: '72-holes-cabinet',
    modelIdentifier: 'SG-C72',
    category: 'commercial',
    categoryLabel: 'Commercial & High Yield',
    tagline: 'High-density vertical growing for high-volume family kitchens, boutique cafes, and schools.',
    shortDescription:
      'A compact 5-tier vertical hydroponic powerhouse. Utilises shallow liquid flow technology with dedicated multi-tier LED light bars to produce continuous daily harvests across 72 plant stations.',
    fullDescription:
      'The SelfGrow 72-Holes Cabinet bridges the gap between countertop hobby planters and industrial greenhouses. Engineered with a vertical upright architecture, it stacks 5 independent growing tiers within a modest floor footprint of less than 0.35 square metres. Each tier is illuminated by balanced linear LED fixtures and fed through a gravity-assisted shallow liquid flow circulation loop. It delivers up to 15–20 heads of fresh salad greens and abundant herb bundles every single week, dramatically lowering grocery food miles and eliminating packaging waste.',
    mainImage: '/images/products/72-holes-main.png',
    gallery: [
      {
        src: '/images/products/72-holes-main.png',
        alt: 'SelfGrow 72-Holes Vertical Hydroponic Cabinet',
        caption: '5-tier modular white upright frame with individual tier lighting.',
      },
    ],
    growingCapacity: 72,
    growingCapacityUnit: 'growth slots across 5 tiers',
    dimensions: {
      widthCm: 65,
      depthCm: 35,
      heightCm: 165,
      formatted: '65 × 35 × 165 cm',
    },
    waterCapacity: '25.0 Litres base reservoir',
    waterAutonomy: '10 to 14 days under continuous multi-tier growth',
    powerConsumption: '~90 Watts (~24 – 28 kWh / month)',
    lighting: {
      type: '5 Linear Multi-Band LED Grow Bars (one per growing tier)',
      timerCycles: ['Programmable digital timer (12h / 14h / 16h / 18h)'],
    },
    growingMethod: 'Shallow Liquid Flow (NFT/DFT hybrid) with automated nutrient circulation',
    controlMethod: 'Centralised digital micro-controller with pump & lighting scheduler',
    supportedPlants: [
      'Gourmet Salad Mix (Butterhead, Oakleaf, Lollo Bionda, Batavia)',
      'Asian Leafy Greens (Pak Choi, Tatsoi, Gai Lan)',
      'Commercial Culinary Herbs (Basil, Mint, Coriander, Dill, Chives)',
      'Swiss Chard, Rainbow Chard & Dwarf Kale',
      'Culinary Microgreens & Shoots',
      'Medicinal Herbal Infusion Plants',
    ],
    enclosureMaterial: 'Heavy-duty structural polymer with powder-coated internal framework and leveling feet',
    features: [
      {
        title: 'Continuous Harvest Rotation',
        description: 'Stagger tier plantings across 5 levels to harvest fresh greens 3 to 4 times every week.',
      },
      {
        title: 'Vertical Space Efficiency',
        description: 'Replaces up to 15m² of outdoor garden plot in just 0.23m² of indoor floor space.',
      },
      {
        title: 'Shallow Liquid Flow',
        description: 'Continuous thin-film nutrient flow prevents root rot and accelerates growth by up to 35%.',
      },
      {
        title: 'Lower Power than a Fridge',
        description: 'Efficient modern drivers draw approximately 90W—running for less than traditional kitchen refrigeration.',
      },
    ],
    packageContents: [
      'SelfGrow 72-Holes 5-Tier Modular Upright Structure',
      '25L Base Nutrient Solution Reservoir with Submersible Industrial Pump',
      '5 High-Efficiency Linear LED Grow Bars & Integrated Cable Looms',
      '72 Heavy-Duty Hydroponic Net Pots & Growing Substrate Pods',
      'Automated Controller Unit with Digital Timer Interface',
      'Plumbing Manifold with Quick-Connect Drain & Return Valves',
      'Commercial-Grade Nutrient Concentrate A + B (1L Set)',
      'Professional Crop Cycling & Maintenance Documentation',
    ],
    maintenanceInterval: 'Check water level weekly; full nutrient reservoir exchange every 21 days.',
    warranty: '2-Year Commercial & Domestic Limited Warranty + On-Site Setup Option in Mauritius',
    availability: 'Commercial Consultation',
    intendedEnvironment: 'High-yield residential kitchens, boutique cafes, school biology labs, company wellness cafeterias',
    badge: 'Maximum Yield Efficiency',
    seoTitle: 'SelfGrow 72-Holes Vertical Hydroponic Cabinet | High-Yield Indoor System',
    seoDescription:
      'The SelfGrow 72-Holes Cabinet delivers continuous daily harvest across 5 vertical tiers. Shallow liquid flow, full LED spectrum, and 25L tank. Perfect for cafes and schools.',
  },
  {
    id: 'sg-80-holes',
    name: '80-Holes Cabinet',
    slug: '80-holes-cabinet',
    modelIdentifier: 'AM4-T',
    category: 'commercial',
    categoryLabel: 'Flagship Commercial',
    tagline: 'Architectural acrylic-enclosed climate system with independent tier ventilation and mobile app control.',
    shortDescription:
      'Our flagship commercial growing cabinet. Features a powder-coated aluminium chassis, transparent sliding acrylic doors, independent layer cross-flow ventilation, digital telemetry, and full iOS/Android smart app integration.',
    fullDescription:
      'The SelfGrow AM4-T 80-Holes Cabinet represents the pinnacle of commercial indoor horticulture. Crafted for high-end dining, luxury resort kitchens, farm-to-table restaurants, and boutique grocery spaces, this architectural showcase encloses 80 cultivation slots across 4 tiers within a clean acrylic environment. Sliding acrylic doors shield crops from ambient kitchen dust and insects while retaining optimal micro-climate humidity. Each tier features dedicated cross-flow silent cooling fans to prevent heat stagnation and strengthen seedling stems. Full telemetry and control are accessible via smartphone app or the upper digital status display.',
    mainImage: '/images/products/80-holes-main.jpg',
    gallery: [
      {
        src: '/images/products/80-holes-main.jpg',
        alt: 'SelfGrow 80-Holes AM4-T Cabinet live cultivation view',
        caption: 'Enclosed 4-tier acrylic cabinet with vigorous live produce.',
      },
      {
        src: '/images/products/80-holes-specs.jpg',
        alt: 'SelfGrow 80-Holes AM4-T Cabinet dimensional blueprint and specifications',
        caption: 'Engineered specifications: 85cm W × 36cm D × 180cm H with 31.5cm reservoir.',
      },
    ],
    growingCapacity: 80,
    growingCapacityUnit: 'growth slots across 4 sealed tiers (20 per tier)',
    dimensions: {
      widthCm: 85,
      depthCm: 36,
      heightCm: 180,
      formatted: '85 × 36 × 180 cm (Tier spacing: 24.5 cm; Reservoir base: 31.5 cm)',
    },
    waterCapacity: '35.0 Litres enclosed base reservoir',
    waterAutonomy: '14 to 21 days with automated recirculating loop',
    powerConsumption: '~120 Watts max (intelligent adaptive throttling)',
    lighting: {
      type: '4 Commercial Wide-Spectrum Aluminum LED light bars',
      modes: ['Vegetative', 'Fruiting', 'Living Display / Dimming Night'],
      timerCycles: ['Fully programmable 24h schedule via Mobile App or touch panel'],
    },
    growingMethod: 'Automated Recirculating Deep & Film Flow with multi-stage particle filtration',
    controlMethod: 'Integrated upper digital display (Temp/Hum/Status) + WiFi Mobile App (iOS / Android)',
    supportedPlants: [
      'Living Herb Bar for Chefs (Sweet Basil, Thai Basil, Tarragon, Chervil, Rosemary, Mint)',
      'Signature Salad Greens for Table-Side Harvesting',
      'Artisanal Microgreens & Pea Tendrils',
      'Edible Flowers for Cocktail Garnish & Pastry (Nasturtium, Borage, Pansy)',
      'Medicinal Plants & Spearmint Infusions',
      'Miniature Strawberries for Dessert Plating',
    ],
    enclosureMaterial:
      'Architectural extruded aluminium framework with UV-stable optical acrylic sliding panels and sealed base',
    features: [
      {
        title: 'Full Mobile App Control',
        description: 'Monitor real-time temperature, schedule lighting photoperiods, and adjust fan speeds from any iOS or Android phone.',
      },
      {
        title: 'Layer-by-Layer Cross Ventilation',
        description: 'Dedicated silent fans on each tier deliver micro-climate air exchange, preventing mold and fortifying stem integrity.',
      },
      {
        title: 'Pest & Dust Sealed Enclosure',
        description: 'Sliding acrylic doors protect high-value crops from kitchen airborne grease, particulate matter, and pests.',
      },
      {
        title: 'Dining Room Visual Centerpiece',
        description: 'Elegant architectural illumination turns living plants into a captivating dining feature for guests and clients.',
      },
    ],
    packageContents: [
      'SelfGrow AM4-T Architectural 4-Tier Aluminium Growing Cabinet',
      'Full Acrylic Enclosure with Smooth-Slide Access Doors',
      '4 Independent Cross-Flow Tier Ventilation Fan Assemblies',
      '35L Concealed Base Reservoir with Dual High-Efficiency Pumps',
      'WiFi Smart Controller & Upper Integrated Status Display',
      '80 Professional Net Pots, Washable Pod Sleeves & Seed Sponges',
      'Commercial Nutrient Starter Pack (5L Concentrate Series)',
      'White-Glove Delivery, Assembly & Staff Training Consultation (Mauritius)',
    ],
    maintenanceInterval: 'Monthly nutrient swap; quarterly system flush. Dedicated support contracts available.',
    warranty: '2-Year Commercial Warranty + Priority Replacement Support in Mauritius',
    availability: 'Commercial Consultation',
    intendedEnvironment: 'Fine dining restaurants, luxury hotels, cocktail bars, corporate headquarters, executive lounges',
    badge: 'Commercial Flagship',
    seoTitle: 'SelfGrow 80-Holes AM4-T Smart Growing Cabinet | Commercial Hydroponics',
    seoDescription:
      'The SelfGrow AM4-T 80-Holes Cabinet features acrylic sliding doors, 4 tiers, mobile app control, and per-tier ventilation. Designed for luxury hospitality and restaurants in Mauritius.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: 'home' | 'commercial'): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

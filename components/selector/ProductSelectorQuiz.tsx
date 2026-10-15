'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, RotateCcw, CheckCircle2, Sparkles, Building2, Home as HomeIcon, Leaf, Sliders } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface QuestionOption {
  id: string;
  label: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  tags: string[]; // used for weighted scoring
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'What are you growing for?',
    subtitle: 'Select the primary setting for your new indoor system.',
    options: [
      {
        id: 'home-personal',
        label: 'My Home or Apartment',
        description: 'Daily fresh herbs, salad garnishes, and healthy meals for myself or partner.',
        icon: HomeIcon,
        tags: ['home', 'countertop', 'compact'],
      },
      {
        id: 'family-kitchen',
        label: 'Family Everyday Kitchen',
        description: 'Continuous greens and fun gardening experiences for kids and family cooking.',
        icon: Leaf,
        tags: ['home', 'family', 'greens'],
      },
      {
        id: 'restaurant-hospitality',
        label: 'Restaurant, Cafe or Bar',
        description: 'Fresh living garnishes, table-side herb displays, and gourmet plating consistency.',
        icon: Building2,
        tags: ['commercial', 'restaurant', 'high-yield', 'display'],
      },
      {
        id: 'school-office',
        label: 'School, University or Office',
        description: 'Educational sustainability projects or company wellness communal area.',
        icon: Sliders,
        tags: ['commercial', 'educational', 'moderate-yield'],
      },
    ],
  },
  {
    id: 2,
    title: 'Where will the system be placed?',
    subtitle: 'Understanding your available space ensures the right footprint.',
    options: [
      {
        id: 'kitchen-counter',
        label: 'Kitchen Countertop',
        description: 'Right next to the food prep zone or sink with compact dimensions (under 40cm wide).',
        tags: ['countertop', 'compact'],
      },
      {
        id: 'dining-credenza',
        label: 'Dining Table or Sideboard',
        description: 'A stylish decorative focal point in a living room, dining area, or coffee station.',
        tags: ['countertop', 'display', 'flowers'],
      },
      {
        id: 'dedicated-floor',
        label: 'Dedicated Floor Space',
        description: 'A vertical upright unit (approx. 0.3m² footprint, up to 1.8m height).',
        tags: ['vertical', 'floor', 'high-yield'],
      },
      {
        id: 'commercial-pass',
        label: 'Commercial Kitchen or Bar Pass',
        description: 'Professional hospitality service area with dust/steam protection.',
        tags: ['commercial', 'sealed', 'high-yield'],
      },
    ],
  },
  {
    id: 3,
    title: 'What crops do you want to harvest most?',
    subtitle: 'Different root systems and fruiting needs benefit from tailored light & spacing.',
    options: [
      {
        id: 'leafy-herbs',
        label: 'Culinary Herbs & Tender Greens',
        description: 'Sweet basil, spearmint, coriander, parsley, crisp butterhead lettuce, and baby kale.',
        tags: ['herbs', 'greens', 'dense'],
      },
      {
        id: 'fruiting-flowers',
        label: 'Fruiting Crops & Edible Blooms',
        description: 'Mini cherry tomatoes, sweet bell peppers, wild strawberries, and edible pansies.',
        tags: ['fruiting', 'flowers', 'deep-tank'],
      },
      {
        id: 'bulk-salads',
        label: 'High-Volume Continuous Salads',
        description: 'Multiple heads of lettuce and leafy Asian greens harvested every few days.',
        tags: ['high-yield', 'vertical'],
      },
      {
        id: 'chef-specialties',
        label: 'Chef Specialty Herb Bar',
        description: 'Living cocktail mint, microgreens, and exotic garnishes for professional service.',
        tags: ['commercial', 'app-control', 'display'],
      },
    ],
  },
  {
    id: 4,
    title: 'What technology feature matters most?',
    subtitle: 'Help us calibrate your ideal level of automation and control.',
    options: [
      {
        id: 'plug-and-grow',
        label: 'Effortless Plug & Grow Simplicity',
        description: 'Autonomous timed lighting and silent water circulation without complicated setup.',
        tags: ['simple', 'compact'],
      },
      {
        id: 'spectral-tuning',
        label: 'Dual Spectral Light Tuning',
        description: 'Switch between vegetative growth mode and flower/fruit bloom mode at a touch.',
        tags: ['spectral', 'fruiting'],
      },
      {
        id: 'multi-tier-capacity',
        label: 'Maximum Vertical Yield',
        description: '5 tiered growing levels providing the highest crop harvest per square foot.',
        tags: ['high-yield', 'vertical'],
      },
      {
        id: 'mobile-app-control',
        label: 'Smart App Control & Micro-Ventilation',
        description: 'Smartphone telemetry, individual layer fans, and sealed protective acrylic enclosure.',
        tags: ['commercial', 'app-control', 'sealed'],
      },
    ],
  },
];

export default function ProductSelectorQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [recommendation, setRecommendation] = useState<{
    product: Product;
    reason: string;
    secondaryProduct?: Product;
  } | null>(null);

  const totalSteps = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];

  const handleSelectOption = (optionId: string) => {
    const updated = { ...selectedAnswers, [currentStep]: optionId };
    setSelectedAnswers(updated);

    // Auto advance if not last step
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate recommendation
      calculateRecommendation(updated);
    }
  };

  const calculateRecommendation = (answers: Record<number, string>) => {
    // Collect all chosen tags
    const chosenTags: string[] = [];
    QUESTIONS.forEach((q, idx) => {
      const optId = answers[idx];
      const opt = q.options.find((o) => o.id === optId);
      if (opt) chosenTags.push(...opt.tags);
    });

    let score12 = 0;
    let score08 = 0;
    let score72 = 0;
    let score80 = 0;

    // Rules logic:
    if (chosenTags.includes('commercial') || chosenTags.includes('restaurant') || chosenTags.includes('sealed') || chosenTags.includes('app-control')) {
      score80 += 6;
      score72 += 3;
    }
    if (chosenTags.includes('high-yield') || chosenTags.includes('vertical') || chosenTags.includes('educational')) {
      score72 += 5;
      score80 += 4;
    }
    if (chosenTags.includes('countertop') || chosenTags.includes('home')) {
      score12 += 4;
      score08 += 4;
    }
    if (chosenTags.includes('fruiting') || chosenTags.includes('flowers') || chosenTags.includes('deep-tank') || chosenTags.includes('spectral')) {
      score08 += 6;
    }
    if (chosenTags.includes('herbs') || chosenTags.includes('compact') || chosenTags.includes('simple') || chosenTags.includes('dense')) {
      score12 += 5;
    }

    // Determine highest score
    const scores = [
      { slug: '80-holes-cabinet', score: score80 },
      { slug: '72-holes-cabinet', score: score72 },
      { slug: '8-holes-planter', score: score08 },
      { slug: '12-holes-planter', score: score12 },
    ];
    scores.sort((a, b) => b.score - a.score);

    const winnerSlug = scores[0].slug;
    const runnerUpSlug = scores[1].slug;

    const winnerProduct = PRODUCTS.find((p) => p.slug === winnerSlug) || PRODUCTS[0];
    const runnerUpProduct = PRODUCTS.find((p) => p.slug === runnerUpSlug);

    let reasonText = '';
    if (winnerSlug === '12-holes-planter') {
      reasonText =
        'Your answers emphasize convenient countertop placement and a continuous variety of fresh kitchen herbs and leafy greens with minimal footprint and zero hassle.';
    } else if (winnerSlug === '8-holes-planter') {
      reasonText =
        'Your preference for fruiting crops (like cherry tomatoes and strawberries) or edible flowers benefits from the wider pod pitch, 6.5L deep reservoir, and dedicated dual-spectrum touch controls of the 8-Holes Planter.';
    } else if (winnerSlug === '72-holes-cabinet') {
      reasonText =
        'You need substantial weekly yield without sprawling floor demands. The 72-Holes Cabinet delivers 5 vertical tiers of continuous harvest in a modest 0.23m² footprint for healthy families, cafes, or schools.';
    } else {
      reasonText =
        'For high-end restaurant dining, hospitality herb bars, and premium spaces, the architectural AM4-T 80-Holes Cabinet provides sliding acrylic dust protection, independent layer ventilation, and full mobile smartphone telemetry.';
    }

    setRecommendation({
      product: winnerProduct,
      reason: reasonText,
      secondaryProduct: runnerUpProduct,
    });
  };

  const restart = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setRecommendation(null);
  };

  // Result view
  if (recommendation) {
    const p = recommendation.product;
    return (
      <div className="w-full max-w-3xl mx-auto bg-white border border-border rounded-sm p-6 sm:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-200">
        <div className="text-center mb-8">
          <Badge variant="sprout" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Recommendation Complete
          </Badge>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Your Ideal System: {p.name}
          </h3>
          <p className="text-sm text-charcoal-muted max-w-xl mx-auto mt-2 leading-relaxed">
            {recommendation.reason}
          </p>
        </div>

        {/* Recommended Card Highlight */}
        <div className="bg-linen-light border border-forest/30 rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative w-48 h-48 bg-white p-4 rounded-sm border border-border flex-shrink-0">
            <Image
              src={p.mainImage}
              alt={p.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs uppercase font-mono px-2 py-0.5 bg-white border border-border rounded">
                Model: {p.modelIdentifier}
              </span>
              <span className="text-xs uppercase font-semibold text-forest">
                {p.growingCapacity} Growth Slots
              </span>
            </div>
            <h4 className="font-serif text-2xl text-charcoal font-bold">{p.name}</h4>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              {p.shortDescription}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Button href={`/systems/${p.slug}`} variant="primary">
                Explore Full Specifications <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href={`/contact?product=${p.slug}`} variant="outline">
                Reserve This Model
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary runner up if available */}
        {recommendation.secondaryProduct && (
          <div className="p-4 bg-linen/50 border border-border rounded-sm flex items-center justify-between text-xs mb-6">
            <span className="text-charcoal-muted">
              Also closely suited to your profile:{' '}
              <strong className="text-charcoal font-semibold">
                {recommendation.secondaryProduct.name}
              </strong>{' '}
              ({recommendation.secondaryProduct.growingCapacity} slots)
            </span>
            <Link
              href={`/systems/${recommendation.secondaryProduct.slug}`}
              className="text-forest font-semibold hover:underline flex items-center gap-1"
            >
              Compare <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}

        {/* Restart Action */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={restart}
            className="text-xs text-charcoal-muted hover:text-forest inline-flex items-center gap-1.5 focus-visible:outline-forest py-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Start quiz over
          </button>
        </div>
      </div>
    );
  }

  // Quiz Stepper View
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-border rounded-sm p-6 sm:p-10 shadow-xs">
      {/* Progress Bar & Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-charcoal-muted font-semibold mb-2">
          <span>Question {currentStep + 1} of {totalSteps}</span>
          <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-linen border border-border rounded-full overflow-hidden">
          <div
            className="h-full bg-forest transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Details */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">
          {currentQuestion.title}
        </h3>
        <p className="text-sm text-charcoal-muted mt-1">
          {currentQuestion.subtitle}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option) => {
          const isSelected = selectedAnswers[currentStep] === option.id;
          const Icon = option.icon;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => handleSelectOption(option.id)}
              className={cn(
                'w-full text-left p-4 sm:p-5 border rounded-sm transition-all focus-visible:outline-forest flex items-start gap-4 group',
                isSelected
                  ? 'border-forest bg-sprout/20 ring-1 ring-forest'
                  : 'border-border bg-white hover:border-charcoal/40 hover:bg-linen-light/40'
              )}
            >
              <div
                className={cn(
                  'w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors',
                  isSelected
                    ? 'border-forest bg-forest text-white'
                    : 'border-border group-hover:border-forest text-transparent'
                )}
              >
                <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-charcoal group-hover:text-forest transition-colors flex items-center gap-2">
                  {Icon && <Icon className="w-4 h-4 text-forest shrink-0" />}
                  <span>{option.label}</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="text-xs uppercase tracking-wider font-semibold text-charcoal-muted hover:text-forest inline-flex items-center gap-1 focus-visible:outline-forest py-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
        ) : (
          <span />
        )}

        <div className="text-xs text-charcoal-muted">
          Click an option to proceed
        </div>
      </div>
    </div>
  );
}

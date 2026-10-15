'use client';

import React, { useState } from 'react';
import { CommercialFormSchema, CommercialFormData } from '@/lib/validations';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle, Building2, Calendar, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommercialFormProps {
  className?: string;
}

export default function CommercialForm({ className }: CommercialFormProps) {
  const [formData, setFormData] = useState<CommercialFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Cafe',
    productInterest: '80-Holes Cabinet (AM4-T)',
    estimatedUnits: '1 - 2 Units',
    intendedApplication: '',
    preferredContactMethod: 'Email',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    refNumber?: string;
    message?: string;
    mode?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = CommercialFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'commercial' }),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit commercial consultation');
      }

      setSubmissionResult({
        success: true,
        refNumber: resData.refNumber,
        message: resData.message,
        mode: resData.mode,
      });
    } catch (err: unknown) {
      setSubmissionResult({
        success: false,
        message:
          err instanceof Error
            ? err.message
            : 'Error submitting consultation request. Please call +230 55315041.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult?.success) {
    return (
      <div className={cn('bg-white border border-forest/30 p-8 rounded-sm text-center shadow-xs', className)}>
        <div className="w-12 h-12 bg-sprout/60 text-forest rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-serif text-2xl text-charcoal font-bold mb-1">
          Consultation Request Confirmed
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-3">
          Reference: {submissionResult.refNumber}
        </p>
        <p className="text-sm text-charcoal-muted max-w-lg mx-auto leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our commercial
          integration team has received your project request and will contact you via {formData.preferredContactMethod}{' '}
          within 24 business hours to arrange your technical space assessment or showroom demonstration in Tamarin.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-linen-light/60 border border-border rounded-sm text-xs text-left mb-6">
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-charcoal">Step 1: Contact</strong>
              <span className="text-charcoal-muted">Needs assessment within 24 hours.</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-charcoal">Step 2: Site Survey</strong>
              <span className="text-charcoal-muted">On-site space & water/electrical verification.</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-charcoal">Step 3: Setup</strong>
              <span className="text-charcoal-muted">White-glove installation & training.</span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => {
            setSubmissionResult(null);
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              businessType: 'Restaurant / Cafe',
              productInterest: '80-Holes Cabinet (AM4-T)',
              estimatedUnits: '1 - 2 Units',
              intendedApplication: '',
              preferredContactMethod: 'Email',
            });
          }}
          variant="outline"
          size="sm"
        >
          Submit Another Commercial Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('bg-white border border-border p-6 sm:p-8 rounded-sm shadow-xs space-y-5', className)}>
      <div className="border-b border-border pb-4 mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-sage">
          Commercial Integration
        </span>
        <h3 className="font-serif text-2xl text-charcoal mt-0.5">Request a Consultation</h3>
        <p className="text-xs text-charcoal-muted mt-1">
          Tailored indoor growing solutions for hospitality, restaurants, schools, and offices in Mauritius.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xs text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Contact Name *
          </label>
          <input
            id="comm-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Chef Alain Morel"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="comm-company" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Company / Property Name *
          </label>
          <input
            id="comm-company"
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Le Morne Resort & Spa"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Work Email Address *
          </label>
          <input
            id="comm-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alain@lemorne.mu"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="comm-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Direct Phone / WhatsApp *
          </label>
          <input
            id="comm-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+230 5..."
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Business Type & Product Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Business Type *
          </label>
          <select
            id="comm-type"
            value={formData.businessType}
            onChange={(e) =>
              setFormData({ ...formData, businessType: e.target.value as CommercialFormData['businessType'] })
            }
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            <option value="Restaurant / Cafe">Restaurant / Bistro / Cafe</option>
            <option value="Hotel / Resort">Hotel / Luxury Resort</option>
            <option value="Corporate Office">Corporate Office / Cafeteria</option>
            <option value="School / University">School / University Lab</option>
            <option value="Hospitality Bar">Cocktail Lounge / Mixology Bar</option>
            <option value="Other">Other Facility</option>
          </select>
        </div>

        <div>
          <label htmlFor="comm-product" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Primary System of Interest *
          </label>
          <select
            id="comm-product"
            value={formData.productInterest}
            onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            <option value="80-Holes Cabinet (AM4-T)">80-Holes Cabinet (AM4-T Flagship with App Control)</option>
            <option value="72-Holes Cabinet">72-Holes Cabinet (5-Tier Vertical Modular)</option>
            <option value="Multi-Unit Custom Array">Multi-Cabinet Custom Array</option>
            <option value="Countertop Planter Fleet">Countertop Planter Fleet (Table/Bar Display)</option>
          </select>
        </div>
      </div>

      {/* Scope & Preferred Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comm-units" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Estimated Scope or Unit Count
          </label>
          <select
            id="comm-units"
            value={formData.estimatedUnits}
            onChange={(e) => setFormData({ ...formData, estimatedUnits: e.target.value })}
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            <option value="1 - 2 Units">1 – 2 Systems (Pilot / Single Venue)</option>
            <option value="3 - 5 Units">3 – 5 Systems (Multi-Tier Herb Bar / Full Kitchen)</option>
            <option value="6+ Units / Enterprise">6+ Systems (Resort-Wide / Multiple Locations)</option>
            <option value="Custom Project">Bespoke Architectural Installation</option>
          </select>
        </div>

        <div>
          <label htmlFor="comm-contact-method" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Preferred Consultation Method
          </label>
          <select
            id="comm-contact-method"
            value={formData.preferredContactMethod}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferredContactMethod: e.target.value as CommercialFormData['preferredContactMethod'],
              })
            }
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            <option value="Email">Email Consultation & Proposal</option>
            <option value="Phone / WhatsApp">Phone / WhatsApp Call</option>
            <option value="On-Site Visit in Mauritius">On-Site Visit & Space Survey (Mauritius)</option>
          </select>
        </div>
      </div>

      {/* Application Overview */}
      <div>
        <label htmlFor="comm-app" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
          Intended Application & Target Crops *
        </label>
        <textarea
          id="comm-app"
          rows={3}
          required
          value={formData.intendedApplication}
          onChange={(e) => setFormData({ ...formData, intendedApplication: e.target.value })}
          placeholder="e.g. We plan to install a live herb bar for our culinary team to harvest Thai basil, mint, and edible violas table-side for our fine dining dinner service..."
          className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
        />
        {errors.intendedApplication && (
          <p className="text-xs text-red-600 mt-1">{errors.intendedApplication}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
        Schedule Commercial Consultation
      </Button>
    </form>
  );
}

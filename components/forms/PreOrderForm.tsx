'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { PreOrderFormSchema } from '@/lib/validations';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreOrderFormProps {
  initialProductSlug?: string;
  className?: string;
}

export default function PreOrderForm({ initialProductSlug, className }: PreOrderFormProps) {
  const defaultProduct =
    PRODUCTS.find((p) => p.slug === initialProductSlug)?.name || PRODUCTS[0].name;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: defaultProduct,
    quantity: 1,
    location: '',
    notes: '',
    termsAccepted: true,
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

    const result = PreOrderFormSchema.safeParse(formData);
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
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit reservation');
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
            : 'Unable to connect to reservation service. Please call us at +230 55315041.',
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
          Reservation Confirmed
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-3">
          Reference: {submissionResult.refNumber}
        </p>
        <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. Your priority launch batch allocation for the{' '}
          <strong>{formData.product}</strong> ({formData.quantity} unit{formData.quantity > 1 ? 's' : ''}) has been
          registered. Our Mauritian team will reach out to confirm delivery arrangements.
        </p>
        {submissionResult.mode === 'development-fallback' && (
          <div className="p-3 bg-linen text-xs text-charcoal-muted rounded-xs border border-border mb-6 text-left">
            <strong>System Notice:</strong> Server processed in local logger mode. Real email delivery will activate once
            <code>RESEND_API_KEY</code> or SMTP credentials are configured.
          </div>
        )}
        <Button
          onClick={() => {
            setSubmissionResult(null);
            setFormData({
              name: '',
              email: '',
              phone: '',
              product: defaultProduct,
              quantity: 1,
              location: '',
              notes: '',
              termsAccepted: true,
            });
          }}
          variant="outline"
          size="sm"
        >
          Submit Another Reservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('bg-white border border-border p-6 sm:p-8 rounded-sm shadow-xs space-y-5', className)}>
      <div className="border-b border-border pb-4 mb-2">
        <h3 className="font-serif text-2xl text-charcoal">Launch Batch Reservation</h3>
        <p className="text-xs text-charcoal-muted mt-1">
          Reserve your unit before public launch. No immediate upfront payment required; priority batch delivery.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xs text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      {/* Product & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="product-select" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Growing System *
          </label>
          <select
            id="product-select"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            {PRODUCTS.map((prod) => (
              <option key={prod.id} value={prod.name}>
                {prod.name} ({prod.growingCapacity} slots) — {prod.categoryLabel}
              </option>
            ))}
          </select>
          {errors.product && <p className="text-xs text-red-600 mt-1">{errors.product}</p>}
        </div>

        <div>
          <label htmlFor="quantity-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Quantity
          </label>
          <input
            id="quantity-input"
            type="number"
            min={1}
            max={20}
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
        </div>
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Full Name *
          </label>
          <input
            id="name-input"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Marie Laure"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Email Address *
          </label>
          <input
            id="email-input"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="marie@example.com"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Phone / WhatsApp Number *
          </label>
          <input
            id="phone-input"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+230 5..."
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="location-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            City / Region (Mauritius)
          </label>
          <input
            id="location-input"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Tamarin, Grand Baie, Curepipe"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="notes-input" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
          Special Notes or Desired Starter Seeds (Optional)
        </label>
        <textarea
          id="notes-input"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Mention any specific herbs or vegetables you wish to grow..."
          className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="terms-checkbox"
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
          className="mt-0.5 rounded border-border text-forest focus:ring-forest"
        />
        <label htmlFor="terms-checkbox" className="text-xs text-charcoal-muted leading-relaxed">
          I consent to SelfGrow contacting me regarding my launch batch reservation and delivery schedule under the Mauritius Data Protection Act.
        </label>
      </div>
      {errors.termsAccepted && <p className="text-xs text-red-600">{errors.termsAccepted}</p>}

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
        Reserve System Allocation
      </Button>
    </form>
  );
}

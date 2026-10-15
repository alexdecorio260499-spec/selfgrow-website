'use client';

import React, { useState } from 'react';
import { ContactFormSchema, ContactFormData } from '@/lib/validations';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
    newsletterConsent: false,
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

    const result = ContactFormSchema.safeParse(formData);
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
        body: JSON.stringify(formData),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || 'Failed to submit enquiry');
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
            : 'Error sending message. Please reach out to contact@selfgrow.green directly.',
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
          Message Received
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-3">
          Reference: {submissionResult.refNumber}
        </p>
        <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed mb-6">
          Thank you for writing to SelfGrow, <strong>{formData.name}</strong>. Our team in Tamarin, Mauritius will
          respond to your enquiry via email at <strong>{formData.email}</strong> shortly.
        </p>
        {submissionResult.mode === 'development-fallback' && (
          <div className="p-3 bg-linen text-xs text-charcoal-muted rounded-xs border border-border mb-6 text-left">
            <strong>Dev Notice:</strong> Submission logged safely to server. Production SMTP / Resend delivery will dispatch when credentials are set.
          </div>
        )}
        <Button
          onClick={() => {
            setSubmissionResult(null);
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: 'General Question',
              message: '',
              newsletterConsent: false,
            });
          }}
          variant="outline"
          size="sm"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('bg-white border border-border p-6 sm:p-8 rounded-sm shadow-xs space-y-5', className)}>
      <div className="border-b border-border pb-4 mb-2">
        <h3 className="font-serif text-2xl text-charcoal">Get in Touch</h3>
        <p className="text-xs text-charcoal-muted mt-1">
          Ask questions about our systems, growing methods, or pre-order timing.
        </p>
      </div>

      {submissionResult && !submissionResult.success && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-xs text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{submissionResult.message}</span>
        </div>
      )}

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Jean Dupont"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jean@example.com"
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Phone & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+230 5..."
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
            Subject *
          </label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
          >
            <option value="General Question">General Information</option>
            <option value="Pre-Order Inquiry">Pre-Order & Availability</option>
            <option value="Commercial / Hospitality">Commercial & Hospitality Consultation</option>
            <option value="Product Support">Product Support & Setup</option>
            <option value="Partnership / Reseller">Partnership & Distribution</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
          Your Message *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can we assist your indoor growing project?"
          className="w-full p-2.5 text-sm bg-linen-light/50 border border-border rounded-xs text-charcoal focus:bg-white focus:border-forest"
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
        Send Message
      </Button>
    </form>
  );
}

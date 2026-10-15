import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Please select or enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  newsletterConsent: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const PreOrderFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please provide a contact phone number'),
  product: z.string().min(1, 'Please select a product model'),
  quantity: z.number().int().min(1).max(50).default(1),
  location: z.string().optional(),
  notes: z.string().max(1000).optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the reservation terms',
  }),
});

export type PreOrderFormData = z.infer<typeof PreOrderFormSchema>;

export const CommercialFormSchema = z.object({
  name: z.string().min(2, 'Contact name is required').max(100),
  company: z.string().min(2, 'Company or organisation name is required').max(150),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().min(7, 'Phone number is required for consultation scheduling'),
  businessType: z.enum(['Restaurant / Cafe', 'Hotel / Resort', 'Corporate Office', 'School / University', 'Hospitality Bar', 'Other']),
  productInterest: z.string().min(1, 'Please indicate your system of interest'),
  estimatedUnits: z.string().optional(),
  intendedApplication: z.string().min(10, 'Please briefly describe your space or growing project').max(1500),
  preferredContactMethod: z.enum(['Email', 'Phone / WhatsApp', 'On-Site Visit in Mauritius']).default('Email'),
});

export type CommercialFormData = z.infer<typeof CommercialFormSchema>;

import { NextResponse } from 'next/server';
import { ContactFormSchema, CommercialFormSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const isCommercial = json.formType === 'commercial';

    if (isCommercial) {
      const result = CommercialFormSchema.safeParse(json);
      if (!result.success) {
        return NextResponse.json(
          {
            success: false,
            error: 'Validation failed',
            issues: result.error.flatten().fieldErrors,
          },
          { status: 400 }
        );
      }

      const data = result.data;
      const refNumber = `SG-BIZ-${Date.now().toString(36).toUpperCase()}`;

      const mailResult = await sendEmail({
        to: 'contact@selfgrow.green',
        replyTo: data.email,
        subject: `[Commercial Enquiry] ${data.company} - ${data.businessType} (${refNumber})`,
        text: `
Commercial Project Consultation Request:
Reference: ${refNumber}
Contact Name: ${data.name}
Company: ${data.company}
Business Type: ${data.businessType}
Email: ${data.email}
Phone: ${data.phone}
Product Interest: ${data.productInterest}
Estimated Units: ${data.estimatedUnits || 'Not specified'}
Preferred Contact: ${data.preferredContactMethod}
Application Overview:
${data.intendedApplication}
        `.trim(),
        html: `
<h2>Commercial / Hospitality Enquiry</h2>
<p><strong>Reference:</strong> ${refNumber}</p>
<p><strong>Company:</strong> ${data.company} (${data.businessType})</p>
<p><strong>Contact:</strong> ${data.name} (${data.email}, ${data.phone})</p>
<p><strong>Product Interest:</strong> ${data.productInterest}</p>
<p><strong>Scope:</strong> ${data.estimatedUnits || 'Unspecified'}</p>
<p><strong>Application:</strong><br/>${data.intendedApplication.replace(/\n/g, '<br/>')}</p>
        `,
        metadata: { refNumber, company: data.company },
      });

      return NextResponse.json({
        success: true,
        refNumber,
        mode: mailResult.mode,
        message: 'Your commercial consultation request has been received. Our team will reach out within 24 hours.',
      });
    }

    // Otherwise standard contact form
    const result = ContactFormSchema.safeParse(json);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const refNumber = `SG-MSG-${Date.now().toString(36).toUpperCase()}`;

    const mailResult = await sendEmail({
      to: 'contact@selfgrow.green',
      replyTo: data.email,
      subject: `[Website Message] ${data.subject} - ${data.name} (${refNumber})`,
      text: `
Message received via SelfGrow Contact Page:
Reference: ${refNumber}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}
Message:
${data.message}
      `.trim(),
      html: `
<h2>New Contact Message</h2>
<p><strong>Reference:</strong> ${refNumber}</p>
<p><strong>From:</strong> ${data.name} (${data.email})</p>
<p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
      `,
      metadata: { refNumber },
    });

    return NextResponse.json({
      success: true,
      refNumber,
      mode: mailResult.mode,
      message: 'Thank you for reaching out. We have received your message and will respond promptly.',
    });
  } catch (error: unknown) {
    console.error('[API /api/contact] Internal Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please contact contact@selfgrow.green directly.',
      },
      { status: 500 }
    );
  }
}

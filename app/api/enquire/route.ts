import { NextResponse } from 'next/server';
import { PreOrderFormSchema } from '@/lib/validations';
import { sendEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = PreOrderFormSchema.safeParse(json);

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
    const refNumber = `SG-RES-${Date.now().toString(36).toUpperCase()}`;

    // Send confirmation & internal notification
    const mailResult = await sendEmail({
      to: 'contact@selfgrow.green',
      replyTo: data.email,
      subject: `[Pre-Order Reservation] ${data.product} - ${data.name} (${refNumber})`,
      text: `
New Launch Batch Reservation:
Reference Number: ${refNumber}
Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Selected Model: ${data.product}
Quantity: ${data.quantity}
Preferred Delivery Area: ${data.location || 'Mauritius'}
Additional Notes: ${data.notes || 'None'}
Timestamp: ${new Date().toISOString()}
      `.trim(),
      html: `
<h2>New System Pre-Order Reservation</h2>
<p><strong>Reference:</strong> ${refNumber}</p>
<p><strong>Customer:</strong> ${data.name} (${data.email})</p>
<p><strong>Phone:</strong> ${data.phone}</p>
<p><strong>System:</strong> ${data.product}</p>
<p><strong>Quantity:</strong> ${data.quantity}</p>
<p><strong>Location:</strong> ${data.location || 'Mauritius'}</p>
<p><strong>Notes:</strong> ${data.notes || 'None'}</p>
      `,
      metadata: {
        refNumber,
        product: data.product,
        customerEmail: data.email,
      },
    });

    return NextResponse.json({
      success: true,
      refNumber,
      mode: mailResult.mode,
      message: 'Your system reservation has been received. Our team will contact you shortly.',
    });
  } catch (error: unknown) {
    console.error('[API /api/enquire] Internal Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred. Please try again or contact us directly at contact@selfgrow.green.',
      },
      { status: 500 }
    );
  }
}

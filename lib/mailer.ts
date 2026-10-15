export interface SendEmailPayload {
  to: string;
  subject: string;
  replyTo?: string;
  text: string;
  html: string;
  metadata?: Record<string, unknown>;
}

export interface SendEmailResult {
  success: boolean;
  messageId: string;
  mode: 'production' | 'development-fallback';
  deliveredTo?: string;
  error?: string;
}

export async function sendEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const targetRecipient = process.env.ENQUIRY_RECIPIENT_EMAIL || 'contact@selfgrow.green';

  // 1. If RESEND_API_KEY is configured, dispatch through Resend REST API
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'SelfGrow <noreply@selfgrow.green>',
          to: [targetRecipient],
          reply_to: payload.replyTo,
          subject: payload.subject,
          html: payload.html,
          text: payload.text,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Mailer] Resend API error:', errorText);
        return {
          success: false,
          messageId: `err-${Date.now()}`,
          mode: 'production',
          error: `Delivery provider error: ${response.status}`,
        };
      }

      const resData = (await response.json()) as { id: string };
      return {
        success: true,
        messageId: resData.id || `msg-${Date.now()}`,
        mode: 'production',
        deliveredTo: targetRecipient,
      };
    } catch (err: unknown) {
      console.error('[Mailer] Network dispatch error:', err);
      return {
        success: false,
        messageId: `err-${Date.now()}`,
        mode: 'production',
        error: err instanceof Error ? err.message : 'Unknown network failure',
      };
    }
  }

  // 2. Local / Development Fallback: Safe structured logging without claiming external delivery
  const generatedId = `SG-DEV-${Date.now().toString(36).toUpperCase()}`;
  console.info('----------------------------------------------------');
  console.info(`[SelfGrow Mailer Fallback] Message Received: ${generatedId}`);
  console.info(`Subject: ${payload.subject}`);
  console.info(`Reply-To: ${payload.replyTo || 'None'}`);
  console.info(`Target Recipient: ${targetRecipient}`);
  console.info(`Metadata:`, payload.metadata);
  console.info(`Body:\n${payload.text}`);
  console.info('----------------------------------------------------');

  return {
    success: true,
    messageId: generatedId,
    mode: 'development-fallback',
    deliveredTo: targetRecipient,
  };
}

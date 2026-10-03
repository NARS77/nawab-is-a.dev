import { Resend } from "resend";
import nodemailer from "nodemailer";

export interface ContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<{
  success: boolean;
  provider: "resend" | "gmail" | "mock";
  messageId?: string;
  error?: string;
}> {
  const { name, email, subject, message, timestamp } = params;
  const recipient = process.env.CONTACT_TO_EMAIL || "nawabshaikh0518@gmail.com";

  const emailSubject = `[Portfolio Inquiry] ${subject} - from ${name}`;
  const textContent = `
New message received from Nawab Shaikh's Portfolio Website:

--------------------------------------------------
Sender Name:    ${name}
Sender Email:   ${email}
Inquiry Topic:  ${subject}
Submitted At:   ${timestamp}
--------------------------------------------------

Message:
${message}

--------------------------------------------------
(You can reply directly to this email to contact ${name} at ${email})
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #09090b; color: #f4f4f5; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background-color: #141416; border: 1px solid #27272a; border-radius: 8px; overflow: hidden; }
    .header { padding: 20px 24px; border-bottom: 1px solid #27272a; background-color: #18181b; }
    .header h2 { margin: 0; font-size: 18px; color: #ffffff; }
    .header p { margin: 4px 0 0; font-size: 12px; color: #a1a1aa; font-family: monospace; }
    .body { padding: 24px; }
    .meta-row { margin-bottom: 12px; font-size: 13px; }
    .meta-label { color: #a1a1aa; font-family: monospace; display: inline-block; width: 110px; }
    .meta-value { color: #ffffff; font-weight: 500; }
    .message-box { margin-top: 20px; padding: 16px; background-color: #09090b; border: 1px solid #27272a; border-radius: 6px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #e4e4e7; }
    .footer { padding: 16px 24px; border-top: 1px solid #27272a; font-size: 12px; color: #71717a; font-family: monospace; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>New Portfolio Inquiry</h2>
      <p>Source: nawabshaikh.dev &bull; Contact Form</p>
    </div>
    <div class="body">
      <div class="meta-row">
        <span class="meta-label">From:</span>
        <span class="meta-value">${name}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Reply-To:</span>
        <span class="meta-value"><a href="mailto:${email}" style="color: #fafafa;">${email}</a></span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Inquiry:</span>
        <span class="meta-value">${subject}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Timestamp:</span>
        <span class="meta-value">${timestamp}</span>
      </div>
      <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    </div>
    <div class="footer">
      Hit 'Reply' in your mail client to respond directly to ${email}.
    </div>
  </div>
</body>
</html>
`.trim();

  // 1. Try Resend if RESEND_API_KEY is configured (Best for Next.js / Vercel)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

      const data = await resend.emails.send({
        from: fromEmail,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      if (data.error) {
        throw new Error(data.error.message);
      }

      console.log(`[Email Sent via Resend] ID: ${data.data?.id}`);
      return { success: true, provider: "resend", messageId: data.data?.id };
    } catch (err: any) {
      console.error("[Resend Error]:", err?.message || err);
      // If Resend failed, attempt Gmail fallback if configured
      if (!process.env.GMAIL_APP_PASSWORD) {
        return { success: false, provider: "resend", error: err?.message };
      }
    }
  }

  // 2. Try Gmail SMTP if GMAIL_APP_PASSWORD is configured
  if (process.env.GMAIL_APP_PASSWORD) {
    try {
      const user = process.env.GMAIL_USER || "nawabshaikh0518@gmail.com";
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const info = await transporter.sendMail({
        from: `"${name}" <${user}>`,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[Email Sent via Gmail SMTP] ID: ${info.messageId}`);
      return { success: true, provider: "gmail", messageId: info.messageId };
    } catch (err: any) {
      console.error("[Gmail SMTP Error]:", err?.message || err);
      return { success: false, provider: "gmail", error: err?.message };
    }
  }

  // 3. Fallback: Local simulation mode (no API keys configured yet)
  console.log("------------------------------------------------------------------");
  console.log("[LOCAL EMAIL SIMULATION] No RESEND_API_KEY or GMAIL_APP_PASSWORD set.");
  console.log(`To: ${recipient}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${emailSubject}`);
  console.log(`Message: ${message}`);
  console.log("------------------------------------------------------------------");

  return { success: true, provider: "mock" };
}

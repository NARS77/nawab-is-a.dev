import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Strict boundary validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      subject: subject || "General Inquiry",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Dispatch email via Resend or Gmail SMTP (or mock simulation in local development)
    const result = await sendContactEmail(payload);

    // If an optional Webhook (Slack / Discord / Zapier) is configured:
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `*New Portfolio Inquiry*\n*From:* ${payload.name} (${payload.email})\n*Subject:* ${payload.subject}\n*Message:*\n${payload.message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook dispatch error:", webhookErr);
      }
    }

    if (!result.success) {
      console.warn("Email service encountered an issue:", result.error);
      return NextResponse.json(
        {
          success: false,
          error:
            "The contact form could not send your message. Please email nawabshaikh1014@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. Nawab will respond to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please reach out directly via nawabshaikh1014@gmail.com" },
      { status: 500 }
    );
  }
}

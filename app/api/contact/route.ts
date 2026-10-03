import { NextResponse } from "next/server";

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

    // If an optional Resend API key is configured in production environment variables:
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.CONTACT_FROM_EMAIL || "portfolio@nawabshaikh.dev",
            to: process.env.CONTACT_TO_EMAIL || "nawabshaikh0518@gmail.com",
            reply_to: payload.email,
            subject: `[Portfolio Inquiry] ${payload.subject} from ${payload.name}`,
            text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\nTime: ${payload.timestamp}\n\nMessage:\n${payload.message}`,
          }),
        });
      } catch (emailErr) {
        console.error("Resend dispatch error (proceeding with fallback):", emailErr);
      }
    }

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

    // Production log
    console.log("[Contact Submission Received]", {
      from: payload.email,
      name: payload.name,
      subject: payload.subject,
      timestamp: payload.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received. Nawab will respond to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please reach out directly via nawabshaikh0518@gmail.com" },
      { status: 500 }
    );
  }
}

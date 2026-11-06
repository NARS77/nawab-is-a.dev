import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  checkRateLimit,
  verifyWebhookAuth,
  sanitizeWebhookStatus,
  setLiveStatus,
  clearLiveStatus,
  getLiveStatus,
  WebhookStatusPayload,
} from "@/lib/status";

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "127.0.0.1"
  );
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // 1. Rate limiting (30 requests / 60 seconds)
    const allowed = await checkRateLimit(ip, 30, 60);
    if (!allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a minute." },
        { status: 429 }
      );
    }

    // 2. Secret authentication
    if (!verifyWebhookAuth(req)) {
      return NextResponse.json(
        { error: "Unauthorized. Invalid or missing secret." },
        { status: 401 }
      );
    }

    // 3. Parse payload (supports JSON and form-data)
    let payload: WebhookStatusPayload = {};
    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      try {
        payload = await req.json();
      } catch {
        payload = {};
      }
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      try {
        const formData = await req.formData();
        payload = {
          action: formData.get("action")?.toString(),
          app: formData.get("app")?.toString(),
          title: formData.get("title")?.toString(),
          artist: formData.get("artist")?.toString(),
          text: formData.get("text")?.toString(),
          category: formData.get("category")?.toString(),
          ttlSeconds: formData.get("ttlSeconds")
            ? parseInt(formData.get("ttlSeconds")!.toString(), 10)
            : undefined,
        };
      } catch {
        payload = {};
      }
    } else {
      // Fallback: check query params if body is empty or raw
      try {
        payload = await req.json();
      } catch {
        const sp = req.nextUrl.searchParams;
        payload = {
          action: sp.get("action") || undefined,
          app: sp.get("app") || undefined,
          title: sp.get("title") || undefined,
          artist: sp.get("artist") || undefined,
          text: sp.get("text") || undefined,
          category: sp.get("category") || undefined,
        };
      }
    }

    // 4. Sanitize with privacy and Swiss design rules
    const processed = sanitizeWebhookStatus(payload);

    const saved = processed.action === "clear"
      ? await clearLiveStatus()
      : await setLiveStatus(processed.text, processed.ttlSeconds);
    if (!saved) {
      return NextResponse.json({ error: "Status could not be saved." }, { status: 503 });
    }

    // 5. Revalidate main page
    try {
      revalidatePath("/");
    } catch {
      // safe fallback
    }

    const currentStatus = await getLiveStatus();

    return NextResponse.json({
      success: true,
      action: processed.action,
      appliedText: processed.action === "set" ? processed.text : null,
      ttlSeconds: processed.action === "set" ? processed.ttlSeconds : null,
      currentStatus,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error processing webhook." },
      { status: 500 }
    );
  }
}

/**
 * Also support GET for simple MacroDroid URL triggers or browser testing.
 * Example: /api/status/webhook?secret=...&action=clear
 * Example: /api/status/webhook?secret=...&app=spotify&title=Starboy
 */
export async function GET(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    // 1. Rate limiting
    const allowed = await checkRateLimit(ip, 30, 60);
    if (!allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please wait a minute." },
        { status: 429 }
      );
    }

    // 2. Secret authentication
    if (!verifyWebhookAuth(req)) {
      return NextResponse.json(
        { error: "Unauthorized. Invalid or missing secret." },
        { status: 401 }
      );
    }

    const sp = req.nextUrl.searchParams;
    const payload: WebhookStatusPayload = {
      action: sp.get("action") || undefined,
      app: sp.get("app") || undefined,
      title: sp.get("title") || undefined,
      artist: sp.get("artist") || undefined,
      text: sp.get("text") || undefined,
      category: sp.get("category") || undefined,
      ttlSeconds: sp.get("ttlSeconds")
        ? parseInt(sp.get("ttlSeconds")!, 10)
        : undefined,
    };

    const processed = sanitizeWebhookStatus(payload);

    const saved = processed.action === "clear"
      ? await clearLiveStatus()
      : await setLiveStatus(processed.text, processed.ttlSeconds);
    if (!saved) {
      return NextResponse.json({ error: "Status could not be saved." }, { status: 503 });
    }

    try {
      revalidatePath("/");
    } catch {
      // safe fallback
    }

    const currentStatus = await getLiveStatus();

    return NextResponse.json({
      success: true,
      action: processed.action,
      appliedText: processed.action === "set" ? processed.text : null,
      ttlSeconds: processed.action === "set" ? processed.ttlSeconds : null,
      currentStatus,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error processing webhook." },
      { status: 500 }
    );
  }
}

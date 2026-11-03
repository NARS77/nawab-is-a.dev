import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  getLiveStatus,
  setLiveStatus,
  verifySessionToken,
  SESSION_COOKIE_NAME,
} from "@/lib/status";

export async function GET() {
  const status = await getLiveStatus();
  return NextResponse.json({ status });
}

export async function POST(req: NextRequest) {
  try {
    const sessionToken = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    if (!verifySessionToken(sessionToken)) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { text } = body;

    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json(
        { error: "Status text is required." },
        { status: 400 }
      );
    }

    const success = await setLiveStatus(text.trim());
    if (!success) {
      return NextResponse.json(
        { error: "Failed to persist status." },
        { status: 500 }
      );
    }

    // Revalidate home page immediately
    try {
      revalidatePath("/");
    } catch {
      // safe fallback
    }

    const updated = await getLiveStatus();
    return NextResponse.json({ success: true, status: updated });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

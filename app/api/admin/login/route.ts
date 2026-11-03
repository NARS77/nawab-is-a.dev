import { NextRequest, NextResponse } from "next/server";
import {
  createSignedSessionToken,
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
} from "@/lib/status";

// Simple in-memory rate limiter per IP for login attempts
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const record = loginAttempts.get(ip);

    if (record) {
      if (now - record.firstAttempt < WINDOW_MS) {
        if (record.count >= MAX_ATTEMPTS) {
          return NextResponse.json(
            { error: "Too many login attempts. Please wait 15 minutes." },
            { status: 429 }
          );
        }
      } else {
        // Reset window
        loginAttempts.set(ip, { count: 0, firstAttempt: now });
      }
    } else {
      loginAttempts.set(ip, { count: 0, firstAttempt: now });
    }

    const body = await req.json();
    const { password } = body;

    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedPassword) {
      return NextResponse.json(
        { error: "Admin authentication not configured on server (ADMIN_PASSWORD missing)." },
        { status: 500 }
      );
    }

    if (!password || password !== expectedPassword) {
      // Record failed attempt
      const curr = loginAttempts.get(ip) || { count: 0, firstAttempt: now };
      loginAttempts.set(ip, {
        count: curr.count + 1,
        firstAttempt: curr.firstAttempt,
      });

      return NextResponse.json(
        { error: "Invalid password." },
        { status: 401 }
      );
    }

    // Success: Reset rate limit
    loginAttempts.delete(ip);

    // Create signed token
    const token = createSignedSessionToken();

    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

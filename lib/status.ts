import fs from "fs";
import path from "path";
import crypto from "crypto";
import { StatusItem } from "@/content/status";

const FALLBACK_DEV_PATH = "/tmp/portfolio_status.json";

function getFormatTimeAgo(msAgo: number): string {
  const seconds = Math.floor(msAgo / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} d ago`;
}

export interface LiveStatusDisplay {
  text: string;
  updatedAt: number;
  timeAgoText: string;
  isOffline: boolean;
}

/**
 * Get current live status safely.
 * Returns null if storage fails or no status exists.
 */
export async function getLiveStatus(): Promise<LiveStatusDisplay | null> {
  try {
    let data: StatusItem | null = null;
    const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (redisUrl && redisToken) {
      const res = await fetch(`${redisUrl}/get/live_status`, {
        headers: {
          Authorization: `Bearer ${redisToken}`,
        },
        next: { revalidate: 60 },
      });
      if (res.ok) {
        const json = await res.json();
        if (json.result) {
          data = typeof json.result === "string" ? JSON.parse(json.result) : json.result;
        }
      }
    } else {
      // Local file fallback in dev
      if (fs.existsSync(FALLBACK_DEV_PATH)) {
        const fileContent = fs.readFileSync(FALLBACK_DEV_PATH, "utf-8");
        data = JSON.parse(fileContent);
      }
    }

    if (!data || !data.text || !data.updatedAt) {
      return null;
    }

    const now = Date.now();
    const diff = now - data.updatedAt;
    const isOver24Hours = diff > 24 * 60 * 60 * 1000;

    const finalText = isOver24Hours ? "Offline" : data.text;
    const timeAgo = isOver24Hours ? "updated >24h ago" : `updated ${getFormatTimeAgo(diff)}`;

    return {
      text: finalText,
      updatedAt: data.updatedAt,
      timeAgoText: timeAgo,
      isOffline: isOver24Hours || finalText.toLowerCase() === "offline",
    };
  } catch (err) {
    // Hide line if storage fails instead of showing an error
    return null;
  }
}

/**
 * Save live status to Upstash Redis or local file.
 */
export async function setLiveStatus(text: string): Promise<boolean> {
  const item: StatusItem = {
    text: text.trim(),
    updatedAt: Date.now(),
  };

  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    try {
      const res = await fetch(`${redisUrl}/set/live_status`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(item)),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  // Local file fallback
  try {
    fs.writeFileSync(FALLBACK_DEV_PATH, JSON.stringify(item), "utf-8");
    return true;
  } catch {
    return false;
  }
}

/* ---------------- Auth & Session Helpers ---------------- */

const SESSION_COOKIE_NAME = "nawab_admin_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

function getSecretKey(): string {
  return (
    process.env.SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "nawab-local-dev-fallback-secret-2026"
  );
}

export function createSignedSessionToken(): string {
  const timestamp = Date.now().toString();
  const secret = getSecretKey();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(timestamp)
    .digest("hex");
  return `${timestamp}.${signature}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timestampStr, providedSignature] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Check age (7 days)
  if (Date.now() - timestamp > SESSION_MAX_AGE * 1000) {
    return false;
  }

  const secret = getSecretKey();
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(timestampStr)
    .digest("hex");

  // Constant time comparison
  try {
    return crypto.timingSafeEqual(
      Buffer.from(providedSignature),
      Buffer.from(expectedSignature)
    );
  } catch {
    return false;
  }
}

export { SESSION_COOKIE_NAME, SESSION_MAX_AGE };

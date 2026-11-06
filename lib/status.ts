import fs from "fs";
import crypto from "crypto";
import { NextRequest } from "next/server";
import { StatusItem } from "@/content/status";

const FALLBACK_DEV_PATH = "/tmp/portfolio_status.json";
const DEFAULT_EXPIRY_SECONDS = 24 * 60 * 60; // 24 hours for admin updates

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
 * Relies on Redis native key expiry (returns null when expired).
 */
export async function getLiveStatus(): Promise<LiveStatusDisplay | null> {
  try {
    let data: StatusItem | null = null;
    let redisUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
    const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

    if (redisUrl && redisToken) {
      if (redisUrl.endsWith("/")) {
        redisUrl = redisUrl.slice(0, -1);
      }

      // 1. Try standard Upstash command array POST
      try {
        const res = await fetch(redisUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${redisToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(["GET", "live_status"]),
          cache: "no-store",
        });

        if (res.ok) {
          const json = await res.json();
          if (json.result) {
            data =
              typeof json.result === "string"
                ? JSON.parse(json.result)
                : json.result;
          }
        }
      } catch {
        // Fallback to GET endpoint
        try {
          const fallbackRes = await fetch(`${redisUrl}/get/live_status`, {
            headers: {
              Authorization: `Bearer ${redisToken}`,
            },
            cache: "no-store",
          });
          if (fallbackRes.ok) {
            const json = await fallbackRes.json();
            if (json.result) {
              data =
                typeof json.result === "string"
                  ? JSON.parse(json.result)
                  : json.result;
            }
          }
        } catch {
          // ignore
        }
      }
    } else {
      // Local file fallback in dev
      if (fs.existsSync(FALLBACK_DEV_PATH)) {
        try {
          const fileContent = fs.readFileSync(FALLBACK_DEV_PATH, "utf-8");
          const parsed = JSON.parse(fileContent);
          // Check local TTL
          if (parsed.expiresAt && Date.now() >= parsed.expiresAt) {
            try {
              fs.unlinkSync(FALLBACK_DEV_PATH);
            } catch {}
            data = null;
          } else {
            data = parsed;
          }
        } catch {
          data = null;
        }
      }
    }

    if (!data || !data.text || !data.updatedAt) {
      return null;
    }

    const now = Date.now();
    if (data.expiresAt && now >= data.expiresAt) return null;
    if (!Number.isFinite(data.updatedAt) || data.updatedAt > now) return null;
    const diff = now - data.updatedAt;
    const isOver24Hours = diff > 24 * 60 * 60 * 1000;

    const finalText = isOver24Hours ? "Offline" : data.text;
    const timeAgo = isOver24Hours
      ? "updated >24h ago"
      : `updated ${getFormatTimeAgo(diff)}`;

    return {
      text: finalText,
      updatedAt: data.updatedAt,
      timeAgoText: timeAgo,
      isOffline: isOver24Hours || finalText.toLowerCase() === "offline",
    };
  } catch {
    // Hide line if storage fails instead of throwing an error
    return null;
  }
}

/**
 * Save live status with Redis native expiration (EX flag).
 */
export async function setLiveStatus(
  text: string,
  ttlSeconds: number = DEFAULT_EXPIRY_SECONDS
): Promise<boolean> {
  if (!text.trim() || text.trim().length > 160 || !Number.isInteger(ttlSeconds) || ttlSeconds < 1 || ttlSeconds > 86400) return false;
  const item: StatusItem = {
    text: text.trim(),
    updatedAt: Date.now(),
    expiresAt: ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : undefined,
  };

  let redisUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (redisUrl && redisToken) {
    if (redisUrl.endsWith("/")) {
      redisUrl = redisUrl.slice(0, -1);
    }

    try {
      // Upstash REST API command array with native EX flag
      const command =
        ttlSeconds > 0
          ? ["SET", "live_status", JSON.stringify(item), "EX", ttlSeconds]
          : ["SET", "live_status", JSON.stringify(item)];

      const res = await fetch(redisUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(command),
      });

      if (res.ok) {
        return true;
      }

      // Secondary fallback endpoint
      const fallbackUrl =
        ttlSeconds > 0
          ? `${redisUrl}/set/live_status/${encodeURIComponent(
              JSON.stringify(item)
            )}?ex=${ttlSeconds}`
          : `${redisUrl}/set/live_status/${encodeURIComponent(
              JSON.stringify(item)
            )}`;

      const fallbackRes = await fetch(fallbackUrl, {
        headers: {
          Authorization: `Bearer ${redisToken}`,
        },
      });
      return fallbackRes.ok;
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

/**
 * Clear/delete live status from Redis or local storage (for app close / idle).
 */
export async function clearLiveStatus(): Promise<boolean> {
  let redisUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (redisUrl && redisToken) {
    if (redisUrl.endsWith("/")) {
      redisUrl = redisUrl.slice(0, -1);
    }

    try {
      const res = await fetch(redisUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(["DEL", "live_status"]),
      });

      if (res.ok) {
        return true;
      }

      const fallbackRes = await fetch(`${redisUrl}/del/live_status`, {
        headers: {
          Authorization: `Bearer ${redisToken}`,
        },
      });
      return fallbackRes.ok;
    } catch {
      return false;
    }
  }

  // Local fallback
  try {
    if (fs.existsSync(FALLBACK_DEV_PATH)) {
      fs.unlinkSync(FALLBACK_DEV_PATH);
    }
    return true;
  } catch {
    return false;
  }
}

/* ---------------- Webhook Rate Limiting ---------------- */

const memoryRateLimitMap = new Map<
  string,
  { count: number; windowStart: number }
>();

/**
 * Rate limiter: max requests per sliding window (default 20 req / 60 seconds).
 */
export async function checkRateLimit(
  identifier: string,
  maxRequests: number = 20,
  windowSeconds: number = 60
): Promise<boolean> {
  let redisUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  const key = `ratelimit:status_webhook:${identifier}`;

  if (redisUrl && redisToken) {
    if (redisUrl.endsWith("/")) redisUrl = redisUrl.slice(0, -1);
    try {
      // INCR key
      const res = await fetch(redisUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(["INCR", key]),
      });

      if (res.ok) {
        const json = await res.json();
        const count = typeof json.result === "number" ? json.result : 1;
        if (count === 1) {
          // Set expiry on first request
          await fetch(redisUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${redisToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(["EXPIRE", key, windowSeconds]),
          });
        }
        return count <= maxRequests;
      }
    } catch {
      // fallback to memory below
    }
  }

  // In-memory sliding window fallback
  const now = Date.now();
  const record = memoryRateLimitMap.get(identifier);
  if (!record || now - record.windowStart > windowSeconds * 1000) {
    memoryRateLimitMap.set(identifier, { count: 1, windowStart: now });
    return true;
  }

  record.count += 1;
  return record.count <= maxRequests;
}

/* ---------------- Webhook Sanitization & Privacy ---------------- */

export interface WebhookStatusPayload {
  action?: string;
  app?: string;
  title?: string;
  artist?: string;
  text?: string;
  category?: string;
  ttlSeconds?: number;
}

export type WebhookProcessResult =
  | { action: "clear" }
  | { action: "set"; text: string; ttlSeconds: number };

/**
 * Sanitizes input with strict privacy and Swiss poster aesthetic rules:
 * - Generic text for YouTube ("Watching YouTube") and Netflix ("Watching Netflix")
 * - Specific song/artist title allowed only for Spotify
 * - Max length 40-45 chars to maintain layout fidelity
 */
export function sanitizeWebhookStatus(
  payload: WebhookStatusPayload
): WebhookProcessResult {
  const action = payload.action?.trim().toLowerCase();
  const category = payload.category?.trim().toLowerCase();
  const app = payload.app?.trim().toLowerCase() || "";
  const rawText = payload.text?.trim() || "";

  // 1. Check for clear or idle requests
  if (
    action === "clear" ||
    action === "idle" ||
    category === "clear" ||
    category === "idle" ||
    rawText.toLowerCase() === "clear" ||
    rawText.toLowerCase() === "idle"
  ) {
    return { action: "clear" };
  }

  // 2. YouTube (Generic only, titles discarded)
  if (app.includes("youtube") || rawText.toLowerCase().includes("youtube")) {
    return {
      action: "set",
      text: "Watching YouTube",
      ttlSeconds: payload.ttlSeconds || 30 * 60, // 30 mins
    };
  }

  // 3. Netflix (Generic only, titles discarded)
  if (app.includes("netflix") || rawText.toLowerCase().includes("netflix")) {
    return {
      action: "set",
      text: "Watching Netflix",
      ttlSeconds: payload.ttlSeconds || 45 * 60, // 45 mins
    };
  }

  // 4. Prime Video / Disney / Twitch
  if (app.includes("prime") || rawText.toLowerCase().includes("prime video")) {
    return {
      action: "set",
      text: "Watching Prime Video",
      ttlSeconds: payload.ttlSeconds || 30 * 60,
    };
  }
  if (app.includes("twitch") || rawText.toLowerCase().includes("twitch")) {
    return {
      action: "set",
      text: "Watching stream",
      ttlSeconds: payload.ttlSeconds || 30 * 60,
    };
  }

  // 5. Spotify (Track title allowed)
  if (
    app.includes("spotify") ||
    category === "music" ||
    rawText.toLowerCase().includes("spotify")
  ) {
    const rawTitle = payload.title?.trim() || "";
    const rawArtist = payload.artist?.trim() || "";

    let spotifyText = "Listening to Spotify";
    if (rawTitle) {
      const combined = rawArtist ? `${rawTitle} · ${rawArtist}` : rawTitle;
      const cleanTitle = combined.replace(/[\r\n\t]+/g, " ").trim();
      const truncated =
        cleanTitle.length > 30 ? `${cleanTitle.slice(0, 29)}…` : cleanTitle;
      spotifyText = `Listening to ${truncated}`;
    } else if (rawText && !rawText.toLowerCase().includes("spotify")) {
      const truncated =
        rawText.length > 30 ? `${rawText.slice(0, 29)}…` : rawText;
      spotifyText = `Listening to ${truncated}`;
    }

    return {
      action: "set",
      text: spotifyText,
      ttlSeconds: payload.ttlSeconds || 15 * 60, // 15 mins
    };
  }

  // 6. Gaming
  if (
    category === "gaming" ||
    rawText.toLowerCase().startsWith("playing ") ||
    app.includes("game")
  ) {
    let gameName = payload.title || payload.app || rawText;
    gameName = gameName.replace(/^playing\s+/i, "").trim();
    if (gameName.length > 25) {
      gameName = `${gameName.slice(0, 24)}…`;
    }
    return {
      action: "set",
      text: `Playing ${gameName || "Games"}`,
      ttlSeconds: payload.ttlSeconds || 45 * 60, // 45 mins
    };
  }

  // 7. General Custom Status
  let cleanText = rawText || payload.title || "Online";
  if (cleanText.length > 40) {
    cleanText = `${cleanText.slice(0, 39)}…`;
  }

  return {
    action: "set",
    text: cleanText,
    ttlSeconds: payload.ttlSeconds || 30 * 60, // 30 mins
  };
}

/**
 * Validates webhook caller authorization.
 */
export function verifyWebhookAuth(req: NextRequest): boolean {
  const secretKey =
    process.env.AUTO_STATUS_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD?.trim();

  if (!secretKey) return false;

  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.slice(7).trim();
    if (token === secretKey) return true;
  }

  const headerSecret = req.headers.get("x-webhook-secret")?.trim();
  if (headerSecret === secretKey) return true;

  const querySecret = req.nextUrl.searchParams.get("secret")?.trim();
  if (querySecret === secretKey) return true;

  return false;
}

/* ---------------- Auth & Session Helpers ---------------- */

const SESSION_COOKIE_NAME = "nawab_admin_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days

function getSecretKey(): string | undefined {
  return (
    process.env.SESSION_SECRET ||
    process.env.ADMIN_PASSWORD
  );
}

export function createSignedSessionToken(): string {
  const timestamp = Date.now().toString();
  const secret = getSecretKey();
  if (!secret) throw new Error("Admin session signing is not configured.");
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
  if (!/^\d+$/.test(timestampStr)) return false;
  const timestamp = Number(timestampStr);
  if (!Number.isSafeInteger(timestamp) || timestamp > Date.now()) return false;

  if (Date.now() - timestamp >= SESSION_MAX_AGE * 1000) {
    return false;
  }

  const secret = getSecretKey();
  if (!secret) return false;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(timestampStr)
    .digest("hex");

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

"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveHeroNameProps {
  className?: string;
}

export default function InteractiveHeroName({ className }: InteractiveHeroNameProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Only run on desktop with fine pointer and no reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) return;

    let rafId: number | null = null;
    let mouseX = -9999;
    let mouseY = -9999;
    let isTracking = false;

    const RADIUS = 280; // effect radius in pixels
    const BASE_WEIGHT = 400;
    const MAX_WEIGHT = 700;

    function updateWeights() {
      if (!isTracking) {
        letterRefs.current.forEach((span) => {
          if (span) {
            span.style.fontWeight = `${MAX_WEIGHT}`;
            span.style.fontVariationSettings = `'wght' ${MAX_WEIGHT}`;
          }
        });
        return;
      }

      letterRefs.current.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - letterCenterX, mouseY - letterCenterY);

        if (dist < RADIUS) {
          const factor = Math.cos((dist / RADIUS) * (Math.PI / 2)); // Smooth cosine curve
          const targetWeight = Math.round(
            BASE_WEIGHT + (MAX_WEIGHT - BASE_WEIGHT) * factor
          );
          span.style.fontWeight = `${targetWeight}`;
          span.style.fontVariationSettings = `'wght' ${targetWeight}`;
        } else {
          span.style.fontWeight = `${BASE_WEIGHT}`;
          span.style.fontVariationSettings = `'wght' ${BASE_WEIGHT}`;
        }
      });
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isTracking = true;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateWeights();
          rafId = null;
        });
      }
    }

    function onMouseLeave() {
      isTracking = false;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateWeights();
          rafId = null;
        });
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const first = "NAWAB".split("");
  const second = "SHAIKH".split("");

  let counter = 0;

  return (
    <h1
      ref={containerRef}
      className={`text-[13vw] sm:text-[14vw] lg:text-[15vw] font-bold leading-[0.88] tracking-tighter uppercase select-none break-words ${className}`}
      aria-label="NAWAB SHAIKH"
    >
      <span className="block whitespace-nowrap">
        {first.map((char, i) => {
          const idx = counter++;
          return (
            <span
              key={`f-${i}`}
              ref={(el) => {
                letterRefs.current[idx] = el;
              }}
              className="inline-block transition-[font-weight] duration-75"
              style={{ fontWeight: 700 }}
            >
              {char}
            </span>
          );
        })}
      </span>
      <span className="block whitespace-nowrap">
        {second.map((char, i) => {
          const idx = counter++;
          return (
            <span
              key={`s-${i}`}
              ref={(el) => {
                letterRefs.current[idx] = el;
              }}
              className="inline-block transition-[font-weight] duration-75"
              style={{ fontWeight: 700 }}
            >
              {char}
            </span>
          );
        })}
      </span>
    </h1>
  );
}

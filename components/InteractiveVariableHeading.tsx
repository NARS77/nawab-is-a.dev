"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveVariableHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  radius?: number;
  baseWeight?: number;
  activeWeight?: number;
}

export default function InteractiveVariableHeading({
  text,
  as: Component = "h2",
  className = "",
  style = {},
  radius = 240,
  baseWeight = 400,
  activeWeight = 700,
}: InteractiveVariableHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) return;

    let rafId: number | null = null;
    let mouseX = -9999;
    let mouseY = -9999;
    let isInsideViewport = false;

    function updateLetterWeights() {
      if (!isInsideViewport) {
        letterRefs.current.forEach((span) => {
          if (span) {
            span.style.fontWeight = `${activeWeight}`;
            span.style.fontVariationSettings = `'wght' ${activeWeight}`;
          }
        });
        return;
      }

      // Check if heading is in viewport before doing math
      const headingRect = el?.getBoundingClientRect();
      if (
        !headingRect ||
        headingRect.bottom < 0 ||
        headingRect.top > window.innerHeight
      ) {
        return;
      }

      letterRefs.current.forEach((span) => {
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

        if (dist < radius) {
          const factor = Math.cos((dist / radius) * (Math.PI / 2));
          const targetWeight = Math.round(
            baseWeight + (activeWeight - baseWeight) * factor
          );
          span.style.fontWeight = `${targetWeight}`;
          span.style.fontVariationSettings = `'wght' ${targetWeight}`;
        } else {
          span.style.fontWeight = `${baseWeight}`;
          span.style.fontVariationSettings = `'wght' ${baseWeight}`;
        }
      });
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isInsideViewport = true;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateLetterWeights();
          rafId = null;
        });
      }
    }

    function onMouseLeave() {
      isInsideViewport = false;
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateLetterWeights();
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
  }, [radius, baseWeight, activeWeight]);

  // Split text by words, then by letters, to keep words together on line breaks
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <Component
      ref={headingRef as any}
      className={className}
      style={style}
      aria-label={text}
    >
      {words.map((word, wordIdx) => (
        <span key={`w-${wordIdx}`} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const currentIdx = letterIndex++;
            return (
              <span
                key={`c-${charIdx}`}
                ref={(span) => {
                  letterRefs.current[currentIdx] = span;
                }}
                aria-hidden="true"
                className="inline-block transition-[font-weight] duration-75"
                style={{ fontWeight: activeWeight }}
              >
                {char}
              </span>
            );
          })}
          {wordIdx < words.length - 1 && (
            <span aria-hidden="true" className="inline-block">
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Component>
  );
}

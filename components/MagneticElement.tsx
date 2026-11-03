"use client";

import React, { useRef, useEffect } from "react";

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  pullFactor?: number; // 0.15 to 0.3
  as?: React.ElementType;
  [key: string]: any;
}

export default function MagneticElement({
  children,
  className = "",
  pullFactor = 0.2,
  as: Component = "div",
  ...rest
}: MagneticElementProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !canHover) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;

    function handleMouseMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetX = (e.clientX - centerX) * pullFactor;
      targetY = (e.clientY - centerY) * pullFactor;

      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${targetX.toFixed(2)}px, ${targetY.toFixed(2)}px, 0)`;
          rafId = null;
        });
      }
    }

    function handleMouseLeave() {
      if (!el) return;
      if (rafId !== null) cancelAnimationFrame(rafId);
      el.style.transition = "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)";
      el.style.transform = "translate3d(0, 0, 0)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 250);
    }

    el.addEventListener("mousemove", handleMouseMove as EventListener, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [pullFactor]);

  return (
    <Component
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

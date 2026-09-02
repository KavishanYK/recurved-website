"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

// Signature scroll-linked accent line down the left margin; hidden on mobile and for reduced-motion users.
export default function StoryThread() {
  const shouldReduceMotion = useReducedMotion();
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let raf = 0;
    const updateProgress = () => {
      raf = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${Math.min(1, Math.max(0, progress))})`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-6 top-0 z-40 hidden h-[100svh] w-px bg-lavender lg:block"
    >
      <div
        ref={fillRef}
        className="h-full w-full origin-top bg-accent transition-transform duration-150 ease-out"
        style={{ transform: "scaleY(0)" }}
      />
    </div>
  );
}

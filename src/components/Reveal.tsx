"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "li";
};

export default function Reveal({ children, delay = 0, className, y = 20, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

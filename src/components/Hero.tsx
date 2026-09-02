"use client";

import { ArrowRight, Flame } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import TextType from "./TextType";

const LINE_ONE = "I'm looking for my very first client";
const LINE_TWO = "want to be the one?";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[100svh] max-w-3xl scroll-mt-16 flex-col justify-center px-5 py-12"
    >
      <motion.div initial={initial} animate={animate} transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="mb-5 min-h-[2.6em] font-serif text-3xl font-semibold leading-tight text-cream sm:min-h-[2.3em] sm:text-5xl">
          <TextType
            as="span"
            text={[LINE_ONE, LINE_TWO]}
            textColors={["var(--color-cream)", "var(--color-accent)"]}
            loop
            showCursor
            typingSpeed={16}
            deletingSpeed={12}
            pauseDuration={1200}
            cursorClassName="text-accent"
          />
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          I&apos;m Recurved, a Melbourne-based web developer just getting started. This first
          project is completely free — I just need one real business to build it for, properly.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-accent/90"
        >
          Apply to Be My First Client
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
        className="relative mt-10 max-w-md sm:mt-12"
      >
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface shadow-sm">
          <div className="flex items-center gap-1.5 bg-black/30 px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-accent/25" />
            <span className="h-2 w-2 rounded-full bg-accent/25" />
            <span className="h-2 w-2 rounded-full bg-accent/25" />
            <span className="ml-2 font-mono text-xs text-ink/40">yourbusiness.com.au</span>
          </div>
          <div className="p-6">
            <div className="mb-3 h-4 w-1/2 rounded bg-accent/15" />
            <div className="mb-2 h-2 w-5/6 rounded bg-ink/10" />
            <div className="mb-5 h-2 w-2/3 rounded bg-ink/10" />
            <div className="h-7 w-28 rounded-full bg-dark" />
          </div>
        </div>

        <div className="absolute -top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-dark px-3 py-1.5 text-xs font-medium text-white">
          <Flame className="h-3.5 w-3.5" />
          1 spot open
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { ArrowRight, Flame } from "lucide-react";
import Reveal from "./Reveal";
import TextType from "./TextType";

const LINE_ONE = "I'm looking for my very first client";
const LINE_TWO = "want to be the one?";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl scroll-mt-16 px-5 pb-12 pt-7 sm:pb-16 sm:pt-12">
      <Reveal>
        <h1 className="mb-5 text-3xl font-semibold leading-tight text-teal-dark sm:text-5xl">
          <TextType
            as="span"
            text={[LINE_ONE, LINE_TWO]}
            textColors={["var(--color-teal-dark)", "var(--color-terracotta)"]}
            loop
            showCursor
            typingSpeed={16}
            deletingSpeed={12}
            pauseDuration={1200}
            cursorClassName="text-terracotta"
          />
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          I&apos;m Recurved, a Melbourne-based web developer just getting started. This first
          project is completely free — I just need one real business to build it for, properly.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-terracotta/90"
        >
          Apply to Be My First Client
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>

      <Reveal delay={0.2} className="relative mt-10 max-w-md sm:mt-12">
        <div className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
          <div className="flex items-center gap-1.5 bg-cream px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-teal/25" />
            <span className="h-2 w-2 rounded-full bg-teal/25" />
            <span className="h-2 w-2 rounded-full bg-teal/25" />
            <span className="ml-2 font-mono text-xs text-ink/40">yourbusiness.com.au</span>
          </div>
          <div className="p-6">
            <div className="mb-3 h-4 w-1/2 rounded bg-teal/15" />
            <div className="mb-2 h-2 w-5/6 rounded bg-ink/10" />
            <div className="mb-5 h-2 w-2/3 rounded bg-ink/10" />
            <div className="h-7 w-28 rounded-full bg-teal-dark" />
          </div>
        </div>

        <div className="absolute -top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-teal-dark px-3 py-1.5 text-xs font-medium text-white">
          <Flame className="h-3.5 w-3.5" />
          1 spot open
        </div>
      </Reveal>
    </section>
  );
}

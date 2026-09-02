"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What's the catch?",
    a: "No catch. I need a real project to build my portfolio, and you need a proper website. It's a fair trade, not charity.",
  },
  {
    q: "Do I need to already have a domain?",
    a: "No — I'll help you get one. You only pay the small yearly cost.",
  },
  {
    q: "Can I ask for changes after it's live?",
    a: "Small tweaks are included. Anything beyond the original scope can be a small paid add-on later.",
  },
  {
    q: "What if I'm not happy with it?",
    a: "We agree on the scope and look before I start building, so there are no surprises — and we'll revise within that scope until you're happy.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 border-t border-accent/15 bg-white/55 px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center font-serif text-2xl font-semibold text-dark sm:text-3xl">
            Questions you might have
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/5 bg-white shadow-md shadow-black/5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink"
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span className="text-accent">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-ink/75">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

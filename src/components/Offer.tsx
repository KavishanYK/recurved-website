"use client";

import { Flame, MessageSquareHeart, Receipt, Search, Smartphone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const benefits = [
  {
    icon: Smartphone,
    title: "Built for mobile",
    description: "A custom website — home, services/menu, about, and contact, done properly",
  },
  {
    icon: Search,
    title: "Found on Google",
    description: "Built to actually show up when people search for your business",
  },
  {
    icon: Receipt,
    title: "Costs next to nothing",
    description: "Nothing but your domain and hosting — usually under $50 total",
  },
  {
    icon: MessageSquareHeart,
    title: "A fair trade",
    description:
      "One honest testimonial, a case study feature, and an intro to one other business owner if you're happy",
  },
  {
    icon: Flame,
    title: "Extremely limited",
    description: "This offer is for one business only",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Offer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="offer" className="mx-auto max-w-3xl scroll-mt-16 px-5 py-14 sm:py-20">
      <h2 className="text-center font-serif text-2xl font-semibold text-dark sm:text-3xl">
        The Founding Client Offer
      </h2>

      <motion.div
        className="mt-10 flex flex-col gap-4"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
              variants={item}
              className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 font-medium text-ink">{benefit.title}</p>
                <p className="text-sm leading-relaxed text-ink/70">{benefit.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

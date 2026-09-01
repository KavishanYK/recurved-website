"use client";

import { Flame, MessageSquareHeart, Receipt, Search, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

export default function Offer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Plays the reveal once, right when the section scrolls into view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" ref={sectionRef} className="mx-auto max-w-3xl scroll-mt-16 px-5 py-14 sm:py-20">
      <h2 className="text-center text-2xl font-semibold text-teal-dark sm:text-3xl">
        The Founding Client Offer
      </h2>

      <div className="mt-10 flex flex-col gap-4">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="mb-1 font-medium text-ink">{benefit.title}</p>
                <p className="text-sm leading-relaxed text-ink/70">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function WhyStudent() {
  return (
    <section className="bg-black/20 px-5 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
          <GraduationCap className="h-6 w-6" />
        </span>
        <h2 className="mt-4 font-serif text-2xl font-semibold text-cream sm:text-3xl">
          Why work with a masters student instead of an agency?
        </h2>
        <p className="mt-5 text-lg text-ink/80">
          I&apos;m a masters student in Melbourne, and this is where I&apos;m
          building my first real client project — properly, not rushed. As my
          very first client, you get my complete attention and a website
          built entirely around what your business actually needs.
        </p>
      </Reveal>
    </section>
  );
}

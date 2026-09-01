import Reveal from "./Reveal";
import Wave from "./Wave";

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-teal-dark px-5 py-16 text-cream sm:py-24">
      <Wave position="top" color="var(--color-cream)" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          If your business isn&apos;t easy to find online, you&apos;re losing
          customers to whoever is.
        </h2>
        <p className="mt-5 text-lg text-cream/85">
          Most customers check Google or Instagram before they walk in. If
          your business only has word of mouth, or a page that hasn&apos;t
          been updated in years, you&apos;re invisible to anyone searching for
          what you offer nearby.
        </p>
      </Reveal>
      <Wave position="bottom" color="var(--color-cream)" />
    </section>
  );
}

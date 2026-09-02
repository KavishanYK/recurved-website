import ApplyForm from "./ApplyForm";
import Reveal from "./Reveal";
import SpotsIndicator from "./SpotsIndicator";
import Wave from "./Wave";

export default function ApplySection() {
  return (
    <section id="apply" className="relative scroll-mt-10 overflow-hidden bg-dark px-5 py-16 text-cream sm:py-24">
      <Wave position="top" color="var(--color-cream)" />
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
          One Founding Client spot available
        </h2>
        <p className="mt-3 text-cream/85">
          Fill in the form below — takes about 2 minutes.
        </p>
        <div className="mt-5">
          <SpotsIndicator />
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl">
        <ApplyForm />
      </Reveal>
      <Wave position="bottom" color="var(--color-dark)" />
    </section>
  );
}

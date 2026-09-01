import Reveal from "./Reveal";

const steps = [
  {
    title: "Apply",
    body: "A 2-minute form, no commitment",
  },
  {
    title: "We build it together",
    body: "A couple of short calls or messages, done in about 2 weeks",
  },
  {
    title: "It goes live",
    body: "Your site launches, and I ask for your feedback",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-4xl scroll-mt-16 px-5 py-14 sm:py-20">
      <Reveal>
        <h2 className="text-center text-2xl font-semibold text-teal-dark sm:text-3xl">
          How it works
        </h2>
      </Reveal>
      <ol className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1} as="li">
            <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-teal-dark">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/75">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

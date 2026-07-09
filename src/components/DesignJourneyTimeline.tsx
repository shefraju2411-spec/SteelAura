import { useState } from "react";

export type DesignJourneyStep = {
  step: string;
  title: string;
  intro: string;
  items: readonly string[];
  note?: string;
  outcome: string;
};

function StepCard({ step, title, intro, items, note, outcome }: DesignJourneyStep) {
  return (
    <article className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.06]">
      <div className="border-b border-aura-line px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Step {step}</p>
        <h3 className="mt-2 font-display text-2xl font-medium text-aura-black sm:text-3xl">{title}</h3>
      </div>
      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-aura-black">What we do</p>
        <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{intro}</p>
        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-aura-stone sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-black text-[10px] font-semibold text-aura-gold-soft">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {note ? (
          <p className="mt-5 text-sm font-medium leading-relaxed text-aura-black sm:text-base">{note}</p>
        ) : null}
      </div>
      <div className="border-t border-aura-line bg-aura-black px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aura-gold-soft">Your outcome</p>
        <p className="mt-3 font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
          {outcome}
        </p>
      </div>
    </article>
  );
}

type DesignJourneyTimelineProps = {
  steps: readonly DesignJourneyStep[];
};

export function DesignJourneyTimeline({ steps }: DesignJourneyTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToStep = (index: number) => {
    const step = steps[index];
    if (!step) return;

    setActiveIndex(index);
    document.getElementById(`design-journey-step-${step.step}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mt-14">
      {/* Desktop — horizontal timeline navigation */}
      <div className="hidden lg:block">
        <ol className="relative flex items-start justify-between gap-2">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-6 h-px bg-aura-line"
            aria-hidden
          />
          {steps.map(({ step, title }, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={step} className="relative z-10 flex min-w-0 flex-1 flex-col items-center">
                <button
                  type="button"
                  onClick={() => scrollToStep(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 font-display text-sm font-medium transition",
                    isActive
                      ? "border-aura-black bg-aura-black text-aura-gold-soft shadow-md"
                      : "border-aura-line bg-white text-aura-stone hover:border-aura-gold/40 hover:text-aura-black",
                  ].join(" ")}
                >
                  {step}
                </button>
                <span
                  className={[
                    "mt-4 max-w-[9.5rem] text-center text-xs leading-snug transition",
                    isActive ? "font-semibold text-aura-black" : "text-aura-stone",
                  ].join(" ")}
                >
                  {title}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Mobile — compact step navigation */}
      <div className="lg:hidden">
        <ol className="relative flex flex-wrap justify-center gap-2">
          {steps.map(({ step, title }, index) => {
            const isActive = index === activeIndex;

            return (
              <li key={step}>
                <button
                  type="button"
                  onClick={() => scrollToStep(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={[
                    "flex items-center gap-2 rounded-full border px-3 py-2 text-left transition",
                    isActive
                      ? "border-aura-black/20 bg-white shadow-sm ring-1 ring-black/[0.06]"
                      : "border-aura-line bg-white/60",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-display text-xs font-medium",
                      isActive
                        ? "border-aura-black bg-aura-black text-aura-gold-soft"
                        : "border-aura-line bg-white text-aura-stone",
                    ].join(" ")}
                  >
                    {step}
                  </span>
                  <span
                    className={[
                      "max-w-[8rem] text-xs leading-snug",
                      isActive ? "font-semibold text-aura-black" : "text-aura-stone",
                    ].join(" ")}
                  >
                    {title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* All steps — fully elaborated */}
      <div className="mt-12 space-y-8 scroll-mt-28">
        {steps.map((step) => (
          <div key={step.step} id={`design-journey-step-${step.step}`}>
            <StepCard {...step} />
          </div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faqCategories,
  formatFaqAnswerText,
  getAllFaqItems,
  type FaqAnswer,
} from "../data/faqData";

function FaqAccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  idPrefix,
}: {
  question: string;
  answer: FaqAnswer;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  idPrefix: string;
}) {
  const panelId = `${idPrefix}-panel-${index}`;
  const buttonId = `${idPrefix}-button-${index}`;

  return (
    <li
      className={[
        "overflow-hidden rounded-2xl border transition",
        isOpen
          ? "border-aura-gold/30 bg-white shadow-md ring-1 ring-aura-gold/10"
          : "border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04] hover:border-aura-gold/20",
      ].join(" ")}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span
          className={[
            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-medium transition",
            isOpen ? "bg-aura-black text-aura-gold-soft" : "bg-aura-porcelain text-aura-stone",
          ].join(" ")}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-lg font-medium leading-snug text-aura-black sm:text-xl">
          {question}
        </span>
        <span
          className={[
            "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition",
            isOpen
              ? "rotate-45 border-aura-black bg-aura-black text-aura-gold-soft"
              : "border-aura-line text-aura-stone",
          ].join(" ")}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="border-t border-aura-line px-5 pb-6 pt-4 sm:px-6 sm:pb-7">
            {answer.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 first:mt-0 text-sm leading-relaxed text-aura-stone sm:text-base">
                {paragraph}
              </p>
            ))}
            {answer.bullets ? (
              <ul className="mt-4 space-y-2">
                {answer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-relaxed text-aura-stone sm:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-black text-[10px] font-semibold text-aura-gold-soft">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {answer.closingParagraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  const [openKey, setOpenKey] = useState<string | null>(
    `${faqCategories[0]?.id}-${faqCategories[0]?.items[0]?.id ?? ""}`,
  );
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]?.id ?? "general");

  useEffect(() => {
    document.title = "Frequently Asked Questions | Stainless Steel Jewelry Manufacturing | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "FAQs about SteelAura stainless steel jewelry manufacturing — OEM, private label, materials, quality control, packaging, shipping, and how to start your project.",
      );
    }

    const schemaId = "steelaura-faq-schema";
    const existing = document.getElementById(schemaId);
    existing?.remove();

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: getAllFaqItems().map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: formatFaqAnswerText(item.answer),
        },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.title = "SteelAura Jewelry | Stainless Steel Fashion Jewelry Manufacturer in China";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "SteelAura Jewelry — stainless steel fashion jewelry manufacturer in China. OEM, ODM, custom rings, necklaces, earrings, bracelets for global brands.",
        );
      }
      document.getElementById(schemaId)?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      <section className="border-b border-aura-line bg-aura-porcelain/40">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Resources</p>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.75rem]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 font-display text-xl font-medium leading-snug text-aura-black/80 sm:text-2xl">
            Everything You Need to Know Before Manufacturing Stainless Steel Jewelry with SteelAura
          </p>
          <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
            Whether you&apos;re launching your first jewelry collection or looking for a reliable manufacturing
            partner, we&apos;ve answered some of the most common questions we receive from brands, wholesalers,
            and retailers worldwide.
          </p>
        </div>
      </section>

      <section className="border-b border-aura-line bg-white py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <a
                  key={category.id}
                  href={`#faq-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-aura-black bg-aura-black text-white"
                      : "border-aura-line bg-white text-aura-black hover:border-aura-gold/40",
                  ].join(" ")}
                >
                  {category.title}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="space-y-14">
          {faqCategories.map((category) => (
            <div key={category.id} id={`faq-${category.id}`} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
                {category.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {category.items.map((item, index) => {
                  const key = `${category.id}-${item.id}`;
                  return (
                    <FaqAccordionItem
                      key={item.id}
                      question={item.question}
                      answer={item.answer}
                      index={index}
                      idPrefix={`faq-${category.id}`}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Every project is different, and we&apos;re happy to discuss your specific requirements.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you&apos;re developing a new jewelry collection, sourcing wholesale products, or building a
            private label brand, our team is ready to help.
          </p>
          <Link
            to="/contact#inquiry"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Request a Free Manufacturing Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

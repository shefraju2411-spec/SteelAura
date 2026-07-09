import { useState } from "react";

const WHATSAPP_URL = `https://wa.me/8613305631958?text=${encodeURIComponent("Hello I want to connect for Fashion Jewelry")}`;

type FaqItem = {
  question: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

const faqItems: FaqItem[] = [
  {
    question: "I only have a sketch or reference image. Can you still manufacture my design?",
    paragraphs: [
      "Yes.",
      "Many of our customers begin with sketches, inspiration images, existing products, or simple design concepts. Our team reviews your project, evaluates manufacturing feasibility, and recommends the best production approach before sampling begins.",
    ],
  },
  {
    question: "Do I need production-ready CAD files?",
    paragraphs: [
      "Not necessarily.",
      "If you already have CAD files or technical drawings, we can work directly from them. If not, we can review your reference materials and advise on the next steps required for manufacturing.",
    ],
  },
  {
    question: "Can you manufacture under my own brand?",
    paragraphs: [
      "Yes.",
      "We support private-label manufacturing, including logo engraving, custom packaging, branded presentation, and retail-ready products for your business.",
    ],
  },
  {
    question: "Can you sign an NDA before reviewing my design?",
    paragraphs: [
      "Yes.",
      "We understand that many jewelry brands are developing proprietary designs. We are happy to discuss confidentiality requirements before moving forward with your project.",
    ],
  },
  {
    question: "What materials do you manufacture?",
    paragraphs: [
      "We manufacture stainless steel jewelry and also support selected brass and alloy products depending on the project requirements.",
      "Available finishes include gold, silver, rose gold, black, and PVD plating options.",
    ],
  },
  {
    question: "Can I order samples before placing a bulk order?",
    paragraphs: [
      "Absolutely.",
      "Every custom project begins with sample development and approval. This allows you to evaluate the product before moving into full production.",
    ],
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    paragraphs: [
      "MOQ depends on the design, manufacturing process, and whether existing tooling can be used.",
      "Once we review your project, we'll recommend the most suitable MOQ based on your specific requirements.",
    ],
  },
  {
    question: "How long does sample development take?",
    paragraphs: [
      "Sample lead times vary depending on the complexity of the design, materials, and finishing requirements.",
      "After reviewing your project, we'll provide an estimated development timeline before production begins.",
    ],
  },
  {
    question: "Can you manufacture different types of jewelry?",
    paragraphs: [
      "Yes.",
      "We manufacture rings, necklaces, bracelets, earrings, pendants, charms, and other stainless steel jewelry for fashion brands, wholesalers, retailers, and private-label businesses.",
    ],
  },
  {
    question: "Do you ship internationally?",
    paragraphs: [
      "Yes.",
      "We regularly support customers in Australia, North America, Europe, and other international markets with export-ready shipments.",
    ],
  },
  {
    question: "Will I receive updates during production?",
    paragraphs: [
      "Yes.",
      "We believe clear communication is an important part of every manufacturing project. Throughout production, our team keeps you informed about project progress and key milestones.",
    ],
  },
  {
    question: "What happens after I submit an inquiry?",
    paragraphs: ["After receiving your inquiry, our team will:"],
    bullets: [
      "Review your project requirements",
      "Evaluate manufacturing feasibility",
      "Recommend suitable materials and finishes",
      "Discuss MOQ and production options",
      "Prepare a quotation",
      "Advise on the next steps for sampling and production",
    ],
  },
];

function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `oem-faq-panel-${index}`;
  const buttonId = `oem-faq-button-${index}`;

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
        <span className="flex-1">
          <span className="font-display text-lg font-medium leading-snug text-aura-black sm:text-xl">
            {item.question}
          </span>
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
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 first:mt-0 text-sm leading-relaxed text-aura-stone sm:text-base">
                {paragraph}
              </p>
            ))}
            {item.bullets ? (
              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
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
            {index === faqItems.length - 1 ? (
              <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">
                Our goal is to help you understand the best manufacturing approach before any commitment is
                made.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}

export function OemFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
            Here are some of the most common questions brands ask before starting an OEM manufacturing
            project with us.
          </p>
        </div>

        <ul className="mt-12 space-y-3">
          {faqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-aura-line bg-aura-black px-6 py-10 text-center text-white sm:px-10 sm:py-12">
          <h3 className="font-display text-2xl font-medium tracking-normal sm:text-3xl">
            Ready to Bring Your Jewelry Collection to Life?
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you&apos;re developing your first product or scaling an established brand, our team is
            ready to help you move from concept to production.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Start Your OEM Project
          </a>
        </div>
      </div>
    </section>
  );
}

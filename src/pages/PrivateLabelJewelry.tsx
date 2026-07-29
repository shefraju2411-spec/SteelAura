import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const audienceList = [
  "Independent jewelry brands",
  "E-commerce businesses",
  "Boutique retailers",
  "Fashion brands expanding into jewelry",
  "Wholesalers",
  "Subscription box companies",
  "Gift companies",
  "Amazon sellers",
  "Established brands seeking an alternative manufacturing partner",
] as const;

const privateLabelSupports = [
  "Existing designs with your branding",
  "Custom packaging",
  "Logo engraving",
  "Product labels",
  "Custom tags",
  "Barcode stickers",
  "Packaging inserts",
  "Gift boxes",
  "Instruction cards",
  "Bulk retail packaging",
] as const;

const stainlessBenefits = [
  "Excellent corrosion resistance",
  "Hypoallergenic options available (depending on material grade and design)",
  "Suitable for PVD gold plating",
  "Resistant to everyday wear",
  "Lower maintenance compared with many plated base metals",
  "Consistent finish across large production runs",
  "Suitable for modern minimalist and fashion collections",
] as const;

const customizationGroups = [
  {
    title: "Product Design",
    items: ["Rings", "Earrings", "Necklaces", "Bracelets", "Pendants", "Anklets"],
  },
  {
    title: "Materials",
    items: ["304 stainless steel", "316L stainless steel (where appropriate)"],
  },
  {
    title: "Finishes",
    items: ["Gold PVD", "Silver", "Rose Gold", "Black", "Custom colours where feasible"],
  },
  {
    title: "Branding",
    items: ["Laser logo engraving", "Hang tags", "Custom labels", "Jewellery cards"],
  },
  {
    title: "Packaging",
    items: [
      "Gift boxes",
      "Velvet pouches",
      "Cotton pouches",
      "Printed boxes",
      "Branded sleeves",
      "Thank-you cards",
    ],
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share your idea",
    body: "Tell us about your products, target market, and branding goals.",
  },
  {
    step: "02",
    title: "Design discussion",
    body: "We review your design files or help refine your concept.",
  },
  {
    step: "03",
    title: "Sampling",
    body: "Samples are produced for evaluation and any necessary revisions.",
  },
  {
    step: "04",
    title: "Approval",
    body: "Once approved, production planning begins.",
  },
  {
    step: "05",
    title: "Bulk manufacturing",
    body: "Production is carried out with quality checks throughout the process.",
  },
  {
    step: "06",
    title: "Final inspection",
    body: "Products are inspected before shipment.",
  },
  {
    step: "07",
    title: "Global delivery",
    body: "Orders are shipped using the agreed logistics method.",
  },
] as const;

const qualityChecks = [
  "Raw material verification",
  "In-process inspections",
  "Surface finish inspection",
  "Logo verification",
  "Packaging inspection",
  "Final shipment inspection",
] as const;

const whyBrandsRows = [
  {
    feature: "Dedicated project support",
    benefit: "One point of contact throughout your project",
  },
  {
    feature: "OEM & Private Label",
    benefit: "Manufacturing tailored to your brand",
  },
  {
    feature: "Custom packaging",
    benefit: "Ready for retail or e-commerce",
  },
  {
    feature: "Multiple finish options",
    benefit: "Support different collection styles",
  },
  {
    feature: "Production follow-up",
    benefit: "Clear communication during manufacturing",
  },
  {
    feature: "Global shipping support",
    benefit: "Delivery to international markets",
  },
] as const;

const faqItems = [
  {
    question: "Can I create my own jewelry brand?",
    answer: [
      "Yes. We support both startups and established businesses with private label manufacturing.",
    ],
  },
  {
    question: "Can you engrave my logo?",
    answer: [
      "Where technically feasible, laser engraving and other branding options can be discussed.",
    ],
  },
  {
    question: "Do you provide custom packaging?",
    answer: [
      "Yes. Various packaging solutions can be developed to align with your brand.",
    ],
  },
  {
    question: "Can I order samples first?",
    answer: ["Yes. Sampling is recommended before bulk production."],
  },
  {
    question: "Do you ship internationally?",
    answer: [
      "Yes. We support international logistics for customers in many countries.",
    ],
  },
  {
    question: "What information should I prepare before contacting you?",
    answer: [
      "Sharing your design ideas, target market, estimated order quantity, preferred materials, and branding requirements helps us provide more accurate guidance.",
    ],
  },
] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-aura-stone sm:text-base">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aura-black text-[11px] font-semibold text-aura-gold-soft">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqAccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: readonly string[];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `private-label-faq-panel-${index}`;
  const buttonId = `private-label-faq-button-${index}`;

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
            {answer.map((paragraph) => (
              <p key={paragraph} className="mt-3 first:mt-0 text-sm leading-relaxed text-aura-stone sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export function PrivateLabelJewelry() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Private Label Stainless Steel Jewelry Manufacturer | Build Your Jewelry Brand with SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SteelAura is a private label stainless steel jewelry manufacturer in China. Launch or grow your jewelry brand with logo engraving, custom packaging, sampling, and global shipping support.",
      );
    }

    return () => {
      document.title = "SteelAura Jewelry | Stainless Steel Fashion Jewelry Manufacturer in China";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "SteelAura Jewelry — stainless steel fashion jewelry manufacturer in China. OEM, ODM, custom rings, necklaces, earrings, bracelets for global brands.",
        );
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-aura-line bg-aura-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 40%, #b0a38e 0%, transparent 50%), radial-gradient(circle at 85% 60%, #958673 0%, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">
            OEM &amp; ODM · Private Label
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Private Label Stainless Steel Jewelry Manufacturing in China
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
            Launch or grow your jewelry brand with a reliable private label manufacturing partner.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            SteelAura helps jewelry brands, online retailers, wholesalers, and entrepreneurs manufacture
            high-quality stainless steel jewelry under their own brand. From product development and logo
            engraving to custom packaging and global shipping, we support every stage of the private label
            journey.
          </p>
          <Link
            to="/contact#inquiry"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Request a Free Manufacturing Consultation
          </Link>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Who we serve</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Whether You&apos;re Launching a New Brand or Scaling an Existing One
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Private label manufacturing is ideal for businesses that want to sell jewelry under their own
              brand without investing in factory infrastructure.
            </p>
          </div>
          <p className="mt-10 text-center text-sm font-semibold uppercase tracking-wider text-aura-black">
            We work with:
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {audienceList.map((item) => (
              <li
                key={item}
                className="rounded-full border border-aura-line bg-white px-5 py-2.5 text-sm font-medium text-aura-black shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-aura-stone">
            Our team supports both first-time product launches and established brands looking to expand their
            collections.
          </p>
        </div>
      </section>

      {/* What private label means */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Definition</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              What Is Private Label Jewelry?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Private label jewelry allows you to sell products under your own brand while we handle
              manufacturing behind the scenes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              Depending on your project, we can support:
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {privateLabelSupports.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-aura-line bg-white px-5 py-4 text-sm leading-relaxed text-aura-stone shadow-sm ring-1 ring-black/[0.04] sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aura-black text-[11px] font-semibold text-aura-gold-soft">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-aura-stone sm:text-lg">
            Whether you already have a complete product specification or only an initial idea, we can help turn
            your concept into a production-ready product.
          </p>
        </div>
      </section>

      {/* Why stainless steel */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Material</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Why More Brands Are Choosing Stainless Steel
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Modern jewelry brands increasingly prefer stainless steel because it combines durability with an
              attractive appearance.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-aura-black">Benefits include:</p>
            <CheckList items={stainlessBenefits} />
            <p className="mt-6 text-sm leading-relaxed text-aura-stone">
              Hypoallergenic and waterproof performance depends on the material grade and design — we advise on
              the most suitable option for your collection.
            </p>
          </div>
        </div>
      </section>

      {/* What can be customized */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Customization</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Build a Collection That Reflects Your Brand
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Every brand has different requirements. SteelAura supports customization including:
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customizationGroups.map(({ title, items }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-aura-stone">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aura-gold" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="border-b border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              From Idea to Finished Product
            </h2>
          </div>
          <ol className="mt-14 space-y-0">
            {processSteps.map(({ step, title, body }, index) => (
              <li
                key={step}
                className="relative grid gap-4 border-l border-white/15 py-8 pl-8 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:pl-12 lg:grid-cols-[5rem_1fr]"
              >
                <span
                  className="absolute -left-px top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-aura-gold-soft ring-4 ring-aura-black"
                  aria-hidden
                />
                <span className="font-display text-2xl font-medium text-aura-gold-soft sm:text-3xl">{step}</span>
                <div className={index < processSteps.length - 1 ? "border-b border-white/10 pb-8" : ""}>
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/65">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quality control */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Quality</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Quality Is Built Into Every Production Stage
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Rather than inspecting only at the end, quality control is integrated throughout manufacturing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">Typical checks include:</p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {qualityChecks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-aura-line bg-aura-porcelain/40 px-5 py-4 text-sm leading-relaxed text-aura-stone sm:text-base"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aura-black text-[11px] font-semibold text-aura-gold-soft">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why brands work with SteelAura */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Partnership</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Why Brands Work With SteelAura
            </h2>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-aura-line bg-white shadow-sm">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-aura-line bg-aura-porcelain/60">
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-black sm:px-6">
                    Feature
                  </th>
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-gold sm:px-6">
                    Benefit
                  </th>
                </tr>
              </thead>
              <tbody>
                {whyBrandsRows.map(({ feature, benefit }, index) => (
                  <tr
                    key={feature}
                    className={index < whyBrandsRows.length - 1 ? "border-b border-aura-line" : ""}
                  >
                    <td className="px-5 py-4 font-medium text-aura-black sm:px-6">{feature}</td>
                    <td className="px-5 py-4 text-aura-stone sm:px-6">{benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <ul className="mt-12 space-y-3">
            {faqItems.map(({ question, answer }, index) => (
              <FaqAccordionItem
                key={question}
                question={question}
                answer={answer}
                index={index}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Ready to Build Your Jewelry Brand?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you&apos;re launching your first collection or expanding an established product line,
            SteelAura can support you through design, sampling, manufacturing, branding, quality control, and
            delivery.
          </p>
          <Link
            to="/contact#inquiry"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Request Your Free Manufacturing Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

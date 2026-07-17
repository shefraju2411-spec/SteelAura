import { useEffect } from "react";
import { InquiryForm } from "../../components/InquiryForm";
import { DesignJourneyTimeline } from "../../components/DesignJourneyTimeline";
import { OemFaqSection } from "../../components/OemFaqSection";

const WHATSAPP_URL = `https://wa.me/8613305631958?text=${encodeURIComponent("Hello I want to connect for Fashion Jewelry")}`;

const heroTrustBullets = [
  "Custom jewelry production from sketch, CAD, reference image, or sample",
  "Stainless steel, brass, and alloy jewelry manufacturing",
  "Gold, silver, rose gold, black, and PVD plating options",
  "Sample approval before bulk production",
  "QC checks before shipment",
  "Private label packaging and export support",
] as const;

const manufacturingTrustCards = [
  {
    title: "One Dedicated Project Manager",
    body: "You work with a single point of contact from your first sample through production and shipment. No chasing multiple departments or repeating your requirements.",
  },
  {
    title: "Manufacturing Based on Your Designs",
    body: "Whether you have CAD files, sketches, reference images, or physical samples, we transform your ideas into production-ready stainless steel jewelry.",
  },
  {
    title: "Sample Approval Before Production",
    body: "No mass production begins until you approve the final sample. This helps reduce manufacturing risks and ensures production matches your expectations.",
  },
  {
    title: "Quality Control at Every Stage",
    body: "Quality isn't checked only at the end. Our team monitors production throughout the manufacturing process and performs final inspection before shipment.",
  },
  {
    title: "Private Label Ready",
    body: "From logo engraving and custom packaging to retail presentation, we help brands launch products under their own identity.",
  },
  {
    title: "Global Export Support",
    body: "From production planning to export documentation and international shipping, we help simplify the entire manufacturing process.",
  },
] as const;

const partnerBadges = [
  "Startup Jewelry Brands",
  "Established Retailers",
  "Wholesalers",
  "E-commerce Brands",
  "Fashion Labels",
] as const;

const designJourneySteps = [
  {
    step: "01",
    title: "We Review Your Design",
    intro:
      "Share your sketch, CAD file, reference image, technical drawing, or physical sample. Our engineering and production team evaluates:",
    items: [
      "Manufacturing feasibility",
      "Recommended production method",
      "Material suitability",
      "Potential improvements to reduce cost or improve durability",
      "Estimated MOQ and production timeline",
    ],
    outcome: "You receive clear manufacturing feedback before any production begins.",
  },
  {
    step: "02",
    title: "Product Development & Quotation",
    intro: "Once we understand your requirements, we prepare your manufacturing proposal. This includes:",
    items: [
      "Recommended materials",
      "Plating options",
      "Stone setting (if applicable)",
      "Logo engraving",
      "Packaging options",
      "Estimated tooling requirements (if needed)",
      "Transparent quotation",
    ],
    outcome: "You understand exactly how your product will be manufactured and what it will cost.",
  },
  {
    step: "03",
    title: "Sample Development",
    intro: "After confirming the project, we begin sample production. During this stage we:",
    items: [
      "Develop the sample",
      "Share progress updates",
      "Review any required adjustments",
      "Refine details until the sample meets your expectations",
    ],
    note: "No bulk production starts until the approved sample is finalized.",
    outcome: "You approve the product before investing in full production.",
  },
  {
    step: "04",
    title: "Bulk Production",
    intro: "Once the sample is approved, manufacturing begins. Throughout production we continue monitoring:",
    items: [
      "Dimensions",
      "Surface finishing",
      "Plating quality",
      "Stone setting",
      "Assembly consistency",
      "Overall workmanship",
    ],
    note: "You'll receive production updates so you know how your project is progressing.",
    outcome: "Your products are manufactured consistently according to the approved sample.",
  },
  {
    step: "05",
    title: "Quality Control & Packaging",
    intro: "Before shipment, every order goes through final inspection. Our team verifies:",
    items: [
      "Product appearance",
      "Finishing quality",
      "Logo accuracy",
      "Packaging",
      "Quantity",
      "Export packing",
    ],
    note: "Only after inspection is completed do we prepare your shipment.",
    outcome: "Your products are inspected before leaving China.",
  },
  {
    step: "06",
    title: "Worldwide Shipping & Ongoing Support",
    intro:
      "Once production is complete, we coordinate export preparation and shipping. Our support continues after dispatch by assisting with:",
    items: [
      "Shipping documentation",
      "Repeat production",
      "Design improvements",
      "New product development",
    ],
    note: "Many of our customers continue developing new collections with us after their first production run.",
    outcome: "A long-term manufacturing partner—not just a one-time supplier.",
  },
] as const;

const benefits = [
  {
    title: "Your Designs, Our Factory",
    body: "We manufacture from your existing designs with clear specs, sampling, and structured production milestones.",
  },
  {
    title: "Consistent Quality Standards",
    body: "In-line checks and pre-shipment inspection so bulk production matches your approved samples.",
  },
  {
    title: "Flexible Production Solutions",
    body: "Suitable for startups, growing brands, wholesalers, and established retailers entering new markets.",
  },
  {
    title: "Global Export Experience",
    body: "Serving customers across North America, Europe, Australia, and other international markets.",
  },
] as const;

const jewelryCategoryCards = [
  {
    title: "Rings",
    body: "From minimalist everyday rings to bold statement pieces, including stone-set, engraved, layered, and custom-shaped designs.",
    src: "/images/rings.png",
    alt: "Custom stainless steel rings manufacturing",
  },
  {
    title: "Necklaces",
    body: "Pendant necklaces, layered styles, charm necklaces, name necklaces, and fully custom branded collections.",
    src: "/images/necklaces.png",
    alt: "Custom stainless steel necklaces manufacturing",
  },
  {
    title: "Bracelets",
    body: "Chain bracelets, bangles, cuffs, tennis bracelets, charm bracelets, and custom clasp designs.",
    src: "/images/bracelets.png",
    alt: "Custom stainless steel bracelets manufacturing",
  },
  {
    title: "Earrings",
    body: "Studs, hoops, huggies, drop earrings, statement earrings, and fashion collections with custom finishes.",
    src: "/images/earrings.png",
    alt: "Custom stainless steel earrings manufacturing",
  },
  {
    title: "Pendants & Charms",
    body: "OEM production of logo pendants, symbolic charms, initials, custom shapes, and promotional collections.",
    src: "/images/pendants.png",
    alt: "Custom stainless steel pendants and charms manufacturing",
  },
] as const;

const manufacturingFeatures = [
  "Stainless Steel (304 & 316L)",
  "Brass Jewelry",
  "Alloy Jewelry",
  "Laser Logo Engraving",
  "Custom Molds",
  "Stone Setting",
  "Mirror & Matte Finishes",
  "PVD Plating",
  "Gold",
  "Rose Gold",
  "Silver",
  "Black Finishes",
  "Custom Packaging",
  "Gift Boxes",
  "Retail Packaging",
] as const;

const designStartingPoints = [
  "Reference images",
  "Product inspiration",
  "Hand sketches",
  "Existing products they would like to improve",
] as const;

const manufacturingRiskCards = [
  {
    title: "Poor Communication",
    problems: [
      "You wait days for replies.",
      "Production updates are unclear.",
      "Questions go unanswered.",
    ],
    solution:
      "A dedicated project manager keeps communication organized from sampling through shipment, so you always know what stage your project is in.",
  },
  {
    title: "Samples Don't Match Production",
    problems: [
      "The sample looks perfect.",
      "The bulk order arrives looking completely different.",
    ],
    solution:
      "Bulk production only begins after sample approval, with quality checks throughout production to maintain consistency.",
  },
  {
    title: "Inconsistent Product Quality",
    problems: [
      "Different batches look different.",
      "Colors vary.",
      "Finishes change.",
      "Customer complaints increase.",
    ],
    solution:
      "We monitor production at multiple stages and perform final inspection before shipment to help maintain consistency across your order.",
  },
  {
    title: "Delayed Production",
    problems: [
      "Missed launch dates.",
      "Late deliveries.",
      "Retail customers waiting.",
    ],
    solution:
      "Clear production planning and regular progress updates help you plan inventory and launches more confidently.",
  },
  {
    title: "No Support After Payment",
    problems: ["Once payment is made, communication becomes difficult."],
    solution:
      "Our team continues supporting your project through production, quality control, export preparation, and future repeat orders.",
  },
  {
    title: "Growing Your Brand",
    problems: ["Many suppliers only focus on completing one order."],
    solution:
      "We aim to become a long-term manufacturing partner, supporting future collections as your business grows.",
  },
] as const;

const transparencyProofCards = [
  {
    title: "Manufacturing Consultation Before Production",
    body: [
      "Before any order begins, we review your project requirements, discuss manufacturing feasibility, recommend suitable materials and finishes, and identify any potential technical considerations.",
      "This helps avoid surprises later in the project.",
    ],
  },
  {
    title: "Sample Approval Before Mass Production",
    body: [
      "We don't move directly into bulk production.",
      "Every project begins with sample development and approval, allowing you to verify quality, finishing, dimensions, and overall appearance before manufacturing starts.",
    ],
  },
  {
    title: "Production Updates",
    body: [
      "During production, we keep you informed with regular updates so you always know how your project is progressing.",
      "Communication doesn't stop once production begins.",
    ],
  },
  {
    title: "Final Quality Inspection",
    body: [
      "Before shipment, every order undergoes a final quality inspection covering workmanship, finishing, logo accuracy, packaging, and overall presentation.",
      "Only after inspection is complete is the order prepared for export.",
    ],
  },
] as const;

const factoryGalleryImages = [
  {
    src: "/gallery/factory-01.jpg",
    fallback: "/images/Craftsmanship/CNC.PNG",
    alt: "SteelAura factory CNC production",
  },
  {
    src: "/gallery/factory-02.jpg",
    fallback: "/images/Craftsmanship/mold.jpeg",
    alt: "Jewelry mold development",
  },
  {
    src: "/gallery/factory-03.jpg",
    fallback: "/images/Craftsmanship/polish.jpeg",
    alt: "Polishing and finishing workshop",
  },
  {
    src: "/gallery/factory-04.jpg",
    fallback: "/images/Craftsmanship/stamping.PNG",
    alt: "Stamping and jewelry production",
  },
  {
    src: "/gallery/factory-05.jpg",
    fallback: "/images/Craftsmanship/precision.PNG",
    alt: "Precision manufacturing process",
  },
  {
    src: "/gallery/factory-06.jpg",
    fallback: "/images/quality.png",
    alt: "Quality inspection and factory team",
  },
] as const;

const manufacturingStats = [
  { value: "2,000+", label: "Ready Stock Designs" },
  { value: "OEM", label: "Custom Manufacturing Support" },
  { value: "Worldwide", label: "Export Support" },
  { value: "From Sample", label: "To Bulk Production" },
] as const;

const projectDeliverables = [
  "Manufacturing feasibility review",
  "Material recommendations",
  "Transparent quotation",
  "Sample development",
  "Production progress updates",
  "Quality inspection before shipment",
  "Export support",
  "Ongoing assistance for repeat orders",
] as const;

const processSafeguards = [
  "Confirming specifications before production",
  "Approving samples before bulk manufacturing",
  "Monitoring quality throughout production",
  "Inspecting products before shipment",
  "Maintaining clear communication from start to finish",
] as const;

function FactoryGalleryImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]">
      <div className="aspect-[4/3] overflow-hidden bg-aura-porcelain">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.fallbackUsed) {
              img.dataset.fallbackUsed = "true";
              img.src = fallback;
            }
          }}
        />
      </div>
    </figure>
  );
}

export function OemLanding() {
  useEffect(() => {
    document.title =
      "Stainless Steel Jewelry OEM Manufacturer in China for Brands | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SteelAura is a stainless steel jewelry OEM manufacturer in China. Turn designs into samples, bulk production, packaging, QC, and export-ready orders with one manufacturing team.",
      );
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, follow");

    return () => {
      document.title = "SteelAura Jewelry | Stainless Steel Fashion Jewelry Manufacturer in China";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "SteelAura Jewelry — stainless steel fashion jewelry manufacturer in China. OEM, ODM, custom rings, necklaces, earrings, bracelets for global brands.",
        );
      }
      robotsMeta?.remove();
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
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">OEM Manufacturing</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Fashion Jewelry OEM Manufacturer in China for Brands Ready to Produce
          </h1>
          <p className="mt-6 max-w-3xl font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl lg:text-[1.65rem]">
            Turn your jewelry designs into samples, bulk production, packaging, QC, and export-ready orders
            — with one manufacturing team managing the full process.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Start Your OEM Project
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
            >
              Send Your Design on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sub-hero */}
      <section className="border-b border-aura-line bg-aura-porcelain py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-base leading-relaxed text-aura-stone sm:text-lg">
            SteelAura helps jewelry brands, wholesalers, and retailers manufacture custom stainless steel
            jewelry from sketches, CAD files, reference images, or physical samples. We support sampling,
            plating, logo engraving, private label packaging, quality inspection, and international shipping.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:max-w-4xl">
            {heroTrustBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-aura-black/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-gold-soft/15 text-[10px] font-semibold text-aura-gold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manufacturing trust */}
      <section className="border-b border-aura-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.5rem]">
              Manufacturing Your Brand Shouldn&apos;t Feel Risky
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Launching a new jewelry collection involves more than finding a factory. Brands need a
              manufacturing partner that delivers consistent quality, clear communication, and reliable
              production from sampling to shipment.
            </p>
            <p className="mt-4 font-display text-lg font-medium text-aura-black sm:text-xl">
              That&apos;s exactly what SteelAura is built for.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {manufacturingTrustCards.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/30 p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-lg font-medium text-aura-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-2xl border border-aura-line bg-aura-black px-6 py-8 text-white sm:px-10 sm:py-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
              Trusted Manufacturing Partner For
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-3">
              {partnerBadges.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm"
                >
                  <span className="text-aura-gold-soft" aria-hidden>
                    ✓
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-aura-line bg-aura-porcelain/50 px-6 py-10 text-center shadow-sm ring-1 ring-black/[0.04] sm:px-10 sm:py-12">
            <h3 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
              Ready to Turn Your Design Into Production?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              Our team reviews every inquiry personally and helps you evaluate manufacturing feasibility
              before production begins.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
            >
              Discuss My Project
            </a>
          </div>
        </div>
      </section>

      {/* Design journey */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Your project journey</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.5rem]">
              What Happens After You Send Us Your Design?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you have a sketch, CAD file, reference image, or an existing product, our team will
              guide you through every stage of development and manufacturing. You&apos;ll always know what
              comes next.
            </p>
          </div>

          <DesignJourneyTimeline steps={designJourneySteps} />

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-aura-line bg-aura-black px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <h3 className="font-display text-2xl font-medium tracking-normal sm:text-3xl">
              Ready to Start Your Manufacturing Project?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you&apos;re launching your first jewelry collection or expanding an existing brand, our
              team is ready to review your designs and recommend the best manufacturing solution.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Start My OEM Project
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
          Why Brands Choose SteelAura for OEM
        </h2>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {benefits.map(({ title, body }) => (
            <li
              key={title}
              className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
            >
              <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Jewelry categories & manufacturing */}
      <section className="border-t border-aura-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Product range</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.5rem]">
              From Simple Jewelry to Complex Custom Designs
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you&apos;re developing your first collection or expanding an established product line,
              SteelAura supports custom manufacturing across a wide range of stainless steel jewelry categories.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jewelryCategoryCards.map(({ title, body, src, alt }) => (
              <li
                key={title}
                className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]"
              >
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-aura-porcelain">
                  <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl border border-aura-line bg-aura-porcelain/40 p-6 sm:p-10">
            <h3 className="text-center font-display text-2xl font-medium text-aura-black sm:text-3xl">
              Manufacturing Capabilities
            </h3>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {manufacturingFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-aura-line bg-white px-4 py-3 text-sm text-aura-black sm:text-base"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-black text-[10px] font-semibold text-aura-gold-soft">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
              <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">
                Don&apos;t Have Production-Ready Files?
              </h3>
              <p className="mt-4 text-base font-medium text-aura-black">That&apos;s perfectly fine.</p>
              <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">
                Many of our customers approach us with only:
              </p>
              <ul className="mt-4 space-y-2.5">
                {designStartingPoints.map((item) => (
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
              <p className="mt-5 text-sm leading-relaxed text-aura-stone sm:text-base">
                Our team helps evaluate manufacturing feasibility before production begins.
              </p>
            </article>

            <article className="flex flex-col justify-center rounded-2xl border border-aura-line bg-aura-black p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-medium sm:text-2xl">
                Not Sure If Your Design Can Be Manufactured?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                Send us your reference image or sketch. Our team will review your project and advise on the
                best manufacturing approach.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain sm:w-auto"
              >
                Send My Design
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Manufacturing risk */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Why brands switch</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.5rem]">
              Manufacturing Shouldn&apos;t Be Your Biggest Business Risk
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Many brands don&apos;t start looking for a new manufacturing partner because they&apos;re unhappy
              with pricing. They start looking because previous suppliers created problems that affected product
              quality, customer satisfaction, and business growth.
            </p>
            <p className="mt-4 font-display text-lg font-medium text-aura-black sm:text-xl">
              SteelAura was built to help brands avoid those problems.
            </p>
          </div>

          <ul className="mt-14 space-y-6">
            {manufacturingRiskCards.map(({ title, problems, solution }) => (
              <li
                key={title}
                className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]"
              >
                <h3 className="border-b border-aura-line bg-aura-black px-6 py-4 font-display text-lg font-medium text-white sm:px-8 sm:text-xl">
                  {title}
                </h3>
                <div className="grid lg:grid-cols-2">
                  <div className="border-b border-aura-line bg-aura-porcelain/50 px-6 py-6 sm:px-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-semibold uppercase tracking-wider text-aura-stone">The Problem</p>
                    <ul className="mt-4 space-y-2">
                      {problems.map((problem) => (
                        <li
                          key={problem}
                          className="flex items-start gap-2 text-sm leading-relaxed text-aura-stone sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aura-stone/60" aria-hidden />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-6 py-6 sm:px-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-aura-gold">
                      How SteelAura Helps
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-aura-black sm:text-base">{solution}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="font-display text-2xl font-medium leading-snug text-aura-black sm:text-3xl">
              You&apos;re Building More Than Jewelry.
            </p>
            <p className="mt-2 font-display text-2xl font-medium leading-snug text-aura-black sm:text-3xl">
              You&apos;re Building a Brand.
            </p>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Your customers see the quality of the products carrying your brand name. That&apos;s why
              choosing the right manufacturing partner is one of the most important decisions you&apos;ll make.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-aura-line bg-aura-black px-6 py-10 text-center text-white sm:px-10 sm:py-12">
            <h3 className="font-display text-2xl font-medium tracking-normal sm:text-3xl">
              Let&apos;s Build Your Next Collection Together
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you&apos;re launching your first product or scaling an established jewelry brand, our
              team is ready to help you move from design to production with confidence.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Start My OEM Project
            </a>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="border-t border-aura-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Transparency</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl lg:text-[2.5rem]">
              Every Manufacturing Project Is Built Around Transparency
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Choosing a manufacturing partner is a significant business decision. That&apos;s why we believe in
              making every stage of the project as transparent as possible—from your first inquiry to the final
              shipment.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {transparencyProofCards.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/30 p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                {body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Factory</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-aura-black sm:text-3xl">
                Behind Every Collection Is a Manufacturing Team
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-aura-stone sm:text-base">
                A look inside our production environment — from development and finishing to quality checks and
                export preparation.
              </p>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {factoryGalleryImages.map((image) => (
                <li key={image.src}>
                  <FactoryGalleryImage {...image} />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-2xl border border-aura-line bg-aura-black px-6 py-10 text-white sm:px-10 sm:py-12">
            <h3 className="text-center font-display text-2xl font-medium sm:text-3xl">Manufacturing at a Glance</h3>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {manufacturingStats.map(({ value, label }) => (
                <li
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur-sm"
                >
                  <p className="font-display text-3xl font-medium text-aura-gold-soft sm:text-4xl">{value}</p>
                  <p className="mt-2 text-sm leading-snug text-white/75 sm:text-base">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
              <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">
                What You&apos;ll Receive Throughout Your Project
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">
                During your project you&apos;ll receive:
              </p>
              <ul className="mt-6 space-y-3">
                {projectDeliverables.map((item) => (
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
            </article>

            <article className="rounded-2xl border border-aura-line bg-aura-porcelain/50 p-6 sm:p-8">
              <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">
                Structured Development Process
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">
                Our structured development process is designed to help reduce common risks by:
              </p>
              <ul className="mt-6 space-y-3">
                {processSafeguards.map((item) => (
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
            </article>
          </div>
        </div>
      </section>

      <OemFaqSection />

      {/* Inquiry */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Get started</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Request an OEM Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Share your product type, estimated quantity, finishes, and timeline. Our team responds within
              24 business hours.
            </p>
          </div>
          <InquiryForm id="inquiry" source="OEM Landing Page (/lp/oem)" />
        </div>
      </section>
    </div>
  );
}

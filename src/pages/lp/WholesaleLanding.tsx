import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { InquiryForm } from "../../components/InquiryForm";

const heroBenefits = [
  "Verified Stainless Steel",
  "Premium Quality Alloy",
  "Flexible MOQ",
  "Mix Multiple Designs",
  "Fast Restocking",
  "Private-Label Packaging",
] as const;

const catalogPreviewImages = [
  { src: "/images/rings.png", alt: "Wholesale stainless steel rings collection" },
  { src: "/images/necklaces.png", alt: "Wholesale stainless steel necklaces collection" },
  { src: "/images/earrings.png", alt: "Wholesale stainless steel earrings collection" },
  { src: "/images/bracelets.png", alt: "Wholesale stainless steel bracelets collection" },
] as const;

const trustStripItems = [
  {
    title: "Direct Manufacturer",
    body: "Ready-stock jewelry supplied directly from our China manufacturing facility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Verified Materials",
    body: "Stainless steel material and finishing checked before shipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Quality Inspection",
    body: "Every wholesale order undergoes final quality inspection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Flexible Buying",
    body: "Lower entry quantities with the ability to mix multiple styles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Private-Label Support",
    body: "Logo branding, jewelry cards, pouches, boxes, and retail packaging.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    title: "Global Export Support",
    body: "Packing, documentation, and international shipment coordination.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.47.732-3.567" />
      </svg>
    ),
  },
] as const satisfies ReadonlyArray<{
  title: string;
  body: string;
  icon: ReactNode;
}>;

const categoryCards = [
  { title: "Rings", src: "/images/rings.png", alt: "Wholesale stainless steel rings" },
  { title: "Necklaces", src: "/images/necklaces.png", alt: "Wholesale stainless steel necklaces" },
  { title: "Pendants", src: "/images/pendants.png", alt: "Wholesale stainless steel pendants" },
  { title: "Earrings", src: "/images/earrings.png", alt: "Wholesale stainless steel earrings" },
  { title: "Bracelets", src: "/images/bracelets.png", alt: "Wholesale stainless steel bracelets" },
  {
    title: "Custom jewelry & gift sets",
    src: "/images/giftboxes.png",
    alt: "Wholesale custom jewelry and gift sets",
  },
] as const;

const benefits = [
  {
    title: "Direct Manufacturer",
    body: "Source directly from our China manufacturing facility for better pricing, broader product selection, and direct communication throughout your order.",
  },
  {
    title: "Verified Materials",
    body: "Available in 304 and 316L stainless steel collections, with material and finishing inspected before shipment.",
  },
  {
    title: "Quality Inspection",
    body: "Every wholesale order undergoes a final inspection covering polishing, plating quality, product appearance, and packing before dispatch.",
  },
  {
    title: "Flexible Buying",
    body: "Mix multiple ready-stock styles across categories, allowing you to launch or expand collections without committing to a single design.",
  },
  {
    title: "Private Label Support",
    body: "Add your logo to jewelry cards, pouches, gift boxes, and retail packaging to strengthen your brand presentation.",
  },
  {
    title: "Global Export Support",
    body: "From export documentation and packing to international shipping coordination, we support wholesale buyers throughout the delivery process.",
  },
] as const;

const qcSteps = [
  {
    step: "01",
    title: "Material Verification",
    body: "Confirm material consistency before shipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Appearance Inspection",
    body: "Inspect polishing, finishing and visible defects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Plating Check",
    body: "Review plating consistency and surface quality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Final QC",
    body: "Final inspection before packing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Export Packing",
    body: "Secure packing before international shipment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
] as const satisfies ReadonlyArray<{
  step: string;
  title: string;
  body: string;
  icon: ReactNode;
}>;

const processGalleryImages = [
  {
    src: "/gallery/process-factory.jpg",
    fallback: "/images/Craftsmanship/CNC.PNG",
    alt: "Jewelry production machines on the factory floor",
    caption: "Factory production",
  },
  {
    src: "/gallery/process-polishing.jpg",
    fallback: "/images/Craftsmanship/polish.jpeg",
    alt: "Polishing stainless steel jewelry pieces",
    caption: "Jewelry polishing",
  },
  {
    src: "/gallery/process-inspection.jpg",
    fallback: "/images/quality.png",
    alt: "Checking finished jewelry before packing",
    caption: "Quality inspection",
  },
  {
    src: "/gallery/process-packing.jpg",
    fallback: "/images/packbox.png",
    alt: "Packing jewelry orders for dispatch",
    caption: "Packing",
  },
  {
    src: "/gallery/process-warehouse.jpg",
    fallback: "/images/Craftsmanship/precision.PNG",
    alt: "CNC fiber laser cutting stainless steel jewelry",
    caption: "Laser Cutting (CNC Fiber Laser Cutting)",
  },
  {
    src: "/gallery/process-cartons.jpg",
    fallback: "/images/packaging/packaging.png",
    alt: "Export cartons prepared for shipment",
    caption: "Export cartons",
  },
  {
    src: "/gallery/process-loading.jpg",
    fallback: "/images/Craftsmanship/stamping.PNG",
    alt: "Loading packed cartons for international shipment",
    caption: "Container loading",
  },
] as const;

function ProcessGalleryImage({
  src,
  fallback,
  alt,
  caption,
}: {
  src: string;
  fallback: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-aura-line bg-aura-porcelain ring-1 ring-black/[0.04]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
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
      <figcaption className="mt-2.5 text-sm text-aura-stone">{caption}</figcaption>
    </figure>
  );
}

const orderExpectations = [
  "Quality inspection before shipment",
  "Secure export packaging",
  "Product organization by SKU",
  "Export documentation assistance",
  "Dedicated order coordination",
  "Packaging review before production",
] as const;

const buyerTypes = [
  "Online jewelry stores",
  "Marketplace & e-commerce sellers",
  "Boutique retailers",
  "Wholesalers & distributors",
  "Gift & fashion brands",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share Your Needs",
    body: "Tell us your categories, style direction, quantities, and target customers.",
  },
  {
    step: "02",
    title: "Receive Catalog Options",
    body: "We shortlist ready-stock stainless steel styles from our catalog that fit your brief and budget.",
  },
  {
    step: "03",
    title: "Confirm Samples",
    body: "Review quality, plating, and finishes before committing to bulk — optional but recommended for new partners.",
  },
  {
    step: "04",
    title: "Place Bulk Order",
    body: "Agree MOQ, pricing, packaging, and production timeline for your wholesale order.",
  },
  {
    step: "05",
    title: "QC & Worldwide Shipping",
    body: "Final inspection, packing, and export preparation before dispatch to your address.",
  },
] as const;

const comparisonRows = [
  { feature: "Pricing", typical: "Higher reseller markup", steelAura: "Factory-direct from China" },
  { feature: "Style Range", typical: "Limited catalog", steelAura: "2,000+ ready-stock styles" },
  { feature: "MOQ", typical: "Often inflexible", steelAura: "Flexible wholesale options" },
  { feature: "Material Quality", typical: "Often unclear", steelAura: "Verified stainless steel" },
  { feature: "Restock Speed", typical: "Slower through middlemen", steelAura: "Direct from manufacturer" },
  { feature: "Export Support", typical: "Varies by supplier", steelAura: "Structured export support" },
] as const;

const packagingPoints = [
  "Custom logo and branding options for your wholesale line",
  "Retail-ready packaging suitable for boutiques and online stores",
  "Gift boxes and private-label support on the same order",
] as const;

const faqItems = [
  {
    question: "What is your MOQ?",
    answer: [
      "MOQ for ready-stock designs is flexible and depends on the styles and quantities you select.",
      "Share your product categories and estimated volumes, and our team will recommend the most suitable entry quantity for your order — MOQ guidance is included with every inquiry.",
    ],
  },
  {
    question: "Can I mix different jewelry styles in one order?",
    answer: [
      "Yes.",
      "You can combine rings, necklaces, earrings, bracelets, and pendants across multiple designs within one wholesale order — helpful for testing what sells in your market without committing to a single style.",
    ],
  },
  {
    question: "Can I request samples before bulk production?",
    answer: [
      "Yes.",
      "You can order samples of ready-stock designs to evaluate material, plating, and finishing quality before placing a bulk order. This is optional but recommended for new buyers.",
    ],
  },
  {
    question: "Do you offer custom logo packaging?",
    answer: [
      "Yes.",
      "We support private-label packaging including logo-branded jewelry cards, pouches, gift boxes, and retail-ready presentation — all arranged on the same order.",
    ],
  },
  {
    question: "How long does production take?",
    answer: [
      "Ready-stock designs can be prepared and dispatched quickly since the products are already manufactured.",
      "If your order includes restocking, custom packaging, or logo branding, additional preparation time applies. We confirm the expected timeline before your order is placed.",
    ],
  },
  {
    question: "What plating options are available?",
    answer: [
      "Our collections are available in gold, silver, rose gold, and black finishes, including PVD plating for enhanced durability and color retention.",
    ],
  },
  {
    question: "Do you ship internationally?",
    answer: [
      "Yes.",
      "We ship wholesale orders worldwide and support the process with export packing, documentation assistance, and shipment coordination.",
    ],
  },
  {
    question: "Can I reorder the same designs later?",
    answer: [
      "Yes.",
      "Ready-stock designs can be reordered quickly, making it easier to restock popular styles as they sell through. Our team keeps your order history so repeat orders are straightforward.",
    ],
  },
] as const;

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
  const panelId = `wholesale-faq-panel-${index}`;
  const buttonId = `wholesale-faq-button-${index}`;

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
            {question}
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

export function WholesaleLanding() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Wholesale Stainless Steel Jewelry | SteelAura China Factory";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Wholesale stainless steel jewelry for B2B buyers. 2,000+ ready-stock styles, factory-direct pricing, low MOQ, QC, and worldwide export from our China manufacturer.",
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
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">
              Ready-Stock Fashion Jewelry from China
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
              Build Your Jewelry Collection Faster With Ready-Stock Designs
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Choose from 2,000+ ready-stock stainless steel jewelry styles with flexible MOQs, consistent
              quality, fast restocking, and private-label packaging support—all supplied directly from our
              manufacturing facility in China.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
              {heroBenefits.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85 sm:text-[0.9375rem]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-aura-gold-soft/20 text-[9px] font-semibold text-aura-gold-soft">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#ready-stock-catalog"
                className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
              >
                Get in Touch for the Catalog
              </a>
              <a
                href="#inquiry"
                className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
              >
                Request Wholesale Pricing
              </a>
            </div>
            <p className="mt-5 text-sm text-white/55">
              No obligation · MOQ guidance included · Response within 24 business hours
            </p>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ring-1 ring-white/10">
              <div className="grid grid-cols-2 gap-px bg-white/10">
                {catalogPreviewImages.map(({ src, alt }) => (
                  <div key={src} className="aspect-square overflow-hidden bg-aura-black/40">
                    <img src={src} alt={alt} className="h-full w-full object-cover" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden max-w-[13rem] rounded-xl border border-white/10 bg-aura-black/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:block lg:-bottom-5 lg:-left-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-aura-gold-soft">
                Ready-stock catalog
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                Mix rings, necklaces, earrings, and bracelets across one wholesale order.
              </p>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-full border border-white/15 bg-aura-black/90 px-4 py-2 text-xs font-medium text-white/80 shadow-lg backdrop-blur-sm sm:block">
              2,000+ styles
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-aura-line bg-aura-porcelain py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {trustStripItems.map(({ title, body, icon }) => (
              <li key={title} className="flex flex-col items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-aura-line bg-white text-aura-gold shadow-sm">
                  {icon}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-aura-black">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-aura-stone sm:text-sm">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section
        id="ready-stock-catalog"
        className="scroll-mt-24 border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Product range</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Wholesale Categories We Supply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Mix and match styles across categories for your next bulk order.
            </p>
          </div>
          <ul className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map(({ title, src, alt }) => (
              <li key={title} className="flex min-h-0">
                <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]">
                  <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-aura-porcelain">
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-full object-cover"
                      width={640}
                      height={480}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-center px-4 py-5">
                    <h3 className="text-center font-display text-lg font-medium text-aura-black">{title}</h3>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Why Wholesalers Choose SteelAura
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-lg font-medium text-aura-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quality check process */}
      <section className="border-t border-aura-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Quality control</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              How Every Wholesale Order Is Quality Checked
            </h2>
          </div>

          {/* Desktop — horizontal timeline */}
          <ol className="relative mt-14 hidden lg:flex lg:items-start lg:justify-between lg:gap-4">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-7 h-px bg-aura-line"
              aria-hidden
            />
            {qcSteps.map(({ step, title, body, icon }) => (
              <li key={step} className="relative z-10 flex min-w-0 flex-1 flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-aura-line bg-white text-aura-gold shadow-sm">
                  {icon}
                </span>
                <span className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-aura-gold">
                  Step {step}
                </span>
                <h3 className="mt-2 font-display text-lg font-medium leading-snug text-aura-black">{title}</h3>
                <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-aura-stone">{body}</p>
              </li>
            ))}
          </ol>

          {/* Mobile — vertical timeline */}
          <ol className="relative mt-12 lg:hidden">
            {qcSteps.map(({ step, title, body, icon }, index) => {
              const isLast = index === qcSteps.length - 1;

              return (
                <li key={step} className="relative flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-aura-line bg-white text-aura-gold shadow-sm">
                      {icon}
                    </span>
                    {!isLast ? <div className="my-1 min-h-[2.5rem] w-px flex-1 bg-aura-line" aria-hidden /> : null}
                  </div>
                  <div className={isLast ? "pb-0" : "pb-8"}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-aura-gold">
                      Step {step}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-medium text-aura-black">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-aura-stone">{body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Buyer types */}
      <section className="border-y border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Who we work with</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Built for Bulk Buyers
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you are placing your first wholesale order or scaling an existing catalog,
              we support volume buyers with clear MOQ, lead times, and pricing.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {buyerTypes.map((type) => (
              <li
                key={type}
                className="rounded-full border border-aura-line bg-white px-5 py-2.5 text-sm font-medium text-aura-black shadow-sm"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              Simple Wholesale Process
            </h2>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ step, title, body }) => (
              <li
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="font-display text-2xl font-medium text-aura-gold-soft">{step}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Manufacturing & packing gallery */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Behind the scenes</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Inside Our Manufacturing &amp; Packing Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              A look at how wholesale orders move through our facility — from production and finishing to
              packing and export.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {processGalleryImages.map((image) => (
              <li key={image.src}>
                <ProcessGalleryImage {...image} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Compare</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Typical Resellers vs. SteelAura Factory
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              See why B2B buyers source wholesale stainless steel jewelry direct from our China factory.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-aura-line shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-aura-line bg-aura-porcelain/60">
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-black sm:px-6">
                    Feature
                  </th>
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-stone sm:px-6">
                    Typical resellers / middlemen
                  </th>
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-gold sm:px-6">
                    SteelAura — China factory
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ feature, typical, steelAura }, index) => (
                  <tr
                    key={feature}
                    className={index < comparisonRows.length - 1 ? "border-b border-aura-line" : ""}
                  >
                    <td className="bg-white px-5 py-4 font-medium text-aura-black sm:px-6">{feature}</td>
                    <td className="bg-white px-5 py-4 text-aura-stone sm:px-6">
                      <span className="mr-2 text-red-500/80" aria-hidden>
                        ✕
                      </span>
                      {typical}
                    </td>
                    <td className="bg-aura-porcelain/30 px-5 py-4 text-aura-black sm:px-6">
                      <span className="mr-2 text-aura-gold" aria-hidden>
                        ✓
                      </span>
                      {steelAura}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Order expectations */}
      <section className="border-t border-aura-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Order support</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              What You Can Expect With Every Wholesale Order
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Every order follows the same structured process, so you always know how your products are
              handled before they reach you.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {orderExpectations.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-aura-line bg-white px-5 py-4 shadow-sm ring-1 ring-black/[0.04]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-aura-black sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packaging */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Packaging</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Branding &amp; Packaging for Wholesale Orders
          </h2>
          <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
            Need branded packaging for your wholesale line? We can support custom presentation on
            the same order — from logo branding to retail-ready boxes.
          </p>
          <ul className="mt-8 space-y-3 text-left">
            {packagingPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-aura-line bg-white px-5 py-4 text-sm leading-relaxed text-aura-stone sm:text-base"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-black text-[10px] font-semibold text-aura-gold-soft">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              Common questions from wholesale buyers before placing a ready-stock order.
            </p>
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

      {/* Inquiry */}
      <section className="border-t border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">
              Want to buy wholesale stainless steel jewelry from China?
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Request a Wholesale Quote
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Share product categories, estimated quantity, your market, and timeline. Our team
              responds within 24 business hours.
            </p>
          </div>
          <InquiryForm
            id="inquiry"
            className="scroll-mt-24"
            source="Wholesale Landing Page (/lp/wholesale)"
            thankYouPath="/lp/thank-you"
          />
        </div>
      </section>

      {/* OEM cross-link */}
      <section className="border-t border-aura-line bg-aura-black py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
            Custom manufacturing
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-normal sm:text-3xl">
            Looking to Manufacture Your Own Designs Instead?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            If ready-stock isn&apos;t what you need, we also manufacture custom jewelry from your sketches,
            CAD files, or reference samples — from sampling through bulk production.
          </p>
          <Link
            to="/oem-odm#development-process"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            View Our OEM Capabilities
          </Link>
        </div>
      </section>
    </div>
  );
}

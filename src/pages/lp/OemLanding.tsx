import { useEffect } from "react";
import { InquiryForm } from "../../components/InquiryForm";

const WHATSAPP_URL = "https://wa.me/8613305631958";

const oemCapabilities = [
  "Manufacturing based on your designs, CAD files, and technical drawings",
  "Stainless steel, brass, and alloy jewelry production",
  "Gold, silver, black, PVD, and rose gold plating finishes",
  "Custom logo engraving and private-label branding",
  "Stone setting and decorative detailing",
  "Quality control and production management",
  "Custom packaging and export-ready fulfillment",
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

const processSteps = [
  {
    step: "01",
    title: "Share Your Design",
    body: "Send sketches, CAD files, reference images, or physical samples for feasibility review.",
  },
  {
    step: "02",
    title: "Confirm Specs & Finishes",
    body: "We align on materials, plating, stone options, logo placement, and surface finishes in writing.",
  },
  {
    step: "03",
    title: "Sampling & Approval",
    body: "Prototype production with revisions until the sample matches your expectations.",
  },
  {
    step: "04",
    title: "Bulk Production",
    body: "Full-scale manufacturing with progress updates and quality monitoring throughout.",
  },
  {
    step: "05",
    title: "QC & Worldwide Shipping",
    body: "Final inspection, packaging verification, and export preparation before dispatch.",
  },
] as const;

const productCategories = [
  "Rings",
  "Necklaces",
  "Bracelets",
  "Earrings",
  "Pendants",
  "Charms",
  "Men's Jewelry",
] as const;

export function OemLanding() {
  useEffect(() => {
    document.title = "OEM Stainless Steel Jewelry Manufacturer in China | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SteelAura is a stainless steel jewelry OEM manufacturer in China. Turn your designs into production with QC, plating, branding, and global export support.",
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
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">OEM Manufacturing</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Stainless Steel Jewelry OEM Manufacturer in China
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            Your designs → production, QC, and export
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            SteelAura manufactures stainless steel jewelry from your existing designs — with sampling,
            plating, branding, quality control, and worldwide shipping for brands and wholesalers.
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-aura-gold-soft">
            Export support · Quality control · Private label · Flexible MOQ
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#inquiry"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Get a free quote
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
            >
              Free consultation
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">OEM Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Turn Your Existing Designs into Production
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {oemCapabilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-aura-line bg-white p-5 shadow-sm ring-1 ring-black/[0.04]"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aura-black text-[11px] font-semibold text-aura-gold-soft">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-aura-stone sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
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

      {/* Process */}
      <section className="border-y border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              OEM Production Process
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

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Product range</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Categories We Manufacture
          </h2>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {productCategories.map((name) => (
            <li
              key={name}
              className="rounded-full border border-aura-line bg-aura-porcelain/50 px-5 py-2.5 text-sm font-medium text-aura-black"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

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
              1–2 business days.
            </p>
          </div>
          <InquiryForm id="inquiry" source="OEM Landing Page (/lp/oem)" />
        </div>
      </section>
    </div>
  );
}

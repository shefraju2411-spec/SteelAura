import { useEffect } from "react";
import { InquiryForm } from "../../components/InquiryForm";

const WHATSAPP_URL = "https://wa.me/8613305631958";

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
    title: "2,000+ Ready-Stock Styles",
    body: "Test trends faster with a wide catalog — ideal for Australian online stores, boutiques, and marketplace sellers restocking popular lines.",
  },
  {
    title: "Factory-Direct Pricing",
    body: "Buy closer to source from our China factory and improve margins on wholesale orders shipped to Australia.",
  },
  {
    title: "Low MOQ Options",
    body: "Accessible entry quantities for new sellers testing the Australian market, plus scalable volume as your orders grow.",
  },
  {
    title: "Premium Stainless Steel",
    body: "Quality grades, refined polishing, and plating finishes built for retail — the durability Australian customers expect.",
  },
  {
    title: "Fast Sampling & Restocking",
    body: "Move quickly on seasonal and trending pieces so you can keep pace with demand across Australian retail cycles.",
  },
  {
    title: "Export to Australia",
    body: "Structured export support, quality inspection, and reliable lead-time planning for shipments to Australia.",
  },
] as const;

const buyerTypes = [
  "Australian online jewelry stores",
  "Marketplace & e-commerce sellers",
  "Boutique retailers",
  "Wholesalers & distributors",
  "Gift & fashion brands",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share Your Needs",
    body: "Tell us your categories, style direction, quantities, and target customers in Australia.",
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
    title: "QC & Shipping to Australia",
    body: "Final inspection, packing, and export preparation before dispatch to your Australian address.",
  },
] as const;

const comparisonRows = [
  { feature: "Pricing", typical: "Higher reseller markup", steelAura: "Factory-direct from China" },
  { feature: "Style Range", typical: "Limited catalog", steelAura: "2,000+ ready-stock styles" },
  { feature: "MOQ", typical: "Often inflexible", steelAura: "Flexible wholesale options" },
  { feature: "Material Quality", typical: "Often unclear", steelAura: "Verified stainless steel" },
  { feature: "Restock Speed", typical: "Slower through middlemen", steelAura: "Direct from manufacturer" },
  { feature: "Australia Export", typical: "Varies by supplier", steelAura: "Structured export support" },
] as const;

const packagingPoints = [
  "Custom logo and branding options for your wholesale line",
  "Retail-ready packaging suitable for Australian boutiques and online stores",
  "Gift boxes and private-label support on the same order",
] as const;

export function WholesaleLanding() {
  useEffect(() => {
    document.title = "Wholesale Stainless Steel Jewelry Australia | SteelAura China Factory";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Wholesale stainless steel jewelry for Australian buyers. 2,000+ ready-stock styles, factory-direct pricing, low MOQ, QC, and export to Australia from our China manufacturer.",
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
          <p className="max-w-4xl font-display text-2xl font-medium leading-snug tracking-normal text-aura-gold-soft sm:text-3xl lg:text-4xl">
            Stainless Steel Jewelry Wholesaler in China
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Wholesale Stainless Steel Jewelry for Australia
          </h1>
          <p className="mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
            2,000+ ready-stock styles · Low MOQ · Fast restocking · Export to Australia
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            SteelAura supplies rings, necklaces, earrings, bracelets, and more to Australian wholesalers,
            retailers, and online sellers — with factory-direct pricing, consistent quality, and reliable
            export support from our China manufacturing facility.
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-aura-gold-soft">
            Verified stainless steel · QC on every order · Shipping to Australia
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#inquiry"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Get a wholesale quote
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

      {/* Categories */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Product range</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Wholesale Categories We Supply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Mix and match styles across categories for your next bulk order to Australia.
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
            Why Australian Wholesalers Choose SteelAura
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

      {/* Buyer types */}
      <section className="border-y border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Who we work with</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Built for Australian Bulk Buyers
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you are placing your first wholesale order or scaling an existing catalog in Australia,
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

      {/* Comparison */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Compare</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Typical Resellers vs. SteelAura Factory
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              See why Australian buyers source wholesale stainless steel jewelry direct from our China factory.
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

      {/* Packaging */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Packaging</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Branding &amp; Packaging for Wholesale Orders
          </h2>
          <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
            Need branded packaging for your Australian wholesale line? We can support custom presentation on
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
              Share product categories, estimated quantity, your market in Australia, and timeline. Our team
              responds within 24 business hours.
            </p>
          </div>
          <InquiryForm id="inquiry" source="Wholesale Landing Page (/lp/wholesale) — Australia" />
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import { InquiryForm } from "../../components/InquiryForm";

const WHATSAPP_URL = `https://wa.me/8613305631958?text=${encodeURIComponent("Hello I want to connect for Fashion Jewelry")}`;

const heroProofPoints = [
  "304 & 316L Stainless Steel",
  "OEM & Private Label",
  "2,000+ Ready-Stock Styles",
  "Worldwide B2B Supply",
] as const;

const productCategories = [
  { title: "Rings", src: "/images/Rings1.png", alt: "Wholesale stainless steel rings from China manufacturer" },
  { title: "Earrings", src: "/images/Earrings1.png", alt: "Stainless steel earrings for wholesale jewelry supply" },
  { title: "Necklaces", src: "/images/Necklace1.png", alt: "Stainless steel necklaces manufactured in China" },
  { title: "Bracelets", src: "/images/Bracelets1.png", alt: "Stainless steel bracelets for jewelry wholesalers" },
  { title: "Pendants", src: "/images/Pendant1.png", alt: "Stainless steel pendants for OEM jewelry collections" },
] as const;

const readyStockBenefits = [
  "2,000+ ready-stock styles",
  "Multiple jewelry categories",
  "Flexible mixed-style ordering",
  "Lower MOQ options",
  "Faster order cycles",
  "Logo customization",
  "Custom packaging available",
  "Regularly updated designs",
] as const;

const oemBenefits = [
  "OEM & ODM development",
  "Custom dimensions and structures",
  "304 & 316L stainless steel options",
  "PVD plating",
  "Custom colors and finishes",
  "Logo engraving",
  "CZ stone options",
  "Prototype and sampling",
  "Custom packaging",
] as const;

const qualityCards = [
  {
    title: "304 & 316L Stainless Steel",
    body: "Available for durable fashion jewelry designed for everyday wear, with strong resistance to corrosion and discoloration.",
  },
  {
    title: "PVD Plating",
    body: "PVD finishing can provide improved color durability compared with conventional fashion-jewelry plating methods when appropriate for the design.",
  },
  {
    title: "Precision Finishing",
    body: "Polishing, edge finishing and surface appearance are controlled according to the approved product specification and sample.",
  },
  {
    title: "CZ & Decorative Stone Applications",
    body: "Stone-setting and production methods are selected according to the product structure, design requirements and desired quality positioning.",
  },
] as const;

const showcaseGroups = [
  { title: "Minimalist Jewelry", src: "/images/Minimalist.png", alt: "Minimalist stainless steel jewelry collection" },
  { title: "Statement Jewelry", src: "/images/StatementJewelry.png", alt: "Statement stainless steel fashion jewelry" },
  { title: "CZ Jewelry", src: "/images/CubicZirconia.png", alt: "CZ stone-set stainless steel jewelry" },
  { title: "Chain Jewelry", src: "/images/ChainJewelry.png", alt: "Stainless steel chain jewelry for wholesale" },
  { title: "Everyday Essentials", src: "/images/EverydayEssentials.png", alt: "Everyday stainless steel jewelry essentials" },
  { title: "Stackable Jewelry", src: "/images/StackableJewelry.png", alt: "Stackable stainless steel jewelry for wholesale collections" },
] as const;

const oemSteps = [
  {
    step: "01",
    title: "Send Your Design",
    body: "Share a reference image, drawing, specification or physical sample.",
  },
  {
    step: "02",
    title: "Technical Evaluation",
    body: "We review material, dimensions, construction, finish, stones and suitable manufacturing methods.",
  },
  {
    step: "03",
    title: "Quotation & Sampling",
    body: "MOQ, pricing, sampling requirements and estimated production timing are confirmed before development begins.",
  },
  {
    step: "04",
    title: "Sample Development",
    body: "A prototype/sample is produced for review and approval before mass production.",
  },
  {
    step: "05",
    title: "Bulk Manufacturing",
    body: "Production follows the approved sample and confirmed product specifications.",
  },
  {
    step: "06",
    title: "QC & Shipping",
    body: "Finished products are inspected, packed and prepared for international shipment.",
  },
] as const;

const brandingServices = [
  { title: "Logo Engraving", src: "/images/LogoEngraving.png" },
  { title: "Custom Jewelry Cards", src: "/images/Custom%20Jewelry%20Cards.png" },
  { title: "Branded Pouches", src: "/images/Brandedpouches1.png" },
  { title: "Custom Jewelry Boxes", src: "/images/packbox.png" },
  { title: "Retail Packaging", src: "/images/giftboxes.png" },
] as const;

const whyCards = [
  {
    title: "Stainless Steel Jewelry Focus",
    body: "Work with a manufacturer focused on stainless steel fashion jewelry rather than a supplier handling unrelated product categories.",
  },
  {
    title: "Ready Stock + Custom Manufacturing",
    body: "Launch quickly using existing styles while developing proprietary OEM jewelry designs alongside them.",
  },
  {
    title: "Flexible Collection Building",
    body: "Combine multiple jewelry categories, designs and finishes through one wholesale jewelry supplier.",
  },
  {
    title: "Material Transparency",
    body: "Product requirements can clearly define stainless steel grade, plating, stones, finish and manufacturing specifications.",
  },
  {
    title: "Quality Control",
    body: "Finished jewelry is checked against approved requirements before packing and shipment.",
  },
  {
    title: "International B2B Support",
    body: "Production communication, packaging coordination and international order support for overseas jewelry businesses.",
  },
] as const;

const factoryImages = [
  { src: "/images/Craftsmanship/mold.jpeg", alt: "Machining at stainless steel jewelry factory in China", caption: "Machining" },
  { src: "/images/Craftsmanship/CNC.PNG", alt: "Jewelry mold development for OEM manufacturing", caption: "Mold Development" },
  { src: "/images/Craftsmanship/stamping.PNG", alt: "Hydraulic stamping in jewelry production", caption: "Stamping" },
  { src: "/images/Craftsmanship/polish.jpeg", alt: "Polishing stainless steel jewelry", caption: "Polishing" },
  { src: "/images/stonesetting.PNG", alt: "Stone setting for stainless steel jewelry", caption: "Stone setting" },
  { src: "/images/Inspection.jpg", alt: "Barcode labeling and inspection before jewelry shipment", caption: "Barcode Labeling & Inspection" },
  { src: "/images/Exportreadycartons.jpg", alt: "Export-ready cartons for wholesale jewelry orders", caption: "Export Ready Cartons" },
  { src: "/images/Craftsmanship/precision.PNG", alt: "Precision finishing in stainless steel jewelry factory", caption: "Precision finishing" },
] as const;

const qcSteps = [
  "Product Specification",
  "Appearance & Finish",
  "Dimensions",
  "Plating & Color",
  "Stone Setting",
  "Function / Construction",
  "Quantity",
  "Packaging",
] as const;

const buyerCards = [
  {
    title: "Starting a Jewelry Brand",
    body: "Start with ready-stock styles, add your branding and gradually develop custom designs as your collection grows.",
  },
  {
    title: "E-commerce Jewelry Brands",
    body: "Develop repeatable product collections, private-label packaging and custom jewelry designed around your brand.",
  },
  {
    title: "Jewelry Wholesalers",
    body: "Access multiple stainless steel jewelry categories and styles from one jewelry wholesale supplier in China.",
  },
  {
    title: "Retailers & Distributors",
    body: "Build broader assortments using a combination of ready-stock and custom-manufactured products.",
  },
] as const;

const importBenefits = [
  "Strong everyday durability",
  "Modern surface finishes",
  "Suitable for PVD color applications",
  "Wide range of design possibilities",
] as const;

const faqItems = [
  {
    question: "What is your MOQ for stainless steel jewelry?",
    answer:
      "MOQ depends on whether you are ordering ready-stock jewelry or developing a custom OEM design. Existing styles can generally support more flexible quantities, while custom designs depend on the product structure, manufacturing method and customization requirements. Send us the styles and estimated quantities you need and we will confirm the applicable MOQ.",
  },
  {
    question: "Are you a jewelry manufacturer or trading company?",
    answer:
      "SteelAura is a stainless steel jewelry manufacturer in China, supporting ready-stock wholesale orders, OEM/ODM manufacturing, private-label jewelry and custom product development.",
  },
  {
    question: "Can I order different jewelry styles together?",
    answer: "Yes, different styles of jewelry can be ordered in one order.",
  },
  {
    question: "Do you manufacture 304 & 316L stainless steel jewelry?",
    answer:
      "Yes, 304 and 316L stainless steel options are available for appropriate designs. Material requirements should be confirmed when requesting a quotation or developing a custom product.",
  },
  {
    question: "Can you manufacture jewelry from my own design?",
    answer:
      "Yes. Send a sketch, reference image, technical drawing or physical sample. Our team can evaluate the construction, material, finish and manufacturing requirements before providing quotation and sampling information.",
  },
  {
    question: "Do you offer OEM jewelry manufacturing?",
    answer:
      "Yes. SteelAura supports OEM and ODM jewelry development, including custom designs, dimensions, finishes, logo applications, packaging and private-label requirements.",
  },
  {
    question: "Can you add my brand logo?",
    answer:
      "Yes. Depending on the product, branding options can include laser marking, engraving, jewelry cards, packaging boxes, pouches, labels and other private-label elements.",
  },
  {
    question: "Can I order samples before bulk production?",
    answer:
      "Yes. Sampling can be arranged for custom developments where required. Sample cost and development timing depend on the design and manufacturing process.",
  },
  {
    question: "Can you provide custom jewelry packaging?",
    answer:
      "Yes. Custom boxes, jewelry cards, pouches, labels and retail-ready packaging can be coordinated with the jewelry order.",
  },
  {
    question: "Do you ship jewelry internationally?",
    answer:
      "SteelAura supports international B2B orders. Shipping options depend on destination, shipment size and customer requirements — helpful if you plan to import jewelry from China for your market.",
  },
  {
    question: "What should I send to receive a quotation?",
    answer:
      "For ready-stock jewelry, tell us the jewelry categories, styles, approximate quantity and target market. For OEM/custom manufacturing, send your design or reference image together with expected quantity, material, finish and branding requirements where available.",
  },
] as const;

const trustStrip = [
  "OEM / ODM Support",
  "International Shipping",
  "Private Label Support",
  "Production & QC Coordination",
] as const;

function scrollToInquiry() {
  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CheckList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={[
            "flex items-start gap-2.5 text-sm leading-relaxed",
            dark ? "text-white/75" : "text-aura-stone",
          ].join(" ")}
        >
          <span
            className={[
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
              dark ? "bg-white/10 text-aura-gold-soft" : "bg-aura-black text-aura-gold-soft",
            ].join(" ")}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCta({ href = "#inquiry", children }: { href?: string; children: string }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (href === "#inquiry") {
          e.preventDefault();
          scrollToInquiry();
        }
      }}
      className="mt-10 inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
    >
      {children}
    </a>
  );
}

export function OemLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Stainless Steel Jewelry Manufacturer China | Wholesale & OEM Jewelry | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SteelAura is a stainless steel jewelry manufacturer and wholesale supplier in China offering 304 & 316L jewelry, ready-stock styles, OEM/ODM manufacturing, private label, custom designs and international shipping.",
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
    <div className="bg-white pb-24 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-aura-line bg-aura-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #b0a38e 0%, transparent 45%), radial-gradient(circle at 80% 70%, #958673 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">
              Stainless Steel Jewelry Manufacturer in China
            </p>
            <h1 className="mt-4 font-display text-3xl font-medium leading-[1.12] tracking-normal sm:text-4xl lg:text-[2.75rem]">
              Stainless Steel Jewelry Manufacturer &amp; Wholesale Jewelry Supplier in China
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Manufacture your own jewelry designs or choose from 2,000+ ready-stock styles. SteelAura supports
              jewelry brands, wholesalers, retailers and growing businesses with stainless steel jewelry
              manufacturing, OEM/ODM development, private labeling and wholesale supply from China.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:max-w-lg">
              {heroProofPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm font-medium text-white/90"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
              >
                Get Catalog &amp; Wholesale Prices
              </a>
              <a
                href="#oem-manufacturing"
                className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
              >
                Start a Custom Jewelry Project
              </a>
            </div>
            <p className="mt-4 text-sm text-white/55">
              Tell us what you&apos;re looking for and we&apos;ll recommend suitable styles, MOQ and pricing.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/hero.png"
              alt="Stainless steel fashion jewelry collection from SteelAura factory"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Inquiry form — immediately below hero */}
      <section className="border-b border-aura-line bg-aura-porcelain py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="inquiry"
            variant="ads"
            className="scroll-mt-24"
            source="OEM Google Ads Landing Page (/lp/oem)"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-aura-line bg-aura-porcelain py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustStrip.map((item) => (
              <li key={item} className="text-xs font-medium uppercase tracking-wider text-aura-stone sm:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product categories */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Stainless Steel Jewelry for Wholesale &amp; Custom Manufacturing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-aura-stone">
            Source multiple jewelry categories from one stainless steel jewelry manufacturer in China — from
            ready-stock collections to fully customized designs.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {productCategories.map(({ title, src, alt }) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="px-3 py-3 font-display text-base font-medium text-aura-black">{title}</p>
              </li>
            ))}
          </ul>
          <SectionCta>Request Available Styles</SectionCta>
        </div>
      </section>

      {/* Two ways */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Wholesale Ready Stock or Manufacture Your Own Designs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you are searching for a wholesale jewelry supplier in China or a stainless steel jewelry
              manufacturer for your own collection, SteelAura supports both sourcing models.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">
                Ready-Stock Wholesale
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-aura-black">
                Choose From Existing Jewelry Designs
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">
                Build or expand your jewelry collection without developing every style from scratch. Choose from our
                existing stainless steel jewelry designs and create a broader assortment with lower development time.
              </p>
              <CheckList items={readyStockBenefits} />
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="mt-8 inline-flex rounded-full bg-aura-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
              >
                Get Wholesale Catalog
              </a>
            </article>
            <article className="rounded-2xl border border-aura-line bg-aura-black p-6 text-white shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
                OEM / ODM Manufacturing
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium">Manufacture Your Own Jewelry Designs</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                Send us a sketch, reference image, technical drawing or existing sample. Our manufacturing team can
                evaluate the design and develop it for stainless steel production.
              </p>
              <CheckList items={oemBenefits} dark />
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
              >
                Send Your Design
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Quality / materials */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Quality Starts With What Your Jewelry Is Actually Made From
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Not every product marketed as stainless steel jewelry delivers the same performance. Material grade,
              machining, polishing, plating, stone setting and finishing all influence the appearance and durability of
              the finished piece.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {qualityCards.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/40 p-6 sm:p-7"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>Discuss Your Product Specification</SectionCta>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Explore Jewelry We Manufacture &amp; Supply
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">
              From everyday stainless steel essentials to trend-driven collections, build a broader jewelry assortment
              with one manufacturing partner.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseGroups.map(({ title, src, alt }) => (
              <li key={title} className="group overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-medium text-aura-black sm:text-sm">{title}</p>
              </li>
            ))}
          </ul>
          <SectionCta>Ask for Styles &amp; Prices</SectionCta>
        </div>
      </section>

      {/* OEM process */}
      <section id="oem-manufacturing" className="scroll-mt-24 border-b border-aura-line bg-aura-black py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
            OEM Jewelry Manufacturing
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Have Your Own Jewelry Design? We&apos;ll Help Manufacture It.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/70">
            SteelAura works with jewelry brands, wholesalers and retailers developing custom stainless steel jewelry. We
            can evaluate reference images, technical drawings, physical samples or new product concepts and determine a
            suitable manufacturing approach.
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {oemSteps.map(({ step, title, body }) => (
              <li key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-display text-2xl font-medium text-aura-gold-soft">{step}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Discuss Your Custom Jewelry Design
            </a>
          </div>
        </div>
      </section>

      {/* Private label */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Your Jewelry. Your Brand.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">
              Turn ready-stock or custom-manufactured jewelry into a retail-ready branded collection. Branding and
              packaging can be coordinated alongside your jewelry order, reducing the need to manage multiple
              suppliers.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brandingServices.map(({ title, src }) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img
                    src={src}
                    alt={`${title} for private label jewelry manufacturing`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = "true";
                        img.src = "/images/giftboxes.png";
                      }
                    }}
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-medium text-aura-black sm:text-sm">{title}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-aura-stone">
            Private-label support is available for both established jewelry businesses and smaller brands building
            their first collections — including jewelry manufacturers for small businesses looking for a practical
            path to launch.
          </p>
          <div className="mt-8 text-center">
            <SectionCta>Build My Private Label Collection</SectionCta>
          </div>
        </div>
      </section>

      {/* Why SteelAura */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Why Jewelry Businesses Work With SteelAura
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04]"
              >
                <h3 className="font-display text-lg font-medium text-aura-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Factory proof */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Inside Our Stainless Steel Jewelry Production
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              Looking for a jewelry factory in China means evaluating more than a product catalog. See how SteelAura
              handles product development, manufacturing, finishing, inspection and shipment preparation.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {factoryImages.map(({ src, alt, caption }) => (
              <li key={caption}>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border border-aura-line bg-aura-porcelain">
                    <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="mt-2 text-sm text-aura-stone">{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { value: "2,000+", label: "Ready-Stock Styles" },
              { value: "OEM / ODM", label: "Custom Manufacturing" },
              { value: "Worldwide", label: "B2B Export Support" },
            ].map(({ value, label }) => (
              <li
                key={label}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/50 px-5 py-6 text-center"
              >
                <p className="font-display text-3xl font-medium text-aura-black">{value}</p>
                <p className="mt-1 text-sm text-aura-stone">{label}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>Talk to Our Manufacturing Team</SectionCta>
          </div>
        </div>
      </section>

      {/* QC */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">
            Quality Control
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            What Happens Before Your Jewelry Ships?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-aura-stone">
            Before bulk jewelry is packed for shipment, finished products are checked against confirmed requirements
            and the approved sample/specification.
          </p>
          <ol className="mt-12 flex flex-wrap justify-center gap-3">
            {qcSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-aura-line bg-white px-4 py-2.5 text-sm font-medium text-aura-black shadow-sm">
                  {step}
                </span>
                {index < qcSteps.length - 1 ? (
                  <span className="hidden text-aura-gold sm:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-aura-stone">
            Inspection requirements may vary depending on product type, order size and the specifications agreed for
            the project.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Jewelry Manufacturing for Businesses at Different Stages
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {buyerCards.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>Tell Us What You&apos;re Looking For</SectionCta>
          </div>
        </div>
      </section>

      {/* Why stainless / import */}
      <section className="border-b border-aura-line bg-aura-black py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
              Why Businesses Source Stainless Steel Jewelry From China
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Stainless steel has become an important material for modern fashion jewelry because it allows brands to
              develop durable, contemporary designs across a wide range of styles and finishes. Working directly with a
              specialized stainless steel jewelry manufacturer can also provide greater control over customization,
              materials, branding and product development when you import jewelry from China.
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {importBenefits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-medium text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <ul className="mt-10 space-y-3">
            {faqItems.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;
              return (
                <li
                  key={question}
                  className={[
                    "overflow-hidden rounded-2xl border transition",
                    isOpen
                      ? "border-aura-gold/30 bg-white shadow-md ring-1 ring-aura-gold/10"
                      : "border-aura-line bg-white shadow-sm",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-start gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex-1 font-display text-lg font-medium leading-snug text-aura-black">
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
                  {isOpen ? (
                    <div className="border-t border-aura-line px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-aura-stone sm:text-base">{answer}</p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-aura-porcelain/50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Looking for a Jewelry Manufacturer in China?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
            Whether you need ready-stock stainless steel jewelry, wholesale supply, private-label products or completely
            custom designs, tell us what you&apos;re looking for and we&apos;ll recommend the most suitable way to
            start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
            >
              Get Catalog &amp; Pricing
            </a>
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full border border-aura-line bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40"
            >
              Send Your Jewelry Design
            </a>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-aura-stone">
            Ready Stock · OEM/ODM · Private Label · International B2B Supply
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-aura-black underline decoration-aura-line underline-offset-4 transition hover:text-aura-gold"
          >
            Prefer WhatsApp? Message our team
          </a>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-aura-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              scrollToInquiry();
            }}
            className="flex flex-1 items-center justify-center rounded-full border border-aura-line px-4 py-3 text-sm font-semibold text-aura-black"
          >
            Get Catalog
          </a>
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              scrollToInquiry();
            }}
            className="flex flex-[1.2] items-center justify-center rounded-full bg-aura-black px-4 py-3 text-sm font-semibold text-white"
          >
            Send Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}

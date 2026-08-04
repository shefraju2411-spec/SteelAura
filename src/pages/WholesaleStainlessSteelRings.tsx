import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ringCategories = [
  {
    title: "Minimalist Rings",
    body: "Clean, timeless designs suitable for everyday wear.",
    src: "/images/rings.png",
    alt: "Wholesale minimalist stainless steel rings",
  },
  {
    title: "Statement Rings",
    body: "Bold styles that stand out in fashion collections.",
    src: "/images/hero.png",
    alt: "Wholesale statement stainless steel rings",
  },
  {
    title: "Cubic Zirconia Rings",
    body: "Elegant rings featuring carefully set stones for customers seeking a refined look.",
    src: "/images/stonesetting.PNG",
    alt: "Wholesale cubic zirconia stainless steel rings",
  },
  {
    title: "Signet Rings",
    body: "Classic and contemporary signet designs for men's and unisex collections.",
    src: "/images/rings.png",
    alt: "Wholesale stainless steel signet rings",
  },
  {
    title: "Stackable Rings",
    body: "Slim designs that encourage multiple-item purchases.",
    src: "/images/rings.png",
    alt: "Wholesale stackable stainless steel rings",
  },
  {
    title: "Adjustable Rings",
    body: "Suitable for collections where flexible sizing is important.",
    src: "/images/rings.png",
    alt: "Wholesale adjustable stainless steel rings",
  },
  {
    title: "Couple Rings",
    body: "Matching styles for couples and gifting collections.",
    src: "/images/giftboxes.png",
    alt: "Wholesale couple stainless steel rings",
  },
  {
    title: "Fashion Rings",
    body: "Trend-driven designs for seasonal collections.",
    src: "/images/pendants.png",
    alt: "Wholesale fashion stainless steel rings",
  },
] as const;

const stainlessAdvantages = [
  "Excellent durability",
  "Suitable for everyday wear",
  "Attractive polished finish",
  "Available in silver, gold, rose gold, and black finishes",
  "Compatible with modern minimalist designs",
  "Low maintenance",
  "Available in both 304 and 316L stainless steel depending on collection",
] as const;

const businessModels = [
  "Jewelry brands",
  "Online stores",
  "Boutique retailers",
  "Chain stores",
  "Fashion brands",
  "Wholesalers",
  "Gift stores",
  "Subscription boxes",
  "Marketplace sellers",
] as const;

const finishes = [
  { title: "Silver", src: "/images/rings.png", alt: "Silver finish wholesale stainless steel rings" },
  { title: "Gold PVD", src: "/images/hero.png", alt: "Gold PVD finish wholesale stainless steel rings" },
  { title: "Rose Gold", src: "/images/earrings.png", alt: "Rose gold finish wholesale stainless steel rings" },
  { title: "Black", src: "/images/bracelets.png", alt: "Black finish wholesale stainless steel rings" },
  { title: "Two-tone", src: "/images/pendants.png", alt: "Two-tone finish wholesale stainless steel rings" },
  { title: "Brushed", src: "/images/polish.jpeg", alt: "Brushed finish stainless steel rings" },
  { title: "High-polish", src: "/images/quality.png", alt: "High-polish finish stainless steel rings" },
  { title: "Matte", src: "/images/Craftsmanship/polish.jpeg", alt: "Matte finish stainless steel rings" },
] as const;

const brandingOptions = [
  "Logo engraving",
  "Custom jewelry cards",
  "Branded pouches",
  "Gift boxes",
  "Printed sleeves",
  "Barcode labels",
  "Hang tags",
] as const;

const qualityChecks = [
  "Surface finish inspection",
  "Dimensional verification",
  "Stone setting inspection",
  "Color consistency",
  "Logo verification",
  "Packaging inspection",
  "Final shipment inspection",
] as const;

const shippingOptions = ["Express courier", "Air freight", "Sea freight"] as const;

const retailerReasons = [
  {
    title: "Broad Customer Appeal",
    body: "Minimalist, classic, and statement designs suitable for a wide range of customers.",
  },
  {
    title: "Reliable Everyday Wear",
    body: "Stainless steel offers durability and an attractive finish for daily use.",
  },
  {
    title: "Flexible Collection Building",
    body: "Mix different styles, finishes, and designs to create a balanced product range.",
  },
  {
    title: "Brand-Ready Options",
    body: "Enhance your collection with custom packaging and branding for a more professional retail presentation.",
  },
] as const;

const faqItems = [
  {
    question: "Can I request your wholesale catalogue?",
    answer:
      "Yes. Contact our team to discuss your product requirements, and we'll recommend suitable collections.",
  },
  {
    question: "Can I mix different ring styles?",
    answer:
      "Depending on the order and available collections, mixed-style purchasing may be possible. Please discuss your requirements with our team.",
  },
  {
    question: "Can you provide custom packaging?",
    answer: "Yes. Various retail-ready packaging options can be discussed.",
  },
  {
    question: "Do you offer logo engraving?",
    answer:
      "Branding options such as logo engraving may be available depending on the product and production method.",
  },
  {
    question: "Can I order samples?",
    answer: "Yes. Sample orders are available for evaluation before larger purchases.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes. We support international customers with worldwide shipping solutions.",
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

export function WholesaleStainlessSteelRings() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title =
      "Wholesale Stainless Steel Rings | China Supplier for Retailers & Jewelry Brands | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Source high-quality wholesale stainless steel rings directly from China. Discover modern designs, flexible purchasing options, reliable quality, and custom packaging for jewelry brands, wholesalers, and retailers.",
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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">
              Wholesale Jewelry
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
              Wholesale Stainless Steel Rings
            </h1>
            <p className="mt-5 font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
              Modern Wholesale Rings for Jewelry Brands, Retailers &amp; Distributors
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              SteelAura supplies wholesale stainless steel rings designed for businesses looking for reliable
              quality, consistent finishes, and a wide selection of contemporary styles. Whether you&apos;re an
              established jewelry retailer, an online store, or a growing brand, we help you source rings that are
              ready for retail with optional custom branding and packaging.
            </p>
            <Link
              to="/contact#inquiry"
              className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Request Our Wholesale Catalogue
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ring-1 ring-white/10">
            <img
              src="/images/rings.png"
              alt="Premium wholesale stainless steel ring collection"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* More than a supplier */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Partnership</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                Designed for Businesses That Need More Than Just a Supplier
              </h2>
              <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
                Finding the right wholesale ring supplier is about more than price. Your customers expect products that
                look premium, maintain their appearance over time, and arrive consistently across every order.
              </p>
              <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
                SteelAura works with jewelry businesses worldwide to provide wholesale stainless steel rings supported
                by dependable production management, quality inspections, and international shipping coordination.
              </p>
              <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
                Whether you&apos;re expanding an existing collection or introducing new styles, we aim to make sourcing
                straightforward and reliable.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]">
              <img
                src="/images/quality.png"
                alt="Quality-focused wholesale ring production"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection categories */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Collection</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Our Wholesale Ring Collection
            </h2>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ringCategories.map(({ title, body, src, alt }) => (
              <li
                key={title}
                className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-aura-porcelain">
                  <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-aura-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-aura-stone">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why stainless steel */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]">
              <img
                src="/images/polish.jpeg"
                alt="Polished stainless steel ring finish"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Material</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                Why Stainless Steel Rings?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
                Many retailers choose stainless steel because it supports everyday fashion jewelry that looks refined
                and holds up well under regular wear.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-aura-black">Advantages include:</p>
              <CheckList items={stainlessAdvantages} />
            </div>
          </div>
        </div>
      </section>

      {/* Why retailers choose */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Retail advantage</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Why Retailers Choose Stainless Steel Rings
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {retailerReasons.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04]"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business models */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Who we supply</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Suitable for Different Business Models
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              SteelAura supplies wholesale rings for:
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {businessModels.map((item) => (
              <li
                key={item}
                className="rounded-full border border-aura-line bg-white px-5 py-2.5 text-sm font-medium text-aura-black shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Finishes */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Finishes</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Available Finishes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Available finishes may include:
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {finishes.map(({ title, src, alt }) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="px-3 py-3 text-center font-display text-base font-medium text-aura-black">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Materials */}
      <section className="border-b border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Materials</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">Materials</h2>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Depending on product requirements, collections may be manufactured using:
            </p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {["304 Stainless Steel", "316L Stainless Steel"].map((material) => (
              <li
                key={material}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
              >
                <p className="font-display text-xl font-medium text-aura-gold-soft sm:text-2xl">{material}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-white/65 sm:text-base">
            For designs featuring stones, different setting methods may be used depending on the style and manufacturing
            process.
          </p>
        </div>
      </section>

      {/* Branding */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Private label</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                Branding Options
              </h2>
              <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
                Many wholesale customers eventually develop their own brand. SteelAura can discuss options such as:
              </p>
              <CheckList items={brandingOptions} />
              <Link
                to="/oem-odm/private-label-jewelry"
                className="mt-8 inline-flex text-sm font-semibold text-aura-black transition hover:text-aura-gold"
              >
                Explore private label jewelry →
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]">
              <img
                src="/images/packaging/packaging.png"
                alt="Custom jewelry packaging and branding options"
                className="aspect-[4/3] w-full object-cover"
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
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04] lg:order-2">
              <img
                src="/images/Craftsmanship/precision.PNG"
                alt="Close-up craftsmanship of stainless steel jewelry manufacturing"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Quality</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                Quality Focus
              </h2>
              <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
                Every wholesale collection should meet the expectations of your customers. Depending on the project,
                quality checks may include:
              </p>
              <CheckList items={qualityChecks} />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="border-b border-aura-line py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Logistics</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            International Shipping Support
          </h2>
          <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
            We regularly support international customers with shipping coordination. Available shipping options may
            include:
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {shippingOptions.map((option) => (
              <li
                key={option}
                className="rounded-full border border-aura-line bg-aura-porcelain/50 px-5 py-2.5 text-sm font-medium text-aura-black"
              >
                {option}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-aura-stone">
            Our team helps recommend the most suitable logistics solution based on your order size and destination.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <ul className="mt-12 space-y-3">
            {faqItems.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;
              return (
                <li
                  key={question}
                  className={[
                    "overflow-hidden rounded-2xl border transition",
                    isOpen
                      ? "border-aura-gold/30 bg-white shadow-md ring-1 ring-aura-gold/10"
                      : "border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04]",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
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
                    <div className="border-t border-aura-line px-5 pb-6 pt-4 sm:px-6">
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
      <section className="bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Looking for a Reliable Wholesale Ring Supplier?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you&apos;re launching a new jewelry collection or expanding an existing product range, SteelAura
            can help you source high-quality stainless steel rings with dependable service and international shipping
            support.
          </p>
          <Link
            to="/contact#inquiry"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Request Our Wholesale Ring Catalogue
          </Link>
        </div>
      </section>
    </div>
  );
}

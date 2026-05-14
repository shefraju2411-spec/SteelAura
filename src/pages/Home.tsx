import { Link } from "react-router-dom";

const categoryCards = [
  {
    title: "Stainless Steel Rings",
    alt: "Placeholder for stainless steel rings collection",
    src: "https://placehold.co/640x480/f5f0e8/0a0a0a?text=Stainless+Steel+Rings",
  },
  {
    title: "Necklaces",
    alt: "Placeholder for necklace collection",
    src: "https://placehold.co/640x480/ebe4d8/0a0a0a?text=Necklaces",
  },
  {
    title: "Earrings",
    alt: "Placeholder for earring collection",
    src: "https://placehold.co/640x480/f5f0e8/b8963e?text=Earrings",
  },
  {
    title: "Bracelets",
    alt: "Placeholder for bracelet collection",
    src: "https://placehold.co/640x480/ffffff/0a0a0a?text=Bracelets",
  },
  {
    title: "Pendants",
    alt: "Placeholder for pendant collection",
    src: "https://placehold.co/640x480/f5f0e8/0a0a0a?text=Pendants",
  },
  {
    title: "Custom Jewelry",
    alt: "Placeholder for custom jewelry production",
    src: "https://placehold.co/640x480/0a0a0a/d4bc6a?text=Custom+Jewelry",
  },
] as const;

const whyItems = [
  {
    title: "OEM & ODM support",
    body: "From your sketches to finished goods — flexible development paths for brands and distributors.",
  },
  {
    title: "Low MOQ options",
    body: "Accessible minimums for new lines and test markets without compromising factory consistency.",
  },
  {
    title: "Custom logo and packaging",
    body: "Branded cards, pouches, and boxes aligned with your retail and e-commerce presentation.",
  },
  {
    title: "Factory-direct pricing",
    body: "Transparent structure with no unnecessary middle layers — built for sustainable margins.",
  },
  {
    title: "Quality inspection before shipment",
    body: "Systematic checks aligned with your specifications so bulk matches approved samples.",
  },
  {
    title: "Export support",
    body: "Documentation and logistics coordination for smooth delivery to your warehouse or 3PL.",
  },
] as const;

const processSteps = [
  { step: "01", title: "Share design / reference", body: "Send drawings, samples, or inspiration — we align on feasibility early." },
  { step: "02", title: "Confirm material and finish", body: "Steel grade, plating, stones, and surface treatments locked in writing." },
  { step: "03", title: "Make sample", body: "Prototype cycle with revisions until the piece matches your target." },
  { step: "04", title: "Bulk production", body: "Scheduled manufacturing with milestone updates for larger programs." },
  { step: "05", title: "QC and shipment", body: "Final inspection, packing verification, and export-ready dispatch." },
] as const;

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-semibold tracking-tight text-aura-black sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-aura-stone">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-aura-beige-dark/80 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">China manufacturing</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-aura-black sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
              Stainless Steel Fashion Jewelry Manufacturer in China
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-aura-stone sm:text-xl">
              Custom stainless steel rings, necklaces, earrings, bracelets, and private label jewelry
              production for global brands and wholesalers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-aura-gold hover:text-aura-black"
              >
                Request a quote
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-aura-black/20 bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold hover:text-aura-gold"
              >
                View categories
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-aura-beige shadow-sm ring-1 ring-black/5">
              <img
                src="https://placehold.co/1200x900/f5f0e8/0a0a0a?text=SteelAura+Collection"
                alt="Hero placeholder representing stainless steel jewelry manufacturing"
                className="h-full w-full object-cover"
                width={1200}
                height={900}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden max-w-xs rounded-xl border border-aura-beige-dark bg-white p-4 shadow-lg sm:block lg:-bottom-6 lg:-left-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-aura-gold">B2B focus</p>
              <p className="mt-2 text-sm text-aura-stone">
                Premium stainless steel, refined finishes, and production discipline for serious partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-aura-beige/40 py-20 sm:py-24" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Product categories"
            subtitle="Focused stainless steel programs across core jewelry families — scalable from sampling to volume."
            id="categories-heading"
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map(({ title, alt, src }) => (
              <li key={title}>
                <Link
                  to="/products"
                  className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-aura-gold/30"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-aura-beige">
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      width={640}
                      height={480}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <span className="font-display text-lg font-semibold text-aura-black">{title}</span>
                    <span className="text-aura-gold transition group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-aura-beige-dark/60 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SteelAura"
            title="Why choose us"
            subtitle="A manufacturing partner structured around clarity, consistency, and long-term programs."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-beige-dark/80 bg-aura-beige/30 p-6 transition hover:border-aura-gold/40 hover:bg-aura-beige/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aura-black text-sm font-bold text-aura-gold-light">
                  ✓
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-aura-black">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-aura-stone">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-aura-black py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-light">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Custom manufacturing process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              A straightforward path from concept to export — built for teams that value predictable execution.
            </p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map(({ step, title, body }) => (
              <li
                key={step}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="font-display text-sm font-bold text-aura-gold-light">{step}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-white/50">
            Need a tailored timeline for complex sets or seasonal launches?{" "}
            <Link to="/oem-odm" className="font-medium text-aura-gold-light underline-offset-4 hover:underline">
              Explore OEM & ODM
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aura-beige py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 sm:p-12 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Next step</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-aura-black sm:text-4xl">
                  Start Your Custom Jewelry Project
                </h2>
                <p className="mt-4 text-base leading-relaxed text-aura-stone">
                  Share your target price band, volumes, and reference styles. Our team will respond with
                  realistic options for materials, finishes, and sampling.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-aura-gold px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-gold-light"
                  >
                    Contact manufacturing
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full border border-aura-black/15 px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold hover:text-aura-gold"
                  >
                    About SteelAura
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[280px] bg-aura-beige-dark/50 lg:min-h-0">
                <img
                  src="https://placehold.co/900x700/0a0a0a/d4bc6a?text=Production+Quality"
                  alt="Placeholder image suggesting factory quality and jewelry production"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={900}
                  height={700}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/50 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { InquiryForm } from "../components/InquiryForm";

const categoryCards = [
  {
    title: "Rings",
    alt: "Placeholder for rings collection",
    src: "/images/rings.png",
  },
  {
    title: "Necklaces",
    alt: "Placeholder for necklaces collection",
    src: "/images/home/necklaces.png",
  },
  {
    title: "Pendants",
    alt: "Placeholder for pendants collection",
    src: "public/images/home/pendants.png",
  },
  {
    title: "Earrings",
    alt: "Placeholder for earrings collection",
    src: "public/images/home/earrings.png",
  },
  {
    title: "Bracelets",
    alt: "Placeholder for bracelets collection",
    src: "public/images/home/bracelets.png",
  },
  {
    title: "Custom jewelry and gift sets",
    alt: "Placeholder for custom jewelry and gift sets",
    src:"public/images/home/giftboxes.png",
  },
] as const;

const whyItems = [
  {
    title: "Premium Stainless Steel Craftsmanship",
    body: "316L and quality grades, refined polishing, plating, and finishing — built for durability and a high-end retail feel.",
  },
  {
    title: "Reliable OEM & ODM Manufacturing",
    body: "Structured development from your designs or ours, clear milestones, and factory discipline for brands and wholesalers.",
  },
  {
    title: "Low MOQ & Flexible Customization",
    body: "Accessible entry quantities for new collections, plus logo, packaging, and style options tailored to your channel.",
  },
  {
    title: "Strict Quality Control Standards",
    body: "In-line checks and pre-shipment inspection against agreed specs so bulk consistently matches approved samples.",
  },
  {
    title: "Fast Sampling & Production Support",
    body: "Responsive sampling cycles and production scheduling to help you hit launches, restocks, and seasonal windows.",
  },
  {
    title: "Global Export Experience & On-Time Delivery",
    body: "Export documentation and logistics coordination with reliable lead-time planning for markets worldwide.",
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Share Your Design Vision",
    body: "Send us your sketches, reference images, samples, or concepts — we evaluate feasibility and align on the best production approach from the start.",
  },
  {
    step: "02",
    title: "Confirm Materials & Finishes",
    body: "We finalize every detail in writing, including stainless steel grade, plating color, stone options, logo placement, and surface finishes.",
  },
  {
    step: "03",
    title: "Sampling & Refinement",
    body: "A prototype is developed for your review, with revisions and refinements until the final piece matches your expectations.",
  },
  {
    step: "04",
    title: "Bulk Production",
    body: "Once approved, production is scheduled with structured timelines, progress updates, and quality monitoring throughout the process.",
  },
  {
    step: "05",
    title: "Quality Control & Global Shipping",
    body: "Every order goes through final inspection, packaging verification, and export preparation before secure worldwide dispatch.",
  },
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
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl"
      >
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
      <section className="border-b border-aura-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">China manufacturing</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.12] tracking-normal text-aura-black sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
              Stainless Steel Fashion Jewelry Manufacturer in China
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-aura-stone sm:text-xl">
              Premium stainless steel jewelry at factory-direct prices — without compromising on quality.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-aura-stone sm:text-xl">
              Choose SteelAura Jewelry for 2,000+ ready-stock styles that help you test trends faster, reduce
              inventory risk, and maximize your profits.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
              >
                Get a free quote
              </Link>
              <a
                href="https://wa.me/8613305631958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-aura-line bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold/50 hover:text-aura-gold"
              >
                Free Consultation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-aura-porcelain shadow-sm ring-1 ring-black/[0.06]">
              <img
                src="/public/images/home/hero.png"
                alt="Hero placeholder representing stainless steel jewelry manufacturing"
                className="h-full w-full object-cover"
                width={1200}
                height={900}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden max-w-xs rounded-xl border border-aura-line bg-white p-4 shadow-lg sm:block lg:-bottom-6 lg:-left-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-aura-gold">B2B focus</p>
              <p className="mt-2 text-sm text-aura-stone">
                Premium stainless steel, refined finishes, and production discipline for serious partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-aura-porcelain py-20 sm:py-24" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Product categories"
            subtitle="Focused stainless steel programs across core jewelry families — scalable from sampling to volume."
            id="categories-heading"
          />
          <ul className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map(({ title, alt, src }) => (
              <li key={title} className="flex min-h-0">
                <article className="flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06]">
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
                  <div className="flex h-[7.25rem] w-full shrink-0 items-center border-t border-aura-line/80 px-5 sm:px-6">
                    <span className="text-balance font-display text-lg font-semibold leading-[1.35] tracking-normal text-aura-black">
                      {title}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-aura-line bg-white py-20 sm:py-24">
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
                className="rounded-2xl border border-aura-line bg-aura-porcelain/50 p-6 transition hover:border-aura-gold/25 hover:bg-aura-porcelain"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-aura-line bg-white text-sm font-medium text-aura-gold">
                  ✓
                </div>
                <h3 className="mt-4 text-balance font-display text-lg font-semibold leading-snug text-aura-black">
                  {title}
                </h3>
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-white sm:text-4xl">
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
                className="relative flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="font-display text-base font-medium leading-snug text-white">
                  <span className="text-aura-gold-soft">{step}</span>
                  <span className="text-white/75"> — </span>
                  {title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-white/50">
            Need a tailored timeline for complex sets or seasonal launches?{" "}
            <Link to="/oem-odm" className="font-medium text-aura-gold-soft underline-offset-4 hover:underline">
              Explore OEM & ODM
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aura-porcelain py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.06]">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 sm:p-12 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Next step</p>
                <h2 className="mt-4 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                  Start Your Custom Jewelry Project
                </h2>
                <p className="mt-4 text-base leading-relaxed text-aura-stone">
                  Share your target price band, volumes, and reference styles. Our team will respond with
                  realistic options for materials, finishes, and sampling.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
                  >
                    Contact manufacturing
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center rounded-full border border-aura-line px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40 hover:text-aura-gold"
                  >
                    About SteelAura
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[280px] bg-aura-porcelain lg:min-h-0">
                <img
                  src="https://placehold.co/900x700/0a0a0a/b0a38e?text=Production+Quality"
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

      {/* Inquiry */}
      <section className="border-t border-aura-line bg-white py-20 sm:py-24" aria-labelledby="home-inquiry-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Get started</p>
          <h2
            id="home-inquiry-heading"
            className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl"
          >
            Get a free quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-aura-stone">
            Complete the form below and our team will follow up with manufacturing options tailored to your
            program.
          </p>
          <InquiryForm id="home-inquiry" className="mt-10" />
        </div>
      </section>
    </>
  );
}

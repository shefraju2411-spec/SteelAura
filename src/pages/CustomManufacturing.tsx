import { Link } from "react-router-dom";

const oemInputs = [
  "CAD files",
  "Technical drawings",
  "Product samples",
  "Design specifications",
] as const;

const oemServices = [
  "Manufacturing based on customer designs",
  "Custom logo engraving",
  "Custom packaging",
  "Material and finish customization",
  "Gold, silver, black, and rose gold plating options",
  "Quality inspection and production management",
] as const;

const odmSupport = [
  "Trend research",
  "Design development",
  "3D CAD creation",
  "Prototype production",
  "Collection development",
  "Material and finish recommendations",
] as const;

const developmentSteps = [
  {
    step: "01",
    title: "Design Consultation",
    body: "Share your ideas, sketches, inspiration images, or product requirements.",
  },
  {
    step: "02",
    title: "3D Design & Engineering",
    body: "Our designers create detailed 3D models for review and approval.",
  },
  {
    step: "03",
    title: "Sample Development",
    body: "Physical samples are produced for testing and evaluation.",
  },
  {
    step: "04",
    title: "Mold Creation",
    body: "Production molds are developed after sample approval.",
  },
  {
    step: "05",
    title: "Mass Production",
    body: "The approved design moves into full-scale manufacturing.",
  },
  {
    step: "06",
    title: "Finishing & Quality Control",
    body: "Products undergo polishing, plating, stone setting, and final inspection.",
  },
  {
    step: "07",
    title: "Packaging & Delivery",
    body: "Products are packed according to your branding requirements and shipped worldwide.",
  },
] as const;

const customizationOptions = [
  "Stainless steel grades",
  "Gold plating colors",
  "Surface finishes",
  "Engraving",
  "Stone setting",
  "Chain lengths",
  "Clasp styles",
  "Logo branding",
  "Gift boxes and retail packaging",
] as const;

const partnerReasons = [
  {
    title: "End-to-End Manufacturing Support",
    body: "From concept development to final delivery.",
  },
  {
    title: "Flexible Production Solutions",
    body: "Suitable for startups, growing brands, wholesalers, and established retailers.",
  },
  {
    title: "Professional Development Team",
    body: "Experienced engineers and jewelry specialists support every project.",
  },
  {
    title: "Consistent Quality Standards",
    body: "Strict quality control throughout production.",
  },
  {
    title: "Global Export Experience",
    body: "Serving customers across North America, Europe, Australia, and other international markets.",
  },
] as const;

const productCategories = [
  "Rings",
  "Necklaces",
  "Bracelets",
  "Earrings",
  "Pendants",
  "Charms",
  "Anklets",
  "Men's Jewelry",
  "Fashion Jewelry Collections",
] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-aura-stone sm:text-base">
          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-aura-gold/40 bg-aura-porcelain text-[10px] font-semibold text-aura-gold">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CustomManufacturing() {
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
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-6xl">
            OEM &amp; ODM Jewelry Manufacturing
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            Turn Your Jewelry Ideas Into Market-Ready Products
          </p>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you have a complete design concept or simply an idea in mind, we help brands, wholesalers,
            and retailers develop high-quality stainless steel jewelry from concept to production. Our team
            supports every stage of development, including design, prototyping, mold creation, manufacturing,
            plating, stone setting, quality control, and packaging.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
          >
            Start a project
          </Link>
        </div>
      </section>

      {/* OEM */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">OEM</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              OEM Jewelry Manufacturing
            </h2>
            <p className="mt-2 font-display text-xl font-medium text-aura-gold">Bring Your Existing Designs to Life</p>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Our OEM service is ideal for brands that already have:
            </p>
            <CheckList items={oemInputs} />
            <p className="mt-8 text-base leading-relaxed text-aura-stone sm:text-lg">
              We manufacture according to your requirements while ensuring consistent quality, precision
              craftsmanship, and reliable production timelines.
            </p>
          </div>
          <div className="rounded-3xl border border-aura-line bg-aura-porcelain/60 p-8 shadow-sm ring-1 ring-black/[0.04] sm:p-10">
            <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">OEM Services Include:</h3>
            <CheckList items={oemServices} />
          </div>
        </div>
      </section>

      {/* ODM */}
      <section className="border-y border-aura-line bg-aura-porcelain/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06]">
                <img
                  src="https://placehold.co/900x675/f7f6f4/958673?text=ODM+Design+Development"
                  alt="Placeholder for ODM design and collection development"
                  className="h-full w-full object-cover"
                  width={900}
                  height={675}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">ODM</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
                ODM Jewelry Manufacturing
              </h2>
              <p className="mt-2 font-display text-xl font-medium text-aura-gold">
                Develop Unique Jewelry Collections
              </p>
              <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
                For customers who do not have finished designs, our ODM service provides complete product
                development support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
                Our design team can assist with:
              </p>
              <CheckList items={odmSupport} />
              <p className="mt-8 text-base leading-relaxed text-aura-stone sm:text-lg">
                From concept sketches to final production, we help transform ideas into commercially successful
                jewelry collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development process */}
      <section className="bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Workflow</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              Our Development Process
            </h2>
          </div>
          <ol className="mt-14 space-y-0">
            {developmentSteps.map(({ step, title, body }, index) => (
              <li
                key={step}
                className="relative grid gap-4 border-l border-white/15 py-8 pl-8 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:pl-12 lg:grid-cols-[5rem_1fr]"
              >
                <span
                  className="absolute -left-px top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-aura-gold-soft ring-4 ring-aura-black"
                  aria-hidden
                />
                <span className="font-display text-2xl font-medium text-aura-gold-soft sm:text-3xl">{step}</span>
                <div className={index < developmentSteps.length - 1 ? "border-b border-white/10 pb-8" : ""}>
                  <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/65">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Customization */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Customization Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-aura-stone">
            We offer extensive customization capabilities:
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {customizationOptions.map((option) => (
            <li
              key={option}
              className="rounded-full border border-aura-line bg-aura-porcelain/50 px-5 py-2.5 text-sm font-medium text-aura-black transition hover:border-aura-gold/30 hover:bg-white"
            >
              {option}
            </li>
          ))}
        </ul>
      </section>

      {/* Why partner */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Why Partner With SteelAura?
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerReasons.map(({ title, body }) => (
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

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
          Products We Manufacture
        </h2>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {productCategories.map((name) => (
            <li
              key={name}
              className="flex items-center justify-center rounded-2xl border border-aura-line bg-white px-4 py-6 text-center shadow-sm ring-1 ring-black/[0.04] transition hover:border-aura-gold/25 hover:shadow-md"
            >
              <span className="font-display text-base font-medium text-aura-black sm:text-lg">{name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Ready to Develop Your Jewelry Collection?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Whether you need manufacturing based on existing designs or complete product development support, our
            team is ready to help bring your jewelry ideas to market.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Contact our team
            </Link>
            <Link
              to="/quality"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
            >
              Explore craftsmanship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

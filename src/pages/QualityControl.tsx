import { Link } from "react-router-dom";

const manufacturingMethods = [
  {
    id: "die-casting",
    title: "Die Casting",
    image: "/public/images/craftsmanship/mold.jpeg",
    paragraphs: [
      "Die casting is ideal for producing intricate and highly detailed jewelry components. Molten metal is injected into precision molds under high pressure, allowing complex designs to be manufactured with excellent accuracy, consistency, and surface quality.",
    ],
  },
  {
    id: "hydraulic-stamping",
    title: "Hydraulic Stamping",
    image: "/public/images/craftsmanship/stamping.PNG",
    paragraphs: [
      "Hydraulic stamping is used to create simple yet elegant jewelry designs with high efficiency. The process enables precise shaping, embossing, and texturing of metal, making it particularly suitable for bracelets, pendants, necklaces, and other minimalist jewelry styles.",
    ],
  },
  {
    id: "precision-cutting",
    title: "Precision Cutting",
    image: "/public/images/craftsmanship/precision.PNG",
    paragraphs: [
      "Using advanced automated cutting technology, stainless steel is precisely cut into custom shapes, patterns, and openwork designs. This process delivers clean edges, high accuracy, and excellent consistency, making it ideal for both simple and intricate jewelry components.",
    ],
  },
  {
    id: "cnc-detailing",
    title: "CNC Detailing",
    image: "/public/images/craftsmanship/cnc.PNG",
    paragraphs: [
      "CNC machining is used to create fine engravings, custom textures, logos, and intricate design elements with exceptional precision. The computer-controlled process ensures consistent quality and sharp detailing, even for complex jewelry designs.",
    ],
  },
  {
    id: "stone-setting",
    title: "Stone Setting",
    image: "/images/craftsmanship/stone-setting.jpg",
    paragraphs: [
      "Our skilled artisans carefully set gemstones and decorative stones to ensure both security and visual appeal. Every stone is positioned with precision to enhance brilliance, durability, and the overall elegance of the finished piece.",
    ],
  },
  {
    id: "polishing-finishing",
    title: "Polishing & Finishing",
    image: "/public/images/craftsmanship/polish.jpeg",
    paragraphs: [
      "Each jewelry piece undergoes multiple polishing and finishing stages to refine its surface and enhance its appearance. This process removes imperfections, creates a smooth texture, and delivers the premium shine expected from high-quality jewelry.",
    ],
  },
  {
    id: "pvd-plating",
    title: "PVD Vacuum Plating",
    image: "/images/craftsmanship/pvd-plating.jpg",
    paragraphs: [
      "PVD vacuum plating provides a durable and long-lasting color finish while improving resistance to wear and tarnishing. Available in a variety of colors, including gold, rose gold, black, and silver, it ensures both beauty and durability for everyday wear.",
    ],
  },
] as const;

const pvdBenefits = [
  "Color retention",
  "Scratch resistance",
  "Sweat resistance",
  "Everyday durability",
] as const;

const qcCheckpoints = [
  "Raw material verification",
  "Structural inspection",
  "Plating and Polishing consistency checks",
  "Stone security testing",
  "Clasp and chain testing",
  "Final appearance inspection",
] as const;

function MethodImage({ src, title }: { src: string; title: string }) {
  const placeholder = `https://placehold.co/720x540/f7f6f4/958673?text=${encodeURIComponent(title)}`;

  return (
    <figure className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-aura-line bg-aura-porcelain shadow-sm ring-1 ring-black/[0.04]">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover"
        width={720}
        height={540}
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.dataset.fallback) {
            img.dataset.fallback = "true";
            img.src = placeholder;
          }
        }}
      />
    </figure>
  );
}

function ManufacturingMethod({
  title,
  image,
  paragraphs,
  reverse = false,
}: {
  title: string;
  image: string;
  paragraphs: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid gap-8 border-b border-aura-line py-12 last:border-b-0 sm:gap-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className={reverse ? "lg:order-2" : undefined}>
        <h3 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4 space-y-4">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-aura-stone sm:text-lg">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className={reverse ? "lg:order-1" : undefined}>
        <MethodImage src={image} title={title} />
      </div>
    </div>
  );
}

export function QualityControl() {
  return (
    <div className="bg-white">
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
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">Manufacturing</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-normal sm:text-6xl">
            Craftsmanship
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            Precision Manufacturing. Built for Global Jewelry Brands.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            At SteelAura, craftsmanship is not just about making jewelry — it is about creating products that
            represent your brand with consistency, durability, and precision.
          </p>
        </div>
      </section>

      {/* Intro + pillars */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-base leading-relaxed text-aura-stone sm:text-lg">
              Every stainless steel jewelry piece goes through a carefully managed manufacturing process where
              design accuracy, finishing quality, plating durability, and structural strength are monitored at
              every stage. From minimalist everyday jewelry to highly detailed custom designs, we focus on
              delivering pieces that look refined, wear comfortably, and perform reliably in real-world retail
              environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              We understand the challenges global buyers often face while sourcing jewelry from China —
              inconsistent finishing, fading plating, unstable quality, delayed production, poor communication,
              and lack of transparency. Our manufacturing system is built specifically to eliminate these risks.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: "Precision", desc: "Design accuracy at every stage" },
              { label: "Durability", desc: "Steel strength & secure settings" },
              { label: "Consistency", desc: "Stable quality across batches" },
            ].map(({ label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/50 p-5 ring-1 ring-black/[0.03]"
              >
                <p className="font-display text-xl font-medium text-aura-black">{label}</p>
                <p className="mt-1 text-sm text-aura-stone">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Manufacturing Methods */}
      <section className="border-y border-aura-line bg-aura-porcelain/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Advanced Manufacturing Methods
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
              To achieve different jewelry structures and visual effects, we combine multiple production
              technologies depending on the design requirements.
            </p>
          </div>

          <div className="mt-12">
            {manufacturingMethods.map((method, index) => (
              <ManufacturingMethod
                key={method.id}
                title={method.title}
                image={method.image}
                paragraphs={method.paragraphs}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Surface Finishing */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-aura-black text-white ring-1 ring-black/[0.06]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Finishing</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
                Premium Surface Finishing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75">
                Surface finishing defines how jewelry feels, reflects light, and performs over time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                Every SteelAura piece undergoes multi-stage polishing and surface treatment to achieve a smooth,
                premium finish with consistent color appearance across production batches.
              </p>
              <p className="mt-6 text-sm font-medium uppercase tracking-widest text-aura-gold-soft">
                PVD coating benefits
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {pvdBenefits.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="font-display text-xl font-medium text-aura-gold-soft">Gold · Rose gold · Silver · Black</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                We use advanced PVD coating technology for gold, rose gold, silver, black, and custom finishes —
                engineered for long-term wear, not just a beautiful look on Day 1.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Our focus is ensuring the product maintains its appearance throughout long-term use in real retail
                and e-commerce environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Assurance</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Quality Control at Every Stage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              We believe quality is created during production — not inspected only at the end.
            </p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {qcCheckpoints.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-aura-line bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-aura-line bg-aura-porcelain text-xs font-semibold text-aura-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1.5 text-sm leading-relaxed text-aura-stone">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-aura-stone">
            This process helps us maintain stable quality across bulk production while minimizing defects and
            inconsistencies.
          </p>
        </div>
      </section>

      {/* Reliability + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-3xl border border-aura-line bg-white p-8 shadow-sm ring-1 ring-black/[0.04] sm:p-12 lg:p-14">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Built Around Reliability
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-aura-stone sm:text-lg">
            For us, craftsmanship also means operational discipline. Clear communication, transparent timelines,
            production updates, organized project management, and attention to detail are all part of the
            manufacturing experience we provide to our clients.
          </p>
          <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-aura-black sm:text-lg">
            Because great jewelry manufacturing is not only about how the product looks — it is also about how
            confidently your brand can scale with the right manufacturing partner.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
            >
              Get in touch
            </Link>
            <Link
              to="/oem-odm"
              className="inline-flex rounded-full border border-aura-line px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40 hover:text-aura-gold"
            >
              OEM & ODM services
            </Link>
            <Link
              to="/"
              className="inline-flex rounded-full border border-aura-line px-8 py-3 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40 hover:text-aura-gold"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

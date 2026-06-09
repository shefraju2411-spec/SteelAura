import { Link } from "react-router-dom";

const packagingStyles = [
  {
    title: "Luxury Rigid Boxes",
    body: "Designed for premium jewelry collections, rigid boxes offer exceptional durability and an upscale presentation. These boxes are ideal for luxury brands seeking a sophisticated unboxing experience.",
  },
  {
    title: "Magnetic Closure Boxes",
    body: "Featuring a sleek magnetic flap design, these boxes combine functionality with elegance. They are widely used for premium jewelry sets and gift packaging.",
  },
  {
    title: "Drawer Style Boxes",
    body: "A modern packaging solution that provides a unique slide-out opening experience. Suitable for rings, necklaces, bracelets, and curated jewelry collections.",
  },
  {
    title: "Self-Textured Paper Boxes",
    body: "Simple, elegant, and cost-effective packaging made using premium textured paper materials. These boxes are perfect for brands that prefer a clean and minimalist appearance while maintaining a premium feel.",
  },
  {
    title: "Eco-Friendly Packaging",
    body: "Sustainable packaging solutions manufactured using recyclable and environmentally responsible materials without compromising on aesthetics or quality.",
  },
  {
    title: "Creative Custom Packaging",
    body: "For brands looking to make a distinctive statement, we offer fully customized packaging structures, unique box shapes, special inserts, and creative presentation concepts tailored to your requirements.",
  },
] as const;

const brandingTechniques = [
  {
    title: "Gold Foil Stamping",
    body: "A premium metallic finish that adds a luxurious and sophisticated appearance to your packaging. One of the most popular choices for jewelry brands.",
  },
  {
    title: "Silver Foil Stamping",
    body: "Provides a clean and elegant metallic effect that pairs exceptionally well with modern and minimalist packaging designs.",
  },
  {
    title: "UV Coating",
    body: "Creates a glossy raised effect on selected areas of the packaging, helping logos, patterns, and artwork stand out visually.",
  },
  {
    title: "Offset Printing",
    body: "Ideal for colorful logos, intricate artwork, detailed graphics, and full-color packaging designs with excellent print clarity.",
  },
  {
    title: "Debossing",
    body: "A pressed-in logo effect that delivers a subtle and sophisticated branding experience often favored by luxury brands.",
  },
  {
    title: "Embossed Texture",
    body: "Custom textures can be applied across the packaging surface to create a distinctive tactile feel and enhance visual appeal.",
  },
] as const;

const jewelryPackaging = [
  {
    title: "Ring Packaging",
    body: "Custom ring boxes designed to enhance product presentation while providing protection during storage and transportation.",
  },
  {
    title: "Necklace Packaging",
    body: "Elegant packaging options suitable for pendants, chains, and statement necklaces.",
  },
  {
    title: "Bracelet Packaging",
    body: "Packaging designed for bangles, chain bracelets, charm bracelets, and luxury bracelet collections.",
  },
  {
    title: "Earring Packaging",
    body: "Compact and stylish packaging solutions for stud earrings, hoops, and fashion earrings.",
  },
  {
    title: "Jewelry Gift Sets",
    body: "Premium packaging designed for multi-piece collections and gift presentations.",
  },
  {
    title: "Custom Collection Packaging",
    body: "Tailored packaging solutions developed specifically for private-label and branded jewelry collections.",
  },
] as const;

const brandingAddOns = [
  "Custom Jewelry Pouches",
  "Thank You Cards",
  "Jewelry Care Instructions",
  "Product Information Cards",
  "Gift Message Cards",
  "Printed Sleeves",
  "Branded Stickers",
  "Custom Tissue Paper",
  "Ribbon Decoration",
  "QR Code Inserts",
  "Retail Hang Tags",
] as const;

function StyleCard({ title, body, index }: { title: string; body: string; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] transition hover:shadow-md hover:ring-aura-gold/20 sm:p-8">
      <span className="font-display text-4xl font-medium text-aura-porcelain transition group-hover:text-aura-gold/20">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-2 font-display text-xl font-medium text-aura-black sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
    </article>
  );
}

export function PackagingBranding() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-aura-line bg-aura-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, #b0a38e 0%, transparent 45%), radial-gradient(circle at 75% 80%, #958673 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">Branding</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Custom Jewelry Packaging &amp; Branding Solutions
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            Packaging That Elevates Your Brand
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-aura-stone sm:text-lg">
            <p>
              Jewelry packaging is more than just a box—it is an extension of your brand. The right packaging
              creates a memorable first impression, enhances perceived value, and elevates the overall customer
              experience.
            </p>
            <p>
              At SteelAura, we offer a wide range of custom jewelry packaging solutions designed to complement
              your products and strengthen your brand identity.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-aura-line bg-aura-porcelain shadow-sm ring-1 ring-black/[0.06]">
            <img
              src="public/images/packaging/packaging.png"
              alt="Placeholder for custom jewelry packaging and branding"
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Packaging styles */}
      <section className="border-y border-aura-line bg-aura-porcelain/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            Packaging Styles We Offer
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packagingStyles.map((style, index) => (
              <StyleCard key={style.title} {...style} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Branding techniques */}
      <section className="bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Decoration</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              Logo Branding &amp; Decoration Techniques
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Your logo is often the first thing customers notice. We offer multiple branding techniques to create a
              packaging design that reflects your brand personality and product positioning.
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brandingTechniques.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-aura-gold-soft/30 hover:bg-white/[0.06]"
              >
                <h3 className="font-display text-lg font-medium text-aura-gold-soft sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Jewelry categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
          Packaging Solutions for Every Jewelry Category
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-aura-stone">
          We provide packaging solutions for a wide range of jewelry products:
        </p>
        <ul className="mt-12 space-y-6">
          {jewelryPackaging.map(({ title, body }, index) => (
            <li
              key={title}
              className={[
                "grid gap-6 rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:grid-cols-[7rem_1fr] sm:items-center sm:gap-10 sm:p-8",
                index % 2 === 1 ? "lg:grid-cols-[1fr_7rem]" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "flex aspect-square max-w-[7rem] items-center justify-center rounded-xl bg-aura-porcelain",
                  index % 2 === 1 ? "lg:order-2 lg:justify-self-end" : "",
                ].join(" ")}
              >
                <span className="font-display text-3xl font-medium text-aura-gold/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-aura-stone">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Add-ons */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Extras</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Additional Branding Options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-aura-stone">
              Further enhance your packaging and customer experience with custom branding accessories.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-aura-black">
              Available Add-Ons
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {brandingAddOns.map((addon) => (
              <li
                key={addon}
                className="rounded-full border border-aura-line bg-white px-5 py-2.5 text-sm font-medium text-aura-black shadow-sm transition hover:border-aura-gold/30"
              >
                {addon}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">
            Ready to Elevate Your Brand Packaging?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Share your collection, logo files, and retail channel — we will recommend structures, materials, and
            decoration options that fit your budget and brand positioning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Contact our team
            </Link>
            <Link
              to="/oem-odm"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
            >
              OEM &amp; ODM services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

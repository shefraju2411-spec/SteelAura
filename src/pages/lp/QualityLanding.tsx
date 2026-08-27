import { useEffect } from "react";
import { InquiryForm } from "../../components/InquiryForm";

const WHATSAPP_URL = "https://wa.me/8613305631958";

const challenges = [
  {
    title: "Skin Irritation & Allergic Reactions",
    intro: "Customers often report:",
    items: [
      "Skin irritation",
      "Redness and itching",
      "Green marks on the skin",
      "Discomfort after prolonged wear",
    ],
    footer:
      "These issues are commonly caused by low-quality base metals such as zinc alloy, copper alloy, nickel-containing materials, or mixed metals being used in jewelry production.",
  },
  {
    title: "Color Fading & Plating Failure",
    intro: "One of the most frequent reasons for customer complaints is rapid color fading. Many suppliers use thin electroplating layers that may:",
    items: [
      "Fade within weeks or months",
      "Lose shine quickly",
      "Develop uneven color patches",
      "Require frequent replacement",
    ],
    footer:
      "This leads to customer dissatisfaction, negative reviews, and repeat replacement costs.",
  },
  {
    title: "Tarnishing & Oxidation",
    intro: "Jewelry made from lower-quality metals can tarnish over time when exposed to:",
    items: ["Moisture", "Sweat", "Perfumes", "Daily wear"],
    footer: "The result is jewelry that loses its appearance long before customers expect it to.",
  },
  {
    title: "Broken Chains, Clasps & Components",
    intro: "Poor manufacturing standards often result in:",
    items: [
      "Weak soldering points",
      "Low-quality jump rings",
      "Fragile clasps",
      "Easily broken chains",
    ],
    footer: "Every product failure can damage your brand reputation and increase refund rates.",
  },
  {
    title: "Misleading Material Claims",
    intro: 'Unfortunately, some suppliers market products as "stainless steel jewelry" when the actual materials may include:',
    items: [
      "Zinc alloy",
      "Copper alloy",
      "Mixed metal compositions",
      "Low-grade substitutes",
    ],
    footer:
      "Without proper material verification, brands may unknowingly sell products that fail customer expectations.",
  },
] as const;

const solutions = [
  {
    title: "Verified Stainless Steel Materials",
    intro: "As a stainless steel jewelry manufacturer in China, we focus on genuine stainless steel production using industry-standard materials suitable for long-term wear.",
    items: [
      "Material verification",
      "Production traceability",
      "Supplier qualification",
      "Consistent manufacturing standards",
    ],
  },
  {
    title: "Durable PVD & Advanced Plating Options",
    intro: "Our plating solutions are designed to improve durability and appearance retention.",
    items: [
      "Gold plating",
      "Rose gold plating",
      "Black plating",
      "Premium PVD coating options",
      "Better wear resistance",
    ],
  },
  {
    title: "Quality Control Throughout Production",
    intro: "Every project follows structured quality inspection procedures.",
    items: [
      "Raw material verification",
      "Production monitoring",
      "Assembly inspection",
      "Plating inspection",
      "Final quality control",
    ],
  },
  {
    title: "Manufacturing Designed for Long-Term Customer Satisfaction",
    intro: "We help brands reduce common quality-related complaints by focusing on:",
    items: [
      "Consistent material quality",
      "Reliable component construction",
      "Improved plating durability",
      "Better production standards",
      "Professional quality management",
    ],
  },
] as const;

const comparisonRows = [
  { feature: "Skin Friendly", typical: "Often Causes Reactions", steelAura: "Better Wear Experience" },
  { feature: "Color Retention", typical: "Can Fade Quickly", steelAura: "Improved Durability" },
  { feature: "Tarnish Resistance", typical: "Limited", steelAura: "Higher Resistance" },
  { feature: "Structural Strength", typical: "More Prone to Breaking", steelAura: "Stronger Material" },
  { feature: "Material Verification", typical: "Often Unclear", steelAura: "Verified Production Process" },
  { feature: "Suitable for Long-Term Wear", typical: "Limited", steelAura: "Yes" },
] as const;

const serviceOptions = [
  {
    title: "OEM Manufacturing",
    body: "Manufacture your designs with our stainless steel jewelry factory in China.",
  },
  {
    title: "ODM Development",
    body: "Create custom collections with our product development support.",
  },
  {
    title: "Private Label Solutions",
    body: "Build your own jewelry brand with customized products, packaging, and branding.",
  },
] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-aura-stone sm:text-base">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aura-black text-[10px] font-semibold text-aura-gold-soft">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function QualityLanding() {
  useEffect(() => {
    document.title =
      "Stainless Steel Jewelry Manufacturer in China | Stop Quality Problems | SteelAura";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "SteelAura is a stainless steel jewelry manufacturer in China. We help bulk buyers solve skin irritation, fading, tarnishing, and material issues with verified steel, durable plating, and strict QC.",
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
            Stainless Steel Jewelry Manufacturer in China
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-normal sm:text-5xl lg:text-[3.25rem]">
            Stop Losing Customers to Jewelry Quality Problems
          </h1>
          <p className="mt-6 max-w-3xl font-display text-xl font-medium leading-snug text-white/90 sm:text-2xl">
            SteelAura — your stainless steel jewelry manufacturer in China
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            Many jewelry brands lose repeat buyers to skin reactions, fading plating, tarnishing, and weak
            components — often because suppliers cut corners on materials and production standards. As a China
            factory focused on stainless steel jewelry, we help bulk buyers source with confidence.
          </p>
          <p className="mt-4 text-sm font-medium tracking-wide text-aura-gold-soft">
            China factory · Verified stainless steel · Export support · OEM &amp; ODM
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#inquiry"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              Request a free consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-b border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">The problem</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Common Challenges Faced by Jewelry Brands
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Many jewelry businesses experience the same frustrating issues — especially when sourcing bulk
              orders without a verified stainless steel jewelry manufacturer in China behind the production.
            </p>
          </div>
          <ul className="mt-12 space-y-6">
            {challenges.map(({ title, intro, items, footer }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-xl font-medium text-aura-black sm:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">{intro}</p>
                <CheckList items={items} />
                <p className="mt-5 text-sm leading-relaxed text-aura-stone sm:text-base">{footer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">The solution</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              How Our China Factory Solves These Problems
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              We are a stainless steel jewelry manufacturer in China built for brands and wholesalers who
              need reliable materials, durable finishes, and consistent bulk production.
            </p>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {solutions.map(({ title, intro, items }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-aura-porcelain/30 p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{intro}</p>
                <CheckList items={items} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-y border-aura-line bg-aura-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">Compare</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal sm:text-4xl">
              Typical Alloy Jewelry vs. SteelAura
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              See why bulk buyers choose a dedicated stainless steel jewelry factory in China over unclear
              alloy suppliers.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-gold-soft sm:px-6">
                    Feature
                  </th>
                  <th className="px-5 py-4 font-display text-base font-medium text-white/80 sm:px-6">
                    Typical Alloy Jewelry
                  </th>
                  <th className="px-5 py-4 font-display text-base font-medium text-aura-gold-soft sm:px-6">
                    SteelAura — China Stainless Steel Factory
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ feature, typical, steelAura }, index) => (
                  <tr
                    key={feature}
                    className={index < comparisonRows.length - 1 ? "border-b border-white/10" : ""}
                  >
                    <td className="px-5 py-4 font-medium text-white sm:px-6">{feature}</td>
                    <td className="px-5 py-4 text-white/65 sm:px-6">
                      <span className="mr-2" aria-hidden>
                        ✕
                      </span>
                      {typical}
                    </td>
                    <td className="px-5 py-4 text-white sm:px-6">
                      <span className="mr-2 text-aura-gold-soft" aria-hidden>
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

      {/* Trust + services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Build a Jewelry Collection Your Customers Can Trust
            </h2>
            <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
              Whether you are launching a new jewelry brand or scaling an existing collection, SteelAura —
              a stainless steel jewelry manufacturer in China — helps you build products with quality,
              consistency, and reliability.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {serviceOptions.map(({ title, body }) => (
              <li
                key={title}
                className="rounded-2xl border border-aura-line bg-white p-6 text-center shadow-sm ring-1 ring-black/[0.04] sm:p-8"
              >
                <h3 className="font-display text-lg font-medium text-aura-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inquiry */}
      <section className="border-t border-aura-line bg-aura-porcelain/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">
              Want to purchase Stainless Steel Jewelry from China ?
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              Request a Free Consultation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">
              Tell us about your project. Our stainless steel jewelry manufacturing team in China will help
              you evaluate materials, finishes, production options, and quality requirements before bulk
              manufacturing begins.
            </p>
          </div>
          <InquiryForm id="inquiry" source="Quality Landing Page (/lp/quality)" thankYouPath="/lp/thank-you" />
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";

function SectionRule() {
  return <hr className="my-14 border-0 border-t border-aura-line" />;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 list-disc space-y-2 pl-5 text-base leading-relaxed text-aura-stone marker:text-aura-gold/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function OurCompany() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Company</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black">Our Company</h1>

      <h2 className="mt-12 font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        Built for Global Jewelry Brands That Need More Than Just a Supplier
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        At SteelAura Jewelry, we understand that sourcing fashion jewelry from China is not only about finding
        a factory — it is about finding a reliable long-term manufacturing partner.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        For many global buyers, importing jewelry from overseas comes with uncertainty:
      </p>
      <BulletList
        items={[
          "Inconsistent product quality",
          "Poor communication and delayed replies",
          "Unclear plating standards",
          "Production delays",
          "Hidden costs",
          "Lack of transparency during manufacturing",
          "Factories disappearing after sampling",
          "Orders arriving different from approved samples",
        ]}
      />
      <p className="mt-4 text-base font-medium leading-relaxed text-aura-black sm:text-lg">
        These are the exact challenges we built our company to solve.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        We specialize in stainless steel fashion jewelry manufacturing for brands, wholesalers, retailers, and
        private label businesses worldwide. From minimalist everyday pieces to trend-driven collections, our
        focus is on delivering products that combine durability, consistency, and premium finishing standards.
      </p>

      <SectionRule />

      <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        A Manufacturing Process Built on Clarity and Precision
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        We believe successful production begins long before manufacturing starts.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Every project follows a structured workflow where specifications, materials, plating requirements, logo
        details, packaging expectations, timelines, and quality standards are confirmed clearly before production
        begins.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Our team works meticulously through every stage:
      </p>
      <BulletList
        items={[
          "Material verification",
          "Mold development",
          "Sample refinement",
          "Surface finishing inspection",
          "Stone setting checks",
          "Plating consistency control",
          "Packing verification",
          "Final QC before shipment",
        ]}
      />
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        This detailed approach helps reduce errors, avoid misunderstandings, and ensure that the final bulk order
        matches approved expectations.
      </p>

      <SectionRule />

      <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        Transparency Is Part of Our Working Culture
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        Many overseas buyers struggle because they are left without visibility once production begins.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        At SteelAura, transparency is a core part of our operations.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">We provide:</p>
      <BulletList
        items={[
          "Clear communication throughout production",
          "Honest feedback on feasibility and timelines",
          "Production updates at different stages",
          "Realistic MOQ and pricing guidance",
          "Early identification of potential risks or delays",
          "Open discussion regarding material choices and finish durability",
        ]}
      />
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Rather than overpromising, we focus on building trust through consistent execution and professional
        communication.
      </p>

      <SectionRule />

      <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        Quality That Supports Long-Term Business Growth
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        Fashion jewelry is highly competitive, and product consistency directly affects customer satisfaction,
        repeat purchases, and brand reputation.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Our manufacturing focus is centered around:
      </p>
      <BulletList
        items={[
          "Stainless steel durability",
          "Stable plating quality",
          "Clean polishing and finishing",
          "Consistent sizing and craftsmanship",
          "Secure stone setting",
          "Production repeatability across batches",
        ]}
      />
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Whether producing small custom runs or larger wholesale orders, our goal is to help clients scale with
        confidence.
      </p>

      <SectionRule />

      <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        Designed for International Buyers
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        We work with businesses across multiple global markets and understand the operational expectations
        international buyers require — from organized production management to export coordination and reliable
        documentation support.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Our team aims to make sourcing from China simpler, more professional, and significantly less stressful for
        overseas clients.
      </p>
      <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
        Because in the end, successful manufacturing is not only about making jewelry.
      </p>
      <p className="mt-3 text-base leading-relaxed text-aura-stone sm:text-lg">
        It is about delivering reliability, consistency, and confidence with every order.
      </p>

      <SectionRule />

      <h2 className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl">
        Our Commitment
      </h2>
      <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">
        At SteelAura Jewelry, we are committed to:
      </p>
      <BulletList
        items={[
          "Careful and detail-oriented manufacturing",
          "Ethical and transparent business practices",
          "Professional communication",
          "Long-term partnerships over short-term transactions",
          "Continuous quality improvement",
          "Helping brands grow with dependable production support",
        ]}
      />
      <p className="mt-6 text-base leading-relaxed text-aura-stone sm:text-lg">
        We do not aim to become just another supplier in your contact list.
      </p>
      <p className="mt-4 text-base font-medium leading-relaxed text-aura-black sm:text-lg">
        We aim to become the manufacturing partner your business can confidently rely on.
      </p>

      <div className="mt-14">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
        >
          Get in touch
        </Link>
      </div>
    </article>
  );
}

import { Link } from "react-router-dom";

export function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Company</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black">About Us</h1>

      <p className="mt-6 text-lg leading-relaxed text-aura-stone sm:text-xl">
        SteelAura Jewelry is a China-based manufacturer focused on stainless steel fashion jewelry for global
        brands, wholesalers, retailers, and private label partners. We combine disciplined production with clear
        communication so you can plan launches and inventory with zero surprises.
      </p>
      <section
        className="mt-12 rounded-2xl border border-aura-line bg-aura-porcelain/50 p-8 sm:p-10"
        aria-labelledby="our-company-heading"
      >
        <h2
          id="our-company-heading"
          className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl"
        >
          Our Company
        </h2>
        <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">
          For our full story—how we work, what we stand for, the challenges we solve for international buyers, and
          how we approach quality and transparency—read the detailed overview on our{" "}
          <span className="font-medium text-aura-black">Our Company</span> page.
        </p>
        <div className="mt-8">
          <Link
            to="/our-company"
            className="inline-flex rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
          >
            Read Our Company
          </Link>
        </div>
      </section>

      <div className="mt-14">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
        >
          Contact Us
        </Link>
      </div>
    </article>
  );
}

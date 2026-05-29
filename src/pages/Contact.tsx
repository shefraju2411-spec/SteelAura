import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Reach us</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black">Contact Us</h1>
      <p className="mt-6 text-lg leading-relaxed text-aura-stone">
        Inquiry form, factory address, and export contact channels will live here. For now, use this
        placeholder as you wire email or CRM.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full border border-aura-line px-6 py-2.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40 hover:text-aura-gold"
      >
        Back to home
      </Link>
    </div>
  );
}

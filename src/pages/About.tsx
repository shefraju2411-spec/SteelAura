import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Company</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-aura-black">About Us</h1>
      <p className="mt-6 text-lg leading-relaxed text-aura-stone">
        This page will introduce SteelAura Jewelry — our factory story, team, and how we support global
        stainless steel jewelry programs. Content coming next.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full border border-aura-black/15 px-6 py-2.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold hover:text-aura-gold"
      >
        Back to home
      </Link>
    </div>
  );
}

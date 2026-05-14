import { Link } from "react-router-dom";

export function CustomManufacturing() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Services</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-aura-black">
        Custom Manufacturing / OEM &amp; ODM
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-aura-stone">
        Deep-dive on sampling, tooling, finishes, and program management for OEM and ODM partners — page
        content to follow.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex rounded-full bg-aura-black px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-aura-gold hover:text-aura-black"
      >
        Discuss a project
      </Link>
    </div>
  );
}

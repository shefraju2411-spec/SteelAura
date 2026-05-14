import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/oem-odm", label: "OEM & ODM" },
  { to: "/quality", label: "Quality Control" },
  { to: "/contact", label: "Contact" },
] as const;

type NavLinkClass = (props: { isActive: boolean }) => string;

export function Header({ navLinkClass }: { navLinkClass: NavLinkClass }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aura-beige-dark/60 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group flex shrink-0 items-baseline gap-1"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-semibold tracking-tight text-aura-black sm:text-2xl">
            SteelAura
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-aura-gold sm:inline">
            Jewelry
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-aura-black px-5 py-2 text-sm font-medium text-white transition hover:bg-aura-gold hover:text-aura-black md:inline-block"
          onClick={() => setOpen(false)}
        >
          Get a quote
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-aura-beige-dark text-aura-black md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          "border-t border-aura-beige-dark/60 bg-white md:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "rounded-md px-3 py-3 text-base font-medium",
                  isActive ? "bg-aura-beige text-aura-gold" : "text-aura-black",
                ].join(" ")
              }
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-2 rounded-full bg-aura-black px-4 py-3 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Get a quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

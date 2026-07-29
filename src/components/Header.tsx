import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const oemOdmChildren = [
  { to: "/oem-odm", label: "OEM & ODM Overview", end: true },
  { to: "/oem-odm/private-label-jewelry", label: "Private Label Jewelry", end: false },
] as const;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/wholesale-jewelry", label: "Wholesale Jewelry" },
  { to: "/packaging-branding", label: "Packaging" },
  { to: "/quality", label: "Craftsmanship" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

type NavLinkClass = (props: { isActive: boolean }) => string;

function OemOdmDesktopMenu({ navLinkClass }: { navLinkClass: NavLinkClass }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();
  const isActive = pathname === "/oem-odm" || pathname.startsWith("/oem-odm/");

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <NavLink
        to="/oem-odm"
        className={() =>
          [
            navLinkClass({ isActive }),
            "inline-flex items-center gap-1",
          ].join(" ")
        }
        aria-expanded={open}
        aria-haspopup="true"
      >
        OEM &amp; ODM
        <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>
      {open ? (
        <div className="absolute left-0 top-full z-50 pt-3">
          <ul className="min-w-[15rem] rounded-xl border border-aura-line bg-white py-2 shadow-lg ring-1 ring-black/[0.04]">
            {oemOdmChildren.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive: childActive }) =>
                    [
                      "block px-4 py-2.5 text-sm transition",
                      childActive
                        ? "bg-aura-porcelain font-medium text-aura-gold"
                        : "text-aura-black hover:bg-aura-porcelain/70",
                    ].join(" ")
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function Header({ navLinkClass }: { navLinkClass: NavLinkClass }) {
  const [open, setOpen] = useState(false);
  const [oemMobileOpen, setOemMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const oemActive = pathname === "/oem-odm" || pathname.startsWith("/oem-odm/");

  return (
    <header className="sticky top-0 z-50 border-b border-aura-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="group flex shrink-0 items-baseline gap-1"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-medium tracking-normal text-aura-black sm:text-2xl">
            SteelAura
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-aura-gold sm:inline">
            Jewelry
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex" aria-label="Main">
          {links.slice(0, 2).map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass} end={to === "/"}>
              {label}
            </NavLink>
          ))}
          <OemOdmDesktopMenu navLinkClass={navLinkClass} />
          {links.slice(2).map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact#inquiry"
          className="hidden rounded-full bg-aura-black px-5 py-2 text-sm font-medium text-white transition hover:bg-aura-black/90 md:inline-block"
          onClick={() => setOpen(false)}
        >
          Get a free quote
        </NavLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-aura-line text-aura-black md:hidden"
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
        className={["border-t border-aura-line bg-white md:hidden", open ? "block" : "hidden"].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {links.slice(0, 2).map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "rounded-md px-3 py-3 text-base font-medium",
                  isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
                ].join(" ")
              }
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <div>
            <button
              type="button"
              className={[
                "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium",
                oemActive ? "bg-aura-porcelain text-aura-gold" : "text-aura-black",
              ].join(" ")}
              aria-expanded={oemMobileOpen}
              onClick={() => setOemMobileOpen((v) => !v)}
            >
              OEM &amp; ODM
              <svg
                className={["h-4 w-4 transition", oemMobileOpen ? "rotate-180" : ""].join(" ")}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {oemMobileOpen ? (
              <ul className="mb-1 ml-3 space-y-1 border-l border-aura-line pl-3">
                {oemOdmChildren.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        [
                          "block rounded-md px-3 py-2.5 text-sm font-medium",
                          isActive ? "bg-aura-porcelain text-aura-gold" : "text-aura-stone",
                        ].join(" ")
                      }
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {links.slice(2).map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "rounded-md px-3 py-3 text-base font-medium",
                  isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
                ].join(" ")
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact#inquiry"
            className="mt-2 rounded-full bg-aura-black px-4 py-3 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Get a free quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

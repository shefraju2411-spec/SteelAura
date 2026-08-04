import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type NavChild = {
  to: string;
  label: string;
  end?: boolean;
};

const oemOdmChildren: readonly NavChild[] = [
  { to: "/oem-odm", label: "OEM Manufacturing Overview", end: true },
  { to: "/oem-odm/private-label-jewelry", label: "Private Label Jewelry" },
];

const wholesaleChildren: readonly NavChild[] = [
  { to: "/wholesale-jewelry", label: "Wholesale Jewelry Overview", end: true },
  { to: "/wholesale-jewelry/stainless-steel-rings", label: "Wholesale Stainless Steel Rings" },
];

const resourcesChildren: readonly NavChild[] = [
  { to: "/quality", label: "Craftsmanship" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

type NavLinkClass = (props: { isActive: boolean }) => string;

function DesktopDropdown({
  label,
  overviewTo,
  items,
  isSectionActive,
  navLinkClass,
}: {
  label: ReactNode;
  overviewTo: string;
  items: readonly NavChild[];
  isSectionActive: boolean;
  navLinkClass: NavLinkClass;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        to={overviewTo}
        className={() => [navLinkClass({ isActive: isSectionActive }), "inline-flex items-center gap-1"].join(" ")}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
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
            {items.map(({ to, label: childLabel, end }) => (
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
                  {childLabel}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function MobileDropdown({
  label,
  isSectionActive,
  items,
  onNavigate,
}: {
  label: ReactNode;
  isSectionActive: boolean;
  items: readonly NavChild[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={[
          "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium",
          isSectionActive ? "bg-aura-porcelain text-aura-gold" : "text-aura-black",
        ].join(" ")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg
          className={["h-4 w-4 transition", open ? "rotate-180" : ""].join(" ")}
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
      {open ? (
        <ul className="mb-1 ml-3 space-y-1 border-l border-aura-line pl-3">
          {items.map(({ to, label: childLabel, end }) => (
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
                onClick={onNavigate}
              >
                {childLabel}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header({ navLinkClass }: { navLinkClass: NavLinkClass }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const oemActive = pathname === "/oem-odm" || pathname.startsWith("/oem-odm/");
  const wholesaleActive =
    pathname === "/wholesale-jewelry" || pathname.startsWith("/wholesale-jewelry/");
  const resourcesActive =
    pathname === "/resources" ||
    pathname === "/quality" ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/") ||
    pathname === "/faq";

  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aura-line bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex shrink-0 items-baseline gap-1" onClick={closeMobile}>
          <span className="font-display text-xl font-medium tracking-normal text-aura-black sm:text-2xl">
            SteelAura
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-aura-gold sm:inline">
            Jewelry
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex" aria-label="Main">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <DesktopDropdown
            label="OEM Manufacturing"
            overviewTo="/oem-odm"
            items={oemOdmChildren}
            isSectionActive={oemActive}
            navLinkClass={navLinkClass}
          />
          <DesktopDropdown
            label="Wholesale Jewelry"
            overviewTo="/wholesale-jewelry"
            items={wholesaleChildren}
            isSectionActive={wholesaleActive}
            navLinkClass={navLinkClass}
          />
          <NavLink to="/packaging-branding" className={navLinkClass}>
            Packaging
          </NavLink>
          <DesktopDropdown
            label="Resources"
            overviewTo="/resources"
            items={resourcesChildren}
            isSectionActive={resourcesActive}
            navLinkClass={navLinkClass}
          />
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <NavLink
          to="/contact#inquiry"
          className="hidden rounded-full bg-aura-black px-5 py-2 text-sm font-medium text-white transition hover:bg-aura-black/90 md:inline-block"
          onClick={closeMobile}
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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-3 text-base font-medium",
                isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
              ].join(" ")
            }
            onClick={closeMobile}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-3 text-base font-medium",
                isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
              ].join(" ")
            }
            onClick={closeMobile}
          >
            About Us
          </NavLink>
          <MobileDropdown
            label="OEM Manufacturing"
            isSectionActive={oemActive}
            items={oemOdmChildren}
            onNavigate={closeMobile}
          />
          <MobileDropdown
            label="Wholesale Jewelry"
            isSectionActive={wholesaleActive}
            items={wholesaleChildren}
            onNavigate={closeMobile}
          />
          <NavLink
            to="/packaging-branding"
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-3 text-base font-medium",
                isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
              ].join(" ")
            }
            onClick={closeMobile}
          >
            Packaging
          </NavLink>
          <MobileDropdown
            label="Resources"
            isSectionActive={resourcesActive}
            items={resourcesChildren}
            onNavigate={closeMobile}
          />
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              [
                "rounded-md px-3 py-3 text-base font-medium",
                isActive ? "bg-aura-porcelain font-medium text-aura-gold" : "text-aura-black",
              ].join(" ")
            }
            onClick={closeMobile}
          >
            Contact
          </NavLink>
          <NavLink
            to="/contact#inquiry"
            className="mt-2 rounded-full bg-aura-black px-4 py-3 text-center text-sm font-medium text-white"
            onClick={closeMobile}
          >
            Get a free quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";

type NavLinkClass = (props: { isActive: boolean }) => string;

export function Footer({ navLinkClass }: { navLinkClass: NavLinkClass }) {
  return (
    <footer className="border-t border-aura-beige-dark bg-aura-beige/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold text-aura-black">SteelAura Jewelry</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-aura-stone">
              Stainless steel fashion jewelry manufacturer in China. OEM, ODM, and private label
              production for brands and wholesalers worldwide.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-aura-gold">Explore</p>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/products" className={navLinkClass}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/oem-odm" className={navLinkClass}>
                  OEM & ODM
                </NavLink>
              </li>
              <li>
                <NavLink to="/quality" className={navLinkClass}>
                  Quality Control
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-aura-gold">Company</p>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
            </ul>
            <p className="mt-6 text-xs text-aura-stone">
              © {new Date().getFullYear()} SteelAura Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

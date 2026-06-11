import { Link, Outlet } from "react-router-dom";

export function LandingLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-aura-line bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex shrink-0 items-baseline gap-1">
            <span className="font-display text-xl font-medium tracking-normal text-aura-black sm:text-2xl">
              SteelAura
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-aura-gold sm:inline">
              Jewelry
            </span>
          </Link>

          <a
            href="#inquiry"
            className="rounded-full bg-aura-black px-5 py-2 text-sm font-medium text-white transition hover:bg-aura-black/90"
          >
            Get a free quote
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-aura-line bg-aura-porcelain/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-sm text-aura-stone">
            © {new Date().getFullYear()} SteelAura Jewelry ·{" "}
            <a href="mailto:contact@steelaurajewelry.com" className="text-aura-black hover:text-aura-gold">
              contact@steelaurajewelry.com
            </a>
          </p>
          <Link to="/" className="text-sm font-medium text-aura-black transition hover:text-aura-gold">
            Visit full website
          </Link>
        </div>
      </footer>
    </div>
  );
}

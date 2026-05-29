import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "text-sm font-medium tracking-wide transition-colors",
    isActive
      ? "text-aura-gold"
      : "text-aura-black/75 hover:text-aura-gold",
  ].join(" ");

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header navLinkClass={navLinkClass} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer navLinkClass={navLinkClass} />
    </div>
  );
}

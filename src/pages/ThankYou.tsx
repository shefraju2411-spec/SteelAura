import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useOptionalOemLandingLanguage } from "../context/OemLandingLanguageContext";

const WHATSAPP_URL = `https://wa.me/8613305631958?text=${encodeURIComponent("Hello SteelAura")}`;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type ThankYouProps = {
  variant?: "default" | "landing";
};

export function ThankYou({ variant = "default" }: ThankYouProps) {
  const languageContext = useOptionalOemLandingLanguage();
  const isLanding = variant === "landing";

  const title =
    isLanding && languageContext
      ? languageContext.t.form.thankYouTitle
      : "Thank you";
  const body =
    isLanding && languageContext
      ? languageContext.t.form.thankYouBody
      : "Your inquiry has been received. Our team will respond within 1–2 business days.";
  const whatsappLabel =
    isLanding && languageContext ? languageContext.t.header.whatsapp : "Whatsapp Us";

  useEffect(() => {
    document.title = isLanding
      ? `${title} | SteelAura Jewelry`
      : "Thank You | SteelAura Jewelry";

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "inquiry_submitted" });
  }, [isLanding, title]);

  return (
    <div className="bg-white">
      <section className="border-b border-aura-line bg-aura-porcelain/40">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-aura-black text-2xl text-aura-gold-soft">
            ✓
          </div>
          <h1 className="mt-8 font-display text-4xl font-medium tracking-normal text-aura-black sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-aura-stone sm:text-lg">{body}</p>
          <p className="mt-4 text-sm text-aura-stone">
            A confirmation has been sent to our team at{" "}
            <a
              href="mailto:contact@steelaurajewelry.com"
              className="font-medium text-aura-black underline decoration-aura-line underline-offset-4 hover:text-aura-gold"
            >
              contact@steelaurajewelry.com
            </a>
            .
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {isLanding ? (
              <Link
                to="/lp/oem"
                className="inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
              >
                Back to landing page
              </Link>
            ) : (
              <Link
                to="/"
                className="inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
              >
                Back to homepage
              </Link>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-aura-line bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40"
            >
              {whatsappLabel}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

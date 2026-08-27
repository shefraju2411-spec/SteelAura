import { useEffect, useState } from "react";
import { InquiryForm } from "../../components/InquiryForm";
import { useOemLandingLanguage } from "../../context/OemLandingLanguageContext";

const WHATSAPP_URL = `https://wa.me/8613305631958?text=${encodeURIComponent("Hello SteelAura")}`;

const CATEGORY_IMAGES = [
  "/images/Rings1.png",
  "/images/Earrings1.png",
  "/images/Necklace1.png",
  "/images/Bracelets1.png",
  "/images/Pendant1.png",
] as const;

const SHOWCASE_IMAGES = [
  "/images/Minimalist.png",
  "/images/StatementJewelry.png",
  "/images/CubicZirconia.png",
  "/images/ChainJewelry.png",
  "/images/EverydayEssentials.png",
  "/images/StackableJewelry.png",
] as const;

const BRANDING_IMAGES = [
  "/images/LogoEngraving.png",
  "/images/Custom%20Jewelry%20Cards.png",
  "/images/Brandedpouches1.png",
  "/images/packbox.png",
  "/images/giftboxes.png",
] as const;

const FACTORY_IMAGES = [
  "/images/Craftsmanship/mold.jpeg",
  "/images/Craftsmanship/CNC.PNG",
  "/images/Craftsmanship/stamping.PNG",
  "/images/Craftsmanship/polish.jpeg",
  "/images/stonesetting.PNG",
  "/images/Inspection.jpg",
  "/images/Exportreadycartons.jpg",
  "/images/Craftsmanship/precision.PNG",
] as const;

const OEM_STEP_NUMBERS = ["01", "02", "03", "04", "05", "06"] as const;

function scrollToInquiry() {
  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CheckList({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={[
            "flex items-start gap-2.5 text-sm leading-relaxed",
            dark ? "text-white/75" : "text-aura-stone",
          ].join(" ")}
        >
          <span
            className={[
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
              dark ? "bg-white/10 text-aura-gold-soft" : "bg-aura-black text-aura-gold-soft",
            ].join(" ")}
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionCta({ href = "#inquiry", children }: { href?: string; children: string }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        if (href === "#inquiry") {
          e.preventDefault();
          scrollToInquiry();
        }
      }}
      className="mt-10 inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
    >
      {children}
    </a>
  );
}

export function OemLanding() {
  const { lang, t } = useOemLandingLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t.meta.description);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, follow");

    return () => {
      document.title = "SteelAura Jewelry | Stainless Steel Fashion Jewelry Manufacturer in China";
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "SteelAura Jewelry — stainless steel fashion jewelry manufacturer in China. OEM, ODM, custom rings, necklaces, earrings, bracelets for global brands.",
        );
      }
      robotsMeta?.remove();
    };
  }, [lang, t.meta.description, t.meta.title]);

  return (
    <div className="bg-white pb-24 md:pb-0">
      <section className="relative overflow-hidden border-b border-aura-line bg-aura-black text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #b0a38e 0%, transparent 45%), radial-gradient(circle at 80% 70%, #958673 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aura-gold-soft">{t.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-3xl font-medium leading-[1.12] tracking-normal sm:text-4xl lg:text-[2.75rem]">
              {t.hero.h1}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">{t.hero.body}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:max-w-lg">
              {t.hero.proofPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm font-medium text-white/90"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#oem-manufacturing"
                className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-aura-gold-soft hover:text-aura-gold-soft"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-4 text-sm text-white/55">{t.hero.reassurance}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/images/hero.png"
              alt={t.hero.imageAlt}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain py-12 sm:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="inquiry"
            variant="ads"
            className="scroll-mt-24"
            source="OEM Google Ads Landing Page (/lp/oem)"
            labels={t.form}
            thankYouPath="/lp/thank-you"
          />
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {t.trustStrip.map((item) => (
              <li key={item} className="text-xs font-medium uppercase tracking-wider text-aura-stone sm:text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.categories.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-aura-stone">{t.categories.intro}</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {t.categories.items.map(({ title, alt }, index) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img src={CATEGORY_IMAGES[index]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="px-3 py-3 font-display text-base font-medium text-aura-black">{title}</p>
              </li>
            ))}
          </ul>
          <SectionCta>{t.categories.cta}</SectionCta>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              {t.twoWays.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">{t.twoWays.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">
                {t.twoWays.readyStock.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-aura-black">{t.twoWays.readyStock.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">{t.twoWays.readyStock.body}</p>
              <CheckList items={t.twoWays.readyStock.benefits} />
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="mt-8 inline-flex rounded-full bg-aura-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
              >
                {t.twoWays.readyStock.cta}
              </a>
            </article>
            <article className="rounded-2xl border border-aura-line bg-aura-black p-6 text-white shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
                {t.twoWays.oem.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium">{t.twoWays.oem.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{t.twoWays.oem.body}</p>
              <CheckList items={t.twoWays.oem.benefits} dark />
              <a
                href="#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToInquiry();
                }}
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
              >
                {t.twoWays.oem.cta}
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              {t.quality.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone">{t.quality.intro}</p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.quality.cards.map(({ title, body }) => (
              <li key={title} className="rounded-2xl border border-aura-line bg-aura-porcelain/40 p-6 sm:p-7">
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>{t.quality.cta}</SectionCta>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              {t.showcase.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">{t.showcase.intro}</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.showcase.items.map(({ title, alt }, index) => (
              <li key={title} className="group overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img
                    src={SHOWCASE_IMAGES[index]}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-medium text-aura-black sm:text-sm">{title}</p>
              </li>
            ))}
          </ul>
          <SectionCta>{t.showcase.cta}</SectionCta>
        </div>
      </section>

      <section id="oem-manufacturing" className="scroll-mt-24 border-b border-aura-line bg-aura-black py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold-soft">
            {t.oemProcess.eyebrow}
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium tracking-normal sm:text-4xl">
            {t.oemProcess.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-white/70">{t.oemProcess.intro}</p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.oemProcess.steps.map(({ title, body }, index) => (
              <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-display text-2xl font-medium text-aura-gold-soft">{OEM_STEP_NUMBERS[index]}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:bg-aura-porcelain"
            >
              {t.oemProcess.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              {t.privateLabel.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-aura-stone sm:text-base">{t.privateLabel.intro}</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {t.privateLabel.items.map((title, index) => (
              <li key={title} className="overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm">
                <div className="aspect-square overflow-hidden bg-aura-porcelain">
                  <img
                    src={BRANDING_IMAGES[index]}
                    alt={`${title} for private label jewelry manufacturing`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = "true";
                        img.src = "/images/giftboxes.png";
                      }
                    }}
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-medium text-aura-black sm:text-sm">{title}</p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-lg text-center text-sm leading-relaxed text-aura-stone">
            {t.privateLabel.support}
          </p>
          <div className="mt-8 text-center">
            <SectionCta>{t.privateLabel.cta}</SectionCta>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.why.title}
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.cards.map(({ title, body }) => (
              <li key={title} className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
                <h3 className="font-display text-lg font-medium text-aura-black sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
              {t.factory.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">{t.factory.intro}</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {t.factory.items.map(({ caption, alt }, index) => (
              <li key={caption}>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden rounded-xl border border-aura-line bg-aura-porcelain">
                    <img src={FACTORY_IMAGES[index]} alt={alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <figcaption className="mt-2 text-sm text-aura-stone">{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {t.factory.stats.map(({ value, label }) => (
              <li key={label} className="rounded-2xl border border-aura-line bg-aura-porcelain/50 px-5 py-6 text-center">
                <p className="font-display text-3xl font-medium text-aura-black">{value}</p>
                <p className="mt-1 text-sm text-aura-stone">{label}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>{t.factory.cta}</SectionCta>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-porcelain/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">{t.qc.eyebrow}</p>
          <h2 className="mt-3 text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.qc.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-aura-stone">{t.qc.intro}</p>
          <ol className="mt-12 flex flex-wrap justify-center gap-3">
            {t.qc.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-aura-line bg-white px-4 py-2.5 text-sm font-medium text-aura-black shadow-sm">
                  {step}
                </span>
                {index < t.qc.steps.length - 1 ? (
                  <span className="hidden text-aura-gold sm:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-aura-stone">{t.qc.note}</p>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.buyers.title}
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.buyers.cards.map(({ title, body }) => (
              <li key={title} className="rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
                <h3 className="font-display text-xl font-medium text-aura-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-aura-stone sm:text-base">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <SectionCta>{t.buyers.cta}</SectionCta>
          </div>
        </div>
      </section>

      <section className="border-b border-aura-line bg-aura-black py-14 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-normal sm:text-4xl">{t.importSection.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{t.importSection.intro}</p>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.importSection.benefits.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-medium text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-aura-line py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.faq.title}
          </h2>
          <ul className="mt-10 space-y-3">
            {t.faq.items.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;
              return (
                <li
                  key={question}
                  className={[
                    "overflow-hidden rounded-2xl border transition",
                    isOpen
                      ? "border-aura-gold/30 bg-white shadow-md ring-1 ring-aura-gold/10"
                      : "border-aura-line bg-white shadow-sm",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-start gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex-1 font-display text-lg font-medium leading-snug text-aura-black">
                      {question}
                    </span>
                    <span
                      className={[
                        "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition",
                        isOpen
                          ? "rotate-45 border-aura-black bg-aura-black text-aura-gold-soft"
                          : "border-aura-line text-aura-stone",
                      ].join(" ")}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="border-t border-aura-line px-5 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-aura-stone sm:text-base">{answer}</p>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-aura-porcelain/50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium tracking-normal text-aura-black sm:text-4xl">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-aura-stone sm:text-lg">{t.finalCta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88"
            >
              {t.finalCta.ctaPrimary}
            </a>
            <a
              href="#inquiry"
              onClick={(e) => {
                e.preventDefault();
                scrollToInquiry();
              }}
              className="inline-flex rounded-full border border-aura-line bg-white px-8 py-3.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold/40"
            >
              {t.finalCta.ctaSecondary}
            </a>
          </div>
          <p className="mt-6 text-sm font-medium tracking-wide text-aura-stone">{t.finalCta.tags}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex text-sm font-semibold text-aura-black underline decoration-aura-line underline-offset-4 transition hover:text-aura-gold"
          >
            {t.finalCta.whatsapp}
          </a>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-aura-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              scrollToInquiry();
            }}
            className="flex flex-1 items-center justify-center rounded-full border border-aura-line px-4 py-3 text-sm font-semibold text-aura-black"
          >
            {t.mobileSticky.catalog}
          </a>
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              scrollToInquiry();
            }}
            className="flex flex-[1.2] items-center justify-center rounded-full bg-aura-black px-4 py-3 text-sm font-semibold text-white"
          >
            {t.mobileSticky.inquiry}
          </a>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, type FormEvent } from "react";

const WEB3FORMS_ACTION = "https://api.web3forms.com/submit";
const WHATSAPP_URL = "https://wa.me/8613305631958";

type InquiryFormProps = {
  id?: string;
  className?: string;
  source?: string;
};

export function InquiryForm({ id = "inquiry", className = "", source }: InquiryFormProps) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const [submitted, setSubmitted] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("inquiry") === "sent") {
      setSubmitted(true);
      params.delete("inquiry");
      const hash = window.location.hash || `#${id}`;
      const query = params.toString();
      const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${hash}`;
      window.history.replaceState({}, "", nextUrl);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [id]);

  useEffect(() => {
    const hash = window.location.hash || `#${id}`;
    setRedirectUrl(`${window.location.origin}${window.location.pathname}?inquiry=sent${hash}`);
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      e.preventDefault();
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const subjectInput = form.elements.namedItem("subject");

    if (subjectInput instanceof HTMLInputElement) {
      const sourcePart = source ? ` (${source})` : "";
      subjectInput.value = `New inquiry from ${name} — SteelAura Jewelry${sourcePart}`;
    }

    // Native POST to Web3Forms — no fetch, no CORS issues.
  };

  if (submitted) {
    return (
      <div
        id={id}
        className={[
          "rounded-2xl border border-aura-line bg-aura-porcelain/50 p-10 text-center ring-1 ring-black/[0.04] sm:p-12",
          className,
        ].join(" ")}
      >
        <p className="font-display text-2xl font-medium text-aura-black">Thank you</p>
        <p className="mt-3 text-base leading-relaxed text-aura-stone">
          Your inquiry has been received. Our team will respond within 1–2 business days.
        </p>
      </div>
    );
  }

  if (!accessKey) {
    return (
      <div
        id={id}
        className={[
          "rounded-2xl border border-aura-line bg-aura-porcelain/50 p-10 text-center ring-1 ring-black/[0.04] sm:p-12",
          className,
        ].join(" ")}
      >
        <p className="font-display text-xl font-medium text-aura-black">Inquiry form unavailable</p>
        <p className="mt-3 text-base leading-relaxed text-aura-stone">
          Please email{" "}
          <a href="mailto:contact@steelaurajewelry.com" className="text-aura-black underline hover:text-aura-gold">
            contact@steelaurajewelry.com
          </a>{" "}
          or{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-aura-black underline hover:text-aura-gold">
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      action={WEB3FORMS_ACTION}
      method="POST"
      onSubmit={handleSubmit}
      className={[
        "rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.06] sm:p-10",
        className,
      ].join(" ")}
      aria-labelledby={`${id}-heading`}
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="from_name" value="SteelAura Jewelry" />
      <input type="hidden" name="subject" value="New inquiry — SteelAura Jewelry" />
      <input type="hidden" name="source" value={source ?? "Main website"} />
      {redirectUrl ? <input type="hidden" name="redirect" value={redirectUrl} /> : null}

      <h2
        id={`${id}-heading`}
        className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl"
      >
        Send an inquiry
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-aura-stone sm:text-base">
        Tell us about your project — product type, estimated quantity, target market, and timeline.
      </p>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Full name <span className="text-aura-gold">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Email <span className="text-aura-gold">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Phone <span className="text-aura-gold">*</span>
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Country / region <span className="text-aura-gold">*</span>
          </span>
          <input
            type="text"
            name="country"
            required
            autoComplete="country-name"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Message <span className="text-aura-gold">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Product categories, estimated MOQ, plating/finish needs, target delivery date…"
            className="mt-2 w-full resize-y rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition placeholder:text-aura-stone/60 focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="submit"
          disabled={!redirectUrl}
          className="w-full rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          Submit inquiry
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-aura-line bg-white px-6 py-3.5 text-sm font-semibold text-aura-black transition hover:border-aura-gold/50 hover:text-aura-gold sm:w-auto"
        >
          If form doesn&apos;t submit, get in touch on WhatsApp
        </a>
      </div>
    </form>
  );
}

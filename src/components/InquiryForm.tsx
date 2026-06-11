import { useState, type FormEvent } from "react";
import { submitInquiry } from "../lib/submitInquiry";

type InquiryFormProps = {
  id?: string;
  className?: string;
  source?: string;
};

export function InquiryForm({ id = "inquiry", className = "", source }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitInquiry({
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        country: String(formData.get("country") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        source,
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email contact@steelaurajewelry.com directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={[
        "rounded-2xl border border-aura-line bg-white p-6 shadow-sm ring-1 ring-black/[0.06] sm:p-10",
        className,
      ].join(" ")}
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-display text-2xl font-medium tracking-normal text-aura-black sm:text-3xl"
      >
        Send an inquiry
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-aura-stone sm:text-base">
        Tell us about your project — product type, estimated quantity, target market, and timeline.
      </p>

      {error ? (
        <p
          role="alert"
          className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error}
        </p>
      ) : null}

      {/* Honeypot — hidden from users, blocks bots (Web3Forms) */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Full name <span className="text-aura-gold">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            disabled={isSubmitting}
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15 disabled:opacity-60"
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
            disabled={isSubmitting}
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15 disabled:opacity-60"
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
            disabled={isSubmitting}
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15 disabled:opacity-60"
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
            disabled={isSubmitting}
            autoComplete="country-name"
            className="mt-2 w-full rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15 disabled:opacity-60"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-aura-black">
            Message <span className="text-aura-gold">*</span>
          </span>
          <textarea
            name="message"
            required
            disabled={isSubmitting}
            rows={5}
            placeholder="Product categories, estimated MOQ, plating/finish needs, target delivery date…"
            className="mt-2 w-full resize-y rounded-lg border border-aura-line bg-white px-4 py-3 text-sm text-aura-black outline-none transition placeholder:text-aura-stone/60 focus:border-aura-gold/50 focus:ring-2 focus:ring-aura-gold/15 disabled:opacity-60"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-full bg-aura-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-black/88 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}

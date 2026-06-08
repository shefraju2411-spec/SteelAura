import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { InquiryForm } from "../components/InquiryForm";

export function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#inquiry") {
      const el = document.getElementById("inquiry");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <div className="bg-white">
      <section className="border-b border-aura-line bg-aura-porcelain/40">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Reach us</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black">Contact Us</h1>
          <p className="mt-6 text-lg leading-relaxed text-aura-stone">
            Share your project details below. Our team will review your requirements and
            respond with practical options for sampling, MOQ, and lead times.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <InquiryForm id="inquiry" />
      </section>
    </div>
  );
}

export type OemLang = "en" | "de" | "nl" | "fr";

export type LookingForOption = {
  value: string;
  label: string;
};

export type OemLandingTranslations = {
  meta: {
    title: string;
    description: string;
  };
  header: {
    whatsapp: string;
  };
  footer: {
    visitWebsite: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    body: string;
    proofPoints: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    reassurance: string;
    imageAlt: string;
  };
  form: {
    heading: string;
    intro: string;
    name: string;
    email: string;
    phone: string;
    country: string;
    lookingFor: string;
    message: string;
    messagePlaceholder: string;
    selectOption: string;
    submit: string;
    submitting: string;
    reassurance: string;
    thankYouTitle: string;
    thankYouBody: string;
    unavailableTitle: string;
    unavailableBody: string;
    lookingForOptions: LookingForOption[];
  };
  trustStrip: string[];
  categories: {
    title: string;
    intro: string;
    items: { title: string; alt: string }[];
    cta: string;
  };
  twoWays: {
    title: string;
    intro: string;
    readyStock: {
      eyebrow: string;
      title: string;
      body: string;
      benefits: string[];
      cta: string;
    };
    oem: {
      eyebrow: string;
      title: string;
      body: string;
      benefits: string[];
      cta: string;
    };
  };
  quality: {
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
    cta: string;
  };
  showcase: {
    title: string;
    intro: string;
    items: { title: string; alt: string }[];
    cta: string;
  };
  oemProcess: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
    cta: string;
  };
  privateLabel: {
    title: string;
    intro: string;
    items: string[];
    support: string;
    cta: string;
  };
  why: {
    title: string;
    cards: { title: string; body: string }[];
  };
  factory: {
    title: string;
    intro: string;
    items: { caption: string; alt: string }[];
    stats: { value: string; label: string }[];
    cta: string;
  };
  qc: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: string[];
    note: string;
  };
  buyers: {
    title: string;
    cards: { title: string; body: string }[];
    cta: string;
  };
  importSection: {
    title: string;
    intro: string;
    benefits: string[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  finalCta: {
    title: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    tags: string;
    whatsapp: string;
  };
  mobileSticky: {
    catalog: string;
    inquiry: string;
  };
  languageSwitcher: {
    label: string;
    en: string;
    de: string;
    nl: string;
    fr: string;
  };
};

export type FaqAnswer = {
  paragraphs: readonly string[];
  bullets?: readonly string[];
  closingParagraphs?: readonly string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: FaqAnswer;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: readonly FaqItem[];
};

export const faqCategories: readonly FaqCategory[] = [
  {
    id: "general",
    title: "General",
    items: [
      {
        id: "what-does-steelaura-do",
        question: "What does SteelAura do?",
        answer: {
          paragraphs: [
            "SteelAura is a China-based stainless steel jewelry manufacturing partner specializing in OEM, private label, and wholesale solutions. We support jewelry brands, wholesalers, retailers, and online businesses with product development, manufacturing, quality control, packaging, and international shipping.",
          ],
        },
      },
      {
        id: "manufacturer-or-trading-company",
        question: "Do you manufacture jewelry or are you a trading company?",
        answer: {
          paragraphs: [
            "SteelAura works with qualified manufacturing partners and manages the entire production process, including supplier selection, product development, production follow-up, quality inspections, packaging, and logistics. Our goal is to provide customers with a single point of contact throughout the project.",
          ],
        },
      },
      {
        id: "which-countries",
        question: "Which countries do you supply?",
        answer: {
          paragraphs: [
            "We work with customers worldwide, including Australia, North America, Europe, the Middle East, and other international markets.",
          ],
        },
      },
      {
        id: "customer-types",
        question: "What types of customers do you work with?",
        answer: {
          paragraphs: ["Our customers include:"],
          bullets: [
            "Jewelry brands",
            "Online stores",
            "Wholesalers",
            "Retail chains",
            "Boutique retailers",
            "Fashion brands",
            "Startups launching new collections",
            "Importers and distributors",
          ],
        },
      },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    items: [
      {
        id: "oem-manufacturing",
        question: "Do you offer OEM manufacturing?",
        answer: {
          paragraphs: [
            "Yes. We support custom jewelry manufacturing based on your designs, technical drawings, samples, or product concepts.",
          ],
        },
      },
      {
        id: "private-label",
        question: "Do you offer private label services?",
        answer: {
          paragraphs: [
            "Yes. We can support private label projects with logo engraving, branded packaging, custom jewelry cards, labels, and other branding requirements, depending on the project.",
          ],
        },
      },
      {
        id: "manufacture-from-design",
        question: "Can you manufacture from my design?",
        answer: {
          paragraphs: [
            "Yes. You can provide CAD files, technical drawings, reference samples, or detailed product specifications for review.",
          ],
        },
      },
      {
        id: "develop-from-idea",
        question: "Can you help develop my product if I only have an idea?",
        answer: {
          paragraphs: [
            "Yes. Many customers begin with sketches, inspiration images, or basic concepts. We can discuss manufacturing feasibility and help develop the project into a production-ready product.",
          ],
        },
      },
      {
        id: "jewelry-types",
        question: "What types of jewelry do you manufacture?",
        answer: {
          paragraphs: ["We support a wide range of stainless steel fashion jewelry, including:"],
          bullets: [
            "Rings",
            "Earrings",
            "Necklaces",
            "Bracelets",
            "Pendants",
            "Anklets",
            "Chains",
            "Charms",
          ],
        },
      },
      {
        id: "customize-every-part",
        question: "Can I customize every part of the product?",
        answer: {
          paragraphs: ["Depending on the project, customization may include:"],
          bullets: [
            "Design",
            "Material",
            "Color",
            "Surface finish",
            "Logo engraving",
            "Packaging",
            "Jewelry cards",
            "Hang tags",
            "Retail packaging",
          ],
        },
      },
      {
        id: "samples-before-bulk",
        question: "Can I order samples before placing a bulk order?",
        answer: {
          paragraphs: [
            "Yes. Sampling is recommended for custom manufacturing projects so you can evaluate the product before mass production.",
          ],
        },
      },
      {
        id: "changes-after-samples",
        question: "Can changes be made after receiving samples?",
        answer: {
          paragraphs: [
            "Yes. If revisions are required, we will review the requested changes and confirm any impact on development time or cost before proceeding.",
          ],
        },
      },
      {
        id: "sampling-lead-time",
        question: "How long does sampling usually take?",
        answer: {
          paragraphs: [
            "Lead times vary depending on design complexity, customization requirements, and production planning. We will provide an estimated timeline after reviewing your project.",
          ],
        },
      },
      {
        id: "manufacturing-process",
        question: "How does your manufacturing process work?",
        answer: {
          paragraphs: ["A typical project follows these steps:"],
          bullets: [
            "Initial consultation",
            "Design review",
            "Quotation",
            "Sample development",
            "Sample approval",
            "Bulk production",
            "Quality inspection",
            "Packaging",
            "International shipping",
          ],
        },
      },
    ],
  },
  {
    id: "materials",
    title: "Materials",
    items: [
      {
        id: "materials-used",
        question: "What materials do you work with?",
        answer: {
          paragraphs: [
            "Depending on the collection and project requirements, we can manufacture products using materials such as 304 or 316L stainless steel.",
          ],
        },
      },
      {
        id: "304-vs-316l",
        question: "What is the difference between 304 and 316L stainless steel?",
        answer: {
          paragraphs: [
            "Both are commonly used in jewelry manufacturing. 316L generally offers enhanced corrosion resistance, making it suitable for products that may be exposed to harsher environments. Material selection depends on the product design, target market, and customer requirements.",
          ],
        },
      },
      {
        id: "gold-colored-jewelry",
        question: "Do you offer gold-colored jewelry?",
        answer: {
          paragraphs: [
            "Yes. Depending on the project, we can support various surface finishes, including gold-colored, silver-colored, rose gold-colored, black, and other finishes.",
          ],
        },
      },
      {
        id: "waterproof",
        question: "Is your jewelry waterproof?",
        answer: {
          paragraphs: [
            "Performance depends on the specific material, coating, and product design. We can recommend suitable options based on your product requirements and intended use.",
          ],
        },
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    items: [
      {
        id: "logo-engraving",
        question: "Can you engrave my logo?",
        answer: {
          paragraphs: [
            "Yes. Logo engraving options can be discussed during product development, subject to technical feasibility.",
          ],
        },
      },
      {
        id: "custom-packaging",
        question: "Do you provide custom jewelry packaging?",
        answer: {
          paragraphs: [
            "Yes. We can support a variety of packaging options, including jewelry boxes, pouches, jewelry cards, sleeves, and shipping cartons.",
          ],
        },
      },
      {
        id: "brand-colors",
        question: "Can you match my brand colors?",
        answer: {
          paragraphs: [
            "Where applicable, packaging colors and printing can be developed to align with your branding requirements.",
          ],
        },
      },
    ],
  },
  {
    id: "quality",
    title: "Quality",
    items: [
      {
        id: "ensure-quality",
        question: "How do you ensure product quality?",
        answer: {
          paragraphs: [
            "Quality checks are carried out at different stages of production. Depending on the project, inspections may include material verification, dimensional checks, surface finish inspection, logo verification, packaging inspection, and final shipment inspection.",
          ],
        },
      },
      {
        id: "inspect-before-shipment",
        question: "Can I inspect my order before shipment?",
        answer: {
          paragraphs: [
            "Yes. Customers may arrange their own third-party inspection or discuss inspection requirements with us before shipment.",
          ],
        },
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    items: [
      {
        id: "international-shipping",
        question: "Do you arrange international shipping?",
        answer: {
          paragraphs: [
            "Yes. We can assist with international shipping and coordinate suitable logistics solutions based on the destination and shipment requirements.",
          ],
        },
      },
      {
        id: "shipping-methods",
        question: "Which shipping methods are available?",
        answer: {
          paragraphs: ["Shipping options may include:"],
          bullets: ["Express courier", "Air freight", "Sea freight"],
          closingParagraphs: [
            "The most suitable option depends on order size, delivery timeline, and destination.",
          ],
        },
      },
      {
        id: "incoterms",
        question: "Which Incoterms do you support?",
        answer: {
          paragraphs: [
            "Depending on the project and destination, we can discuss commonly used Incoterms such as EXW, FOB, CIF, or DDP.",
          ],
        },
      },
    ],
  },
  {
    id: "orders",
    title: "Orders",
    items: [
      {
        id: "quotation-info",
        question: "What information should I prepare before requesting a quotation?",
        answer: {
          paragraphs: ["Providing the following information helps us prepare an accurate quotation:"],
          bullets: [
            "Product images or drawings",
            "Dimensions",
            "Material requirements",
            "Surface finish",
            "Estimated quantity",
            "Packaging requirements",
            "Target market",
            "Desired delivery timeline",
          ],
        },
      },
      {
        id: "multiple-styles",
        question: "Can I manufacture multiple jewelry styles in one project?",
        answer: {
          paragraphs: [
            "This depends on the products involved and production planning. We can review your requirements and discuss suitable manufacturing arrangements.",
          ],
        },
      },
      {
        id: "how-to-start",
        question: "How do I start working with SteelAura?",
        answer: {
          paragraphs: [
            "Simply send us your product idea, design files, reference images, or project requirements through our inquiry form or contact details. Our team will review your request and discuss the next steps with you.",
          ],
        },
      },
      {
        id: "why-choose-steelaura",
        question: "Why should I choose SteelAura?",
        answer: {
          paragraphs: ["Customers choose SteelAura because we provide:"],
          bullets: [
            "Dedicated project management",
            "Support from concept to delivery",
            "Custom manufacturing solutions",
            "Private label capabilities",
            "Quality-focused production management",
            "Packaging support",
            "International shipping coordination",
            "Clear communication throughout the project",
          ],
        },
      },
    ],
  },
] as const;

export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((category) => [...category.items]);
}

export function formatFaqAnswerText(answer: FaqAnswer): string {
  const parts = [...answer.paragraphs];
  if (answer.bullets?.length) {
    parts.push(answer.bullets.map((bullet) => `• ${bullet}`).join("\n"));
  }
  if (answer.closingParagraphs?.length) {
    parts.push(...answer.closingParagraphs);
  }
  return parts.join("\n\n");
}

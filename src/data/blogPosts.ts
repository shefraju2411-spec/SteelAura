export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
};

export const blogPosts: readonly BlogPostMeta[] = [
  {
    slug: "304-vs-316l-stainless-steel-jewelry",
    title: "304 vs 316L Stainless Steel Jewelry: What's the Difference?",
    excerpt:
      "Both 304 and 316L stainless steel are durable choices for fashion jewelry — but they differ in corrosion resistance, everyday wear performance, and suitability for sensitive skin.",
    publishedAt: "2026-07-31",
    readTime: "10 min read",
    coverImage: "/images/rings.png",
    coverAlt: "Stainless steel rings illustrating fashion jewelry materials",
  },
  {
    slug: "why-stainless-steel-fashion-jewelry",
    title: "Why Stainless Steel Has Become the Preferred Material for Fashion Jewelry",
    excerpt:
      "From durability and plating performance to retail-ready consistency, stainless steel has become a go-to material for modern fashion jewelry brands and wholesale buyers.",
    publishedAt: "2026-07-29",
    readTime: "8 min read",
    coverImage: "/images/hero.png",
    coverAlt: "Stainless steel fashion jewelry collection",
  },
] as const;

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

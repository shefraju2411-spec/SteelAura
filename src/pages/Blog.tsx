import { Link } from "react-router-dom";
import { blogPosts, formatBlogDate } from "../data/blogPosts";

export function Blog() {
  return (
    <div className="bg-white">
      <section className="border-b border-aura-line bg-aura-porcelain/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Resources</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-aura-stone sm:text-lg">
            Practical insights on stainless steel jewelry manufacturing, materials, private label development,
            and wholesale sourcing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.04] transition hover:border-aura-gold/25 hover:shadow-md">
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden bg-aura-porcelain">
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs text-aura-stone">
                    {formatBlogDate(post.publishedAt)} · {post.readTime}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-medium leading-snug text-aura-black">
                    <Link to={`/blog/${post.slug}`} className="transition hover:text-aura-gold">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-aura-stone">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 text-sm font-semibold text-aura-black transition hover:text-aura-gold"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

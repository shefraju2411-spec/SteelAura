import { Link } from "react-router-dom";

/** Replace filenames in public/gallery/ to show your factory photos (e.g. factory-01.jpg). */
const galleryImages = [
  { src: "/gallery/factory-01.jpg", alt: "SteelAura factory production", fallback: "Production+01" },
  { src: "/gallery/factory-02.jpg", alt: "Jewelry manufacturing line", fallback: "Production+02" },
  { src: "/gallery/factory-03.jpg", alt: "Stainless steel jewelry workshop", fallback: "Production+03" },
  { src: "/gallery/factory-04.jpg", alt: "Quality inspection area", fallback: "Production+04" },
  { src: "/gallery/factory-05.jpg", alt: "Polishing and finishing", fallback: "Production+05" },
  { src: "/gallery/factory-06.jpg", alt: "Assembly and stone setting", fallback: "Production+06" },
  { src: "/gallery/factory-07.jpg", alt: "Packaging and dispatch", fallback: "Production+07" },
  { src: "/gallery/factory-08.jpg", alt: "Factory floor overview", fallback: "Production+08" },
  { src: "/gallery/factory-09.jpg", alt: "Sample and prototype area", fallback: "Production+09" },
] as const;

function GalleryImage({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const placeholder = `https://placehold.co/800x600/f7f6f4/958673?text=${fallback}`;

  return (
    <figure className="group overflow-hidden rounded-2xl border border-aura-line bg-white shadow-sm ring-1 ring-black/[0.06]">
      <div className="aspect-[4/3] overflow-hidden bg-aura-porcelain">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          width={800}
          height={600}
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.fallback) {
              img.dataset.fallback = "true";
              img.src = placeholder;
            }
          }}
        />
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <div className="bg-white">
      <section className="border-b border-aura-line bg-aura-porcelain/50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aura-gold">Factory</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-normal text-aura-black sm:text-5xl">
            Production Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-aura-stone sm:text-lg">
            A look inside SteelAura manufacturing — production lines, finishing, quality checks, and the teams
            behind your jewelry programs.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-aura-stone">
            To add your photos, place image files in the project folder{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-xs text-aura-black">public/gallery/</code> using
            the names <span className="font-medium text-aura-black">factory-01.jpg</span> through{" "}
            <span className="font-medium text-aura-black">factory-09.jpg</span> (JPG or PNG).
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex text-sm font-semibold text-aura-gold transition hover:text-aura-black"
          >
            ← Back to About Us
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <li key={image.src}>
              <GalleryImage {...image} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-aura-line bg-aura-porcelain/40 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-aura-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-black/88"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

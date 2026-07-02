import Image from 'next/image';
import { galleryItems, instagramTiles } from '@/data/gallery';

function GalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[32px] bg-surface transition duration-500">
      <Image src={src} alt={alt} width={900} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[2px] text-white shadow-lg shadow-black/30">
        {alt}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.45fr_0.85fr] lg:items-end">
          <div>
            <p className="section-eye">Signature men’s services</p>
            <h2 className="section-h2">For the Modern Gentleman</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-subtle">
              A barbering-first house sharp cuts, beard craft and grooming across our gents and unisex studios.
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-[3px] text-subtle">Premium grooming</p>
            <p className="mt-3 text-2xl font-semibold text-white">Designed for the refined edit</p>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hidden scroll-smooth pb-6 pt-4">
          <div className="flex gap-5 px-2 sm:px-0 pb-2 pr-4 snap-x snap-mandatory">
            {galleryItems.slice(0, 5).map((item) => (
              <div
                key={item.src}
                className="snap-start shrink-0 overflow-hidden rounded-[32px] bg-ink/10 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 w-[16rem] h-[24rem] sm:w-[18rem] sm:h-[26rem] md:w-[20rem] md:h-[28rem] xl:w-[22rem] xl:h-[30rem]"
              >
                <GalleryCard src={item.src} alt={item.label} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[40px] border border-white/10 bg-surface p-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {instagramTiles.map((tile) => (
              <a
                key={tile.label}
                href={tile.href}
                className="rounded-[28px] border border-white/10 bg-ink/80 px-6 py-8 text-center text-sm uppercase tracking-[2px] text-white transition hover:border-gold hover:text-gold"
              >
                {tile.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-[11px] uppercase tracking-[3px] text-subtle">
            <span>@glamour_salon_isb</span>
          </div>
        </div>
      </div>
    </section>
  );
}

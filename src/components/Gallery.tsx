import Image from 'next/image';
import { galleryItems, instagramTiles } from '@/data/gallery';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="section-eye">Our Work</p>
            <h2 className="section-h2">Results that speak</h2>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-[3px] text-subtle">@glamoursaloon</p>
            <p className="mt-3 text-2xl font-semibold text-white">Join our community</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="grid gap-4">
            <div className="group relative overflow-hidden rounded-[32px] bg-surface">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].label}
                width={900}
                height={1200}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[2px] text-white">{galleryItems[0].label}</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {galleryItems.slice(1, 3).map((item) => (
                <div key={item.src} className="group relative overflow-hidden rounded-[32px] bg-surface">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={900}
                    height={900}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[2px] text-white">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {galleryItems.slice(3).map((item) => (
              <div key={item.src} className="group relative overflow-hidden rounded-[32px] bg-surface">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[2px] text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-[40px] border border-white/10 bg-surface p-8">
          <div className="grid gap-4 sm:grid-cols-4">
            {instagramTiles.map((tile) => (
              <a key={tile.label} href={tile.href} className="rounded-[28px] border border-white/10 bg-ink/80 px-6 py-8 text-center text-sm uppercase tracking-[2px] text-white transition hover:border-gold hover:text-gold">
                {tile.label}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-[11px] uppercase tracking-[3px] text-subtle">
            <span>@glamoursaloon</span>
            <span>@glamoursalonbahria</span>
          </div>
        </div>
      </div>
    </section>
  );
}

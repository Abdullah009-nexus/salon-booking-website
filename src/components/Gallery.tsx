import Image from 'next/image';
import { galleryImages } from '@/lib/content';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Portfolio</p>
          <h2 className="mt-4 text-4xl font-semibold">Real salon style, curated for your next visit</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[32px] bg-black/10 shadow-[0_40px_120px_rgba(0,0,0,0.08)] transition group-hover:shadow-none ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105 filter grayscale contrast-125 brightness-95"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

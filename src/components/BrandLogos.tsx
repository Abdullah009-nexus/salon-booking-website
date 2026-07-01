/**
 * BrandLogos displays a looping row of partner brands.
 */
import { brandLogos } from '@/data/brands';

export default function BrandLogos() {
  const duplicated = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-eye">Our Partners</p>
        <h2 className="section-h2">The brands we trust</h2>

        <div className="mt-12 overflow-hidden rounded-[40px] border border-white/10 bg-surface py-6">
          <div className="flex animate-scroll-x gap-10 whitespace-nowrap px-6">
            {duplicated.map((brand, index) => (
              <span key={`${brand}-${index}`} className="text-sm uppercase tracking-[3px] text-white/70">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

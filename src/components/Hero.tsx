import Image from 'next/image';
import { heroContent } from '@/data/hero';
import { salon } from '@/data/salon';

/**
 * Hero renders the top full-screen hero section with branding, stats, and CTAs.
 */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image src={heroContent.image} alt="Glamour Saloon interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 pb-28 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eye mb-4">{heroContent.eyebrow}</p>
            <h1 className="font-serif font-light leading-none text-[58px] uppercase tracking-[-0.03em] sm:text-[72px] lg:text-[96px]">
              <span className="block italic">Glamour</span>
              <span className="block not-italic font-semibold">Saloon</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-subtle sm:text-lg">
              {salon.tagline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#booking" className="btn-primary inline-flex items-center gap-2">
                {heroContent.ctaPrimary}
              </a>
              <a href="#services" className="text-sm text-white/70 underline-offset-4 transition hover:text-white">
                {heroContent.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[3px] text-white/50">
              {heroContent.trust.map((item) => (
                <span key={item} className="flex items-center gap-3">
                  <span className="text-gold">·</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[550px] overflow-hidden rounded-[40px] border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.4)] lg:block">
            <div className="absolute inset-0 bg-black/20" />
            <Image src={heroContent.image} alt="Glamour Saloon interior" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

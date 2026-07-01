import { offers } from '@/data/offers';
import { salon } from '@/data/salon';

/**
 * Offers shows promotional cards on a dark background.
 */
export default function Offers() {
  return (
    <section id="offers" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="section-eye">Current Promotions</p>
          <h2 className="section-h2">Our offers</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] transition hover:-translate-y-1">
              <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[9px] uppercase tracking-[2px] text-ink">
                {offer.badge}
              </span>
              <p className="text-[11px] uppercase tracking-[3px] text-subtle">{offer.eyebrow}</p>
              <h3 className="mt-6 text-2xl font-serif text-white">{offer.title}</h3>
              {offer.price ? <p className="mt-4 text-2xl font-serif text-gold">{offer.price}</p> : null}
              <p className="mt-4 text-sm leading-7 text-subtle">{offer.description}</p>
              <a href={offer.href} className="btn-primary mt-8 inline-flex">
                {offer.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { offers, whatsappLink } from '@/lib/content';

export default function Offers() {
  return (
    <section id="offers" className="bg-[#090806] py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Specials</p>
          <h2 className="mt-4 text-4xl font-semibold">Current offers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ivory/70">
            Save on your next grooming appointment with weekday discounts, student pricing, and our signature bundle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-gold/30">
              <span className="inline-flex rounded-full bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold">
                {offer.label}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-ivory">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/75">{offer.description}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-goldlight"
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

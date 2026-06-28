import { signatureFeatures } from '@/lib/content';

export default function SignatureServices() {
  return (
    <section id="signature" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.45em] text-gold">For the Modern Gentleman</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Signature men’s services</h2>
          <p className="mt-6 text-base leading-8 text-ink/75 sm:text-lg">
            A barbering-first house — sharp cuts, beard craft and grooming across our gents and unisex studios.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {signatureFeatures.map((feature) => (
            <article key={feature.title} className="rounded-[32px] border border-black/5 bg-ivory p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-gold">
                {feature.badge}
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/75">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

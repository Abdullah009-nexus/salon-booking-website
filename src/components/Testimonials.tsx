import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#080705] text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold">Client reviews</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-gold/30">
              <p className="text-lg leading-8 text-ivory/80">“{item.quote}”</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold text-ivory">{item.name}</p>
                <p className="text-sm text-gold">{item.rating}.0★</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

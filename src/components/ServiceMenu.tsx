import ServiceCard from './ServiceCard';
import { serviceCards } from '@/lib/content';

export default function ServiceMenu() {
  return (
    <section id="services" className="bg-[#080705] py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-gold">Services & price guide</p>
          <h2 className="mt-4 text-4xl font-semibold">Barber, beard & facial services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ivory/70">
            Luxury grooming for the modern gentleman. Choose from haircut, beard sculpt, and facial treatments with premium finishes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

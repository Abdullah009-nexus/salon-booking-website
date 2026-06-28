import Image from 'next/image';
import { whatsappLink } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,10,.65)_0%,rgba(12,12,10,.9)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-taupelight">Luxury barber experience</p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Premium Grooming Experience</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ivory/75 sm:text-lg">
              Contemporary cuts, signature beard grooming, and confident styling for the modern gentleman.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-goldlight"
              >
                Book Appointment
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/20 shadow-2xl shadow-black/15">
            <div className="absolute inset-0 bg-black/30" />
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              alt="Premium barber styling"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/90 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

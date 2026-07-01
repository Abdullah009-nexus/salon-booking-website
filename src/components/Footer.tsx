import { salon } from '@/data/salon';

/**
 * Footer renders the site footer with salon details, quick links, services, and studio info.
 */
export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="font-serif text-xl uppercase tracking-[5px] text-white">GLAMOUR</p>
              <p className="mt-4 text-sm uppercase tracking-[3px] text-subtle">Men&apos;s Salon · Bahria Town Phase 4</p>
            </div>
            <p className="text-sm leading-7 text-subtle">{salon.location}, Pakistan</p>
            <p className="text-sm leading-7 text-subtle">Call Us: {salon.phone}</p>
            <p className="text-sm leading-7 text-subtle">WhatsApp: {salon.phone}</p>
            <p className="text-sm leading-7 text-subtle">Email: {salon.email}</p>
            <p className="text-sm leading-7 text-subtle">Instagram: @{salon.instagram}</p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[3px] text-gold">About</p>
            <nav className="mt-6 space-y-3 text-sm text-subtle">
              <a href="#contact" className="block transition hover:text-white">Contact Us</a>
              <a href="#services" className="block transition hover:text-white">About Us</a>
              <a href="#services" className="block transition hover:text-white">Our Services</a>
              <a href="#about" className="block transition hover:text-white">Why Us?</a>
            </nav>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[3px] text-gold">Services</p>
            <nav className="mt-6 space-y-3 text-sm text-subtle">
              <a href="#services" className="block transition hover:text-white">Haircuts & Styling</a>
              <a href="#services" className="block transition hover:text-white">Beard & Shave</a>
              <a href="#services" className="block transition hover:text-white">Facials & Skincare</a>
              <a href="#offers" className="block transition hover:text-white">Grooming Packages</a>
              <a href="#booking" className="block transition hover:text-white">Book Appointment</a>
            </nav>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[3px] text-gold">Studio</p>
            <div className="mt-6 space-y-3 text-sm text-subtle">
              <p>Bahria Town Phase 4 · Male</p>
              <p>{salon.location}</p>
              <p>{salon.hours}</p>
              <a href={salon.mapsUrl} target="_blank" rel="noreferrer" className="text-white transition hover:text-gold">
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-6 text-sm text-subtle">
          Privacy Policy | Terms & Conditions · © 2025 Glamour Saloon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

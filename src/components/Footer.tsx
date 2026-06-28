import { contactInfo } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Glamour Saloon</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ivory/70">
              Rawalpindi’s premium grooming destination for stylish haircuts, beard sculpting, and luxurious service.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Quick links</p>
              <nav className="space-y-2 text-sm text-ivory/75">
                <a href="#top" className="block transition hover:text-gold">Home</a>
                <a href="#services" className="block transition hover:text-gold">Services</a>
                <a href="#gallery" className="block transition hover:text-gold">Gallery</a>
                <a href="#contact" className="block transition hover:text-gold">Contact</a>
              </nav>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Contact</p>
              <p className="text-sm text-ivory/75">{contactInfo.phone}</p>
              <p className="text-sm text-ivory/75">{contactInfo.address}</p>
              <div className="flex items-center gap-4 pt-2 text-gold">
                <span>IG</span>
                <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="transition hover:text-ivory">
                  @glamour_salon_isb
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ivory/60">
          © 2026 Glamour Saloon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

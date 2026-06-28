'use client';

import { useState } from 'react';
import { navItems, whatsappLink } from '@/lib/content';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-ivory">
        <div>
          <a href="#top" className="text-lg font-semibold uppercase tracking-[0.35em] text-ivory">
            GLAMOUR SALOON
          </a>
          <p className="text-xs uppercase tracking-[0.35em] text-taupelight">Rawalpindi · Bahria Town Phase 4</p>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ivory transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-gold bg-gold/10 px-5 py-2 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-ink md:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-ivory transition hover:border-gold md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-ivory">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition hover:text-gold"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gold bg-gold/10 px-5 py-2 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { navItems } from '@/data/navigation';
import { salon } from '@/data/salon';

/**
 * Navbar handles page navigation, desktop menu layout, and mobile menu toggle.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5 shadow-black/30' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-ivory">
        <div>
          <a href="#top" className="font-serif text-xl uppercase tracking-[5px] text-white">
            GLAMOUR
          </a>
          <p className="text-[9px] tracking-[3px] uppercase text-subtle">
            Men&apos;s Salon · Bahria Town
          </p>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="relative text-sm uppercase tracking-[2px] transition hover:text-gold">
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#booking" className="btn-primary hidden md:inline-flex">
            Book Now
          </a>
          <a
            href={`https://wa.me/${salon.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[2px] text-white transition hover:border-gold hover:text-gold"
          >
            <span className="text-green-400">●</span> WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-gold md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-ink/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center text-white">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-lg uppercase tracking-[2px] transition hover:text-gold" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#booking" className="btn-primary mx-auto">
              Book Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

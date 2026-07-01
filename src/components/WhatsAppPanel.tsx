/**
 * WhatsAppPanel renders a floating contact panel for quick WhatsApp access.
 */
'use client';

import { useState } from 'react';
import { salon } from '@/data/salon';

const panelLink = `https://wa.me/${salon.whatsapp}?text=Hi%20Glamour%20Saloon%20-%20I%20would%20like%20to%20book%20an%20appointment.`;

export default function WhatsAppPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="mb-4 w-[320px] rounded-[32px] border border-white/10 bg-surface p-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)] text-white">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[3px] text-subtle">Glamour Saloon</p>
              <p className="mt-2 text-sm">Gents · Bahria Town Phase 4</p>
              <p className="mt-4 text-sm text-subtle">{salon.phone}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-white/80 transition hover:text-white">
              ✕
            </button>
          </div>
          <a href={panelLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#20c659] px-4 py-3 text-[11px] uppercase tracking-[2px] text-ink transition hover:bg-[#1faa4a]">
            Talk to Us
          </a>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-ink text-[10px] uppercase tracking-[2px] text-white transition hover:border-gold hover:text-gold"
      >
        Talk to Us
      </button>
    </div>
  );
}

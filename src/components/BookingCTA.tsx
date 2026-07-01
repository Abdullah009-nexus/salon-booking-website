/**
 * BookingCTA renders the consultation section with a WhatsApp booking form.
 */
'use client';

import { useState, type FormEvent } from 'react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { salon } from '@/data/salon';
import { serviceMenu } from '@/data/services';

export default function BookingCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Signature Haircut — Rs. 1,500');
  const [datetime, setDatetime] = useState('');

  const serviceOptions = serviceMenu.flatMap((section) => section.items.map((item) => `${item.name} — ${item.price}`));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(buildWhatsAppUrl(name || 'Guest', service, datetime || 'Anytime'), '_blank');
  };

  return (
    <section id="booking" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-eye">Complimentary Consultations</p>
            <h2 className="section-h2">Let's craft the look that's unmistakably yours</h2>
            <p className="max-w-xl text-sm leading-7 text-subtle">
              Book a consultation with our barbers in studio or over WhatsApp, and we will create the perfect service for you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[40px] border border-white/10 bg-surface p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-[20px] border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="WhatsApp number"
                  className="w-full rounded-[20px] border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-[20px] border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-ink text-white">
                      {option}
                    </option>
                  ))}
                </select>
                <input
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                  placeholder="Preferred date & time"
                  className="w-full rounded-[20px] border border-white/10 bg-ink/70 px-4 py-3 text-sm text-white outline-none focus:border-gold"
                />
              </div>
              <button type="submit" className="btn-gold inline-flex w-full justify-center">
                Send to WhatsApp
              </button>
            </form>
            <a href={`https://wa.me/${salon.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold inline-flex">
              Chat directly on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-surface">
            <img src="/gallery1.jfif" alt="Salon consultation" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

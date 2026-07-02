'use client';

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { featuredServices, serviceMenu } from '@/data/services';

/**
 * Services renders the featured services strip and the expandable price accordion.
 */
export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-eye">For the Modern Gentleman</p>
            <h2 className="section-h2">Signature men's services</h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-subtle">
              A barbering-first studio with sharp cuts, beard craft and grooming in Bahria Town.
            </p>
            <a href="#services" className="mt-8 inline-flex text-sm uppercase tracking-[2px] text-white/70 transition hover:text-white">
              View the Menu →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredServices.map((service, index) => {
              const featuredImages = ['/barber-cut.webp', '/beard-grooming.jfif', '/curly-style.webp', '/studio-view.png'];
              return (
                <ServiceCard
                  key={service.name}
                  title={service.name}
                  price={service.price}
                  category={service.description}
                  image={featuredImages[index] ?? '/glamour_saloon_icon.jpg'}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-24 rounded-[40px] border border-white/10 bg-surface p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="section-eye">The Menu</p>
              <h2 className="section-h2">Services & price guide</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-subtle">
                Every service with a clear price. Bespoke work is quoted at your complimentary consultation.
              </p>
            </div>

            <div className="space-y-4">
              {serviceMenu.map((section, idx) => {
                const isOpen = idx === openIndex;
                return (
                  <div key={section.id} className="overflow-hidden rounded-[28px] border border-white/10 bg-ink/70 transition">
                    <button
                      type="button"
                      className="w-full px-6 py-6 text-left"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className={`text-[11px] tracking-[3px] uppercase ${isOpen ? 'text-gold' : 'text-subtle'}`}>
                          {section.id}
                        </span>
                        <h3 className={`text-lg font-serif ${isOpen ? 'text-gold' : 'text-white'}`}>
                          {section.category}
                        </h3>
                        <span className={`text-2xl transition ${isOpen ? 'rotate-45 text-gold' : 'text-white'}`}>+</span>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="space-y-4 border-t border-white/10 px-6 py-5">
                        {section.items.map((item) => (
                          <div key={item.name} className="space-y-2">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-sm text-white">{item.name}</p>
                              <p className="font-serif text-sm text-gold">{item.price}</p>
                            </div>
                            <p className="text-xs leading-5 text-subtle">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="text-sm text-subtle">
                Prices are indicative. Final quotes follow a quick consultation.
              </div>
              <a href="#booking" className="btn-primary inline-flex">
                Book a Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ renders a frequently asked questions accordion.
 */
'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="section-eye">Good to Know</p>
          <h2 className="section-h2">Frequently asked questions</h2>
        </div>
        <div className="space-y-4 rounded-[40px] border border-white/10 bg-surface p-6">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div key={item.q} className="overflow-hidden rounded-[28px] border border-white/10 bg-ink/80">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="text-sm font-medium text-white">{item.q}</span>
                  <span className={`text-2xl transition ${isOpen ? 'rotate-45 text-gold' : 'text-white'}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-80' : 'max-h-0'}`}>
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-subtle">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

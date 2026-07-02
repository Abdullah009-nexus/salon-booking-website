/**
 * About presents the salon story, three key stats, and supporting images.
 */
import Image from 'next/image';
import { salon } from '@/data/salon';
import { aboutImages } from '@/data/about';

export default function About() {
  return (
    <section className="bg-ink py-24 text-ivory" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="section-eye">The Studio</p>
            <h2 className="section-h2">Where premium barbering meets a refined guest experience</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-subtle">
              At Glamour Saloon, every appointment is tailored to your style. We blend precision cuts, luxury beard care, and soothing treatments into a calm, premium atmosphere built for confidence and polish.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[32px] border border-white/10 bg-surface p-6 text-center">
                <p className="text-4xl font-serif text-white">{salon.studioCount}</p>
                <p className="mt-2 text-sm uppercase tracking-[2px] text-subtle">Studio</p>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-surface p-6 text-center">
                <p className="text-4xl font-serif text-white">{salon.years}</p>
                <p className="mt-2 text-sm uppercase tracking-[2px] text-subtle">Years</p>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-surface p-6 text-center">
                <p className="text-4xl font-serif text-white">{salon.rating}★</p>
                <p className="mt-2 text-sm uppercase tracking-[2px] text-subtle">Rated</p>
              </div>
            </div>
            <a href="#contact" className="btn-primary mt-10 inline-flex">
              Our Story →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutImages.map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-[32px] bg-surface">
                <Image src={item.src} alt={item.label} width={900} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 text-sm uppercase tracking-[2px] text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { whyImages } from '@/lib/content';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#080705] py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-gold">About the salon</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Experience every detail, from consultation to finish.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-ivory/75 sm:text-lg">
              Located in Rawalpindi, Glamour Saloon delivers precision barbering, signature beard grooming, and luxury service in a refined setting.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold text-ivory">10+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-taupelight">Years of experience</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-2xl font-semibold text-ivory">High-end grooming</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-taupelight">Premium finishes</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-[32px] border border-white/10 bg-black/10">
              <Image src={whyImages[0]} alt="Barber studio interior" fill className="object-cover filter grayscale contrast-125 brightness-95" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-[32px] border border-white/10 bg-black/10">
              <Image src={whyImages[1]} alt="Barber finishing a haircut" fill className="object-cover filter grayscale contrast-125 brightness-95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { salon } from '@/data/salon';

/**
 * ContactSection shows the studio address, hours, and action buttons.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="section-eye">Find Us</p>
              <h2 className="section-h2">One studio, one standard</h2>
            </div>
            <div className="rounded-[40px] border border-white/10 bg-surface p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[3px] text-subtle">Male</p>
                  <p className="mt-3 text-3xl font-semibold text-white">01</p>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-sm uppercase tracking-[2px] text-subtle">Rating</p>
                  <p className="text-lg font-semibold text-gold">{salon.rating} ★</p>
                </div>
              </div>

              <div className="mt-8 space-y-6 text-sm leading-7 text-subtle">
                <div>
                  <p className="text-[11px] uppercase tracking-[3px] text-white/70">Where</p>
                  <p className="mt-3 text-white">{salon.location}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[3px] text-white/70">Near</p>
                  <p className="mt-3 text-white">{salon.landmark}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[3px] text-white/70">Hours</p>
                    <p className="mt-2 text-white">{salon.hours}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[3px] text-white/70">Call</p>
                    <p className="mt-2 text-white">{salon.phone}</p>
                    <p className="text-white">{salon.phone2}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#booking" className="btn-gold">
                  Book Now
                </a>
                <a href={`https://wa.me/${salon.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-[#1f4735] px-6 py-3 text-[11px] uppercase tracking-[2px] text-white transition hover:bg-[#1d4d3f]">
                  WhatsApp
                </a>
                <a href={salon.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-[11px] uppercase tracking-[2px] text-white transition hover:bg-white/10">
                  Directions
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-[11px] uppercase tracking-[3px] text-subtle">
                <a href={`https://www.instagram.com/${salon.instagram}/?hl=en`} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  Instagram
                </a>
                <a href={`https://facebook.com/${salon.facebook}`} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-surface">
            <iframe
              title="Glamour Saloon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6754941389194!2d73.06474077531987!3d33.53108628075179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9f070557e1eb%3A0x6d1cf74767a0c079!2sBahria%20Town%20Phase%204!5e0!3m2!1sen!2s!4v1700000000000"
              className="h-[500px] w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

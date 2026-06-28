import { contactInfo, whatsappLink } from '@/lib/content';

export default function ContactSection() {
  return (
    <section className="bg-[#050503] py-20 text-ivory" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-gold">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold">Visit the salon or message us directly.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Phone</p>
                <p className="mt-3 text-2xl font-semibold text-ivory">{contactInfo.phone}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-goldlight">
                  WhatsApp Chat
                </a>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Location</p>
                <p className="mt-3 text-base leading-7 text-ivory/80">{contactInfo.address}</p>
                <a href={contactInfo.maps} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-gold">
                  Open in maps
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0a08]">
            <iframe
              title="Glamour Saloon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6754941389194!2d73.06474077531987!3d33.53108628075179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9f070557e1eb%3A0x6d1cf74767a0c079!2sBahria%20Town%20Phase%204!5e0!3m2!1sen!2s!4v1700000000000"
              className="h-[420px] w-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

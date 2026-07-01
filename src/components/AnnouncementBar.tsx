/**
 * AnnouncementBar displays the top promo strip with a booking link.
 */
export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-subtle text-[10px] tracking-[3px] uppercase py-2.5 text-center">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <span>Bahria Town Phase 4, Rawalpindi · Same-day appointments available</span>
        <a href="#booking" className="text-ivory underline underline-offset-4 transition hover:text-gold">
          Book Now →
        </a>
      </div>
    </div>
  );
}

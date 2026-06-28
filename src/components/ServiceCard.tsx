import Image from 'next/image';

type ServiceCardProps = {
  title: string;
  price: string;
  category: string;
  image: string;
};

export default function ServiceCard({ title, price, category, image }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#0c0b09] shadow-[0_30px_90px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-gold/30">
      <div className="relative h-72 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-ivory">{title}</h3>
        <p className="text-sm text-ivory/70">{price}</p>
        <a
          href="#contact"
          className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-ink"
        >
          Book Now
        </a>
      </div>
    </article>
  );
}

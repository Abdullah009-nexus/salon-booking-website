"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { galleryItems } from '@/data/gallery';

function GalleryCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] bg-surface border border-white/5 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(201,169,110,0.15)]">
      {/* Aspect ratio container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          width={800} 
          height={1000} 
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105" 
          priority
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-4px]">
        <p className="text-[10px] tracking-[3px] uppercase text-gold/90 font-medium mb-1.5 opacity-90">
          Signature Look
        </p>
        <h3 className="text-lg md:text-xl font-serif text-white tracking-wide leading-tight">
          {alt}
        </h3>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsive items count
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalItems = galleryItems.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);
  
  // Ensure index is always valid
  const safeIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="gallery" className="bg-[#090909] py-28 text-ivory relative z-10 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Grid */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[4px] uppercase text-gold font-sans font-semibold">
              Signature men’s services
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-white mt-3">
              For the Modern Gentleman
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-subtle max-w-xl">
              Explore our lookbook. Sharp cuts, master beard grooming, and refined hair design crafted by our senior stylists.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={prevSlide}
              disabled={safeIndex === 0}
              aria-label="Previous image"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                safeIndex === 0
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:border-gold hover:text-gold hover:bg-white/5 active:scale-95'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={safeIndex === maxIndex}
              aria-label="Next image"
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${
                safeIndex === maxIndex
                  ? 'border-white/10 text-white/30 cursor-not-allowed'
                  : 'border-white/20 text-white hover:border-gold hover:text-gold hover:bg-white/5 active:scale-95'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Window */}
        <div className="relative overflow-hidden w-full select-none">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translateX(-${safeIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {galleryItems.slice(0, 5).map((item) => (
              <div
                key={item.src}
                className="shrink-0 p-3"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <GalleryCard src={item.src} alt={item.label} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar indicator (Apple-style) */}
        <div className="mt-10 mx-auto max-w-xs bg-white/10 h-[2px] rounded-full overflow-hidden relative">
          <div 
            className="bg-gold h-full rounded-full transition-all duration-500 ease-out absolute left-0 top-0"
            style={{
              width: `${((safeIndex + 1) / (maxIndex + 1)) * 100}%`,
            }}
          />
        </div>

        {/* Instagram / WA Links */}
        <div className="mt-20 rounded-[32px] md:rounded-[40px] border border-white/10 bg-[#121212] p-8 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          {/* Subtle background glow */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[10px] tracking-[4px] uppercase text-gold font-sans font-semibold">Connect With Us</p>
              <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">Book your next visit via WhatsApp</h3>
              <p className="mt-3 text-sm text-subtle leading-relaxed max-w-md">
                Select a service type below to chat directly with our front desk and secure your session.
              </p>
            </div>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/923120847866?text=Hi%20Glamour%20Saloon%20-%20I%20want%20to%20book%20a%20haircut"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold group/link"
              >
                <span>Haircuts</span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/923120847866?text=Hi%20Glamour%20Saloon%20-%20I%20want%20to%20book%20a%20beard%20service"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold group/link"
              >
                <span>Beard sculpt</span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/923120847866?text=Hi%20Glamour%20Saloon%20-%20I%20want%20to%20book%20styling"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold group/link"
              >
                <span>Hair Styling</span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
              <a
                href="https://wa.me/923120847866?text=Hi%20Glamour%20Saloon%20-%20I%20want%20to%20book%20a%20facial"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold group/link"
              >
                <span>Facials & Skincare</span>
                <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[3px] text-subtle relative z-10">
            <span>Official Instagram: @glamour_salon_isb</span>
            <a 
              href="https://www.instagram.com/glamour_salon_isb/?hl=en" 
              target="_blank" 
              rel="noreferrer"
              className="text-gold hover:underline transition-all"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

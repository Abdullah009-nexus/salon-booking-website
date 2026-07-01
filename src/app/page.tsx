import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Offers from '@/components/Offers';
import ContactSection from '@/components/ContactSection';
import BookingCTA from '@/components/BookingCTA';
import BrandLogos from '@/components/BrandLogos';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppPanel from '@/components/WhatsAppPanel';

export default function HomePage() {
  return (
    <main className="bg-ink text-ivory overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Offers />
      <ContactSection />
      <BookingCTA />
      <BrandLogos />
      <FAQ />
      <Footer />
      <WhatsAppPanel />
    </main>
  );
}

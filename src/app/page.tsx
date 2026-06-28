import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import ServiceMenu from '@/components/ServiceMenu';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <main className="bg-ink text-ivory">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ServiceMenu />
      <Gallery />
      <Testimonials />
      <Offers />
      <ContactSection />
      <Footer />
    </main>
  );
}

import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutAndBridalSection } from './components/AboutAndBridalSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SALON_SERVICES } from './data/salonData';

const SECTION_IDS = [
  'home',
  'services',
  'about',
  'bridal',
  'testimonials',
  'gallery',
  'booking',
  'contact',
];

const GALLERY_TO_SERVICE_MAP: Record<string, string> = {
  'Bridal Makeup': 'Bridal Services',
  'Party Makeup': 'Make-up Services',
  Hairstyling: 'Hairstyling',
  Braids: 'Braids',
  'Eyelash Extensions': 'Eyelash Extensions',
  'Eyebrow Beautification': 'Eyebrow Beautification',
  'Facial Treatments': 'Facials',
  Manicure: 'Manicure',
  Pedicure: 'Pedicure',
  'Salon Interior': 'Online Beauty Salon Booking',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: 0.05,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToBooking = useCallback((serviceTitle?: string) => {
    if (serviceTitle) {
      const matched = SALON_SERVICES.find(
        (s) => s.title.toLowerCase() === serviceTitle.toLowerCase()
      );
      setSelectedService(matched ? matched.title : serviceTitle);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookFromGallery = useCallback(
    (category: string) => {
      const mapped = GALLERY_TO_SERVICE_MAP[category] ?? '';
      scrollToBooking(mapped);
    },
    [scrollToBooking]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F6] text-[#30272A]">
      <Header activeSection={activeSection} onBookService={scrollToBooking} />

      <main className="flex-1">
        <HeroSection onBookClick={() => scrollToBooking()} />

        <ServicesSection onSelectService={(service) => scrollToBooking(service)} />

        <AboutAndBridalSection
          onEnquireBridal={() => scrollToBooking('Bridal Services')}
          onBookAppointment={() => scrollToBooking()}
        />

        <WhyChooseUsSection onBookClick={() => scrollToBooking()} />

        <TestimonialsSection />

        <GallerySection onBookCategory={handleBookFromGallery} />

        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        <ContactSection />
      </main>

      <Footer onSelectService={(service) => scrollToBooking(service)} />
    </div>
  );
}

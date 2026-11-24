import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Share2,
  ArrowUp,
  X,
  Check,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO, SALON_SERVICES } from '../data/salonData';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
}

type LegalModalType = 'privacy' | 'terms' | null;

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: SALON_INFO.name,
          text: `${SALON_INFO.name} — ${SALON_INFO.tagline}`,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch {
      // Ignore clipboard failure in restricted contexts
    }
  };

  return (
    <>
      <footer className="bg-[#762C3E] text-[#FFF9F6] pt-14 pb-8 border-t border-[#C5A16A]/35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/15">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <BrandLogo variant="footer" />
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#F7E9E8]/85 max-w-sm">
                Beauty Salon, Bridal Makeup and Makeover Studio dedicated to
                enhancing your natural elegance with personalized care in a clean,
                welcoming studio.
              </p>

              {/* Functional Connect Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={SALON_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Hidden Beauty Salon on WhatsApp"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C5A16A] text-[#FFF9F6] flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.phoneHref}
                  aria-label="Call Hidden Beauty Salon"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C5A16A] text-[#FFF9F6] flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Hidden Beauty Salon on Google Maps"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C5A16A] text-[#FFF9F6] flex items-center justify-center transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Share Hidden Beauty Salon website"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C5A16A] text-[#FFF9F6] flex items-center justify-center transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-serif-display text-base font-semibold text-[#E3C493]">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#F7E9E8]/85">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#bridal" className="hover:text-white transition-colors">
                    Bridal Beauty
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#booking" className="hover:text-white transition-colors">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            {/* All 16 Beauty Services */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-serif-display text-base font-semibold text-[#E3C493]">
                Our Beauty Services
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#F7E9E8]/85">
                {SALON_SERVICES.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="text-left hover:text-white hover:underline transition-colors cursor-pointer truncate max-w-full"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-serif-display text-base font-semibold text-[#E3C493]">
                Contact Us
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#F7E9E8]/85">
                <li>
                  <a
                    href={SALON_INFO.phoneHref}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E3C493] shrink-0" aria-hidden="true" />
                    <span>{SALON_INFO.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SALON_INFO.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors tabular-nums"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E3C493] shrink-0" aria-hidden="true" />
                    <span>WhatsApp: {SALON_INFO.whatsappNumber}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#E3C493] shrink-0" aria-hidden="true" />
                    <span>Directions on Google Maps</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7E9E8]/75">
            <p>© 2026 Hidden Beauty Salon. All Rights Reserved.</p>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-[#C98991] hover:bg-[#762C3E] text-white shadow-lg border border-white/40 flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#30272A]/65 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#FFF9F6] rounded-2xl border border-[#C5A16A]/45 max-w-lg w-full p-6 sm:p-7 shadow-2xl relative text-[#30272A]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              aria-label="Close legal notice"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-[#C98991]/30 flex items-center justify-center text-[#30272A] hover:text-[#762C3E] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 id="legal-modal-title" className="font-serif-display text-2xl font-bold text-[#762C3E] mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            {legalModal === 'privacy' ? (
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#4E4246]">
                <p>
                  Hidden Beauty Salon respects your privacy. Information you enter into
                  our appointment enquiry form (such as your name, mobile number,
                  requested service, and preferred date or time) is formatted locally in
                  your browser solely to prepare your WhatsApp message to our salon
                  enquiry number ({SALON_INFO.phoneDisplay}).
                </p>
                <p>
                  We do not sell or share your personal enquiry details with third-party
                  marketers.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#4E4246]">
                <p>
                  Submitting an appointment enquiry via this website prepares a request
                  through WhatsApp and does not automatically guarantee a confirmed slot.
                  All appointments are subject to availability and direct confirmation by
                  Hidden Beauty Salon.
                </p>
                <p>
                  For bridal consultations, rescheduling, or urgent enquiries, please call
                  us directly at {SALON_INFO.phoneDisplay} or message us on WhatsApp.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="bg-[#762C3E] text-white px-5 py-2 rounded-lg text-xs font-medium hover:bg-[#5E2130] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

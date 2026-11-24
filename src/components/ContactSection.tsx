import React from 'react';
import { Phone, MapPin, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 lg:py-20 bg-gradient-to-r from-[#F7E9E8] via-[#FAF0EF] to-[#F4DFDD] border-t border-[#C98991]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Information & Action Buttons */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-5">
            <div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]">
                Let&apos;s Connect.
              </h2>
              <p className="text-sm sm:text-base text-[#5C4E52] mt-1.5">
                We Would Love to Welcome You to Hidden Beauty Salon.
              </p>
            </div>

            <div className="bg-white/90 rounded-2xl border border-[#C98991]/25 p-5 space-y-3.5 shadow-xs">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8E7D82]">
                  Business Name
                </p>
                <p className="font-serif-display text-lg font-semibold text-[#762C3E]">
                  {SALON_INFO.name}
                </p>
                <p className="text-xs text-[#5C4E52]">{SALON_INFO.category}</p>
              </div>

              <div className="pt-2 border-t border-[#F7E9E8] space-y-2 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#5C4E52]">Phone</span>
                  <a
                    href={SALON_INFO.phoneHref}
                    className="font-semibold text-[#30272A] hover:text-[#762C3E] tabular-nums"
                  >
                    {SALON_INFO.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#5C4E52]">WhatsApp</span>
                  <a
                    href={SALON_INFO.whatsappBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#30272A] hover:text-[#1F7A4D] tabular-nums"
                  >
                    {SALON_INFO.whatsappNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#762C3E] hover:bg-[#5E2130] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Get Directions</span>
              </a>

              <a
                href={SALON_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FFF9F6] text-[#762C3E] border border-[#C98991]/45 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={`${SALON_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hello Hidden Beauty Salon, I have an enquiry regarding your beauty services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1F7A4D] hover:bg-[#17613C] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Center: Embedded Google Maps Location */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[270px] rounded-2xl overflow-hidden border border-[#C5A16A]/45 bg-white shadow-[0_12px_32px_rgba(48,39,42,0.08)] relative flex flex-col">
              <iframe
                title="Hidden Beauty Salon Location on Google Maps"
                src={SALON_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[250px] flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="px-4 py-2.5 bg-white border-t border-[#C98991]/20 flex items-center justify-between gap-2 text-xs">
                <span className="font-medium text-[#30272A]">Hidden Beauty Salon Location</span>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#762C3E] hover:underline whitespace-nowrap"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Luxury Script Brand Panel */}
          <div className="lg:col-span-3">
            <div className="h-full min-h-[220px] rounded-2xl overflow-hidden border border-[#C5A16A]/35 bg-gradient-to-br from-[#FFF9F6] via-[#F7E9E8] to-[#F2DCD9] p-6 flex flex-col items-center justify-center text-center shadow-xs relative">
              <div
                className="pointer-events-none absolute inset-3 rounded-xl border border-[#C5A16A]/30"
                aria-hidden="true"
              />
              <p className="font-script-luxury text-4xl sm:text-[42px] leading-tight text-[#762C3E]">
                Reveal Your
                <span className="block">Natural Beauty</span>
              </p>
              <div className="mt-3 flex items-center gap-2 text-[#C5A16A]">
                <span className="h-px w-8 bg-[#C5A16A]/70" aria-hidden="true" />
                <Heart className="w-4 h-4 text-[#762C3E]" aria-hidden="true" />
                <span className="h-px w-8 bg-[#C5A16A]/70" aria-hidden="true" />
              </div>
              <p className="mt-3 text-xs tracking-[0.16em] uppercase text-[#5C4E52]">
                Bridal · Hair · Skincare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

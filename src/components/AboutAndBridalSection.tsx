import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRIDAL_LOOKS, SALON_INTERIOR_IMAGE } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface AboutAndBridalSectionProps {
  onEnquireBridal: () => void;
  onBookAppointment: () => void;
}

const ABOUT_HIGHLIGHTS = [
  'Professional Beauty Services',
  'Personalized Care',
  'Clean & Comfortable Salon',
  'Attention to Every Detail',
];

export const AboutAndBridalSection: React.FC<AboutAndBridalSectionProps> = ({
  onEnquireBridal,
  onBookAppointment,
}) => {
  const [activeLookId, setActiveLookId] = useState(BRIDAL_LOOKS[0].id);
  const [knowMoreOpen, setKnowMoreOpen] = useState(false);

  const activeLook = BRIDAL_LOOKS.find((l) => l.id === activeLookId) ?? BRIDAL_LOOKS[0];

  return (
    <>
      {/* ABOUT US SECTION */}
      <section id="about" className="py-16 lg:py-24 bg-white border-t border-[#C98991]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Salon Interior Photograph */}
            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-[#C5A16A]/35 shadow-[0_18px_42px_rgba(48,39,42,0.08)] bg-[#F7E9E8]">
                <ResilientImage
                  src={SALON_INTERIOR_IMAGE}
                  alt="Hidden Beauty Salon interior with blush velvet chairs and arched champagne gold mirrors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C5A16A]" aria-hidden="true" />
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E]">
                  About Hidden Beauty Salon
                </p>
              </div>

              <h2
                className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Beauty Begins With You.
              </h2>

              <p className="text-[15px] leading-relaxed text-[#4E4246]">
                At Hidden Beauty Salon, we believe every woman deserves to feel beautiful,
                confident and special. We offer a range of professional beauty, hair,
                skincare and makeover services designed to enhance your natural beauty. Our
                focus is on personalized attention, quality service, a clean environment and
                making every salon experience memorable.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {ABOUT_HIGHLIGHTS.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2.5 text-sm text-[#30272A] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A16A] shrink-0" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setKnowMoreOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#762C3E] hover:bg-[#5E2130] text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm cursor-pointer"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL BEAUTY SECTION */}
      <section
        id="bridal"
        className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#F7E9E8] via-[#F9EEED] to-[#F3DFDD] border-y border-[#C98991]/25"
      >
        {/* Decorative Champagne Gold Curves */}
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute -right-24 -top-24 w-[520px] h-[520px] opacity-35"
          aria-hidden="true"
        >
          <circle cx="300" cy="300" r="220" stroke="#C5A16A" strokeWidth="1.4" />
          <circle cx="300" cy="300" r="265" stroke="#C5A16A" strokeWidth="1" strokeDasharray="6 6" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Editorial Bridal Copy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[#C5A16A]" aria-hidden="true" />
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E]">
                  Special Occasions
                </p>
              </div>

              <h2
                className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Your Special Day.{' '}
                <span className="block italic text-[#762C3E] mt-1">Your Perfect Look.</span>
              </h2>

              <p className="text-[15px] leading-relaxed text-[#4E4246]">
                Celebrate your most special moments with beautiful bridal makeup and
                professional styling. Discover elegant makeup looks and personalized beauty
                services designed to make you feel confident and radiant.
              </p>

              {/* Selectable Bridal & Special Occasion Looks */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-medium uppercase tracking-wider text-[#762C3E]">
                  Explore Bridal &amp; Occasion Looks
                </p>
                <div className="flex flex-wrap gap-2">
                  {BRIDAL_LOOKS.map((look) => {
                    const isSelected = look.id === activeLook.id;
                    return (
                      <button
                        key={look.id}
                        type="button"
                        onClick={() => setActiveLookId(look.id)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#762C3E] text-white shadow-sm'
                            : 'bg-white/85 text-[#30272A] border border-[#C98991]/30 hover:border-[#762C3E]'
                        }`}
                      >
                        {look.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onEnquireBridal}
                  className="inline-flex items-center gap-2.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-6 py-3.5 rounded-lg text-sm font-medium shadow-[0_10px_24px_rgba(118,44,62,0.2)] transition-all cursor-pointer"
                >
                  <span>Enquire About Bridal Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right Showcase: Featured Portrait + Strip of 5 Bridal Photos */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A16A]/45 shadow-[0_20px_48px_rgba(118,44,62,0.14)] bg-white aspect-[4/3] sm:aspect-[16/11]">
                <ResilientImage
                  src={activeLook.image}
                  alt={activeLook.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#30272A]/85 via-[#30272A]/45 to-transparent p-5 sm:p-6 text-white">
                  <p className="font-serif-display text-xl font-semibold">
                    {activeLook.label}
                  </p>
                  <p className="text-xs sm:text-sm text-[#F7E9E8] mt-1 max-w-xl">
                    {activeLook.description}
                  </p>
                </div>
              </div>

              {/* 5 Bridal Photography Thumbnails */}
              <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                {BRIDAL_LOOKS.map((look) => {
                  const isActive = look.id === activeLook.id;
                  return (
                    <button
                      key={look.id}
                      type="button"
                      onClick={() => setActiveLookId(look.id)}
                      aria-label={`View ${look.label}`}
                      className={`group rounded-xl overflow-hidden border-2 transition-all aspect-[4/3] cursor-pointer ${
                        isActive
                          ? 'border-[#762C3E] shadow-md scale-[1.02]'
                          : 'border-white/80 opacity-85 hover:opacity-100 hover:border-[#C5A16A]'
                      }`}
                    >
                      <ResilientImage
                        src={look.image}
                        alt={look.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know More Modal */}
      {knowMoreOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#30272A]/60 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="know-more-title"
        >
          <div className="bg-[#FFF9F6] rounded-2xl border border-[#C5A16A]/40 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setKnowMoreOpen(false)}
              aria-label="Close salon details"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-[#C98991]/30 flex items-center justify-center text-[#30272A] hover:text-[#762C3E] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E] mb-2">
              Hidden Beauty Salon
            </p>
            <h3 id="know-more-title" className="font-serif-display text-2xl font-bold text-[#30272A] mb-3">
              Our Promise of Care &amp; Elegance
            </h3>
            <p className="text-sm leading-relaxed text-[#4E4246] mb-5">
              Every appointment at Hidden Beauty Salon is crafted around comfort,
              cleanliness, and personalized attention so you leave feeling confident and
              naturally radiant.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C98991]/20">
                <Sparkles className="w-5 h-5 text-[#C5A16A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-[#30272A]">Tailored Artistry</h4>
                  <p className="text-xs text-[#5C4E52] mt-0.5">
                    Looks customized to your skin tone, outfit, and personal style—from subtle everyday polish to bridal grandeur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C98991]/20">
                <ShieldCheck className="w-5 h-5 text-[#C5A16A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-[#30272A]">Clean &amp; Hygienic Studio</h4>
                  <p className="text-xs text-[#5C4E52] mt-0.5">
                    Sanitized tools, tidy treatment stations, and a welcoming, well-maintained environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C98991]/20">
                <HeartHandshake className="w-5 h-5 text-[#C5A16A] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-[#30272A]">Attentive Hospitality</h4>
                  <p className="text-xs text-[#5C4E52] mt-0.5">
                    Polite, patient service that listens carefully to your preferences before every treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setKnowMoreOpen(false)}
                className="px-4 py-2.5 rounded-lg text-xs font-medium text-[#4E4246] hover:bg-[#F7E9E8] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setKnowMoreOpen(false);
                  onBookAppointment();
                }}
                className="inline-flex items-center gap-2 bg-[#762C3E] text-white px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-[#5E2130] cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { Calendar, ArrowRight, Crown, Gem, ShieldCheck, Flower2 } from 'lucide-react';
import { HERO_IMAGE, CORE_PILLARS } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onBookClick: () => void;
}

const TRUST_ICONS = [Crown, Gem, ShieldCheck, Flower2];

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F6] via-[#FBF1F0] to-[#F7E9E8]">
      {/* Subtle blush floral radial ambient washes */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C98991]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full bg-[#C5A16A]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#C5A16A]" aria-hidden="true" />
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#762C3E]">
                Welcome to Hidden Beauty Salon
              </p>
            </div>

            <h1
              className="font-serif-display text-[clamp(2.35rem,4.3vw,3.85rem)] font-bold leading-[1.1] tracking-tight text-[#30272A]"
              style={{ textWrap: 'balance' }}
            >
              Discover Your Beauty.{' '}
              <span className="block italic font-semibold text-[#A45B68] mt-1">
                Celebrate Yourself.
              </span>
            </h1>

            <p className="text-[15px] sm:text-base leading-relaxed text-[#4E4246] max-w-xl">
              Experience the perfect blend of beauty, elegance and expert care. From
              glamorous makeovers and bridal styling to luxurious skincare and hair
              treatments, we help you look and feel your absolute best.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  onBookClick();
                }}
                className="inline-flex items-center gap-2.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-6 py-3.5 rounded-lg text-sm font-medium shadow-[0_10px_24px_rgba(118,44,62,0.22)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4 text-[#E3C493]" aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/85 hover:bg-white text-[#762C3E] border border-[#C98991]/55 hover:border-[#762C3E] px-6 py-3.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Signature Tagline Divider */}
            <div className="flex items-center gap-4 pt-2 max-w-md">
              <span className="h-px flex-1 bg-gradient-to-r from-[#C5A16A]/60 to-transparent" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.14em] text-[#762C3E] whitespace-nowrap">
                Beauty <span className="text-[#C5A16A] mx-1.5">•</span> Elegance{' '}
                <span className="text-[#C5A16A] mx-1.5">•</span> Confidence
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-[#C5A16A]/60 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: Framed Portrait with Gold Decorative Curves */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-2xl">
              {/* Champagne Gold Decorative Crescent Arcs */}
              <svg
                viewBox="0 0 520 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute -left-8 -top-6 w-[108%] h-[108%] z-10"
                aria-hidden="true"
              >
                <path
                  d="M110 22C36 74 10 170 46 262C70 322 124 358 184 368"
                  stroke="#C5A16A"
                  strokeWidth="1.6"
                  strokeOpacity="0.7"
                />
                <path
                  d="M128 36C62 84 40 168 72 248C94 302 142 334 196 346"
                  stroke="#C5A16A"
                  strokeWidth="1"
                  strokeOpacity="0.45"
                />
              </svg>

              {/* Main Hero Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A16A]/35 shadow-[0_24px_56px_rgba(118,44,62,0.14)] bg-[#F7E9E8] aspect-[16/10] sm:aspect-[16/9]">
                <ResilientImage
                  src={HERO_IMAGE}
                  alt="Elegant Indian bride with soft-glam makeup and floral hairstyling at Hidden Beauty Salon"
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#30272A]/15 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Blush-Pink Trust Features Strip */}
      <div className="bg-[#F7E9E8] border-y border-[#C98991]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 lg:divide-x lg:divide-[#C98991]/25">
            {CORE_PILLARS.map((pillar, index) => {
              const Icon = TRUST_ICONS[index];
              return (
                <div
                  key={pillar.id}
                  className="flex items-center gap-3.5 lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/85 border border-[#C5A16A]/35 flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-[#762C3E]" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <span className="font-serif-display text-[15px] font-semibold text-[#30272A] leading-snug">
                    {pillar.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

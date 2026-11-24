import React from 'react';
import { Crown, Gem, ShieldCheck, Flower2, ArrowRight } from 'lucide-react';
import { CORE_PILLARS } from '../data/salonData';

interface WhyChooseUsSectionProps {
  onBookClick: () => void;
}

const ICONS = [Crown, Gem, ShieldCheck, Flower2];

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onBookClick }) => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-20 bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E] mb-2">
            The Hidden Beauty Difference
          </p>
          <h2
            className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]"
            style={{ textWrap: 'balance' }}
          >
            Why Choose Hidden Beauty Salon?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={pillar.id}
                className="bg-gradient-to-b from-[#F7E9E8]/75 to-white rounded-2xl border border-[#C98991]/25 p-6 shadow-[0_6px_22px_rgba(48,39,42,0.04)] hover:shadow-[0_12px_28px_rgba(118,44,62,0.09)] transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C5A16A]/40 flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="w-5 h-5 text-[#762C3E]" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#30272A] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#5C4E52]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-7 py-3.5 rounded-lg text-sm font-medium shadow-[0_10px_24px_rgba(118,44,62,0.2)] transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Book Your Appointment Today</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

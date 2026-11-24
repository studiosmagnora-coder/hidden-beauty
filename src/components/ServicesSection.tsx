import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SALON_SERVICES, ServiceCategory } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const CATEGORIES: ServiceCategory[] = [
  'All',
  'Makeup & Bridal',
  'Brows & Lashes',
  'Hair & Nails',
  'Skin & Care',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

  const filteredServices =
    activeCategory === 'All'
      ? SALON_SERVICES
      : SALON_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-12 sm:w-20 bg-[#C5A16A]/65" aria-hidden="true" />
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]">
              Our Services
            </h2>
            <span className="h-px w-12 sm:w-20 bg-[#C5A16A]/65" aria-hidden="true" />
          </div>
          <p className="text-sm sm:text-base text-[#5C4E52] mt-2">
            Everything You Need to Look and Feel Beautiful.
          </p>
        </div>

        {/* Category Filter Segmented Control */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter beauty services by category"
        >
          {CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#762C3E] text-white shadow-sm'
                    : 'bg-white text-[#4E4246] border border-[#C98991]/25 hover:border-[#762C3E]/40 hover:text-[#762C3E]'
                }`}
              >
                {category === 'All' ? `All Services (${SALON_SERVICES.length})` : category}
              </button>
            );
          })}
        </div>

        {/* Responsive 16-Service Card Grid */}
        <div className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl border border-[#C98991]/20 overflow-hidden shadow-[0_6px_22px_rgba(48,39,42,0.04)] hover:shadow-[0_14px_34px_rgba(118,44,62,0.11)] hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F7E9E8] relative">
                <ResilientImage
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#FFF9F6] to-[#FBF1F0]/60 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-[#A45B68] mb-1">
                    {service.category}
                  </p>
                  <h3 className="font-serif-display text-lg font-semibold text-[#30272A] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#5C4E52] mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C98991]/15">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs sm:text-[13px] font-medium text-[#762C3E] hover:text-[#5E2130] transition-colors cursor-pointer group/btn"
                  >
                    <span>Book / Enquire</span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F7E9E8] group-hover/btn:bg-[#762C3E] group-hover/btn:text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

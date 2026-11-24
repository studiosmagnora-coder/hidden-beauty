import React, { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { ResilientImage } from './ResilientImage';

interface GallerySectionProps {
  onBookCategory: (categoryTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onBookCategory }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-10 sm:w-16 bg-[#C5A16A]/65" aria-hidden="true" />
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]">
              Our Beauty Gallery
            </h2>
            <span className="h-px w-10 sm:w-16 bg-[#C5A16A]/65" aria-hidden="true" />
          </div>
          <p className="text-sm sm:text-base text-[#5C4E52] mt-2">
            A Glimpse of Beauty, Style &amp; Elegance.
          </p>
        </div>

        {/* 10-Item Responsive Beauty Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden border border-[#C98991]/25 bg-[#F7E9E8] aspect-[4/3] text-left shadow-xs hover:shadow-[0_14px_30px_rgba(118,44,62,0.14)] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#762C3E]"
              aria-label={`Open ${item.title} (${item.category}) in gallery lightbox`}
            >
              <ResilientImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30272A]/80 via-[#30272A]/15 to-transparent opacity-85 sm:opacity-75 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-[#762C3E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                <Expand className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <p className="text-[10px] uppercase tracking-wider text-[#E3C493] font-medium">
                  {item.category}
                </p>
                <p className="font-serif-display text-xs sm:text-sm font-semibold leading-snug truncate">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#30272A]/85 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFF9F6] rounded-2xl overflow-hidden border border-[#C5A16A]/45 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-[#C98991]/20">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-[#762C3E]">
                  {activeItem.category}
                </p>
                <h3 className="font-serif-display text-lg font-semibold text-[#30272A]">
                  {activeItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6E5F63] tabular-nums mr-2">
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </span>
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close lightbox"
                  className="w-9 h-9 rounded-full bg-[#F7E9E8] text-[#762C3E] hover:bg-[#762C3E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative bg-[#1E1719] aspect-[16/10] max-h-[68vh] w-full flex items-center justify-center">
              <ResilientImage
                src={activeItem.image}
                alt={activeItem.alt}
                className="w-full h-full object-contain"
              />

              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous gallery image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#762C3E] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next gallery image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#762C3E] flex items-center justify-center shadow-lg transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 py-3.5 bg-white border-t border-[#C98991]/20 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#4E4246]">{activeItem.alt}</p>
              <button
                type="button"
                onClick={() => {
                  const category = activeItem.category;
                  closeLightbox();
                  onBookCategory(category);
                }}
                className="inline-flex items-center gap-1.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              >
                <span>Enquire About This Look</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

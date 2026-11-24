import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 lg:py-24 bg-white border-t border-[#C98991]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E] mb-2">
            Google Customer Reviews
          </p>
          <h2
            className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]"
            style={{ textWrap: 'balance' }}
          >
            Beautiful Experiences, Happy Clients.
          </h2>
          <p className="text-sm sm:text-base text-[#5C4E52] mt-2">
            See what our customers say about their salon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="bg-[#FFF9F6] rounded-2xl border border-[#C98991]/25 p-6 sm:p-7 shadow-[0_8px_24px_rgba(48,39,42,0.05)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C5A16A] text-[#C5A16A]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C98991]/55" aria-hidden="true" />
                </div>

                <blockquote className="text-sm leading-relaxed text-[#30272A]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <footer className="mt-6 pt-4 border-t border-[#C98991]/20 flex items-center justify-between gap-2 text-xs">
                <span className="font-medium text-[#762C3E]">{review.source}</span>
                <span className="text-[#6E5F63]">{review.serviceTag}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

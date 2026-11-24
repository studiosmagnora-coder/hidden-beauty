import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO, SALON_SERVICES } from '../data/salonData';

interface HeaderProps {
  activeSection: string;
  onBookService: (serviceTitle?: string) => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Our Services', href: '#services', hasDropdown: true },
  { id: 'bridal', label: 'Bridal Beauty', href: '#bridal' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ activeSection, onBookService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar (Desktop & Tablet) - non-sticky so sticky nav stays compact on mobile */}
      <div className="hidden md:block bg-[#F7E9E8] border-b border-[#C98991]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs text-[#30272A]">
          <div className="flex items-center gap-6">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#30272A] hover:text-[#762C3E] transition-colors whitespace-nowrap shrink-0"
            >
              <MapPin className="w-3.5 h-3.5 text-[#762C3E]" aria-hidden="true" />
              <span>Find Us on Google Maps</span>
            </a>
            <span className="h-3.5 w-px bg-[#C98991]/35" aria-hidden="true" />
            <a
              href={SALON_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-medium text-[#30272A] hover:text-[#762C3E] transition-colors tabular-nums whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#762C3E]" aria-hidden="true" />
              <span>{SALON_INFO.phoneDisplay}</span>
            </a>
          </div>

          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              onBookService();
            }}
            className="inline-flex items-center gap-1.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-3.5 py-1 rounded-full text-[11px] font-medium tracking-wide transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book an Appointment</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(48,39,42,0.06)] border-b border-[#C98991]/20'
            : 'bg-[#FFF9F6]/95 backdrop-blur-sm border-b border-[#C98991]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[74px] flex items-center justify-between gap-4">
          {/* Logo Zone */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#762C3E] rounded-md"
            aria-label="Hidden Beauty Salon Home"
          >
            <BrandLogo variant="horizontal" className="hidden sm:inline-flex" />
            <BrandLogo variant="compact" className="inline-flex sm:hidden" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Primary Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      aria-expanded={servicesDropdownOpen}
                      className={`inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 relative ${
                        isActive
                          ? 'text-[#762C3E]'
                          : 'text-[#30272A] hover:text-[#762C3E]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#762C3E] transition-transform duration-200 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>

                    {servicesDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px] z-50">
                        <div className="bg-white rounded-xl shadow-[0_18px_40px_rgba(48,39,42,0.12)] border border-[#C98991]/25 p-5">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F7E9E8]">
                            <span className="font-serif-display text-sm font-semibold text-[#762C3E]">
                              Our 16 Beauty Services
                            </span>
                            <a
                              href="#services"
                              onClick={handleNavClick}
                              className="text-xs font-medium text-[#C5A16A] hover:text-[#762C3E] transition-colors"
                            >
                              View All Services →
                            </a>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                            {SALON_SERVICES.map((service) => (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  setServicesDropdownOpen(false);
                                  onBookService(service.title);
                                }}
                                className="text-left text-xs text-[#30272A] hover:text-[#762C3E] hover:bg-[#FFF9F6] px-2.5 py-1.5 rounded-md transition-colors truncate"
                              >
                                {service.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 relative group ${
                    isActive
                      ? 'text-[#762C3E]'
                      : 'text-[#30272A] hover:text-[#762C3E]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#762C3E] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Compact Laptop Nav (lg to xl) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4" aria-label="Primary Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`py-2 text-[13px] font-medium transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive ? 'text-[#762C3E]' : 'text-[#30272A] hover:text-[#762C3E]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Mobile Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick();
                onBookService();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-4 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Book an Appointment</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#C98991]/30 bg-white text-[#762C3E] hover:bg-[#F7E9E8] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF9F6] border-t border-[#C98991]/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F7E9E8] text-[#762C3E]'
                        : 'text-[#30272A] hover:bg-[#F7E9E8]/60 hover:text-[#762C3E]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A16A]" aria-hidden="true" />
                  </a>
                );
              })}

              <div className="pt-3 mt-3 border-t border-[#C98991]/20 grid grid-cols-1 gap-2.5">
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick();
                    onBookService();
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#762C3E] text-white px-4 py-3 rounded-lg text-sm font-medium"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SALON_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#C98991]/30 text-[#30272A] px-3 py-2.5 rounded-lg text-xs font-medium tabular-nums"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#762C3E]" aria-hidden="true" />
                    <span>{SALON_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#C98991]/30 text-[#30272A] px-3 py-2.5 rounded-lg text-xs font-medium"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#762C3E]" aria-hidden="true" />
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Calendar } from 'lucide-react';
import { SALON_INFO, SALON_SERVICES } from '../data/salonData';
import { SilhouetteAccentArt } from './BrandLogo';

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface BookingFormState {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
];

function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const todayStr = getTodayDateString();

  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    service: selectedService || '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<BookingFormState | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
      setErrors((prev) => ({ ...prev, service: undefined }));
      setPreparedWhatsAppUrl(null);
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const digitsOnly = form.phone.replace(/\D/g, '');
    // Accept 10-digit Indian mobile numbers (starting 6-9) or valid 10-13 digit phone numbers
    const isValidIndianMobile =
      (digitsOnly.length === 10 && /^[6-9]\d{9}$/.test(digitsOnly)) ||
      (digitsOnly.length === 12 && digitsOnly.startsWith('91') && /^[6-9]\d{9}$/.test(digitsOnly.slice(2)));

    if (!digitsOnly || (!isValidIndianMobile && (digitsOnly.length < 10 || digitsOnly.length > 13))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!form.service) {
      newErrors.service = 'Please select a beauty service.';
    }

    if (!form.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.';
    } else if (form.preferredDate < todayStr) {
      newErrors.preferredDate = 'Past dates cannot be selected. Please choose today or a future date.';
    }

    if (!form.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hello *Hidden Beauty Salon*, I would like to request an appointment:`,
      ``,
      `*Full Name:* ${form.fullName.trim()}`,
      `*Phone Number:* ${form.phone.trim()}`,
      `*Service:* ${form.service}`,
      `*Preferred Date:* ${form.preferredDate}`,
      `*Preferred Time:* ${form.preferredTime}`,
      form.message.trim() ? `*Message:* ${form.message.trim()}` : '',
      ``,
      `Please confirm my appointment availability. Thank you!`,
    ].filter(Boolean);

    const encodedMessage = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `${SALON_INFO.whatsappBaseUrl}?text=${encodedMessage}`;

    setPreparedWhatsAppUrl(whatsappUrl);
    setSubmittedSummary({ ...form });

    // Trigger external WhatsApp link via synthetic anchor click (safe in iframe environments)
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="booking"
      className="py-16 lg:py-24 bg-gradient-to-b from-[#F7E9E8]/60 to-[#FFF9F6] border-t border-[#C98991]/20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-3xl border border-[#C5A16A]/35 shadow-[0_22px_54px_rgba(118,44,62,0.09)] p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Decorative Champagne Gold Silhouette Flourish */}
          <SilhouetteAccentArt className="pointer-events-none hidden md:block absolute -right-2 bottom-4 w-32 h-40 opacity-55" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#762C3E] mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#C5A16A]" aria-hidden="true" />
              <span>Online Appointment Enquiry</span>
            </div>
            <h2
              className="font-serif-display text-3xl sm:text-4xl font-bold text-[#30272A]"
              style={{ textWrap: 'balance' }}
            >
              Ready for Your Beauty Transformation?
            </h2>
            <p className="text-sm sm:text-base text-[#5C4E52] mt-2">
              Book your appointment with Hidden Beauty Salon and enjoy a personalized
              beauty experience.
            </p>
          </div>

          {preparedWhatsAppUrl && submittedSummary ? (
            <div
              className="bg-[#FFF9F6] border border-[#C5A16A]/45 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto space-y-5 relative z-10"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-6 h-6 text-[#762C3E] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-serif-display text-xl font-semibold text-[#30272A]">
                    Appointment Request Prepared for WhatsApp
                  </h3>
                  <p className="text-sm text-[#4E4246] mt-1 leading-relaxed">
                    Your booking details have been formatted for WhatsApp. Please send the
                    message in WhatsApp so Hidden Beauty Salon can review availability and
                    confirm your appointment.
                  </p>
                </div>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white rounded-xl border border-[#C98991]/20 p-4 text-xs sm:text-sm">
                <div>
                  <dt className="text-[#6E5F63]">Full Name</dt>
                  <dd className="font-medium text-[#30272A]">{submittedSummary.fullName}</dd>
                </div>
                <div>
                  <dt className="text-[#6E5F63]">Phone Number</dt>
                  <dd className="font-medium text-[#30272A] tabular-nums">{submittedSummary.phone}</dd>
                </div>
                <div>
                  <dt className="text-[#6E5F63]">Service</dt>
                  <dd className="font-medium text-[#762C3E]">{submittedSummary.service}</dd>
                </div>
                <div>
                  <dt className="text-[#6E5F63]">Preferred Slot</dt>
                  <dd className="font-medium text-[#30272A] tabular-nums">
                    {submittedSummary.preferredDate} · {submittedSummary.preferredTime}
                  </dd>
                </div>
              </dl>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={preparedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1F7A4D] hover:bg-[#17613C] text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Send Request on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreparedWhatsAppUrl(null)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-[#762C3E] bg-[#F7E9E8] hover:bg-[#EFE0DF] transition-colors cursor-pointer"
                >
                  Edit Appointment Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Full Name <span className="text-[#762C3E]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={(e) => {
                      setForm({ ...form, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] placeholder:text-[#8E7D82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors ${
                      errors.fullName ? 'border-[#9F2B3B]' : 'border-[#C98991]/35 focus:border-[#762C3E]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#9F2B3B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Phone Number <span className="text-[#762C3E]">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] placeholder:text-[#8E7D82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors tabular-nums ${
                      errors.phone ? 'border-[#9F2B3B]' : 'border-[#C98991]/35 focus:border-[#762C3E]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#9F2B3B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Select Your Service */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-service"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Select Your Service <span className="text-[#762C3E]">*</span>
                  </label>
                  <select
                    id="booking-service"
                    required
                    value={form.service}
                    onChange={(e) => {
                      const val = e.target.value;
                      setForm({ ...form, service: val });
                      onServiceChange(val);
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors ${
                      errors.service ? 'border-[#9F2B3B]' : 'border-[#C98991]/35 focus:border-[#762C3E]'
                    }`}
                  >
                    <option value="">Choose a beauty service...</option>
                    {SALON_SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#9F2B3B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Preferred Date <span className="text-[#762C3E]">*</span>
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    min={todayStr}
                    required
                    value={form.preferredDate}
                    onChange={(e) => {
                      setForm({ ...form, preferredDate: e.target.value });
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                    }}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors tabular-nums ${
                      errors.preferredDate ? 'border-[#9F2B3B]' : 'border-[#C98991]/35 focus:border-[#762C3E]'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#9F2B3B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Preferred Time <span className="text-[#762C3E]">*</span>
                  </label>
                  <select
                    id="booking-time"
                    required
                    value={form.preferredTime}
                    onChange={(e) => {
                      setForm({ ...form, preferredTime: e.target.value });
                      if (errors.preferredTime) setErrors({ ...errors, preferredTime: undefined });
                    }}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors tabular-nums ${
                      errors.preferredTime ? 'border-[#9F2B3B]' : 'border-[#C98991]/35 focus:border-[#762C3E]'
                    }`}
                  >
                    <option value="">Select preferred time...</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#9F2B3B]">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.preferredTime}</span>
                    </p>
                  )}
                </div>

                {/* Additional Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-medium text-[#30272A] mb-1.5"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="booking-message"
                    rows={3}
                    placeholder="Share occasion details, bridal queries, or any specific preferences..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-[#C98991]/35 px-3.5 py-2.5 text-sm bg-[#FFF9F6] text-[#30272A] placeholder:text-[#8E7D82] focus:bg-white focus:border-[#762C3E] focus:outline-none focus:ring-2 focus:ring-[#762C3E]/30 transition-colors resize-y"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#762C3E] hover:bg-[#5E2130] text-white px-7 py-3.5 rounded-lg text-sm font-medium shadow-[0_10px_24px_rgba(118,44,62,0.2)] transition-all cursor-pointer"
                >
                  <span>Book My Appointment</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={`${SALON_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
                    'Hello Hidden Beauty Salon, I would like to enquire about booking an appointment.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1F7A4D] hover:bg-[#17613C] text-white px-6 py-3.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-xs text-[#6E5F63]">
                Submitting prepares your booking request for WhatsApp. Appointments are confirmed directly by Hidden Beauty Salon.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

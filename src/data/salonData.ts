export const SALON_INFO = {
  name: 'Hidden Beauty Salon',
  tagline: 'Reveal Your Natural Beauty.',
  category: 'Beauty Salon, Bridal Makeup and Makeover Studio',
  phoneDisplay: '7386319683',
  phoneHref: 'tel:+917386319683',
  whatsappNumber: '917386319683',
  whatsappBaseUrl: 'https://wa.me/917386319683',
  googleMapsUrl:
    'https://maps.google.com/maps?rlz=1C1GCEA_enAE1193AE1193&udm&fvr=1&pvq=Cg0vZy8xMXdqMHI1NHl3IhEKC2JlYXV0eXNhbG9uEAIYA4kBWpEhH4TJ628&lqi=CgtiZWF1dHlzYWxvbki7p8qLwLuAgAhaDxAAIgtiZWF1dHlzYWxvbpIBDGJlYXV0eV9zYWxvbg&vet=10CAAQoqAOahcKEwiwutvk_J-YAxUAAAAAHQAAAAAQEQ..i&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bcb97332c96999d:0x6febc9841f21915a',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?ftid=0x3bcb97332c96999d:0x6febc9841f21915a&ie=UTF8&output=embed',
} as const;

export const HERO_IMAGE = '/src/assets/images/hero_indian_bride_1795502290920.jpg';
export const SALON_INTERIOR_IMAGE = '/src/assets/images/about_salon_interior_1795502292157.jpg';

export type ServiceCategory =
  | 'All'
  | 'Skin & Care'
  | 'Brows & Lashes'
  | 'Hair & Nails'
  | 'Makeup & Bridal';

export interface SalonService {
  id: string;
  title: string;
  description: string;
  category: Exclude<ServiceCategory, 'All'>;
  image: string;
  alt: string;
}

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'facials',
    title: 'Facials',
    description: 'Rejuvenating facial rituals tailored to cleanse, hydrate, and brighten your natural complexion.',
    category: 'Skin & Care',
    image: '/src/assets/images/service_facials_1795502294637.jpg',
    alt: 'Relaxing luxury spa facial treatment at Hidden Beauty Salon',
  },
  {
    id: 'body-waxing',
    title: 'Body Waxing',
    description: 'Gentle full-body waxing care designed for silky-smooth skin and lasting comfort.',
    category: 'Skin & Care',
    image: '/src/assets/images/service_body_waxing_1795502294088.jpg',
    alt: 'Smooth glowing skin after gentle body waxing treatment',
  },
  {
    id: 'braids',
    title: 'Braids',
    description: 'Intricate traditional and contemporary braided hairstyles crafted for weddings and festive occasions.',
    category: 'Hair & Nails',
    image: '/src/assets/images/service_braids_1795502407313.jpg',
    alt: 'Intricately woven bridal braid hairstyle with delicate floral and gold accents',
  },
  {
    id: 'bridal-services',
    title: 'Bridal Services',
    description: 'Complete bridal makeovers, saree draping, and radiant styling tailored for your milestone day.',
    category: 'Makeup & Bridal',
    image: '/src/assets/images/bridal_traditional_indian_1795502292465.jpg',
    alt: 'Traditional Indian bridal makeup and ornate wedding styling',
  },
  {
    id: 'eyebrow-beautification',
    title: 'Eyebrow Beautification',
    description: 'Refined brow enhancement and soft finishing to frame your eyes with natural balance.',
    category: 'Brows & Lashes',
    image: '/src/assets/images/service_eyebrow_beautification_1795502295721.jpg',
    alt: 'Defined natural eyebrow beautification close-up',
  },
  {
    id: 'eyebrow-shaping',
    title: 'Eyebrow Shaping',
    description: 'Precision brow sculpting tailored to complement your facial symmetry and expression.',
    category: 'Brows & Lashes',
    image: '/src/assets/images/service_eyebrow_shaping_1795502295870.jpg',
    alt: 'Precision eyebrow shaping at Hidden Beauty Salon',
  },
  {
    id: 'eyebrow-threading',
    title: 'Eyebrow Threading',
    description: 'Clean, gentle cotton-thread shaping for crisp, well-defined brows without harshness.',
    category: 'Brows & Lashes',
    image: '/src/assets/images/service_eyebrow_threading_1795502427604.jpg',
    alt: 'Fine cotton thread eyebrow threading service',
  },
  {
    id: 'eyelashes',
    title: 'Eyelashes',
    description: 'Lash lifting, curling, and enhancing treatments for effortlessly expressive eyes.',
    category: 'Brows & Lashes',
    image: '/src/assets/images/service_eyelashes_1795502296638.jpg',
    alt: 'Naturally lifted and curled eyelashes beauty close-up',
  },
  {
    id: 'eyelash-extensions',
    title: 'Eyelash Extensions',
    description: 'Lightweight, natural-looking or glamorous silk lash extensions applied with meticulous care.',
    category: 'Brows & Lashes',
    image: '/src/assets/images/service_eyelash_extensions_1795502428205.jpg',
    alt: 'Delicate salon eyelash extension application',
  },
  {
    id: 'hairstyling',
    title: 'Hairstyling',
    description: 'Elegant updos, soft waves, floral buns, and polished finishes for every celebration.',
    category: 'Hair & Nails',
    image: '/src/assets/images/service_hairstyling_1795502298392.jpg',
    alt: 'Elegant floral updo hairstyling for weddings and special events',
  },
  {
    id: 'make-up-services',
    title: 'Make-up Services',
    description: 'Flawless party, festive, and natural-glam makeup tailored to your skin tone and outfit.',
    category: 'Makeup & Bridal',
    image: '/src/assets/images/service_makeup_1795502299219.jpg',
    alt: 'Makeup artist applying luminous rose blush during a makeover session',
  },
  {
    id: 'manicure',
    title: 'Manicure',
    description: 'Nourishing hand care, cuticle grooming, and glossy salon finishes for polished nails.',
    category: 'Hair & Nails',
    image: '/src/assets/images/service_manicure_1795502299854.jpg',
    alt: 'Blush-pink luxury manicure with rose petal detail',
  },
  {
    id: 'online-beauty-salon-booking',
    title: 'Online Beauty Salon Booking',
    description: 'Convenient appointment enquiry via our online booking form and direct WhatsApp desk.',
    category: 'Makeup & Bridal',
    image: '/src/assets/images/service_online_booking_1795502347279.jpg',
    alt: 'Booking a Hidden Beauty Salon appointment online via smartphone',
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    description: 'Soothing foot soak, gentle exfoliation, and neat nail care for refreshed, pampered feet.',
    category: 'Hair & Nails',
    image: '/src/assets/images/service_pedicure_1795502300096.jpg',
    alt: 'Relaxing spa pedicure with floral foot bath',
  },
  {
    id: 'tanning',
    title: 'Tanning',
    description: 'De-tan and even-tone radiance care for luminous, refreshed skin across face and body.',
    category: 'Skin & Care',
    image: '/src/assets/images/service_tanning_1795502295621.jpg',
    alt: 'Luminous sun-kissed skin care and tanning treatment',
  },
  {
    id: 'waxing',
    title: 'Waxing',
    description: 'Hygienic facial and targeted waxing performed with soothing, skin-friendly formulas.',
    category: 'Skin & Care',
    image: '/src/assets/images/service_waxing_1795502295099.jpg',
    alt: 'Hygienic salon waxing treatment with gentle soothing wax',
  },
];

export interface BridalLook {
  id: string;
  label: string;
  description: string;
  image: string;
  alt: string;
}

export const BRIDAL_LOOKS: BridalLook[] = [
  {
    id: 'traditional-bridal',
    label: 'Traditional Indian Bridal Makeup',
    description: 'Rich ceremonial glamour with timeless kohl-lined eyes, luminous skin, and classic floral hair details.',
    image: '/src/assets/images/bridal_traditional_indian_1795502292465.jpg',
    alt: 'Traditional Indian bridal makeup with ornate bridal jewelry',
  },
  {
    id: 'contemporary-bridal',
    label: 'Contemporary Bridal Makeup',
    description: 'Soft, dewy skin-first radiance designed for daytime weddings, engagements, and modern ceremonies.',
    image: '/src/assets/images/bridal_contemporary_saree_1795502293694.jpg',
    alt: 'Contemporary pastel Indian bridal makeup and silk saree look',
  },
  {
    id: 'bridal-hairstyling',
    label: 'Bridal Hairstyling',
    description: 'Sculpted buns, floral jasmine updos, and intricate braids secured for all-day celebration comfort.',
    image: '/src/assets/images/service_hairstyling_1795502298392.jpg',
    alt: 'Bridal updo hairstyling adorned with fresh jasmine flowers and pearls',
  },
  {
    id: 'saree-draping',
    label: 'Saree Draping',
    description: 'Crisp, graceful pleating and custom saree pinning so you move effortlessly throughout your event.',
    image: '/src/assets/images/hero_indian_bride_1795502290920.jpg',
    alt: 'Elegant saree and bridal occasion styling with floral hair accessories',
  },
  {
    id: 'party-makeup',
    label: 'Party Makeup',
    description: 'Camera-ready evening glamour for receptions, sangeet nights, and cherished family celebrations.',
    image: '/src/assets/images/bridal_party_makeup_1795502292810.jpg',
    alt: 'Glamorous party and reception makeup with voluminous curls',
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  source: string;
  serviceTag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    quote:
      'I absolutely loved my makeup from Hidden Beauty! It was very affordable and gave me a beautiful, natural look. The makeup artist was also very polite and kind throughout.',
    source: 'Google Customer Reviews',
    serviceTag: 'Natural Makeover',
  },
  {
    id: 'review-2',
    quote:
      'I am extremely happy with the makeup and saree draping services provided for me and my daughter. The makeup was elegant, flawless, and perfectly suited to the occasion.',
    source: 'Google Customer Reviews',
    serviceTag: 'Makeup & Saree Draping',
  },
  {
    id: 'review-3',
    quote:
      'Pujitha provided an excellent service. The colour and haircut was done with great finish and with exceptional care. The parlour is well maintained and clean.',
    source: 'Google Customer Reviews',
    serviceTag: 'Hair & Salon Care',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-bridal',
    title: 'Traditional Bridal Makeup',
    category: 'Bridal Makeup',
    image: '/src/assets/images/bridal_traditional_indian_1795502292465.jpg',
    alt: 'Traditional Indian bridal makeup at Hidden Beauty Salon',
  },
  {
    id: 'gal-party',
    title: 'Evening Party Glamour',
    category: 'Party Makeup',
    image: '/src/assets/images/bridal_party_makeup_1795502292810.jpg',
    alt: 'Glamorous party makeup and soft waves',
  },
  {
    id: 'gal-hairstyling',
    title: 'Floral Bridal Chignon',
    category: 'Hairstyling',
    image: '/src/assets/images/service_hairstyling_1795502298392.jpg',
    alt: 'Bridal updo hairstyling with jasmine flowers',
  },
  {
    id: 'gal-braids',
    title: 'Artisan Floral Braids',
    category: 'Braids',
    image: '/src/assets/images/service_braids_1795502407313.jpg',
    alt: 'Woven braid hairstyle with gold rings and blossoms',
  },
  {
    id: 'gal-lashes',
    title: 'Silk Eyelash Extensions',
    category: 'Eyelash Extensions',
    image: '/src/assets/images/service_eyelash_extensions_1795502428205.jpg',
    alt: 'Precision eyelash extension application',
  },
  {
    id: 'gal-brows',
    title: 'Eyebrow Beautification',
    category: 'Eyebrow Beautification',
    image: '/src/assets/images/service_eyebrow_beautification_1795502295721.jpg',
    alt: 'Groomed natural arch eyebrow beautification',
  },
  {
    id: 'gal-facials',
    title: 'Rejuvenating Facial Ritual',
    category: 'Facial Treatments',
    image: '/src/assets/images/service_facials_1795502294637.jpg',
    alt: 'Soothing spa facial treatment session',
  },
  {
    id: 'gal-manicure',
    title: 'Blush Gel Manicure',
    category: 'Manicure',
    image: '/src/assets/images/service_manicure_1795502299854.jpg',
    alt: 'Glossy blush-pink luxury manicure',
  },
  {
    id: 'gal-pedicure',
    title: 'Floral Spa Pedicure',
    category: 'Pedicure',
    image: '/src/assets/images/service_pedicure_1795502300096.jpg',
    alt: 'Relaxing spa pedicure with fresh rose petals',
  },
  {
    id: 'gal-interior',
    title: 'Our Serene Salon Space',
    category: 'Salon Interior',
    image: '/src/assets/images/about_salon_interior_1795502292157.jpg',
    alt: 'Hidden Beauty Salon luxury velvet and champagne gold interior',
  },
];

export const CORE_PILLARS = [
  {
    id: 'professional-care',
    title: 'Professional Beauty Care',
    description: 'Skilled artistry and trusted beauty practices tailored to highlight your natural features.',
  },
  {
    id: 'personalized-experience',
    title: 'Personalized Experience',
    description: 'Warm, attentive consultations customized around your skin tone, occasion, and comfort.',
  },
  {
    id: 'clean-comfortable',
    title: 'Clean & Comfortable Salon',
    description: 'Well-maintained, hygienic spaces designed so every visit feels calm and relaxing.',
  },
  {
    id: 'complete-solutions',
    title: 'Complete Beauty Solutions',
    description: 'From bridal makeovers and hairstyling to skincare, brows, lashes, and nail care under one roof.',
  },
] as const;

export const whatsappNumber = '03120847866';
export const whatsappLink = `https://wa.me/92${whatsappNumber.slice(1)}`;

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' }
];

export const heroStats = [
  { value: '500+', label: 'Clients served' },
  { value: '4.8★', label: 'Google rating' },
  { value: '11 AM – 1 AM', label: 'Open daily' }
];

export const heroImage = '/homepage.jpg';

export const whyImages = [
  '/beard-craft.jpg',
  '/styling.jpg'
];

export const signatureFeatures = [
  {
    title: 'For the Modern Gentleman',
    description: 'A barbering-first house with sharp cuts, beard craft and grooming across our signature services.',
    badge: 'Signature services'
  },
  {
    title: 'Precision haircuts',
    description: 'Tapered fades, scissor work, and styling designed for the client’s lifestyle and face shape.',
    badge: 'Barber craft'
  },
  {
    title: 'Beard mastery',
    description: 'Expert shaping, hot towel service and grooming rituals tailored to every beard type.',
    badge: 'Beard craft'
  }
];

export const serviceCards = [
  {
    title: 'Haircut & Styling',
    price: 'Rs. 700',
    category: 'Hair Services',
    image: '/hair-cut.jpg'
  },
  {
    title: 'Signature Beard Sculpt',
    price: 'Rs. 500',
    category: 'Beard / Grooming',
    image: '/beard-craft.jpg'
  },
  {
    title: 'Classic Shave',
    price: 'Rs. 500',
    category: 'Beard / Grooming',
    image: '/beard.jpg'
  },
  {
    title: 'Facial Glow Treatment',
    price: 'Rs. 2,500',
    category: 'Facial / Skin',
    image: '/head-cleansing.png'
  },
  {
    title: 'Hair Wash & Finish',
    price: 'Rs. 700',
    category: 'Hair Services',
    image: '/styling.jpg'
  },
  {
    title: 'Head Massage',
    price: 'Rs. 1,500',
    category: 'Facial / Skin',
    image: '/random.jpg'
  }
];

export const serviceTabs = ['Gents'] as const;
export type ServiceTab = typeof serviceTabs[number];

export const servicesData: Record<ServiceTab, Array<{ title: string; items: Array<{ label: string; value: string }> }>> = {
  Gents: [
    {
      title: 'Hair Cutting & Styling',
      items: [
        { label: 'Regular Haircut', value: 'Rs. 700' },
        { label: 'Beard Styling', value: 'Rs. 500' },
        { label: 'Baby Haircut', value: 'Rs. 500' },
        { label: 'Signature Haircut', value: 'Rs. 1,500' },
        { label: 'Head Wash & Styling', value: 'Rs. 700' },
        { label: 'Hair Styling (Fibre)', value: 'Rs. 500' },
        { label: 'Hair Styling (Regular)', value: 'Rs. 1,000' },
        { label: 'Shave', value: 'Rs. 500' },
        { label: 'Beard Trim', value: 'Rs. 500' }
      ]
    },
    {
      title: 'Hair Colour & Beard Colour',
      items: [
        { label: "L'Oréal Hair Colour", value: 'Rs. 3,000' },
        { label: 'Keune Hair Colour', value: 'Rs. 2,500' },
        { label: 'Just For Man Hair Colour', value: 'Rs. 3,000' },
        { label: "L'Oréal Beard Colour", value: 'Rs. 1,500' },
        { label: 'Keune Beard Colour', value: 'Rs. 1,200' },
        { label: 'Just For Man Beard Colour', value: 'Rs. 1,500' }
      ]
    },
    {
      title: 'Keratin & Hair Treatments',
      items: [
        { label: 'Keratin — Top Hair Crown (5 inch)', value: 'Rs. 7,000' },
        { label: 'Keratin — Medium Length', value: 'Rs. 12,000' },
        { label: 'Keratin — Shoulder Length', value: 'Rs. 18,000' },
        { label: 'Hair Rebonding', value: 'Rs. 10,000' },
        { label: 'Protein Treatment', value: 'Rs. 3,000' },
        { label: 'Hair Shine & Boost', value: 'Rs. 3,000' }
      ]
    },
    {
      title: 'Facials & Skincare',
      items: [
        { label: 'Imported Facial (Johnson)', value: 'Rs. 8,000' },
        { label: 'Cuteplus Facial', value: 'Rs. 7,000' },
        { label: 'Hi Left Facial', value: 'Rs. 6,000' },
        { label: 'Dermacos Facial', value: 'Rs. 5,000' },
        { label: 'Whitening Face Polisher', value: 'Rs. 2,500' },
        { label: 'Cleansing', value: 'Rs. 1,500' },
        { label: 'Black & Whitehead Removing', value: 'Rs. 1,000' }
      ]
    }
  ]
};

export const galleryImages = [
  {
    src: '/studio-view.png',
    alt: 'Salon interior and service floor'
  },
  {
    src: '/barber-cut.webp',
    alt: 'Haircut and styling service'
  },
  {
    src: '/beard-grooming.jfif',
    alt: 'Beard grooming and sculpting'
  },
  {
    src: '/curly-style.webp',
    alt: 'Styling and finishing'
  },
  {
    src: '/head-cleansing.png',
    alt: 'Head cleansing and facial care'
  }
];

export const testimonials = [
  {
    quote: 'A premium experience every time — precise cuts, strong styling and professional service.',
    name: 'Ali R.',
    rating: 5
  },
  {
    quote: 'Glamour Saloon delivers sharp grooming with perfect timing and smart styling.',
    name: 'Usman K.',
    rating: 5
  },
  {
    quote: 'The team is attentive, modern and the atmosphere feels premium.',
    name: 'Sami A.',
    rating: 5
  }
];

export const offers = [
  {
    title: '10% Off Weekdays',
    description: 'Enjoy a premium grooming session with a weekday booking discount.',
    label: 'Weekday special'
  },
  {
    title: 'Student Discount',
    description: 'Students receive an exclusive rate on haircuts and beard grooming.',
    label: 'Student price'
  },
  {
    title: 'Signature Grooming Bundle',
    description: 'Haircut, beard sculpt and glow facial for a complete luxury service.',
    label: 'Premium bundle'
  }
];

export const faqs = [
  {
    question: 'Do you accept walk-ins?',
    answer: 'Yes, walk-ins are welcome. For the fastest service, book via WhatsApp ahead of your visit.'
  },
  {
    question: 'Can I book ladies services?',
    answer: 'Yes. Ladies services are available at our Bahria Town Phase 4 salon and can be booked on WhatsApp.'
  },
  {
    question: 'What are your working hours?',
    answer: 'We are open daily from 11:00 AM to 1:00 AM.'
  },
  {
    question: 'How do I reserve an appointment?',
    answer: 'Tap any WhatsApp button, send your preferred service and time, and we will confirm your slot quickly.'
  }
];

export const contactInfo = {
  phone: '0312 0847866',
  hours: '11:00 AM – 1:00 AM daily',
  address: 'Malik Heights, 82 Plaza, Civic Center, Bahria Town Phase 4, Rawalpindi',
  instagram: 'https://www.instagram.com/glamour_salon_isb/?hl=en',
  maps: 'https://maps.app.goo.gl/4WqNhSRX6VNE82DM7'
};

export type ServiceCategory = 'tarot' | 'reiki' | 'energy-healing' | 'specialized';

export type DisplayServiceCategory =
  | 'Tarot Reading'
  | 'Energy and Spiritual Experiences'
  | 'Relaxation and Wellness';

export type ServiceDeliveryMode = 'in-person' | 'online-video' | 'distance';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceTopic {
  title: string;
  description: string;
  questions?: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  displayCategory: DisplayServiceCategory;
  price: number;
  durationMinutes: number;
  deliveryModes: ServiceDeliveryMode[];
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  imageUrl?: string;
  isActive: boolean;
  displayOrder: number;
  heroHeading?: string;
  heroSubtitle?: string;
  whatToExpect?: string[];
  sessionProcess?: ServiceProcessStep[];
  topics?: ServiceTopic[];
  faqs?: ServiceFAQ[];
  ethicalDisclaimer?: string;
  relatedServiceSlugs?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  bookingReference: string;
  serviceId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  appointmentDate: string; // YYYY-MM-DD
  appointmentTime: string; // HH:mm
  mode: ServiceDeliveryMode;
  status: BookingStatus;
  clientNotes?: string;
  adminNotes?: string;
  priceAtBooking: number;
  createdAt: string;
  updatedAt: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceName: string;
  rating: number;
  reviewText: string;
  location?: string;
  isFeatured: boolean;
  isApproved: boolean;
  createdAt: string;
}

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  description: string;
}
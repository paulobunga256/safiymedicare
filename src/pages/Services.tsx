import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Microscope,
  Scissors,
  Users,
  Bed,
  SquareActivity,
  Slice,
  UserCog,
  User,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'General Medicine',
    description: 'Comprehensive diagnosis and treatment for common and complex medical conditions.',
  },
  {
    icon: <Baby className="w-8 h-8" />,
    title: 'Child Care & Immunization',
    description: 'Specialized pediatric care and immunization programs to protect your child’s health and development.',
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Laboratory Services',
    description: 'Fast and accurate diagnostic testing to support effective treatment plans.',
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'In- and Out-Patient Care',
    description: 'Comfortable and reliable care for patients needing short-term or extended medical support.',
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Circumcision',
    description: 'Safe and hygienic circumcision services for children and adults.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Family Planning',
    description: 'Expert guidance on birth control options to help families plan for their future.',
  },
  {
    icon: <Bed className="w-8 h-8" />,
    title: 'Bedside Nursing',
    description: 'Compassionate bedside care for patients recovering at home or in our facility.',
  },
  {
    icon: <SquareActivity className="w-8 h-8" />,
    title: 'Ultrasound Scanning',
    description: 'Advanced imaging services to assist in precise diagnoses and monitoring.',
  },
  {
    icon: <Slice className="w-8 h-8" />,
    title: 'Minor and Major Surgeries',
    description: 'Skilled surgical procedures performed with the utmost precision and care.',
  },
  {
    icon: <UserCog className="w-8 h-8" />,
    title: 'Guidance and Counseling',
    description: 'Professional support for mental health, lifestyle adjustments, and medical challenges.',
  },
  {
    icon: <User className="w-8 h-8" />,
    title: 'Medical Consultations',
    description: 'Expert advice from our highly qualified doctors on various medical conditions and treatments.',
  },
];

export default function Services() {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Comprehensive healthcare services tailored to meet your needs"
        image="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80"
      />

      <section
        ref={servicesRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-brand-green-DEFAULT mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Medical Assistance?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our team of healthcare professionals is here to help. Contact us to schedule
            an appointment or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-brand-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-600 transition-colors duration-200"
            >
              Schedule Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-brand-blue-DEFAULT transition-colors duration-200"
            >
              Call Emergency
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

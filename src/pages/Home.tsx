import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Stethoscope, 
  Heart, 
  HeartPulse, 
  Baby,
  Star,
  Calendar
} from 'lucide-react';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8 text-sky-600" />,
    title: 'General Medicine',
    description: 'Comprehensive diagnosis and treatment for common and complex medical conditions.'
  },
  {
    icon: <Heart className="w-8 h-8 text-sky-600" />,
    title: 'Child Care & Immunization',
    description: 'Specialized pediatric care and immunization programs to protect your child’s health and development.'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-sky-600" />,
    title: 'In- and Out-Patient Care',
    description: 'Comfortable and reliable care for patients needing short-term or extended medical support.'
  },
  {
    icon: <Baby className="w-8 h-8 text-sky-600" />,
    title: 'Laboratory Services',
    description: 'Fast and accurate diagnostic testing to support effective treatment plans.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    content: 'The care I received was exceptional. The staff was professional and caring.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
  },
  {
    name: 'Michael Chen',
    content: 'Quick response time and thorough treatment. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];

export default function Home() {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div>
      <Hero />
      
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <p className="text-lg">
          Emergency? Call us now: 
          <a href="tel:+1234567890" className="font-bold ml-2 hover:underline">
            (123) 456-7890
          </a>
        </p>
      </div>

      <WelcomeSection />

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to meet the needs of our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQSection />

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our patients say about their experience with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BlogSection />

      {/* CTA Section */}
      <section className="bg-sky-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            <Calendar className="mr-2" size={20} />
            Schedule Appointment
          </a>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
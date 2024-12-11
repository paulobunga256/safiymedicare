import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

export default function WelcomeSection() {
  const { features } = useAppSelector((state) => state.features);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?auto=format&fit=crop&q=80"
              alt="Medical facility"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Health, Our Priority
            </h2>
            <p className="text-gray-600 mb-6">
              At Safiy Medical Care, we are dedicated to providing high-quality, patient-centered healthcare services to the residents of Kiwanga, Seeta, and the surrounding communities in Mukono District. Our compassionate and skilled medical team ensures every patient receives personalized attention and the best possible care.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-sky-600" />
                  </div>
                  <span className="ml-3 text-gray-600">{feature.text}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-colors duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
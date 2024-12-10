import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Medicare and Medicaid. Please contact our office for a complete list of accepted insurance providers.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our office, using our online booking system, or visiting us in person. Emergency cases are always given priority.',
  },
  {
    question: 'What are your operating hours?',
    answer: 'We are open Monday through Friday from 8:00 AM to 8:00 PM, and Saturday from 9:00 AM to 5:00 PM. Emergency services are available 24/7.',
  },
  {
    question: 'Do you offer telehealth services?',
    answer: 'Yes, we offer telehealth consultations for eligible patients. Please contact our office to learn more about virtual visit options.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                alt="Healthcare professional"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find answers to common questions about our services, appointments, and policies. 
              If you need additional information, please don't hesitate to contact us.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="p-4 bg-gray-50 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
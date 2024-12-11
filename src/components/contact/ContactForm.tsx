import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setFormData(initialFormData);
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              placeholder="Your phone"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="general">General Medicine</option>
            <option value="pediatric">Child Care</option>
            <option value="laboratory">Laboratory Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-center">An error occurred. Please try again.</p>
        )}
      </form>
    </motion.div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [viewport, setViewport] = useState({
    latitude: 0.4518, // Example latitude for Kiwanga, Seeta, Mukono District
    longitude: 32.6361, // Example longitude for Kiwanga, Seeta, Mukono District
    zoom: 14,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setFormData(initialFormData);
    
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for appointments or inquiries"
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
      />

      <section className="sm:px-8 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information and Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-sky-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-600">
                      Kiwanga, Seeta, Mukono District 
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-sky-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Emergency: 0704 486 265<br />
                      {/* Reception: (123) 456-7891 */}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-sky-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">hello@safymedicalcare.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-sky-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Emergency Services Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option value="">Select a service</option>
                        <option value="primary">Primary Care</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="pediatric">Pediatric Care</option>
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
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-sky-600 text-white py-3 rounded-full font-medium hover:bg-sky-700 transition-colors duration-200 disabled:opacity-50"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                      <p className="text-green-600 text-center">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-600 text-center">An error occurred. Please try again.</p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <ReactMapGL
                {...viewport}
                width="100%"
                height="450px"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
                mapboxApiAccessToken="pk.eyJ1IjoicGF1bG9idW5nYSIsImEiOiJjbTNvYjBzc3QwMWV1MmtzZmtteDBlMzU5In0.7PvZp41vMybUUOdpCzhyaA"
              >
                <Marker
                  latitude={0.4518}
                  longitude={32.6361}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <MapPin className="w-6 h-6 text-red-600" />
                </Marker>
              </ReactMapGL>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
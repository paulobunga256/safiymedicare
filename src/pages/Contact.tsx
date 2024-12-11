import { Phone, MapPin, Mail } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import GoogleMap from '../components/contact/GoogleMap';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    primary: "0704 486 265",
    secondary: "Emergency Available 24/7"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    primary: "Kiwanga, Seeta",
    secondary: "Mukono District"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    primary: "hello@safymedicalcare.com",
    secondary: "We reply within 24 hours"
  }
];

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for appointments or inquiries"
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
      />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex items-start p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
                  {info.icon}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-gray-800 font-medium">{info.primary}</p>
                  <p className="text-gray-600 text-sm">{info.secondary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
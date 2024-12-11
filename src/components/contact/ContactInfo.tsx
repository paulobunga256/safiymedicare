import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="w-6 h-6 text-brand-green-600 mt-1 mr-4" />
        <div>
          <h3 className="font-semibold mb-1">Location</h3>
          <p className="text-gray-600">
            Kiwanga, Seeta, Mukono District 
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Phone className="w-6 h-6 text-brand-green-600 mt-1 mr-4" />
        <div>
          <h3 className="font-semibold mb-1">Phone</h3>
          <p className="text-gray-600">
            Emergency: 0704 486 265
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <Mail className="w-6 h-6 text-brand-green-600 mt-1 mr-4" />
        <div>
          <h3 className="font-semibold mb-1">Email</h3>
          <p className="text-gray-600">hello@safymedicalcare.com</p>
        </div>
      </div>
      <div className="flex items-start">
        <Clock className="w-6 h-6 text-brand-green-600 mt-1 mr-4" />
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
  );
}
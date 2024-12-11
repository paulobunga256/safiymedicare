import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Clock, Shield } from "lucide-react";
import PageHeader from "../components/PageHeader";

const doctors = [
  {
    name: "Dr. Emily Wilson",
    specialty: "Primary Care",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    description:
      "Specializing in family medicine with over 15 years of experience.",
  },
  {
    name: "Dr. James Martinez",
    specialty: "Pediatrics",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    description:
      "Dedicated to providing comprehensive care for children of all ages.",
  },
];

const values = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Patient-Centered Care",
    description: "Your health and comfort are our top priorities.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "Committed to the highest standards of medical care.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Accessibility",
    description: "24/7 availability for our community.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust",
    description: "Building lasting relationships with our patients.",
  },
];

export default function About() {
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <PageHeader
        title="About Us"
        description="Dedicated to providing exceptional healthcare services to our community."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
      />

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-green">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Safiy Medical Care, our mission is to provide accessible,
                high-quality healthcare services to our community. We believe in
                treating each patient with dignity, respect, and personalized
                attention.
              </p>
              <p className="text-gray-600">
                Founded in 1995, we have grown to become a trusted healthcare
                provider, serving thousands of patients with comprehensive
                medical services.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?auto=format&fit=crop&q=80"
                alt="Medical facility"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-green">Our Medical Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced healthcare professionals dedicated to your
              well-being
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-brand-green mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600">{doctor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-green">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our practice and patient care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-brand-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-green">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

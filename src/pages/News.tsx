import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';

const articles = [
  {
    id: 1,
    title: 'Understanding Seasonal Allergies',
    excerpt: 'Learn about common triggers and treatment options for seasonal allergies.',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    category: 'Health Tips',
  },
  {
    id: 2,
    title: 'COVID-19 Vaccination Update',
    excerpt: 'Latest information about COVID-19 vaccines and boosters.',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80',
    category: 'News',
  },
  {
    id: 3,
    title: 'Healthy Living Workshop',
    excerpt: 'Join our upcoming workshop on maintaining a healthy lifestyle.',
    date: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
    category: 'Events',
  },
];

export default function News() {
  const [loading, setLoading] = useState(false);
  const [newsRef, newsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      <PageHeader
        title="News & Updates"
        description="Stay informed about health tips, community events, and facility updates"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
      />

      <section
        ref={newsRef}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={newsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={16} className="mr-2" />
                      {new Date(article.date).toLocaleDateString()}
                      <span className="mx-2">•</span>
                      <span className="text-sky-600">{article.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <a
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-sky-600 hover:text-sky-700"
                    >
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-sky-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Health Fair 2024</h3>
              <p className="text-gray-600 mb-4">
                Join us for free health screenings and wellness information.
              </p>
              <div className="text-sky-600">March 25, 2024 • 9 AM - 3 PM</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Diabetes Workshop</h3>
              <p className="text-gray-600 mb-4">
                Learn about managing diabetes and healthy living strategies.
              </p>
              <div className="text-sky-600">April 5, 2024 • 2 PM - 4 PM</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Vaccination Drive</h3>
              <p className="text-gray-600 mb-4">
                Free flu shots and COVID-19 boosters available.
              </p>
              <div className="text-sky-600">April 15, 2024 • 10 AM - 5 PM</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

// Mock article data (in a real app, this would come from an API)
const article = {
  id: '1',
  title: 'Understanding Seasonal Allergies: Causes, Symptoms, and Treatment Options',
  author: {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80'
  },
  date: '2024-03-15',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
  content: [
    {
      type: 'paragraph',
      content: 'Seasonal allergies, also known as hay fever or allergic rhinitis, affect millions of people worldwide. As we transition between seasons, many individuals experience a range of uncomfortable symptoms that can significantly impact their daily lives.'
    },
    {
      type: 'subheading',
      content: 'Understanding the Causes'
    },
    {
      type: 'paragraph',
      content: 'The primary triggers for seasonal allergies include pollen from trees, grasses, and weeds. When these allergens enter the body, they trigger an immune response that leads to the characteristic symptoms of allergies.'
    },
    {
      type: 'subheading',
      content: 'Common Symptoms'
    },
    {
      type: 'list',
      items: [
        'Runny or stuffy nose',
        'Sneezing and coughing',
        'Itchy or watery eyes',
        'Fatigue and headaches',
        'Sinus pressure'
      ]
    },
    {
      type: 'subheading',
      content: 'Treatment Options'
    },
    {
      type: 'paragraph',
      content: 'Several treatment options are available for managing seasonal allergies. These range from over-the-counter medications to prescription treatments and lifestyle modifications. Working with a healthcare provider can help determine the most effective approach for individual cases.'
    }
  ]
};

export default function NewsArticle() {
  const { id } = useParams();
  
  if (!article) {
    return <LoadingSpinner />;
  }

  const shareUrl = window.location.href;

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-6 md:p-12"
        >
          {/* Back to News */}
          <Link
            to="/news"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to News
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                {article.readTime}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold">{article.author.name}</div>
                <div className="text-gray-600 text-sm">{article.author.role}</div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose max-w-none">
            {article.content.map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  );
                case 'subheading':
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {section.content}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Social Sharing */}
          <div className="border-t mt-12 pt-8">
            <div className="flex items-center gap-4">
              <span className="font-semibold flex items-center">
                <Share2 size={20} className="mr-2" />
                Share this article:
              </span>
              <div className="flex gap-4">
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-600"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-gray-50 mt-16 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="Related article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold mb-2">
                    Managing Chronic Health Conditions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tips and strategies for effectively managing long-term health conditions.
                  </p>
                  <Link
                    to="/news/2"
                    className="text-sky-600 hover:text-sky-700 text-sm mt-4 inline-block"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
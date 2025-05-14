import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.user1.name'),
      location: t('testimonials.user1.location'),
      text: t('testimonials.user1.text'),
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: t('testimonials.user2.name'),
      location: t('testimonials.user2.location'),
      text: t('testimonials.user2.text'),
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: t('testimonials.user3.name'),
      location: t('testimonials.user3.location'),
      text: t('testimonials.user3.text'),
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];

  const renderStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-300 hover:border-yellow-500/50"
            >
              <div className="flex items-center space-x-1 mb-4">
                {renderStars()}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <User className="text-gray-400" size={24} />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
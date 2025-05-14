import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CreditCard, Globe, Ban, Package } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <CreditCard className="text-yellow-400" size={40} />,
      title: t('features.crypto.title'),
      description: t('features.crypto.description'),
    },
    {
      icon: <Globe className="text-yellow-400" size={40} />,
      title: t('features.global.title'),
      description: t('features.global.description'),
    },
    {
      icon: <Ban className="text-yellow-400" size={40} />,
      title: t('features.limits.title'),
      description: t('features.limits.description'),
    },
    {
      icon: <Package className="text-yellow-400" size={40} />,
      title: t('features.delivery.title'),
      description: t('features.delivery.description'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-300 hover:border-yellow-500/50 hover:bg-gray-800/80 group"
            >
              <div className="bg-gray-900/60 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, DollarSign, Globe, Percent } from 'lucide-react';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users className="text-yellow-400" size={24} />,
      value: t('stats.users'),
      label: t('stats.users.label'),
    },
    {
      icon: <DollarSign className="text-yellow-400" size={24} />,
      value: t('stats.atms'),
      label: t('stats.atms.label'),
    },
    {
      icon: <Globe className="text-yellow-400" size={24} />,
      value: t('stats.countries'),
      label: t('stats.countries.label'),
    },
    {
      icon: <Percent className="text-yellow-400" size={24} />,
      value: t('stats.crypto'),
      label: t('stats.crypto.label'),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-700 bg-gray-800/40 backdrop-blur-sm"
            >
              <div className="bg-gray-900/60 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1 text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
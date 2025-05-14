import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, CreditCard } from 'lucide-react';

const CardPricing: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const cards = [
    {
      title: t('pricing.basic.title'),
      price: t('pricing.basic.price'),
      description: t('pricing.basic.description'),
      image: "https://images.pexels.com/photos/7616909/pexels-photo-7616909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: t('pricing.premium.title'),
      price: t('pricing.premium.price'),
      description: t('pricing.premium.description'),
      image: "https://images.pexels.com/photos/7616915/pexels-photo-7616915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-yellow-400 to-yellow-600",
      popular: true,
    },
    {
      title: t('pricing.elite.title'),
      price: t('pricing.elite.price'),
      description: t('pricing.elite.description'),
      image: "https://images.pexels.com/photos/7616964/pexels-photo-7616964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const features = [
    t('pricing.feature.1'),
    t('pricing.feature.2'),
    t('pricing.feature.3'),
    t('pricing.feature.4'),
  ];

  const handleBuyClick = () => {
    window.open('https://metamask.io/');
    // In a real implementation, you would connect to MetaMask with the provided wallet address
    // and set up a payment transaction to the address 0x223572f66f114939A8d66978dCAcF6BEE29F4de2
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/34632800363`);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-800 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl top-20 -right-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:-translate-y-2 ${card.popular ? 'md:scale-105 relative z-10' : ''}`}
            >
              {card.popular && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold uppercase py-1 px-4 absolute top-4 right-4 rounded-full">
                  Popular
                </div>
              )}
              
              <div className="h-52 relative overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </div>
                  <div className={`text-2xl font-bold text-gradient bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                    {card.price}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="border-t border-gray-700 my-4"></div>
                
                <ul className="space-y-3 mb-8">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-400 mr-2" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={handleBuyClick}
                  className={`w-full py-3 mb-2 bg-gradient-to-r ${card.color} text-white font-medium rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300`}
                >
                  <CreditCard size={18} />
                  {t('pricing.buy')}
                </button>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-transparent border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-400 transition duration-300"
                >
                  {t('footer.whatsapp')}
                </button>
                
                <p className="text-center text-gray-500 text-xs mt-4">
                  {t('pricing.crypto')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardPricing;
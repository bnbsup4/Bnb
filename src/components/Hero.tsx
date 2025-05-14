import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CreditCard, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 right-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/20 rounded-full">
              <span className="text-yellow-400 text-sm font-medium">BNB Premium Visa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-3">{t('hero.subtitle')}</p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-medium rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition duration-300 shadow-lg shadow-yellow-500/20"
              >
                {t('hero.cta')}
                <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
              <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-3">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-2xl transform rotate-6 scale-105 opacity-50"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">BNB</h3>
                      <p className="text-xs text-gray-400 mt-1">Premium Visa Card</p>
                    </div>
                    <CreditCard className="text-yellow-500" size={32} />
                  </div>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 h-12 rounded-md mb-4 flex items-center px-4">
                      <div className="w-12 h-6 rounded-sm bg-gradient-to-r from-yellow-400 to-yellow-600 mr-2"></div>
                      <div className="w-8 h-6 rounded-sm bg-gray-600"></div>
                    </div>
                    <div className="flex justify-between text-gray-400 text-xs">
                      <span>Worldwide Access</span>
                      <span>No Limits</span>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 text-xs">
                    <div className="flex justify-between mb-1">
                      <span>Card Owner</span>
                      <span>Expiry</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white text-sm font-medium">BNB HOLDER</span>
                      <span className="text-white text-sm font-medium">UNLIMITED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
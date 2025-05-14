import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {t('site.title')}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full border border-gray-700 text-gray-300 hover:text-yellow-400 hover:border-yellow-400 transition duration-300"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-4 flex items-center space-x-1 px-2 py-1 rounded-full border border-gray-700 text-gray-300"
            >
              <Globe size={14} />
              <span className="text-sm">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between mb-8">
            <span className="text-xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {t('site.title')}
            </span>
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-center">
            {navItems.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                onClick={toggleMenu}
                className="text-xl text-white hover:text-yellow-400 transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
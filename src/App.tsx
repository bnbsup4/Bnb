import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CardPricing from './components/CardPricing';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <Header />
          <main>
            <Hero />
            <Features />
            <CardPricing />
            <Stats />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
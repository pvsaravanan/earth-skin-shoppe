
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sage/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <h1 className="text-2xl font-bold text-earth-brown" style={{ fontFamily: 'Playfair Display, serif' }}>
              Earth Skin Shoppe
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-earth-brown hover:text-sage transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-earth-brown hover:text-sage transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-earth-brown hover:text-sage transition-colors duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-earth-brown hover:text-sage transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden">
            <button className="text-earth-brown">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

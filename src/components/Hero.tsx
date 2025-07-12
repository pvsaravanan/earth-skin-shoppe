
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-sage/5 to-cream/80">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Earth Skin Shoppe
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Natural skincare crafted with premium organic ingredients. 
                Each product is lovingly handmade in small batches to nourish your skin naturally.
              </p>
              
              <Button 
                onClick={scrollToProducts}
                className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop now
              </Button>
            </div>
          </div>

          {/* Right Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Lavender Honey Soap"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-earth-brown mb-2">Lavender Soap</h3>
                  <p className="text-sage font-bold">₹999</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Vanilla Mint Lip Balm"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-earth-brown mb-2">Lip Balm</h3>
                  <p className="text-sage font-bold">₹699</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Coffee Body Scrub"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-earth-brown mb-2">Body Scrub</h3>
                  <p className="text-sage font-bold">₹1,299</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Rose Clay Face Mask"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-earth-brown mb-2">Face Mask</h3>
                  <p className="text-sage font-bold">₹1,499</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-terracotta/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

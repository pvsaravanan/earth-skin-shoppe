
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedProduct = () => {
  const handlePurchase = () => {
    // Button click handler - no redirect
    console.log('Featured product purchase clicked');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-sage/5 to-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Hemp Extract Body Butter"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-terracotta p-4 rounded-xl shadow-lg">
              <p className="text-white font-bold text-sm">Featured</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium">
              Hemp extract therapy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hemp extract body butter
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our premium hemp extract body butter provides deep moisturization and therapeutic benefits. 
              Enriched with natural oils and botanical extracts for the ultimate skin nourishment.
            </p>
            
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-sage">₹1,999</span>
              <span className="text-lg text-muted-foreground line-through">₹2,399</span>
              <span className="bg-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">17% OFF</span>
            </div>
            
            <Button 
              onClick={handlePurchase}
              className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;

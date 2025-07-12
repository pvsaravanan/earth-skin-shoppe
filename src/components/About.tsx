
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to Earth Skin Shoppe, where nature meets nurture. My journey began in my kitchen, 
                experimenting with natural ingredients to create gentle, effective skincare solutions for my family.
              </p>
              <p>
                What started as a passion for clean, chemical-free living has blossomed into a small business 
                dedicated to crafting premium skincare products using only the purest organic ingredients.
              </p>
              <p>
                Every soap, balm, and scrub is lovingly handmade in small batches to ensure freshness and quality. 
                I believe that what you put on your skin should be as pure as what you put in your body.
              </p>
              <p>
                Thank you for supporting small business and choosing natural skincare that's good for you 
                and good for the earth.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold text-sage" style={{ fontFamily: 'Playfair Display, serif' }}>
                With love,
              </p>
              <p className="text-lg text-earth-brown font-medium">Sarah Johnson</p>
              <p className="text-muted-foreground">Founder & Artisan</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Artisan crafting natural skincare products"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-sage/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-sage">5+</p>
                <p className="text-sm text-muted-foreground">Years Crafting</p>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-terracotta p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

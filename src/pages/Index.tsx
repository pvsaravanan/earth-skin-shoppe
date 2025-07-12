
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import FeaturedProduct from '@/components/FeaturedProduct';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Products />
      <FeaturedProduct />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

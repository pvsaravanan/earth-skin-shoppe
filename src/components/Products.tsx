
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      name: "Lavender Honey Soap",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Gentle cleansing bar infused with organic lavender and raw honey for soft, moisturized skin.",
      paymentLink: "https://buy.stripe.com/your-product-link-1"
    },
    {
      name: "Vanilla Mint Lip Balm",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nourishing lip balm with organic shea butter, vanilla extract, and refreshing peppermint oil.",
      paymentLink: "https://buy.stripe.com/your-product-link-2"
    },
    {
      name: "Coffee Body Scrub",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exfoliating body scrub with ground coffee beans and coconut oil for smooth, radiant skin.",
      paymentLink: "https://buy.stripe.com/your-product-link-3"
    },
    {
      name: "Rose Clay Face Mask",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Purifying face mask with French rose clay and botanical extracts for clear, glowing skin.",
      paymentLink: "https://buy.stripe.com/your-product-link-4"
    },
    {
      name: "Eucalyptus Body Butter",
      price: "₹1,399",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Rich, creamy body butter with eucalyptus essential oil for deep moisturization and aromatherapy.",
      paymentLink: "https://buy.stripe.com/your-product-link-5"
    },
    {
      name: "Chamomile Bath Salts",
      price: "₹1,099",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Relaxing bath salts with dried chamomile flowers and Epsom salt for a soothing bath experience.",
      paymentLink: "https://buy.stripe.com/your-product-link-6"
    }
  ];

  return (
    <section id="products" className="py-20 bg-cream dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown dark:text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            Each product is carefully handcrafted in small batches using only the finest natural ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

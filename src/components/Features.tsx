
import React from 'react';
import { Leaf, Shield, Heart, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "Organic",
      description: "Made with 100% organic ingredients sourced from sustainable farms"
    },
    {
      icon: Shield,
      title: "Chemical Free",
      description: "No harsh chemicals, parabens, or artificial preservatives"
    },
    {
      icon: Heart,
      title: "Handcrafted",
      description: "Lovingly handmade in small batches with attention to detail"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and secure delivery to your doorstep within 3-5 days"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-sage/10 dark:bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage/20 dark:group-hover:bg-sage/30 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-sage" />
                </div>
                <h3 className="text-xl font-semibold text-earth-brown dark:text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

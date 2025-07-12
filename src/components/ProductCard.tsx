
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  paymentLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, description, paymentLink }) => {
  const handlePurchase = () => {
    // Button click handler - no redirect
    console.log('Purchase clicked for:', name);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-earth-brown mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {name}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sage">
            {price}
          </span>
          <Button 
            onClick={handlePurchase}
            className="bg-terracotta hover:bg-terracotta/90 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

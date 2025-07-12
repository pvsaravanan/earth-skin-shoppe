
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews = () => {
  const reviews = [
    {
      name: "Emma Thompson",
      rating: 5,
      text: "The lavender honey soap is absolutely divine! My sensitive skin has never felt better. The scent is so calming and natural.",
      product: "Lavender Honey Soap"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "I've been using the coffee body scrub for months now, and my skin feels incredibly smooth. Great quality and natural ingredients!",
      product: "Coffee Body Scrub"
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      text: "The vanilla mint lip balm is my holy grail! It keeps my lips moisturized all day, and the vanilla scent is heavenly.",
      product: "Vanilla Mint Lip Balm"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers who love our natural skincare products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-earth-brown">{review.name}</p>
                  <p className="text-sm text-sage">Verified Purchase - {review.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg">
            <div className="text-center">
              <p className="text-3xl font-bold text-sage">4.9</p>
              <div className="flex items-center justify-center">
                {renderStars(5)}
              </div>
            </div>
            <div className="border-l border-muted pl-4">
              <p className="text-2xl font-bold text-earth-brown">500+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

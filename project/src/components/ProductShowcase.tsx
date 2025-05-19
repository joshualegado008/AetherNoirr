import React, { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import ProductData from '../data/products';
import { Product } from '../types';

const ProductShowcase: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'necklaces', 'rings', 'bracelets', 'watches'];

  const filteredProducts = activeCategory === 'all' 
    ? ProductData 
    : ProductData.filter(product => product.category === activeCategory);

  return (
    <section id="accessories" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl gothic-text text-center mb-4">
          PREMIUM <span className="text-red-600">ACCESSORIES</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Handcrafted with precision and dark elegance, each piece tells a story of shadow and sophistication.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 uppercase text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="card-hover bg-gray-800 bg-opacity-40 relative overflow-hidden group"
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredProduct === index ? 'opacity-40' : 'opacity-0'
                }`}></div>
                
                {/* Quick actions */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    hoveredProduct === index ? 'opacity-100' : ''
                  }`}
                >
                  <button className="mx-2 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform duration-300 transform hover:scale-110">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                  <button className="mx-2 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-transform duration-300 transform hover:scale-110">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">${product.price}</span>
                  <span className="text-xs uppercase tracking-wider px-2 py-1 bg-gray-700 rounded-sm">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="glow-btn bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-none uppercase tracking-wider hover:bg-red-600 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
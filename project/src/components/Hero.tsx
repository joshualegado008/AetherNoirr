import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Simple animate-on-load effect
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const btn = btnRef.current;

    if (title) title.classList.add('fade-in');
    if (subtitle) {
      subtitle.classList.add('fade-in');
      subtitle.classList.add('delay-200');
    }
    if (btn) {
      btn.classList.add('fade-in');
      btn.classList.add('delay-400');
    }
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('collections');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130539/pexels-photo-7130539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Wings overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-10">
        <div className="w-full max-w-4xl">
          <img 
            src="https://images.pexels.com/photos/6423446/pexels-photo-6423446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="" 
            className="w-full object-contain floating"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white opacity-0"
        >
          <span className="block">EMBRACE THE</span>
          <span className="block text-red-600 mt-2">DARKNESS</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl opacity-0 max-w-2xl mx-auto text-gray-300 mb-10"
        >
          Elevate your style with AetherNoir's premium men's accessories. Where darkness meets sophistication.
        </p>
        <button 
          ref={btnRef}
          onClick={scrollToProducts}
          className="glow-btn bg-transparent border-2 border-red-600 text-white px-8 py-3 rounded-none uppercase tracking-wider hover:bg-red-600 transition-all duration-300 opacity-0"
        >
          Explore Collection
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="h-10 w-10 text-white animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
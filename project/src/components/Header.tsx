import React, { useState, useEffect } from 'react';
import { Skull, ShoppingBag, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  // For demo purposes
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Skull className="h-8 w-8 text-red-600" />
          <span className="text-xl sm:text-2xl gothic-text font-bold tracking-wider text-white">
            AETHER<span className="text-red-600">NOIR</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Collections', 'Accessories', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-red-500 transition-colors uppercase tracking-wide text-sm"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Cart & Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer" onClick={addToCart}>
            <ShoppingBag className="h-6 w-6 text-white hover:text-red-500 transition-colors" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>
          
          <button 
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <button 
            className="absolute top-6 right-6"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="h-8 w-8 text-white" />
          </button>
          
          {['Home', 'Collections', 'Accessories', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-2xl text-white hover:text-red-500 transition-colors uppercase gothic-text tracking-widest"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
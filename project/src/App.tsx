import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import FeaturedCollection from './components/FeaturedCollection';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './styles/global.css';

function App() {
  return (
    <div className="app bg-black text-gray-200 min-h-screen relative overflow-hidden">
      <Cursor />
      <div className="mist-overlay"></div>
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <ProductShowcase />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
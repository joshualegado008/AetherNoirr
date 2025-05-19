import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background wing image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/1028723/pexels-photo-1028723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl gothic-text mb-4">
            JOIN THE <span className="text-red-600">DARKNESS</span>
          </h2>
          <p className="text-gray-300 mb-10">
            Subscribe to our newsletter for exclusive access to new collections, special offers, and dark inspirations.
          </p>
          
          {submitted ? (
            <div className="fade-in bg-gray-800 bg-opacity-50 p-8 border border-red-600">
              <h3 className="text-xl mb-2 gothic-text">WELCOME TO THE ABYSS</h3>
              <p className="text-gray-300">
                Your soul is now bound to AetherNoir. Prepare to receive whispers from the darkness.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 bg-opacity-70 border border-gray-700 text-white px-4 py-3 w-full focus:outline-none focus:border-red-600 transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className={`glow-btn flex items-center justify-center bg-transparent border-2 border-red-600 text-white px-6 py-2 uppercase tracking-wider hover:bg-red-600 transition-all duration-300 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                      Joining...
                    </span>
                  ) : (
                    <>
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          
          <p className="text-gray-500 text-xs mt-4">
            By subscribing, you agree to receive marketing emails and accept our privacy policy.
            We promise to only send messages worthy of the darkness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
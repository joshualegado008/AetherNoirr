import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";

const FeaturedCollection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl gothic-text text-center mb-16 animate-on-scroll opacity-0">
          FEATURED <span className="text-red-600">COLLECTION</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Collection 1 */}
          <div className="relative h-[500px] overflow-hidden group animate-on-scroll opacity-0">
            <div className="absolute inset-0 bg-[url('https://i.imgur.com/nMjYdv6.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold mb-2 gothic-text tracking-wider">
                PHANTOM SILVER
              </h3>
              <p className="text-gray-300 mb-6">
                Elegant silver accessories with obsidian accents
              </p>
              <button className="flex items-center glow-btn bg-black bg-opacity-70 hover:bg-opacity-90 border border-red-600 text-white px-6 py-2 uppercase text-sm tracking-wider group-hover:border-white transition-all duration-300">
                View Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Featured Collection 2 */}
          <div className="relative h-[500px] overflow-hidden group animate-on-scroll opacity-0 delay-200">
            <div className="absolute inset-0 bg-[url('https://i.imgur.com/82IaLvG.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-2xl font-bold mb-2 gothic-text tracking-wider">
                CRIMSON SHADOW
              </h3>
              <p className="text-gray-300 mb-6">
                Bold leather pieces with blood-red details
              </p>
              <button className="flex items-center glow-btn bg-black bg-opacity-70 hover:bg-opacity-90 border border-red-600 text-white px-6 py-2 uppercase text-sm tracking-wider group-hover:border-white transition-all duration-300">
                View Collection
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

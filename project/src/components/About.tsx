import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
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

    const elements = document.querySelectorAll(".animate-about");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background image with low opacity */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl gothic-text text-center mb-16 animate-about opacity-0">
            THE <span className="text-red-600">STORY</span>
          </h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 animate-about opacity-0">
                <div className="h-full w-full max-h-[300px] overflow-hidden">
                  <img
                    src="https://i.imgur.com/PCbvsgb.png"
                    alt="AetherNoir Inspiration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 animate-about opacity-0 delay-200">
                <h3 className="text-xl font-bold mb-4 gothic-text tracking-wider">
                  THE DUALITY OF LIGHT AND SHADOW
                </h3>
                <p className="text-gray-300 mb-4">
                  Born from the contrast between light and dark, AetherNoir
                  represents the duality that exists within all of us. Our
                  founder's fascination with gothic aesthetics and classical
                  symbolism led to the creation of a brand that embraces
                  darkness while celebrating the light that defines it.
                </p>
                <p className="text-gray-300">
                  Each accessory tells a story of this eternal balance – the
                  delicate interplay between shadow and illumination that
                  defines our existence.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 animate-about opacity-0 delay-300">
                <div className="h-full w-full max-h-[300px] overflow-hidden">
                  <img
                    src="https://i.imgur.com/kuIHUqC.png"
                    alt="Craftsmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 animate-about opacity-0 delay-400">
                <h3 className="text-xl font-bold mb-4 gothic-text tracking-wider">
                  CRAFTSMANSHIP IN DARKNESS
                </h3>
                <p className="text-gray-300 mb-4">
                  Our artisans work in the tradition of ancient metalworkers,
                  combining time-honored techniques with modern precision. Each
                  piece is meticulously crafted from premium materials –
                  sterling silver, obsidian, onyx, and the finest leather – to
                  create accessories that embody both strength and elegance.
                </p>
                <p className="text-gray-300">
                  We believe that true luxury lies in the details that others
                  overlook, in the shadows where beauty hides from casual
                  observation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

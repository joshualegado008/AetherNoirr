import React from "react";
import {
  Skull,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-gray-400">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Skull className="h-6 w-6 text-red-600" />
              <span className="text-xl gothic-text font-bold tracking-wider text-white">
                AETHER<span className="text-red-600">NOIR</span>
              </span>
            </div>
            <p className="mb-6">
              Where darkness meets sophistication. Premium accessories for those
              who embrace the shadows.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white gothic-text text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Collections", "Accessories", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-red-600 transition-colors inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white gothic-text text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-red-600 mt-0.5" />
                <span>
                  Dark Tower, Shadow Forest
                  <br />
                  Laguna City, NC 13666
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-600" />
                <span>+1 (666) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-red-600" />
                <span>darkness@aethernoir.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white gothic-text text-lg mb-6">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
            <p className="mt-6 text-sm">
              The darkness awaits. Visit our physical location for a full
              immersion.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-6">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} AetherNoir. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors mx-3 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors mx-3 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-primary">HMUA by AINA</div>
            <p className="text-gray-400 mb-4">
              Professional Hair & Makeup Artist creating beauty that enhances your natural features.
            </p>
            <div className="flex space-x-3">
              <a 
                href={SOCIAL_LINKS.facebook} 
                className="social-icon bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram} 
                className="social-icon bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Portfolio', 'Videos', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} HMUA by AINA. All rights reserved. | Designed with passion for beauty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
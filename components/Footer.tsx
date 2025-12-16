import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, DISPLAY_PHONE_NUMBER, PHONE_NUMBER } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
          <p className="mb-2">Your dedicated partner for EPSON printer support.</p>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center md:justify-start text-lg font-semibold hover:text-blue-300 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
            </svg>
            {DISPLAY_PHONE_NUMBER}
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:text-blue-300 transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-blue-300 transition-colors duration-200">Sitemap</Link></li>
            <li><Link to="/about-us" className="hover:text-blue-300 transition-colors duration-200">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-300 transition-colors duration-200">Services</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <SocialMediaIcons />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
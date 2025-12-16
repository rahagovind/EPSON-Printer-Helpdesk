import React from 'react';
import { NavLink } from 'react-router-dom';
import { COMPANY_NAME, DISPLAY_PHONE_NUMBER, PHONE_NUMBER, NAV_LINKS } from '../constants';
import SocialMediaIcons from './SocialMediaIcons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <NavLink to="/" className="text-2xl font-bold tracking-tight whitespace-nowrap">
            {COMPANY_NAME}
          </NavLink>
          <div className="md:hidden flex items-center">
            <a href={`tel:${PHONE_NUMBER}`} className="block text-xl font-semibold mr-4 hover:text-blue-200 transition-colors duration-200">
              <span className="sr-only">Call support</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
              </svg>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400 p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-semibold whitespace-nowrap hover:text-blue-200 transition-colors duration-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
            </svg>
            {DISPLAY_PHONE_NUMBER}
          </a>
          <SocialMediaIcons iconSize="text-xl" colorClass="text-white hover:text-blue-200" />
        </div>
      </div>
    </header>
  );
};

export default Header;
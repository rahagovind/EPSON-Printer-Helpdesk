import React from 'react';
import { DISPLAY_PHONE_NUMBER, PHONE_NUMBER } from '../constants';

interface CallToActionProps {
  text?: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text = 'Need immediate assistance?', className = '' }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-xl text-center ${className}`}>
      <p className="text-xl md:text-2xl font-semibold mb-4">{text}</p>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg md:text-xl"
        aria-label={`Call ${DISPLAY_PHONE_NUMBER} for support`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
        </svg>
        Call Us Now: {DISPLAY_PHONE_NUMBER}
      </a>
    </div>
  );
};

export default CallToAction;
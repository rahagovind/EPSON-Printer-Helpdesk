import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { COMPANY_NAME, COMMON_PRINTER_ISSUES, PHONE_NUMBER } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title={`${COMPANY_NAME} - Support for Setup & Troubleshooting - Call ${PHONE_NUMBER}`}
        description="Need help with your EPSON printer? Get expert support for connectivity, paper jams, ink issues, and more. Call EPSON Printer Helpdesk at +1 (510)-370-1986."
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Your Trusted Partner for EPSON Printer Support
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Experiencing issues with your EPSON printer? We provide expert assistance for all your setup, troubleshooting, and maintenance needs.
          </p>
          <CallToAction className="mx-auto max-w-lg" />
        </section>

        {/* Common Problems Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            We Resolve Your Most Common Printer Headaches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_PRINTER_ISSUES.map((issue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">{issue}</h3>
                <p className="text-gray-600">
                  Facing this problem? Our experts are ready to provide quick and effective solutions.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-lg">
              Explore Our Services
            </Link>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Why Choose {COMPANY_NAME}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img src="https://picsum.photos/100/100?random=21" alt="Expert Technicians" className="mx-auto mb-4 rounded-full shadow-md" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Our team consists of highly trained professionals specializing in EPSON printers.</p>
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/100/100?random=22" alt="Fast & Reliable" className="mx-auto mb-4 rounded-full shadow-md" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Fast & Reliable</h3>
              <p className="text-gray-600">Get quick and dependable solutions to minimize your downtime.</p>
            </div>
            <div className="p-4">
              <img src="https://picsum.photos/100/100?random=23" alt="Customer Satisfaction" className="mx-auto mb-4 rounded-full shadow-md" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">We prioritize your experience and ensure your printer issues are fully resolved.</p>
            </div>
          </div>
        </section>

        {/* Call to Action at the bottom */}
        <section className="text-center">
          <CallToAction />
        </section>
      </main>
    </>
  );
};

export default HomePage;
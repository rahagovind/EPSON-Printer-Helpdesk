import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title={`About ${COMPANY_NAME} - Reliable USA Support - Call ${PHONE_NUMBER}`}
        description={`Learn more about ${COMPANY_NAME} services. We provide professional support for all EPSON printer issues, from setup to troubleshooting. Call +1 (510)-370-1986 for help.`}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            About {COMPANY_NAME}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            At {COMPANY_NAME}, we are dedicated to providing unparalleled support for all your EPSON printer needs. With years of specialized experience, our team of certified technicians is committed to delivering fast, effective, and reliable solutions, ensuring your printing experience is smooth and hassle-free.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="https://picsum.photos/150/150?random=31" alt="Our Mission" className="mx-auto mb-6 rounded-full shadow-md" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our mission is to be the leading support hub for EPSON printer users across the USA. We strive to simplify complex technical issues, offering clear guidance and hands-on assistance to keep your printers performing at their best.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="https://picsum.photos/150/150?random=32" alt="Our Expertise" className="mx-auto mb-6 rounded-full shadow-md" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-gray-600 text-lg">
              Our expertise covers the full spectrum of EPSON printer models and issues. From initial setup and wireless configuration to advanced troubleshooting for paper jams, print quality, and software errors, we've got you covered.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg shadow-xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Committed to Your Satisfaction</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We pride ourselves on our customer-first approach, ensuring every interaction is professional, helpful, and resolves your problem efficiently. Your trust is our top priority.
          </p>
          <CallToAction text="Ready for expert support?" className="mx-auto max-w-lg bg-transparent border-2 border-white" />
        </section>

        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our team comprises dedicated professionals passionate about technology and committed to providing the best EPSON printer support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img src="https://picsum.photos/120/120?random=33" alt="Team Member 1" className="mx-auto mb-4 rounded-full border-4 border-blue-500" />
              <h3 className="text-xl font-semibold text-gray-700">John Doe</h3>
              <p className="text-blue-600">Lead Technician</p>
              <p className="text-sm text-gray-500 mt-2">Specializes in connectivity and network solutions.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img src="https://picsum.photos/120/120?random=34" alt="Team Member 2" className="mx-auto mb-4 rounded-full border-4 border-blue-500" />
              <h3 className="text-xl font-semibold text-gray-700">Jane Smith</h3>
              <p className="text-blue-600">Support Specialist</p>
              <p className="text-sm text-gray-500 mt-2">Expert in ink issues and print quality troubleshooting.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img src="https://picsum.photos/120/120?random=35" alt="Team Member 3" className="mx-auto mb-4 rounded-full border-4 border-blue-500" />
              <h3 className="text-xl font-semibold text-gray-700">Mike Johnson</h3>
              <p className="text-blue-600">Software & Driver Expert</p>
              <p className="text-sm text-gray-500 mt-2">Handles all software installation and driver-related queries.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
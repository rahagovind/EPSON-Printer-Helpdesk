import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { COMPANY_NAME, PHONE_NUMBER, SERVICES_LIST } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title={`${COMPANY_NAME} Services - Setup, Troubleshooting & Support - Call ${PHONE_NUMBER}`}
        description={`Explore ${COMPANY_NAME} services, including setup assistance, ink cartridge issues, paper jams, and wireless setup. Call +1 (510)-370-1986 for support.`}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Our Comprehensive EPSON Printer Support Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            From seamless setup to complex troubleshooting, our experts are here to ensure your EPSON printer works flawlessly.
          </p>
          <CallToAction className="mx-auto max-w-lg bg-transparent border-2 border-white" />
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border-t-4 border-blue-600">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300 text-base"
                    aria-label={`Get support for ${service.title}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
                    </svg>
                    Call for Support
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <CallToAction text="Don't let printer problems slow you down. Contact us today!" />
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
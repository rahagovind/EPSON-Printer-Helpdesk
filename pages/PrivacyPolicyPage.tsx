import React from 'react';
import SEO from '../components/SEO';
// Add import for EMAIL_ADDRESS, PHONE_NUMBER, DISPLAY_PHONE_NUMBER
import { COMPANY_NAME, EMAIL_ADDRESS, PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title={`Privacy Policy - ${COMPANY_NAME}`}
        description="Read the privacy policy for EPSON Printer Helpdesk services."
      />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            This Privacy Policy describes how {COMPANY_NAME} ("we," "us," or "our") collects, uses, and discloses your personal information when you visit and use our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us when you use our services, such as when you fill out a contact form, request support, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
          </p>
          <p className="text-gray-600 mb-4">
            We also automatically collect certain information when you access and use the Website, such as your IP address, browser type, operating system, referring URLs, device information, and your interactions with the Website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Communicate with you about our services, offers, and promotions.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of {COMPANY_NAME} and others.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Sharing Your Information</h2>
          <p className="text-gray-600 mb-4">
            We may share your personal information with third parties in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 pl-4">
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
            <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of {COMPANY_NAME} or others.</li>
            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business by another company.</li>
            <li>With your consent or at your direction.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Security</h2>
          <p className="text-gray-600 mb-4">
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Your Choices</h2>
          <p className="text-gray-600 mb-4">
            You may review, update, or delete your personal information by contacting us directly. You may also opt out of receiving promotional communications from us by following the instructions in those communications.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the "Last Updated" date at the top of this policy and, in some cases, we may provide you with additional notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 mt-8">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: <a href={`mailto:${EMAIL_ADDRESS}`} className="text-blue-600 hover:underline">{EMAIL_ADDRESS}</a>
            <br />
            Phone: <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:underline">{DISPLAY_PHONE_NUMBER}</a>
          </p>

          <p className="text-sm text-gray-500 mt-12 text-center">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
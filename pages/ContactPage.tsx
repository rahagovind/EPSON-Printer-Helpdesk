import React from 'react';
import SEO from '../components/SEO';
import SocialMediaIcons from '../components/SocialMediaIcons';
import { COMPANY_NAME, PHONE_NUMBER, DISPLAY_PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <>
      <SEO
        title={`Contact ${COMPANY_NAME} - Get Support for Printer Issues - Call ${PHONE_NUMBER}`}
        description={`Reach ${COMPANY_NAME} for expert support. Call +1 (510)-370-1986 or use our contact form to resolve printer issues like connectivity, paper jams, and more.`}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Get In Touch With Our EPSON Experts
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Have a question or need immediate assistance? Our support team is here to help you resolve any EPSON printer issue.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  placeholder="Tell us about your printer issue..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 text-blue-600">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.606 1.907L6.75 11.25a16.519 16.519 0 007.242 7.242l1.844-1.105a1.875 1.875 0 011.907-.606h4.423c.834 0 1.42.759 1.42 1.61V20.5a3 3 0 01-3 3H4.5a3 3 0 01-3-3V4.5z" clipRule="evenodd" />
                  </svg>
                  Call Us: <a href={`tel:${PHONE_NUMBER}`} className="ml-2 text-blue-600 hover:underline">{DISPLAY_PHONE_NUMBER}</a>
                </p>
                <p className="text-gray-500 mt-2">Available 24/7 for immediate assistance.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Email Support</h3>
                <p className="text-gray-600 text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 text-blue-600">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.58 4.67a3 3 0 01-2.84 0L1.5 8.67z" />
                    <path d="M22.5 6.906a3 3 0 00-3-3h-15a3 3 0 00-3 3v.793l9.38 5.106a3 3 0 002.84 0L22.5 7.699V6.906z" />
                  </svg>
                  Email Us: <a href={`mailto:${EMAIL_ADDRESS}`} className="ml-2 text-blue-600 hover:underline">{EMAIL_ADDRESS}</a>
                </p>
                <p className="text-gray-500 mt-2">Expect a response within 24 hours.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Business Hours</h3>
                <ul className="text-gray-600 text-lg space-y-1">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                  <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Follow Us</h3>
                <SocialMediaIcons colorClass="text-blue-600 hover:text-blue-800" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
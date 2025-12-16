import React from 'react';
import SEO from '../components/SEO';
import { COMPANY_NAME, NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  return (
    <>
      <SEO
        title={`Sitemap - ${COMPANY_NAME}`}
        description={`Explore the sitemap for ${COMPANY_NAME}, providing an overview of all pages for easy navigation.`}
      />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Website Sitemap
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Easily navigate through all the important sections of our website.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Main Navigation</h2>
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-blue-600 hover:underline text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Blog Posts</h2>
              <ul className="space-y-2">
                {/* Assuming BLOG_POSTS are defined in constants and have IDs */}
                <li><Link to="/blog" className="text-blue-600 hover:underline text-lg">All Blog Posts</Link></li>
                <li><Link to="/blog/1" className="text-blue-600 hover:underline text-lg">EPSON Connectivity Issues</Link></li>
                <li><Link to="/blog/2" className="text-blue-600 hover:underline text-lg">Paper Jam Troubleshooting</Link></li>
                <li><Link to="/blog/3" className="text-blue-600 hover:underline text-lg">Ink Cartridge Problems</Link></li>
                {/* Add more specific blog post links here if desired */}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Other Pages</h2>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-blue-600 hover:underline text-lg">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SitemapPage;
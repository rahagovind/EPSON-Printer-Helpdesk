import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SitemapPage from './pages/SitemapPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={
            <div className="text-center p-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
              <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
              <a href="/" className="mt-6 inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">Go to Home</a>
            </div>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
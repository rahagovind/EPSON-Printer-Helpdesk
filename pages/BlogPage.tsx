import React from 'react';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { COMPANY_NAME, PHONE_NUMBER, BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...new Set(BLOG_POSTS.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <>
      <SEO
        title={`${COMPANY_NAME} Blog - Printer Tips & Troubleshooting Guides - Call ${PHONE_NUMBER}`}
        description={`Stay informed with troubleshooting tips and guides for EPSON printers. For immediate support, call ${COMPANY_NAME} at +1 (510)-370-1986.`}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl p-8 md:p-12 mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            EPSON Printer Troubleshooting & Tips
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Explore our comprehensive guides and articles to help you solve common EPSON printer problems and maintain your device.
          </p>
          <CallToAction className="mx-auto max-w-lg bg-transparent border-2 border-white" />
        </section>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Blog Posts Section */}
          <section className="md:w-3/4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-blue-600">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-blue-700 transition-colors duration-200">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>Category: <span className="font-semibold text-blue-600">{post.category}</span></span>
                        <span>Published: {post.date}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-block px-6 py-2 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-colors duration-300"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg text-gray-600">No blog posts found for this category.</p>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="md:w-1/4 bg-gray-50 p-6 rounded-lg shadow-md h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
            <ul className="space-y-3">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left py-2 px-4 rounded-md transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-white text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <CallToAction text="Need help now?" className="px-4 py-6 text-sm bg-blue-600" />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CallToAction from '../components/CallToAction';
import { COMPANY_NAME, PHONE_NUMBER, BLOG_POSTS } from '../constants';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-8 md:py-12 text-center">
        <SEO title="Post Not Found" description="The blog post you are looking for does not exist." />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the article you were looking for. Please check the URL or browse our other posts.
        </p>
        <Link to="/blog" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 text-lg">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} - ${COMPANY_NAME} Blog - Call ${PHONE_NUMBER}`}
        description={post.description}
      />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <img src={post.image} alt={post.title} className="w-full h-80 object-cover rounded-lg mb-8 shadow-md" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-500 text-sm md:text-base mb-8 border-b pb-4">
            <span>Category: <span className="font-semibold text-blue-600">{post.category}</span></span>
            <span>Published on: {post.date}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-lg text-gray-600 mb-6">
              Found this article helpful? If you need more personalized assistance, our experts are just a call away!
            </p>
            <CallToAction />
          </div>
        </article>

        <div className="text-center mt-8">
          <Link to="/blog" className="inline-block px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-lg">
            Back to All Articles
          </Link>
        </div>
      </main>
    </>
  );
};

export default BlogPostPage;
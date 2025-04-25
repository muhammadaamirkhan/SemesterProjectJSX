import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-green-100 via-green-200 to-green-300 text-green-900">
      <div className="px-4 mx-auto text-center max-w-3xl">
        {/* Heading with emoji */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-4xl mb-2 animate-bounce">🌱</span>
          <h2 className="text-4xl font-extrabold">Join Our Green Community</h2>
        </div>

        {/* Description */}
        <p className="mb-8 text-lg text-green-800">
          Subscribe for plant care tips, exclusive offers, and the latest arrivals. Let’s grow together!
        </p>

        {/* Email Form */}
        <div className="w-full max-w-lg mx-auto flex shadow-md rounded-lg overflow-hidden bg-white">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-5 py-3 text-gray-800 text-base focus:outline-none"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Privacy Note */}
        <p className="mt-4 text-sm text-green-700 italic">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;

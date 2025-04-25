import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-50 to-emerald-100 py-12 md:py-14">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 leading-tight">
            Bring Nature <span className="text-green-600">Into</span> Your Home
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Discover our premium collection of indoor and outdoor plants to transform your living space.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              Shop Now
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
          <div className="mt-6 flex items-center space-x-2 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free shipping on orders over $50</span>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2 mt-6 md:mt-0 group">
          <img 
            src="/images/Banner/indo.jpg" 
            alt="Beautiful indoor plants collection"
            className="rounded-xl shadow-xl w-full h-auto max-h-80 object-cover object-center transform transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

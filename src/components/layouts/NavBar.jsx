import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-green-700 shadow-lg sticky top-0 z-50">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Plant logo only */}
          <div className="flex items-center">
            <img 
              src="/images/Banner/logo.png" // Make sure this path is correct
              alt="Plant Shop Logo"
              className="h-20 w-50 object-contain rounded-full"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-white hover:text-yellow-200 font-medium text-lg transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium text-lg transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              About
            </a>
            <a href="#" className="text-white hover:text-yellow-200 font-medium text-lg transition-colors duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact
            </a>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300 shadow-md">
              Shop Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-yellow-200 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className="md:hidden hidden bg-green-800">
        <div className="px-2 pt-2 pb-3 space-y-2">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700">Contact</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-green-900 bg-yellow-400 hover:bg-yellow-500 text-center">Shop Plants</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

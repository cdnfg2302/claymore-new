import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-28 sm:px-32 lg:px-56">
        <div className="flex justify-between items-center h-40">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/lovable-uploads/027c626f-edc7-462e-a517-7044c2e77619.png"
                alt="Claymore AI Lab"
                className="h-40 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-bold transition-colors text-xl">
              关于我们
            </Link>
            <Link to="/products" className="text-blue-600 font-bold text-xl">
              AI产品
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-bold transition-colors text-xl">
              联系我们
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
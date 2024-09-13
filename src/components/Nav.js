import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Define custom CSS for animation
const animationStyles = `
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
}
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{animationStyles}</style>
      <nav className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20 items-center">
            {/* Branding */}
            <div className="flex-shrink-0 flex items-center space-x-4">
              <span className="text-3xl md:text-5xl font-extrabold text-accent-300 tracking-wide animate-slide-in">
                ھجرۃ
              </span>
              <span className="text-xl md:text-3xl font-bold text-accent-200 italic animate-slide-in">
                Hijra Insight
              </span>
            </div>

            {/* Menu Button for mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none flex items-center justify-center relative z-10"
              >
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links for Desktop */}
            <div className={`hidden md:flex space-x-8 items-center ${isOpen ? "block" : "hidden"} md:block`}>
              <Link
                to="/"
                className="text-white font-semibold hover:text-accent-300 hover:underline hover:scale-105 transform transition-all ease-in-out duration-300 animate-slide-in"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-white font-semibold hover:text-accent-300 hover:underline hover:scale-105 transform transition-all ease-in-out duration-300 animate-slide-in"
              >
                All Services
              </Link>
              <Link
                to="/about"
                className="text-white font-semibold hover:text-accent-300 hover:underline hover:scale-105 transform transition-all ease-in-out duration-300 animate-slide-in"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white font-semibold hover:text-accent-300 hover:underline hover:scale-105 transform transition-all ease-in-out duration-300 animate-slide-in"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Slide */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-secondary-800 bg-opacity-90 z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-center justify-center space-y-8 h-full">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-semibold hover:text-accent-300 hover:underline animate-slide-in"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-semibold hover:text-accent-300 hover:underline animate-slide-in"
            >
              All Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-semibold hover:text-accent-300 hover:underline animate-slide-in"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-2xl text-white font-semibold hover:text-accent-300 hover:underline animate-slide-in"
            >
              About Us
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none transition-transform duration-500 transform hover:scale-110"
            >
              <svg
                className="h-8 w-8 md:h-10 md:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

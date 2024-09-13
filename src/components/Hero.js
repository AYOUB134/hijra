import React, { useState, useEffect } from "react";

// Importing images
import tt1 from "./images/tt1.jpeg";
import tt2 from "./images/tt2.jpg"; // Changed extension to .jpg
import tt3 from "./images/tt3.jpeg";
import tt4 from "./images/tt4.jpeg";
import tt5 from "./images/tt5.jpeg";
import tt6 from './images/hajjumrah.jpeg'

const images = [tt1, tt2, tt3, tt4, tt5,tt6];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Set slide manually by clicking dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Inline styles for keyframes (Slide-In)
  const slideInLeft = {
    animation: 'slideInLeft 1s ease-in-out',
  };

  const slideInRight = {
    animation: 'slideInRight 1s ease-in-out',
    animationDelay: '0.5s',
  };

  const slideInLeftDelay = {
    animation: 'slideInLeft 1s ease-in-out',
    animationDelay: '0.2s',
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Image Container */}
      <div className="w-full h-full relative">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
        />
        {/* Darker Overlay Gradient for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>

        {/* Text Over the Image with Slide-In Animation */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
          <h1
            className="text-4xl md:text-6xl text-white font-extrabold shadow-lg drop-shadow-md"
            style={slideInLeft}
          >
            Welcome to Our Journey
          </h1>
          <p
            className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto"
            style={slideInLeftDelay}
          >
            Experience the beauty of transitions and explore our captivating
            stories.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold text-lg rounded-full hover:bg-yellow-400 transition-all duration-300"
            style={slideInRight}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-500 ease-in-out"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-500 ease-in-out"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 w-4 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
            } transition-all duration-500 transform hover:scale-110`}
          />
        ))}
      </div>

      {/* Custom styles for slide-in animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

import React, { useState } from "react";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full bg-light-gray py-6">
      <div className="intro-container mx-auto bg-white rounded-lg shadow-lg px-6 py-4">
        {/* Header with site name and short description */}
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            {/* <h1 className="text-3xl font-bold text-primary company-name">
              Hijra Insight
            </h1> */}
            <p className="text-secondary company-description">
              We are a full-service travel agency in Lahore and Karachi with a
              dedicated team of highly skilled and experienced professionals to
              assist our clients with their goals and desired journeys around
              the world. At Bliss Travels & Tours, we strive to provide
              outstanding service to all our customers.
            </p>
          </div>

          {/* Swipe Icon to toggle content */}
          <div
            className="cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              // SVG for Collapse (Up Arrow)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              // SVG for Expand (Down Arrow)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Intro Content with sliding animation */}
        <div
          className={`overflow-hidden transition-all duration-1000 ease-custom ${
            isVisible ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            transitionProperty: "max-height, opacity",
            transitionDuration: "1000ms", // custom duration
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", // custom easing for smooth animation
          }}
        >
          <div className="mt-4">
            <p className="text-body mb-4">
              Whether you're looking for visa consultancy, air tickets, travel
              insurance, adventure packages, or even a cruise ride, we're ready
              to serve you with market-competitive rates. Our goal is to make
              every customer feel blissful as they travel with us, so "You Can
              Buy Yourself The Freedom" that makes us feel honored.
            </p>

            <p className="text-body mb-4">
              We offer the best travel solutions from a single point of contact.
              As a prominent player in the global tourism market, we provide a
              wide range of travel services with top-tier comfort and
              competitive rates, including flights with the world's best
              airlines, hotel accommodations, holiday and honeymoon packages,
              and much more.
            </p>

            <p className="text-body mb-4">
              Established in 2019, Bliss Travels & Tours (Pvt.) Ltd is one of
              Pakistan’s leading independent travel agencies, serving regular
              and honorable customers who consider us the best travel agency in
              Lahore, Pakistan.
            </p>

            <p className="text-body">
              We've developed strong trade relationships with accommodation and
              hotel wholesalers, airfare consolidators, airlines, and major tour
              operators worldwide. Our customers benefit from the cheapest air
              tickets, whether traveling to Australia, Europe, Africa, Asia, or
              the Middle East. Our vast accommodation network also helps us
              provide unbeatable hotel and resort rates globally.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .intro-container {
          width: 95%;
          max-width: 100%; /* Adjust to allow full responsiveness */
        }

        .company-name {
          animation: fadeInScale 1s ease-in-out;
        }

        .company-description {
          margin-top: 8px;
          animation: fadeIn 1.2s ease-in-out;
        }

        .text-primary {
          color: #4a90e2; /* Primary color */
        }

        .text-secondary {
          color: #333333; /* Darker text color */
        }

        .text-body {
          color: #666666; /* Body text color */
        }

        .bg-light-gray {
          background-color: #f5f5f5; /* Light gray background */
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;

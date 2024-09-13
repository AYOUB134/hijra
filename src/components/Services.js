import React, { useEffect, useState, useRef } from "react";
import VisaServicesImg from './images/1-Visa-Services (1).jpg';
import TourPackagesImg from './images/2-Tour-Packages.jpg';
import HajjUmrahPackagesImg from './images/6-Hajj-Umrah-Packages.jpg';
import HotelBookingImg from './images/hotel-booking.jpg';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ticketservicesimg from './images/ticketservicesimg.jpeg'
// Custom CSS for animation and styling
const animationStyles = `
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.container {
  perspective: 1000px; /* Adds perspective to the container for 3D effect */
}

.card {
  background-color: #f0f0f0; /* Default background color (gray) */
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  margin: 0;
  height: 400px;
  position: relative;
  transform-style: preserve-3d; /* Ensures 3D transforms */
  transition: transform 0.6s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* Add transition for background-color */
}

.card:hover {
  transform: rotateY(360deg); /* Rotate the card */
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.25);
  background-color: #ffffff; /* Background color on hover (white) */
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the back face of the card */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for readability */
  z-index: 2; /* Ensures the front face is on top */
  transition: transform 0.6s ease;
}

.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hides the front face of the card */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8); /* Slightly transparent background for readability */
  transform: rotateY(180deg); /* Rotate the back face to be hidden initially */
}

.card-title {
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.card-description {
  color: #666;
  margin-bottom: 20px;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-button {
  background-color: #4a90e2; /* Primary Color */
  color: #ffffff;
  border-radius: 8px;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: pulse 1.5s infinite;
}

.card-button:hover {
  background-color: #357abd; /* Darker shade of primary color */
  transform: scale(1.05);
}
`;

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <style>{animationStyles}</style>
      <section id="services" className="py-16 bg-light-gray">
        <div className="max-w-5xl mx-auto px-4 container">
          <h2 className="text-4xl font-bold text-center text-dark-gray mb-12 animate-fade-in">
            Our Services
          </h2>
          <div
            ref={ref}
            className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-4"
          >
            {/* Visa Services Card */}
            <div className="card">
              <div className="card-content">
                <img
                  src={VisaServicesImg}
                  alt="Visa Services"
                  className="h-20 w-20 mb-4 mx-auto object-cover"
                />
                <h3 className="card-title">Visa Services</h3>
                <p className="card-description">
                  Explore visa services for countries including Dubai, Malaysia, Indonesia, Azerbaijan, Egypt, Iran, and more.
                </p>
                <Link to="/visa-services" className="card-button">
                  View All Services
                </Link>
              </div>
              <div className="card-back">
                <h3 className="card-title">More Details</h3>
                <p className="card-description">
                  Additional information about our Visa services can be found here.
                </p>
                <button className="card-button">
                  Learn More
                </button>
              </div>
            </div>

            {/* Tour Packages Card */}
            <div className="card">
              <div className="card-content">
                <img
                  src={TourPackagesImg}
                  alt="Tour Packages"
                  className="h-16 w-16 mb-4 mx-auto object-cover"
                />
                <h3 className="card-title">Tour Packages</h3>
                <p className="card-description">
                  Discover our exclusive tour packages designed for unforgettable experiences. From city explorations to serene retreats, find your ideal adventure.
                </p>
                <Link to="/tour-services" className="card-button">
                  View All Services
                </Link>
              </div>
              <div className="card-back">
                <h3 className="card-title">More Details</h3>
                <p className="card-description">
                  Additional information about our Tour Packages can be found here.
                </p>
                <button className="card-button">
                  Learn More
                </button>
              </div>
            </div>

            {/* Combined Hajj and Umrah Services Card */}
            <div className="card">
              <div className="card-content">
                <img
                  src={HajjUmrahPackagesImg}
                  alt="Hajj & Umrah Packages"
                  className="h-16 w-16 mb-4 mx-auto object-cover"
                />
                <h3 className="card-title">Hajj & Umrah</h3>
                <p className="card-description">
                  Comprehensive packages for both Hajj and Umrah to ensure a spiritually fulfilling journey. We handle everything from travel arrangements to guidance.
                </p>
                <Link to="/hajjumrah-services" className="card-button">
                  View All Services
                </Link>
              </div>
              <div className="card-back">
                <h3 className="card-title">More Details</h3>
                <p className="card-description">
                  Additional information about our Hajj & Umrah services can be found here.
                </p>
                <button className="card-button">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hotel Booking Card */}
            <div className="card">
              <div className="card-content">
                <img
                  src={HotelBookingImg}
                  alt="Hotel Booking"
                  className="h-16 w-16 mb-4 mx-auto object-cover"
                />
                <h3 className="card-title">Hotel Booking</h3>
                <p className="card-description">
                  Book your stay with our comprehensive hotel booking services. Find the best deals and secure your accommodations effortlessly.
                </p>
                <Link to="/hotrelbooking-services" className="card-button">
                  View All Services
                </Link>

              </div>
              <div className="card-back">
                <h3 className="card-title">More Details</h3>
                <p className="card-description">
                  Additional information about our Hotel Booking services can be found here.
                </p>
                <Link to="/hotrelbooking-services" className="card-button">
                  View All Services
                </Link>
              </div>
            </div>




            {/* Combined Ticket Booking Services Card */}
<div className="card">
  <div className="card-content">
    <img
      src={ticketservicesimg} // Replace with the actual path to your image
      alt="Ticket Booking Services"
      className="h-16 w-16 mb-4 mx-auto object-cover"
    />
    <h3 className="card-title">Ticket Booking</h3>
    <p className="card-description">
      Book tickets for a wide range of international and domestic destinations. Choose from economy, business, or first-class options tailored to your needs.
    </p>
    <Link to="/ticket-services" className="card-button">
      View All Services
    </Link>
  </div>

  {/* Back Side */}
  <div className="card-back">
    <h3 className="card-title">More Details</h3>
    <p className="card-description">
      Find additional details about our ticket booking services, including exclusive offers and discounts.
    </p>
    <button className="card-button">
      Learn More
    </button>
  </div>
</div>





          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

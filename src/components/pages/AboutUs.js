import React from 'react';
import aboutusimg from '../images/aboutimg.jpeg'; // Make sure the image is in the correct path
import Nav from '../Nav';
import Footer from '../Footer';

const AboutUs = () => {
  return (
<>


  <Nav></Nav>
<section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Left: Image Section */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src={aboutusimg}
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover h-96"
          />
        </div>

        {/* Right: Text Section */}
        <div className="lg:w-1/2 w-full lg:pl-8">
          <h2 className="text-4xl font-bold text-dark-gray mb-6">
            About <span className="text-blue-500">Hijra Insight</span>
          </h2>
          <p className="text-secondary company-description mb-6">
            We are a full-service travel agency in Lahore and Karachi with a dedicated team of highly skilled and experienced professionals to assist our clients with their goals and desired journeys around the world. At Bliss Travels & Tours, we strive to provide outstanding service to all our customers.
          </p>

          <div className="mt-4">
            <p className="text-body mb-6">
              Whether you're looking for visa consultancy, air tickets, travel insurance, adventure packages, or even a cruise ride, we're ready to serve you with market-competitive rates. Our goal is to make every customer feel blissful as they travel with us, so <span className="italic font-semibold">"You Can Buy Yourself The Freedom"</span> that makes us feel honored.
            </p>

            <p className="text-body mb-6">
              We offer the best travel solutions from a single point of contact. As a prominent player in the global tourism market, we provide a wide range of travel services with top-tier comfort and competitive rates, including flights with the world's best airlines, hotel accommodations, holiday and honeymoon packages, and much more.
            </p>

            <p className="text-body mb-6">
              Established in 2019, Bliss Travels & Tours (Pvt.) Ltd is one of Pakistan’s leading independent travel agencies, serving regular and honorable customers who consider us the best travel agency in Lahore, Pakistan.
            </p>

            <p className="text-body">
              We've developed strong trade relationships with accommodation and hotel wholesalers, airfare consolidators, airlines, and major tour operators worldwide. Our customers benefit from the cheapest air tickets, whether traveling to Australia, Europe, Africa, Asia, or the Middle East. Our vast accommodation network also helps us provide unbeatable hotel and resort rates globally.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
</>
  );
};

export default AboutUs;

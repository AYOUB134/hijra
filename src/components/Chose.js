import React from 'react'; 
import TrustAndSafetyIcon from './images/Trust-and-Safety.png';
import InstantHelpIcon from './images/Instant-Help.png';
import FastBookingIcon from './images/Fast-Booking.png';
import BestPricesIcon from './images/Best-Prices.png';
import BestTravelCompanyIcon from './images/Best-Travel-Company.png';
import TravelAffiliationsImage from './images/Travel-Affilations.jpg';

const features = [
  {
    name: "Best Agents",
    description: "Work with the top agents in the industry.",
    imgSrc: BestTravelCompanyIcon
  },
  {
    name: "Best Prices",
    description: "Get the best deals and offers.",
    imgSrc: BestPricesIcon
  },
  {
    name: "Instant Support",
    description: "Get help whenever you need it.",
    imgSrc: InstantHelpIcon
  },
  {
    name: "Fast Booking",
    description: "Book your services quickly and easily.",
    imgSrc: FastBookingIcon
  },
  {
    name: "Safety & Trust",
    description: "We prioritize your safety and trust.",
    imgSrc: TrustAndSafetyIcon
  },
];

const Choose = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">Why Bliss Travels & Tours?</h2>
      
      {/* Container for feature cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="flex flex-wrap gap-6 justify-center w-full max-w-screen-lg">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] flex-shrink-0">
              <img src={feature.imgSrc} alt={feature.name} className="h-16 w-16 mb-4 object-contain" />
              <h3 className="text-xl font-semibold text-secondary">{feature.name}</h3>
              {/* <p className="mt-2 text-gray-600">{feature.description}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Additional image */}
      <div className="flex justify-center mt-8">
        <img src={TravelAffiliationsImage} alt="Travel Affiliations" className="w-[95%] h-auto object-contain" />
      </div>
    </div>
  );
};

export default Choose;

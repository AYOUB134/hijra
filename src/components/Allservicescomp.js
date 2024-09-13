import React from 'react';

// ServiceCard Component
const ServiceCard = ({ title, items, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-primary-600">{title}</h3>
      
      {/* Loop through items and display details */}
      <ul className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="border-b pb-3">
            <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
            <p className="text-gray-600">{item.details}</p>
          </li>
        ))}
      </ul>

      {/* Button at the bottom of the card */}
      <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};

const AllServices = () => {
  const visaServices = [
    { name: 'Dubai', details: 'Explore visa services for Dubai.' },
    { name: 'Malaysia', details: 'Explore visa services for Malaysia.' },
    { name: 'Indonesia', details: 'Explore visa services for Indonesia.' },
    { name: 'Azerbaijan', details: 'Explore visa services for Azerbaijan.' },
    { name: 'Egypt', details: 'Explore visa services for Egypt.' },
    { name: 'Iran', details: 'Explore visa services for Iran.' },
    { name: 'Turkey', details: 'Explore visa services for Turkey.' },
    { name: 'Thailand', details: 'Explore visa services for Thailand.' },
    { name: 'India', details: 'Explore visa services for India.' },
    { name: 'South Africa', details: 'Explore visa services for South Africa.' },
  ];

  const tourPackages = [
    { name: 'Paris', details: '5 days / 4 nights. $1500 per person. Includes flight, accommodation, and guided tours.' },
    { name: 'New York', details: '4 days / 3 nights. $1200 per person. Includes flight, accommodation, and city tours.' },
    { name: 'Tokyo', details: '7 days / 6 nights. $2000 per person. Includes flight, accommodation, and cultural experiences.' },
    { name: 'Sydney', details: '5 days / 4 nights. $1700 per person. Includes flight, accommodation, and harbor tours.' },
    { name: 'Rome', details: '6 days / 5 nights. $1800 per person. Includes flight, accommodation, and historical tours.' },
  ];

  const hajjUmrahPackages = [
    { name: 'Hajj Package A', details: '10 days. $5000 per person. Includes accommodation, flights, and guides.' },
    { name: 'Hajj Package B', details: '12 days. $5500 per person. Includes premium accommodation, flights, and exclusive guides.' },
    { name: 'Umrah Package A', details: '7 days. $2500 per person. Includes accommodation, flights, and local guides.' },
    { name: 'Umrah Package B', details: '10 days. $3000 per person. Includes premium accommodation, flights, and extended guide services.' },
  ];

  const hotelBooking = [
    { name: 'Hilton', details: 'Luxury hotel with city view. $200 per night. Includes breakfast and Wi-Fi.' },
    { name: 'Marriott', details: 'Comfortable rooms in central location. $150 per night. Includes breakfast and parking.' },
    { name: 'Holiday Inn', details: 'Affordable and family-friendly. $100 per night. Includes breakfast and Wi-Fi.' },
    { name: 'Ritz-Carlton', details: 'Premium stay with top-notch services. $300 per night. Includes all meals and spa access.' },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">Our Services</h2>

        {/* Grid layout for service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Visa Services Card */}
          <ServiceCard
            title="Visa Services"
            items={visaServices}
            buttonText="Learn More"
          />

          {/* Tour Packages Card */}
          <ServiceCard
            title="Tour Packages"
            items={tourPackages}
            buttonText="Learn More"
          />

          {/* Hajj & Umrah Packages Card */}
          <ServiceCard
            title="Hajj & Umrah Packages"
            items={hajjUmrahPackages}
            buttonText="Learn More"
          />

          {/* Hotel Booking Card */}
          <ServiceCard
            title="Hotel Booking"
            items={hotelBooking}
            buttonText="Learn More"
          />
          
        </div>

        {/* View All Services button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="px-8 py-3 bg-secondary-600 text-white rounded-full text-lg font-semibold hover:bg-secondary-700 transition duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default AllServices;

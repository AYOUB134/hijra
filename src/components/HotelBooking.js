import React from 'react';

// Example data for the Hotel Booking packages
const hotelBookingPackages = [
  {
    title: "Luxury Hotel Package - City Center",
    price: "150,000/- per night",
    amenities: "Free WiFi, Breakfast Included, Pool, Gym",
    note: "Rates are subjected to availability",
    imageUrl: "Luxury-Hotel-City-Center-img"
  },
  {
    title: "Standard Hotel Package - Downtown",
    price: "100,000/- per night",
    amenities: "Free WiFi, Breakfast Included",
    note: "Rates are subjected to availability",
    imageUrl: "Standard-Hotel-Downtown-img"
  },
  {
    title: "Budget Hotel Package - Suburbs",
    price: "70,000/- per night",
    amenities: "Free WiFi",
    note: "Rates are subjected to availability",
    imageUrl: "Budget-Hotel-Suburbs-img"
  },
  {
    title: "Executive Suite - High Rise",
    price: "250,000/- per night",
    amenities: "Free WiFi, Breakfast, Executive Lounge Access, Spa",
    note: "Rates are subjected to availability",
    imageUrl: "Executive-Suite-High-Rise-img"
  },
  {
    title: "Deluxe Hotel Package - Ocean View",
    price: "200,000/- per night",
    amenities: "Free WiFi, Breakfast, Ocean View, Pool, Gym",
    note: "Rates are subjected to availability",
    imageUrl: "Deluxe-Hotel-Ocean-View-img"
  },
  {
    title: "Family Hotel Package - Parkside",
    price: "120,000/- per night",
    amenities: "Free WiFi, Breakfast, Children's Playground, Pool",
    note: "Rates are subjected to availability",
    imageUrl: "Family-Hotel-Parkside-img"
  },
  {
    title: "Boutique Hotel Package - Old Town",
    price: "180,000/- per night",
    amenities: "Free WiFi, Breakfast, Cultural Experience, Rooftop Lounge",
    note: "Rates are subjected to availability",
    imageUrl: "Boutique-Hotel-Old-Town-img"
  },
  {
    title: "Business Hotel Package - Financial District",
    price: "220,000/- per night",
    amenities: "Free WiFi, Breakfast, Conference Room, Executive Lounge",
    note: "Rates are subjected to availability",
    imageUrl: "Business-Hotel-Financial-District-img"
  }
];

const HotelBooking = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
          Hotel Booking Packages
        </h2>
        <p className="text-center mb-8">
          Discover our curated selection of hotel booking packages tailored to suit your needs. Whether you're looking for luxury, comfort, or budget-friendly options, we have something for everyone. Browse through our packages to find your ideal stay.
        </p>
        <div className="flex flex-wrap gap-0 justify-between">
          {hotelBookingPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full sm:w-1/2 md:w-1/4 h-auto"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                  {pkg.title}
                </h3>
                <p className="text-md mb-2"><strong>PRICE:</strong> {pkg.price}</p>
                <p className="text-md mb-2"><strong>Amenities:</strong> {pkg.amenities}</p>
                <p className="text-md mb-4"><strong>Note:</strong> {pkg.note}</p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://wa.me/+923339865991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  More Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;

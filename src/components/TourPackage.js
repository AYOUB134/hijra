import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Data for the tour packages
const packages = [
  {
    title: "5 Days Sri Lanka Tour Package",
    price: "USD 240",
    description: "Explore the beauty of Sri Lanka with our exclusive SriLanka tour packages from Pakistan in 2024. Book now for an unforgettable journey filled with culture and scenic wonders.",
    imageUrl: "https://via.placeholder.com/400x250?text=Sri+Lanka"
  },
  {
    title: "5 Days Baku Tour",
    price: "PKR 75,000",
    description: "Discover the allure of Baku with our tailored Baku tour packages from Pakistan 2024. Your seamless adventure to Baku begins here—book your escape now!",
    imageUrl: "https://via.placeholder.com/400x250?text=Baku"
  },
  {
    title: "5 Days Malaysia Tour",
    price: "PKR 80,000",
    description: "Explore Malaysia effortlessly with our exclusive Malaysia tour packages from Pakistan 2024. Discover breathtaking landscapes and create unforgettable memories.",
    imageUrl: "https://via.placeholder.com/400x250?text=Malaysia"
  },
  {
    title: "5 Days Thailand Tour",
    price: "PKR 90,000",
    description: "Explore the wonders of Thailand with Dtravel's exclusive Thailand tour packages from Pakistan 2024. Seamless travel experiences await—book your adventure now!",
    imageUrl: "https://via.placeholder.com/400x250?text=Thailand"
  },
  {
    title: "5 Days Dubai Tour",
    price: "PKR 120,000",
    description: "Immerse yourself in Dubai's charm with our exclusive Dubai tour packages from Pakistan in 2024. Your extraordinary adventure begins—book with Dtravel today!",
    imageUrl: "https://via.placeholder.com/400x250?text=Dubai"
  },
  {
    title: "5 Days Turkey Tour",
    price: "PKR 88,500",
    description: "Start a magical journey with our Turkey tour packages from Pakistan in 2024. Experience the beauty of Turkey—book your tour with Dtravel now!",
    imageUrl: "https://via.placeholder.com/400x250?text=Turkey"
  },
  {
    title: "5 Days Egypt Tour",
    price: "PKR 105,000",
    description: "Start an enchanting journey with our Egypt tour packages from Pakistan in 2024. Discover ancient wonders and create memories that last a lifetime with Dtravel.",
    imageUrl: "https://via.placeholder.com/400x250?text=Egypt"
  },
  {
    title: "7 Days Mauritius Tour",
    price: "PKR 279,000",
    description: "Start on an unforgettable journey with our Mauritius tour packages from Pakistan in 2024. Discover pristine beaches and cultural wonders. Book your dream vacation now.",
    imageUrl: "https://via.placeholder.com/400x250?text=Mauritius"
  },
  {
    title: "7 Days South Africa Tour",
    price: "PKR 279,000",
    description: "Plan your dream getaway with our South Africa tour packages from Pakistan in 2024. Explore diverse landscapes and create lasting memories. Book now!",
    imageUrl: "https://via.placeholder.com/400x250?text=South+Africa"
  }
];

const TourPackage = () => {
    return (
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
            International Travel & Tour Packages From Pakistan
          </h2>
          <p className="text-center mb-8">
            We offer a range of international travel and tour packages designed to fit your every need. Whether you're seeking adventure or relaxation, we provide comprehensive solutions to make your dreams come true. Our travel experts are here to ensure that you have an unforgettable experience.
          </p>
          <div className="flex flex-wrap justify-between gap-4">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full sm:w-1/2 md:w-1/4 h-auto">
                <div className="flex-grow">
                  <img src={pkg.imageUrl} alt={pkg.title} className="mb-4 w-full h-48 object-cover rounded-lg"/>
                  <h3 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {pkg.title}
                  </h3>
                  <p className="text-md mb-2"><strong>PRICE:</strong> {pkg.price}</p>
                  <p className="text-md mb-4">{pkg.description}</p>
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
  
  export default TourPackage;

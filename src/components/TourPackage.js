import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Data for the tour packages
const packages = [
  {
    title: "United Kingdom Tour Package",
    price: "495,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=UK+Tour"
  },
  {
    title: "United States of America Tour Package",
    price: "680,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=USA+Tour"
  },

  {
    title: "Trio Schengen Tour Package III",
    price: "520,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Schengen+III"
  },
  {
    title: "Trio Schengen Tour Package II",
    price: "585,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Schengen+II"
  },
  {
    title: "Trio Schengen Tour Package I",
    price: "480,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Schengen+I"
  },
  {
    title: "South Africa Tour Package",
    price: "270,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=South+Africa"
  },
  {
    title: "Elegant Canada Tour Package II",
    price: "675,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Canada+II"
  },
  {
    title: "Thailand & Singapore Trip Package",
    price: "230,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Thailand+Singapore"
  },
  {
    title: "Maldives & Sri Lanka Trip Package",
    price: "200,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Maldives+Sri+Lanka"
  },
  {
    title: "Kazakhstan & Turkey Package",
    price: "330,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Kazakhstan+Turkey"
  },
  {
    title: "Far East Travel Package",
    price: "335,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Far+East"
  },
  {
    title: "Doha & Dubai Travel Package",
    price: "250,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Doha+Dubai"
  },
  {
    title: "Japan Tour Package",
    price: "320,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Japan"
  },
  {
    title: "Australia Tour Package",
    price: "550,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Australia"
  },
  {
    title: "Brazil Tour Package",
    price: "450,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Brazil"
  },
  {
    title: "Egypt Tour Package",
    price: "300,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Egypt"
  },
  {
    title: "New Zealand Tour Package",
    price: "620,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=New+Zealand"
  },
  {
    title: "Turkey Tour Package",
    price: "275,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Turkey"
  },
  {
    title: "South Korea Tour Package",
    price: "290,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=South+Korea"
  },
  {
    title: "Singapore Tour Package",
    price: "310,000/- per person",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Not Included",
    note: "Rates are subjected to availability",
    imageUrl: "https://via.placeholder.com/400x250?text=Singapore"
  }
];


const TourPackage = () => {
    return (
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
            International Travel & Tour Packages From Lahore
          </h2>
          <p className="text-center mb-8">
            We offer a range of international travel and tour packages designed to fit your every need. Whether you're seeking adventure or relaxation, we provide comprehensive solutions to make your dreams come true. Our travel experts are here to ensure that you have an unforgettable experience, from the deserts to the seas, and everywhere in between. Explore our packages to find your next great adventure.
          </p>
          <div className="flex flex-wrap justify-between gap-0">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full sm:w-1/2 md:w-1/4 h-auto">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    {pkg.title}
                  </h3>
                  <p className="text-md mb-2"><strong>PRICE:</strong> {pkg.price}</p>
                  <p className="text-md mb-2"><strong>Visa:</strong> {pkg.visa}</p>
                  <p className="text-md mb-2"><strong>Air Ticket:</strong> {pkg.airTicket}</p>
                  <p className="text-md mb-2"><strong>Insurance:</strong> {pkg.insurance}</p>
                  <p className="text-md mb-4"><strong>Note:</strong> {pkg.note}</p>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://wa.me/+923005959681"
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
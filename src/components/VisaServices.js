import React from 'react';
import visaImage from './images/best-visa-filling-travel-service.png'; // Image for the form

// VisaServices Component
const VisaServices = () => {
  const countries = [
    { name: 'United Kingdom', details: 'Visa Complete File', price: '65,999/- PKR' },
    { name: 'Canada', details: 'Visa Complete File', price: '65,999/- PKR' },
    { name: 'USA', details: 'Visa Complete File', price: '65,999/- PKR' },
    { name: 'Turkey', details: 'Tourist Visa File (Covid-19 Health Insurance)', price: '9,999/- PKR' },
    { name: 'Spain', details: 'Visa Complete File', price: '49,999/- PKR' },
    { name: 'Australia', details: 'Visa Complete File', price: '74,999/- PKR' },
    { name: 'Egypt', details: 'Visa', price: '23,500/- PKR' },
    { name: 'Brazil', details: 'Visa Complete File', price: '44,000/- PKR' },
    { name: 'Ukraine', details: 'Visa Complete File', price: '63,000/- PKR' },
    { name: 'Morocco', details: 'Visit Visa Complete File', price: '35,500/- PKR' },
    { name: 'China Business Visa', details: 'Fresh Visa 151,700/- PKR, Repeat Visa 106,700/- PKR' },
    { name: 'Ireland', details: 'Visa Complete File', price: '55,500/- PKR' },
    { name: 'South Africa', details: 'Visa Complete File', price: '45,500/- PKR' },
    { name: 'Eastern African Three Countries Visas (Kenya, Uganda & Rwanda)', details: '', price: '25,000/- PKR' },
    { name: 'Far East Two Countries Visas (Malaysia & Thailand)', details: '(Covid-19 Ban)', price: '23,500/- PKR' },
    { name: 'Far East Three Countries Visas (Malaysia, Thailand & Singapore)', details: '(Covid-19 Ban)', price: '33,500/- PKR' },
    { name: 'Far East Four Countries Visas (Malaysia, Thailand, Singapore & Indonesia)', details: '(Covid-19 Ban)', price: '51,000/- PKR' },
    { name: 'Far East 5 Countries Visa (Malaysia, Thailand, Singapore, Indonesia & Sri Lanka)', details: '(Covid-19 Ban)', price: '56,500/- PKR' },
    { name: 'Far East 6 Countries Visa (Malaysia, Thailand, Singapore, Indonesia, Sri Lanka & Cambodia)', details: '(Covid-19 Ban)', price: '65,500/- PKR' },
    { name: 'Hong Kong', details: 'Visa Complete File (Covid-19 Ban)', price: '38,500/- PKR' },
    { name: 'Schengen', details: 'Visa Complete File (Covid-19 Ban)', price: '55,999/- PKR' },
    { name: 'Argentina', details: 'Visa Complete File (Covid-19 Ban)', price: '48,800/- PKR' },
    { name: 'New Zealand', details: 'Visa Complete File', price: '74,999/- PKR' },
    { name: 'Ethiopia', details: 'E-Visa', price: '25,000/- PKR' },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Best Visa Consultant in Lahore, Pakistan</h2>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          We provide proper visa services and consultancy for the below-mentioned countries. We have updated information about the documentation, processes, requirements, and the rules of visa embassies. We are the one-stop visa agent company that will help you to fly to your desired destination.
        </p>

        {/* Contact Form Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src={visaImage} alt="Visa Services" className="w-full md:w-1/2 h-auto rounded-lg" />
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">Get in Touch with the Best Visa Consultant</h3>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your message here..."
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Country List Section */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-12">Providing Visa Consultancy Services For Below Countries</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h4 className="text-lg font-semibold text-gray-900">{country.name}</h4>
              <p className="text-gray-600 mt-2">{country.details}</p>
              <p className="text-blue-600 font-bold mt-2">{country.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaServices;

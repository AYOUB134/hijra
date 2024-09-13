import React from 'react';
import contactusimg from '../images/contactus.jpeg'; // Ensure the image path is correct
import Nav from '../Nav';
import Footer from '../Footer';

const ContactUs = () => {
  return (
    <>
      <Nav />

      {/* Contact Section */}
      <section className="py-16 bg-light-gray">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
            Contact Us
          </h2>

          {/* Flexbox for Image and Form */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
            
            {/* Left: Contact Us Image */}
            <div className="lg:w-1/2 w-full animate-slide-left">
              <img
                src={contactusimg}
                alt="Contact Us"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg animate-slide-right">
              <h3 className="text-2xl font-bold text-dark-gray mb-6">
                Get In Touch
              </h3>
              <form className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows="5"
                    placeholder="Write your message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Location Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-dark-gray mb-8">
              Our Location
            </h3>

            {/* Location Content */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
              <div className="mt-6">
                <iframe
                  src="https://maps.google.com/maps?q=Office%20%238-9%20Ground%20Floor,%20Zarcon%20Plaza%20Bank%20Road%20Saddar%20Rawalpindi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;

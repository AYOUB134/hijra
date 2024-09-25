import React from 'react';

// Example data for the ticket booking options
const ticketOptions = [
  {
    destination: "Lahore to Dubai",
    price: "45,000/- per person",
    departureDate: "2024-10-05",
    returnDate: "2024-10-20",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Lahore-to-Dubai-img"
  },
  {
    destination: "Karachi to London",
    price: "95,000/- per person",
    departureDate: "2024-11-10",
    returnDate: "2024-11-25",
    class: "Business",
    note: "Subject to availability",
    imageUrl: "Karachi-to-London-img"
  },
  {
    destination: "Islamabad to New York",
    price: "150,000/- per person",
    departureDate: "2024-12-01",
    returnDate: "2024-12-15",
    class: "First Class",
    note: "Subject to availability",
    imageUrl: "Islamabad-to-NewYork-img"
  },
  {
    destination: "Lahore to Jeddah",
    price: "60,000/- per person",
    departureDate: "2024-09-20",
    returnDate: "2024-10-05",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Lahore-to-Jeddah-img"
  },
  {
    destination: "Karachi to Dubai",
    price: "60,000/- per person",
    departureDate: "2024-09-15",
    returnDate: "2024-09-30",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Karachi-to-Dubai-img"
  },
  {
    destination: "Islamabad to Istanbul",
    price: "85,000/- per person",
    departureDate: "2024-10-01",
    returnDate: "2024-10-14",
    class: "Business",
    note: "Subject to availability",
    imageUrl: "Islamabad-to-Istanbul-img"
  },
  {
    destination: "Lahore to Kuala Lumpur",
    price: "70,000/- per person",
    departureDate: "2024-11-01",
    returnDate: "2024-11-10",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Lahore-to-KualaLumpur-img"
  },
  {
    destination: "Peshawar to Riyadh",
    price: "55,000/- per person",
    departureDate: "2024-12-01",
    returnDate: "2024-12-20",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Peshawar-to-Riyadh-img"
  },
  {
    destination: "Lahore to Singapore",
    price: "75,000/- per person",
    departureDate: "2024-10-10",
    returnDate: "2024-10-25",
    class: "Business",
    note: "Subject to availability",
    imageUrl: "Lahore-to-Singapore-img"
  },
  {
    destination: "Islamabad to Doha",
    price: "65,000/- per person",
    departureDate: "2024-11-05",
    returnDate: "2024-11-20",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Islamabad-to-Doha-img"
  },
  {
    destination: "Karachi to Paris",
    price: "100,000/- per person",
    departureDate: "2024-10-15",
    returnDate: "2024-10-30",
    class: "Business",
    note: "Subject to availability",
    imageUrl: "Karachi-to-Paris-img"
  },
  {
    destination: "Lahore to Bangkok",
    price: "80,000/- per person",
    departureDate: "2024-12-10",
    returnDate: "2024-12-25",
    class: "Economy",
    note: "Subject to availability",
    imageUrl: "Lahore-to-Bangkok-img"
  }
];

const Tickets = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
          Ticket Booking Packages
        </h2>
        <p className="text-center mb-8">
          Browse through our range of flight ticket packages for popular international and domestic destinations. Whether you're planning a business trip or a vacation, we offer competitive prices and various seat classes to suit your needs.
        </p>
        <div className="flex flex-wrap gap-0 justify-between">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full sm:w-1/2 md:w-1/4 h-auto"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
                  {ticket.destination}
                </h3>
                <p className="text-md mb-2"><strong>PRICE:</strong> {ticket.price}</p>
                <p className="text-md mb-2"><strong>Departure Date:</strong> {ticket.departureDate}</p>
                <p className="text-md mb-2"><strong>Return Date:</strong> {ticket.returnDate}</p>
                <p className="text-md mb-2"><strong>Class:</strong> {ticket.class}</p>
                <p className="text-md mb-4"><strong>Note:</strong> {ticket.note}</p>
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

export default Tickets;

import React from 'react';

// Example data for the Hajj and Umrah packages
const hajjUmmrahPackages = [
  {
    title: "Economy Plus Umrah Packages Sharing Basis",
    details: [
      { nights: 14, price: "110,000/-" },
      { nights: 20, price: "125,000/-" },
      { nights: 28, price: "145,000/-" }
    ],
    imageUrl: "Economy-Plus-Umrah-Packages-Sharing-Basis-min"
  },
  {
    title: "Economy Plus Umrah Packages Double Sharing",
    details: [
      { nights: 14, price: "155,000/-" },
      { nights: 20, price: "190,000/-" },
      { nights: 28, price: "245,000/-" }
    ],
    imageUrl: "Economy-Plus-Umrah-Packages-Double-Sharing-min"
  },
  {
    title: "Economy Plus Umrah Packages Triple Sharing",
    details: [
      { nights: 14, price: "130,000/-" },
      { nights: 20, price: "150,000/-" },
      { nights: 28, price: "180,000/-" }
    ],
    imageUrl: "Economy-Plus-Umrah-Packages-Triple-Sharing-min"
  },
  {
    title: "5 Star Umrah Plus Baku Package 1",
    price: "329,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-Baku-Package-1-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Dubai Package 1",
    price: "359,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Dubai-Package-1-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Turkey Package 1",
    price: "379,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Turkey-Package-1-img"
  },
  {
    title: "5 Star Umrah Plus Baku Package 2",
    price: "399,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-Baku-Package-2-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Dubai Package 2",
    price: "429,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Dubai-Package-2-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Turkey Package 2",
    price: "444,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Turkey-Package-2-img"
  },
  {
    title: "5 Star Umrah Plus Baku Package 3",
    price: "479,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-Baku-Package-3-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Dubai Package 3",
    price: "499,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Dubai-Package-3-img"
  },
  {
    title: "5 Star Umrah Plus 4 Star Turkey Package 3",
    price: "514,999/-",
    visa: "Included",
    airTicket: "Not Included",
    insurance: "Included",
    note: "Rates are subjected to availability",
    imageUrl: "5-Star-Umrah-Plus-4-Star-Turkey-Package-3-img"
  }
];

const HajjUmmrah = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark-gray mb-12">
          Hajj & Umrah Packages
        </h2>
        <p className="text-center mb-8">
          Explore our range of Hajj and Umrah packages designed to cater to different preferences and budgets. Whether you're looking for sharing basis or luxury options, we offer comprehensive packages to ensure your pilgrimage experience is fulfilling and comfortable. Find the perfect package for your spiritual journey below.
        </p>
        <div className="flex flex-wrap gap-0 justify-between">
          {hajjUmmrahPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full sm:w-1/2 md:w-1/4 h-auto"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
                  {pkg.title}
                </h3>
                {pkg.details ? (
                  <div className="mb-4">
                    {pkg.details.map((detail, i) => (
                      <p key={i} className="text-md mb-2">
                        {detail.nights} Nights: PKR {detail.price}
                      </p>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="text-md mb-2"><strong>PRICE:</strong> {pkg.price}</p>
                    <p className="text-md mb-2"><strong>Visa:</strong> {pkg.visa}</p>
                    <p className="text-md mb-2"><strong>Air Ticket:</strong> {pkg.airTicket}</p>
                    <p className="text-md mb-2"><strong>Insurance:</strong> {pkg.insurance}</p>
                    <p className="text-md mb-4"><strong>Note:</strong> {pkg.note}</p>
                  </>
                )}
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

export default HajjUmmrah;

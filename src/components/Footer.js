import React from 'react';
import TravelCertificationsImage from './images/Travel-Certifications.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* First Section: Contact Details */}
        <div className="p-6 flex flex-col justify-between rounded-lg">
          <h3 className="text-xl font-bold mb-4">Contact Details:</h3>
          <p className="mb-2 text-sm">
          <strong>Chief Exective:</strong>Haji M.Nasruallah Jan<br />
          <strong>Acounnts Deparment:</strong>+92-3339662093<br />
          <strong>Sales Officer:</strong>+92-3339023191 <br />
            <strong>WhatsApp:</strong>+92-3339865991<br />
            <strong>Email:</strong> <a href="mailto:hijrahinsight@outlook.com" className="text-blue-400 hover:underline">hijrahinsight@outlook.com</a>
          </p>
          <p className="mb-2 text-sm">
            <strong>Office:</strong><br />
            8-9 Ground Floor, Zarcon Plaza Bank Road, Saddar Rawalpindi.
          </p>
          <p className="text-sm">
            <a href="https://www.hijrahinsight.com.pk" className="text-blue-400 hover:underline">www.hijrahinsight.com.pk</a>
          </p>
        </div>

        {/* Second Section: Image */}
        <div className="p-6 flex items-center justify-center rounded-lg">
          <img src={TravelCertificationsImage} alt="Travel Certifications" className="w-full h-auto object-contain" />
        </div>

        {/* Third Section: Bank Details */}
        <div className="p-6 flex flex-col justify-between rounded-lg">
          <h3 className="text-xl font-bold mb-4">Bank Details:</h3>
          <p className="mb-4 text-sm">
            <strong>The Bank of Punjab</strong><br />
            <strong>Title:</strong> Hijrah Insight Travel and Tours<br />
            <strong>Branch Code:</strong> 0120<br />
            <strong>Account #:</strong> 6020316853700018<br />
            <strong>IBAN:</strong> PK24BPUN6020316853700018
          </p>
          <p className="mb-4 text-sm">
            <strong>Meezan Bank</strong><br />
            <strong>Title:</strong> Muhammad Nasrullah Jan<br />
            <strong>Branch Code:</strong> 0805<br />
            <strong>Account #:</strong> 0110434965<br />
            <strong>IBAN:</strong> PK53MEZA00008050110434965
          </p>
          <p className="mb-4 text-sm">
            <strong>JS Bank</strong><br />
            <strong>Title:</strong> Hijrah Insight Travel and Tours<br />
            <strong>Branch Code:</strong> 9562<br />
            <strong>Account #:</strong> 0002563311<br />
            <strong>IBAN:</strong> PK82JSBL9552000002563311
          </p>
          <p className="text-sm">
            <strong>HabibMetro Bank</strong><br />
            <strong>Title:</strong> Hijrah Insight Travel and Tours<br />
            <strong>Branch Code:</strong> 0653<br />
            <strong>Account #:</strong> 406532031714106507<br />
            <strong>IBAN:</strong> PK39MPBL0653067140106507
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

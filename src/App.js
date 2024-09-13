import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import AllServices from './components/pages/AllServices'; // Import All Services page component
import ContactUs from './components/pages/ContactUs'; // Import Contact Us page component
import AboutUs from './components/pages/AboutUs'; // Import About Us page component
import VisaServicesPage from './components/pages/VisaServicesPage';
import TourServicesPage from './components/pages/TourServicesPage.js';
import HajjUmmrahPage from './components/pages/HajjUmmrahPage.js';
import HotelBookingPage from './components/pages/HotelBookingpage.js';
import TicketsPage from './components/pages/TicketsPage.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/visa-services" element={<VisaServicesPage />} />
        <Route path="/tour-services" element={<TourServicesPage />} />
        <Route path="/hajjumrah-services" element={<HajjUmmrahPage />} />
        <Route path="/hotrelbooking-services" element={<HotelBookingPage />} />
        <Route path="/ticket-services" element={<TicketsPage />} />



     
      </Routes>
    </Router>
  );
}

export default App;

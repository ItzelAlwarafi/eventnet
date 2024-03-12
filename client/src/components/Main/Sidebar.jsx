import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  //Toggle sidebar visibility
  const [isOpen, setIsOpen] = useState(true);

  // The Function to toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul>
        {/* Example menu items */}
        <Link to="locations" className="Side-link">Locations</Link>
        <Link to="type" className="Side-link">Type of space</Link>
        <Link to="/venues/:id/booking" className="Side-link">Booking a Venue</Link>
        <Link to="/venues/:id" className="Side-link">Venue</Link>
        <Link to="register" className="Side-link">Register</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
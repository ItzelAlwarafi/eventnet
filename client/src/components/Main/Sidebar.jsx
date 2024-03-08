import React, { useState } from 'react';


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
        <li><a href="#AddVenue">Add a Venue</a></li>
        <li><a href="#Types">Type of space</a></li>
        <li><a href="#Location">Which City would you like to have your event?</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
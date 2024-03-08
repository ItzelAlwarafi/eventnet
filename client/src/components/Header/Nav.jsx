// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from '../globals';
import { useEffect, useState } from 'react';
    
const Nav = () => {

  
  return (
    <nav className="navbar">        
      <div className='navLinks'>
        {/* Links to navigate to different routes */}
        <Link to={`/locations/${Location}`} className='nav-link' onClick={window.location.reload}>Locations</Link>
        <Link to="/type" className="nav-link">Types of space</Link>
        
      </div>
    </nav>
  )
}
    
export default Nav;
// Import the Link component from react-router-dom
import { Link } from 'react-router-dom'
    
const Nav = () => {

  
  return (
    <nav className="navbar">        
      <div className='navLinks'>
        {/* Links to navigate to different routes */}
        <Link to="locations" className="nav-link">Locations</Link>
        <Link to="type" className="nav-link">Types of space</Link>
        <Link to="register" className="nav-link">Register</Link>
        
      </div>
    </nav>
  )
}
    
export default Nav;
import { Link } from 'react-router-dom'

const Sidebar = ({toggleNavBar}) => {

  return (
  <div className="sidenav">
      <ul>
        <Link to="/locations" className="Side-link" onClick={toggleNavBar}>Locations</Link>
        <Link to="/types" className="Side-link" onClick={toggleNavBar}>Type of space</Link>
        <Link to="/register" className="Side-link" onClick={toggleNavBar}>Sign up</Link>
      </ul>
    </div>
  )
}

export default Sidebar
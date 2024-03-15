import { Link } from 'react-router-dom'

const Sidebar = ({toggleNavBar}) => {



  return (
  <div className="sidenav">
      <div className="sidenav-header">
        <a className="sidenav-header-placeholder">O</a>
        <div className="sidenav-title">Venyou</div>
        <a href="#" className="sidenav-closebtn" onClick={toggleNavBar}>&times;</a>
      </div>
      <div className="sidenav-links">
        <Link to="/locations" className="Side-link" onClick={toggleNavBar}>Locations</Link>
        <Link to="/types" className="Side-link" onClick={toggleNavBar}>Type of space</Link>
        <Link to="/register" className="Side-link" onClick={toggleNavBar}>Sign up</Link>
      </div>
    </div>
  )
}

export default Sidebar
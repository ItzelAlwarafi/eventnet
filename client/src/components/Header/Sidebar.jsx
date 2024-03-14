import { Link } from 'react-router-dom'

const Sidebar = ({toggleNavBar}) => {

  function openMenu() {
    document.getElementById("sideMenu").style.width = "75%";
  }
  function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
  }

  return (
  <div className="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeMenu()">&times;</a>
      <div className="sidenav-links">
        <Link to="/locations" className="Side-link" onClick={toggleNavBar}>Locations</Link>
        <Link to="/types" className="Side-link" onClick={toggleNavBar}>Type of space</Link>
        <Link to="/register" className="Side-link" onClick={toggleNavBar}>Sign up</Link>
      </div>
    </div>
  )
}

export default Sidebar
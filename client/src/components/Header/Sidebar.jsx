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
      <div className="sidenav-header">
        <a className="sidenav-header-placeholder">O</a>
        <div className="sidenav-title">Venyou</div>
        <a href="javascript:void(0)" class="sidenav-closebtn" onclick="closeMenu()">&times;</a>
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
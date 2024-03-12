import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
  <div>
      <ul>
        <Link to="/locations" className="Side-link">Locations</Link>
        <Link to="/types" className="Side-link">Type of space</Link>
        <Link to="/register" className="Side-link">Sign up</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
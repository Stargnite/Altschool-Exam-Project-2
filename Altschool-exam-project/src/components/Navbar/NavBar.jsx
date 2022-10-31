import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          Sobayo <span>Tobiloba</span>
        </Link>
      </div>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="./Counter" className="link">
          Counter
        </Link>
      </nav>
      {/* <div className="nav-icon">
	  <FontAwesomeIcon icon="fa-solid fa-bars" />
	  </div> */}
    </div>
  );
};

export default Navbar;

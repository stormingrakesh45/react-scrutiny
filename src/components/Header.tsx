import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>ReactSite</h2>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-btn">
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

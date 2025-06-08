import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="index.html">
          <img src="img/logo/sps kc png.png" alt="" />
        </a>
      </div>
      <div className="menu-icon" id="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="nav-links" id="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li className="dropdown">
          <button className="dropbtn">
            <a>Office Bearers</a>
            <span className="arrow">&#9662;</span>
          </button>
          <div className="dropdown-content">
            <Link to="/team">Present Office Bearers</Link>
            <Link to="/execom-24">Office Bearers 2024</Link>
            <Link to="/execom-23">Office Bearers 2023</Link>
          </div>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
      </ul>
    </nav>
  );
}

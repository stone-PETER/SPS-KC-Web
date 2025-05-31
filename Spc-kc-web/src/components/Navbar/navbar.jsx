import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <nav className="navbar">
        <div className="logo">
          {" "}
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
            <a href="/team">Present Office Bearers</a>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <a href="/#about">Awards</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

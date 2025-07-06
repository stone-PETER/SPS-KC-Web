import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    if (menuIcon && navLinks) {
      menuIcon.onclick = () => {
        navLinks.style.display =
          navLinks.style.display === "flex" ? "" : "flex";
      };
    }
    // Cleanup
    return () => {
      if (menuIcon) menuIcon.onclick = null;
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="/img/logo/sps kc png.png" alt="logo" />
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
            <Link to="/execom-22">Office Bearers 2022</Link>
            <Link to="/execom-21">Office Bearers 2021</Link>
          </div>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/sbc">SBC</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
      </ul>
    </nav>
  );
}

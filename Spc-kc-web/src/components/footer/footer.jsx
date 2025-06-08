import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contacts">
          <div className="col">
            <img src="img/logo/sps kc png.png" alt="" />
          </div>
            <ul className="main-links">
              <li><a href="/">Home</a> </li>
                <li><a href="/#about">About</a> </li>
                <li><Link to="/events">Events</Link> </li>
            </ul>
            <ul className="other-links">
                <li style={{ fontWeight: 400 }}>Other Links</li>
                <li><a href="https://www.ieee.org/">IEEE</a></li>
                <li><a href="https://signalprocessingsociety.org/">Signal Processing Society</a></li>
            </ul>
        </div>
        <div className="main-footer">
            <p>&copy; {new Date().getFullYear()} IEEE SPS Kerala Chapter. All rights reserved.</p>
            <p>Designed and Developed by <a href="https://yourwebsite.com">Sps KC Web Team</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

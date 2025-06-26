import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contacts">
          <div className="col">
            <img src="img/logo/sps kc png.png" alt="" />
            <div className="icons flex gap-4">
  <a href="https://www.facebook.com/ieeespskerala/about/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
  </a>
  <a href="https://www.instagram.com/ieeespskerala/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
  </a>
  <a href="https://www.linkedin.com/company/ieee-sps-kerala-chapter/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
  </a>
</div>

          </div>
            <ul className="main-links">
              <li style={{ fontWeight: 400, marginBottom: 20 }}>Company</li>
              <li><a href="/">Home</a> </li>
                <li><a href="/#about">About</a> </li>
                <li><Link to="/events">Events</Link> </li>
            </ul>
            <ul className="other-links">
                <li style={{ fontWeight: 400, marginBottom: 20 }}>Other Links</li>
                <li><a href="https://www.ieee.org/">IEEE</a></li>
                <li><a href="https://signalprocessingsociety.org/">Signal Processing Society</a></li>
                <li><a href="https://ieeekerala.org/">IEEE Kerala Section</a></li>
            </ul>
            <ul className="contact">
              <li style={{ fontWeight: 400, marginBottom: 20 }}>Company</li>
              <li>ieeespskerala@gmail.com</li>
              <li>+91 80756 13378</li>
              <li><p>HarmonIEEE, 1st Floor,<br />Cherian’s Square,<br /> Ambujavilasam Rd, PB77, GPO,<br />Thiruvananthapuram,<br /> Kerala 695001</p></li>
              <li></li>
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

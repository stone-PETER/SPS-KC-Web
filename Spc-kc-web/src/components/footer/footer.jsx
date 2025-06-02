import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contacts">
          <div className="col">
            <img src="img/logo/sps kc png.png" alt="" />
          </div>
            <ul className="main-links">
              <li>Home </li>
                <li>About </li>
                <li>Conatct </li>
                <li>Events </li>
            </ul>
            <ul className="other-links">
                <li style={{ fontWeight: 400 }}>Other Links</li>
                <li>IEEE</li>
                <li>Signal Processing Society</li>
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

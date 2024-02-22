import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo">
          {/* insert logo */}
          <img src="images/logo.svg" alt="logo" />
          <p>
            A modern, technology payment processing and settlement built for you
            and your business.
          </p>
          {/* icons */}
          <img src="images/socialicons.svg" alt="socialicons" id="social-icons"/>
        </div>
        <div className="footer-title">
          <Link to="#">Company</Link>
          <div className="footer-links">
            <p>About Us</p>
            <p>Why Paydestal</p>
            <p>Awards</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="footer-title">
          <Link to="#">Useful Links</Link>
          <div className="footer-links">
            <p>Services</p>
            <p>Contact Us</p>
            <p>Developer</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="footer-title">
          <h1>Newsletter </h1>
          <input type="text"  />
          <button>
            Subscribe Now
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        
      </div>
      <div>
          <p className="footnote">© Payevery Limited. 2024 All rights reserved</p>
        </div>
    </div>
  );
};

export default Footer;

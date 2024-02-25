import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
 

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-logo"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <img src="images/logo.svg" alt="logo" />
          <p>
            A modern, technology payment processing and settlement built for you
            and your business.
          </p>

          <img
            src="images/socialicons.svg"
            alt="socialicons"
            id="social-icons"
          />
        </div>
        <div className="footer-links-one">
        <div className="footer-title"
          data-aos="fade-right"
          data-aos-duration="500"
        >
          <Link to="#">Company</Link>
          <div className="footer-links">
            <p>About Us</p>
            <p>Why Paydestal</p>
            <p>Awards</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="footer-title"
          data-aos="fade-in-right"
          data-aos-duration="500"
        >
          <Link to="#">Useful Links</Link>
          <div className="footer-links">
            <p>Services</p>
            <p>Contact Us</p>
            <p>Developer</p>
            <p>FAQ</p>
          </div>
        </div>
        </div>
        <div className="footer-title"
          data-aos="fade-in-right"
          data-aos-duration="500"
        >
          <Link to="#">Newsletter </Link>
          <div className="footer-links">
            <input type="text" />

            <button>
              Subscribe Now
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© Copyright 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

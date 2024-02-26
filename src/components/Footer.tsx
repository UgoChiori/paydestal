
import React, { useEffect } from "react";
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
        <div
          className="footer-logo"
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
          <FooterSection
            title="Company"
            links={["About Us", "Why Paydestal", "Awards", "Careers"]}
          />
          <FooterSection
            title="Useful Links"
            links={["Services", "Contact Us", "Developer", "FAQ"]}
          />
        </div>
        <FooterSection title="Newsletter" hasButton />
      </div>
      <div className="copyright">
        <p>© Copyright 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

interface FooterSectionProps {
  title: string;
  links?: string[];
  hasButton?: boolean; // New prop to indicate presence of button
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, hasButton }) => {
  return (
    <div
      className="footer-title"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <Link to="#">{title}</Link>
      {links && (
        <div className="footer-links">
          {links.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </div>
      )}
      {/* Render the button if hasButton prop is true */}
      {hasButton && (
        <div className="footer-links">
          <input type="text" />
          <button>
            Subscribe Now
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;

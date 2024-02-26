import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { navLinks } from "../constants/navLinks";

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/images/logo.svg" alt="Paydestal Logo" />
        </div>
        <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map(
            (
              link: { name: string; route: string },
              index: number
            ): ReactNode => {
              return (
                <Link key={index} to={link.route} onClick={closeMenu}>
                  {link.name}
                </Link>
              );
            }
          )}

          <div className="line h-[1px] w-[100%] bg-[#f3f4f6] sm:hidden"></div>

          <div className="block md:hidden inline-flex items-start mt-2 ">
            <div className="flex rounded">
              <button className="bg-[#F4B23E] w-48 mr-6 rounded-md px-4 py-2 ">
                <p
                  style={{
                    color: "#1B442A",
                    textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  Login
                </p>
              </button>

              <button className="bg-[#1B442A] w-48 rounded-md px-4 py-2 hover:bg-[#F4B23E] hover:text-[#F4B23E] transition duration-300 ease-in-out ">
                <p
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                  }}
                >
                  Get Started
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="get-started">
        <Link to="/login" className="login-link">
          Login
        </Link>

        <button className="reg-button">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>

      <div className="hamburger-menu-wrapper">
        <button className="burg-btn">
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;

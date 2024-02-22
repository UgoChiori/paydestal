// import React from "react";
// import { Link } from "react-router-dom";
// import "./navigation.css"

// const NavigationBar: React.FC = () => {
//   return (
//     <nav className="navigation-wrapper">
//       <div className="logo">
//         <img src="/images/logo.svg" alt="Paydestal Logo" />
    
//       </div>
//       <div className="nav-links-container">
//         <Link to="#">Services</Link>
//         <Link to="#">Pricing</Link>
//         <Link to="#">Developer</Link>
//         <Link to="#">Why Paydestal</Link>
//         <Link to="#">Company</Link>
//         <Link to="#">Support</Link>
//       </div>
//       <div className="get-started">

//       <Link to="/login" className="login-link">
//               Login
//               </Link>
          
//               <button className="reg-button">
//                 <Link to="/register">Sign Up</Link>
//               </button>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;



import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./navigation.css"
import { navLinks } from "../constants/navLinks";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/images/logo.svg" alt="Paydestal Logo" />
        </div>
        <div className="nav-links-container">
          {navLinks.map((link: { name: string, route: string }, index: number): ReactNode => {
            return (
              <Link key={index} to={link.route}>{link.name}</Link>
            )
          })}
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
    </nav>
  );
};

export default NavigationBar;

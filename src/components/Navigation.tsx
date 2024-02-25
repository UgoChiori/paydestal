import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.css"
import { navLinks } from "../constants/navLinks";

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  }


  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/images/logo.svg" alt="Paydestal Logo" />
        </div>
        <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link: { name: string, route: string }, index: number): ReactNode => {
            return (
              <Link key={index} to={link.route} onClick={closeMenu}>
              {link.name}
            </Link>
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
// import React, { ReactNode, useState } from "react";
// import { Link } from "react-router-dom";
// import "./navigation.css";
// import { navLinks } from "../constants/navLinks";

// const NavigationBar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // close menu when link is clicked
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav>
//       <div className="nav-left">
//         <div className="logo">
//           <img src="/images/logo.svg" alt="Paydestal Logo" />
//         </div>
//         <div className={`nav-links-container ${isMenuOpen ? "open" : ""}`}>
//           {navLinks.map((link: { name: string; route: string }, index: number): ReactNode => {
//             return (
//               <Link key={index} to={link.route} onClick={closeMenu}>
//                 {link.name}
//               </Link>
//             );
//           })}
//           {/* Conditional rendering for desktop */}
//           <div className="desktop-buttons" style={{ marginLeft:"150px", display:"inline-flex", alignItems:"flex-start", gap:"16px"}}>
//             <Link to="/login" className="login-link">
//               Login
//             </Link>
//             <button className="reg-button">
//               <Link to="/register">Sign Up</Link>
//             </button>
//           </div>
//           {/* Conditional rendering for hamburger menu */}
//           {!isMenuOpen && (
//             <div className="get-started">
//               <Link to="/login" className="login-link">
//                 Login
//               </Link>
//               <button className="reg-button">
//                 <Link to="/register">Sign Up</Link>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="hamburger-menu-wrapper">
//         <button className="burg-btn" onClick={toggleMenu}>
//           <div className="hamburger">
//             <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
//             <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
//           </div>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={{border:"1px solid red"}}>
      <div>
        {/* insert logo */}
        <img src="" alt="placeholder" />
        <p>
          A modern, technology payment processing and settlement built for you
          and your business.
        </p>
        {/* icons */}
        <div>
          <img src="" alt="placeholder" />
          <img src="" alt="placeholder" />
          <img src="" alt="placeholder" />
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>Company</li>
            <li>Services</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul>
            <li>FAQ</li>
            <li>Terms & conditions</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
          </div>
          <div>
            <h1>Get in Touch </h1>
            <input type="text" placeholder="Email" />
            <button>Subscribe Now</button>
          </div>
          <div>
            <p>© Payevery Limited. 2024 All rights reserved</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;

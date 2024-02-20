import React from "react";
import "./company.css"


const Company: React.FC = () => {
  return (
    <div className="company-wrapper">
      <div className="heading-one">
      <h1>Amplifying Online & Offline Payments</h1>
      <p>
        Revolutionizing financial transactions with a comprehensive suite of
        services ensuring seamless and secure payment solutions for diverse
        needs
      </p>
      <button>Get Started</button>
      </div>
      <div>
        {/* image placeholders */}
        <div>
          <img src="" alt="placeholder" />
          <img src="" alt="placeholder" />
          <img src="" alt="placeholder" />
          <img src="" alt="placeholder" />
      </div>
    </div>
    </div>
  );
};

export default Company;

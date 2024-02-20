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
      <button className="reg-button">Get Started</button>
      </div>
      <div>
        {/* image placeholders */}
        <div>
          <img src="/images/ellipse.svg" alt="placeholder" />
          <img src="/images/circle1.svg" alt="placeholder" />
          <img src="/images/ellipse2.svg" alt="placeholder" />
          <img src="/images/circle2.svg" alt="placeholder" />
          <img src="/images/circle3.svg" alt="placeholder" />
          <img src="/images/bigcircle.svg" alt="placeholder" />
          <img src="/images/ellipse3.svg" alt="placeholder" />
      </div>
    </div>
    </div>
  );
};

export default Company;

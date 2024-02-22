import React from "react";
import "./company.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Company: React.FC = () => {
  return (
    <div className="company-wrapper">
      <div className="heading-one">
        <h1>The future of <span className="yellow">Payment</span> Processing and Settlement </h1>
        <p>
          Revolutionizing financial transactions with a comprehensive suite of
          services ensuring seamless and secure payment solutions for diverse
          needs
        </p>
        <button className="reg-button">
          Get Started
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className="heading-two">
        <img src="images/group.svg" alt="group icons" />
     
      </div>
    </div>
  );
};

export default Company;

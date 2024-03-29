import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./company.css";



const Company: React.FC  = () => {
  return (
    <div className="company-wrapper">
      <HeadingOne  />
      <HeadingTwo />
    </div>
  );
};

const HeadingOne: React.FC = () => {
  return (
    <div className="heading-one">
   
      <h1>
        The future of <span className="yellow">Payment</span> Processing and Settlement
      </h1>
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
  );
};

const HeadingTwo: React.FC = () => {
  return (
    <div className="heading-two">
      <img src="images/group.svg" alt="group icons" />
    </div>
  );
};

export default Company;

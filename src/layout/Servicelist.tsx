import React, { useState, useEffect } from "react";
import "./servicelist.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Servicelist: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="list-wrapper">
      <ServiceDetails />
      <div className="phone-circle" data-aos="fade-up" data-aos-duration="500">
        <img src="images/group3.svg" alt="phone icon" className="phone-icon" />
      </div>
    </div>
  );
};

const ServiceDetails: React.FC = () => {
  return (
    <div className="list-list" data-aos="slide-right" data-aos-duration="500">
      <div className="yellow-circle">
        <img src="images/verifieduser.svg" alt="yellow circle" />
      </div>

      <h1>Why Choose Us</h1>
      <p>
        Discover <span className="yellow">Endless Possibilities </span> with
        Paydestal
      </p>

      <ul>
        <ServiceListItem text="Effortless electronic payments" />
        <ServiceListItem text="Swiftly move funds between accounts" />
        <ServiceListItem text="Simplify your payments with USSD service" />
        <ServiceListItem text="Cross-border settlement service" />
        <ServiceListItem text="Transactions to external accounts or beneficiaries" />
      </ul>
    </div>
  );
};

interface ServiceListItemProps {
  text: string;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({ text }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass("animate-yellow");
    }, Math.random() * 5000); // Randomize the animation start time

    return () => clearTimeout(timeout);
  }, []);

  return (
    <li className={animationClass}>
      <img
        src="images/greentick.svg"
        alt="green tick"
        className="green-circle"
      />
      {text}
    </li>
  );
};

export default Servicelist;

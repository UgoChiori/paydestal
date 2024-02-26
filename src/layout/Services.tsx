import React, { useState, useEffect } from "react";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listItems = [
    { text: "Pay-in Collections", icon: "images/paymenticon1.svg" },
    { text: "International Remittance", icon: "images/paymenticon2.svg" },
    { text: "Pay-Out Transfers", icon: "images/paymenticon3.svg" },
    { text: "USSD Payments", icon: "images/paymenticon4.svg" },
    { text: "Bank Transfer Payments", icon: "images/paymenticon5.svg" },
    { text: "Card Processing", icon: "images/paymenticon6.svg" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listItems.length);
    }, 2000); // Adjusts the interval as needed

    return () => clearInterval(interval);
  }, [listItems.length]);

  return (
    <div className="services">
      <div className="graph">
        <img
          src="/images/dashboard.svg"
          alt="placeholder"
          className="dashboard"
        />
      </div>
      <div className="half-circle" data-aos="slide-left">
        <div className="content-wrap">
          <h3>Our Services</h3>
          <h2>Simple. Transparent. Secure</h2>
          <p>
            All your business financial needs covered with a full range of our
            services
          </p>
          <ul>
            {listItems.map((item, index) => (
              <ListItem
                key={index}
                text={item.text}
                icon={item.icon}
                isActive={index === currentIndex}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ListItem: React.FC<{ text: string; icon: string; isActive: boolean }> = ({
  text,
  icon,
  isActive,
}) => {
  return (
    <li className={isActive ? "active" : ""}>
      <img src={icon} alt={text} />
      {text}
    </li>
  );
};

export default Services;

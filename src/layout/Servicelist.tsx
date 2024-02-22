import React from "react";
import "./servicelist.css";

const Servicelist: React.FC = () => {
  return (
    <div className="list-wrapper">
     
      {/* <img src="images/verifieduser.svg" alt="verified badge" /> */}
    
      <div className="list-list">
      <img src="images/ellipse21.svg" alt="yellow circle" className="yellow-circle" />
      <h1>Why Choose Us</h1>
        <p>
        Discover <span className="yellow">Endless Possibilities </span>
with Paydestal
        </p>
        <ul>
          <li><img src="images/greentick.svg" alt="green tick" /> Effortless electronic payments </li>
          <li><img src="images/greentick.svg" alt="green tick" />Swiftly move funds between accounts</li>
          <li><img src="images/greentick.svg" alt="green tick" />Simplify your payments with USSD service</li>
          <li><img src="images/greentick.svg" alt="green tick" />Cross-border settlement service</li>
          <li><img src="images/greentick.svg" alt="green tick" />Transactions to external accounts or beneficiaries</li>
        </ul>
      </div>
      <div>
        {/* circle image */}
        <img src="images/circ4.svg" alt="phone icon" className="phone-icon"/>
      </div>
    </div>
  );
};

export default Servicelist;

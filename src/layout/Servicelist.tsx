// import React from "react";
// import "./servicelist.css";

// const Servicelist: React.FC = () => {


 

 

//   return (
//     <div className="list-wrapper">
//       <ServiceDetails />
//       <div className="phone-circle">
       
//       <img src="images/group3.svg" alt="phone icon" className="phone-icon" />
//       </div>
//     </div>
//   );
// };

// const ServiceDetails: React.FC = () => {
//   return (
//     <div className="list-list">
//       <div className="yellow-circle">
//       <img
//         src="images/verifieduser.svg"
//         alt="yellow circle"
      
//       />
//       </div>
     
//       <h1>Why Choose Us</h1>
//       <p>
//         Discover <span className="yellow">Endless Possibilities </span> with
//         Paydestal
//       </p>
//       <ul>
     
//         <ServiceListItem text="Effortless electronic payments" />
//         <ServiceListItem text="Swiftly move funds between accounts" />
//         <ServiceListItem text="Simplify your payments with USSD service" />
//         <ServiceListItem text="Cross-border settlement service" />
//         <ServiceListItem text="Transactions to external accounts or beneficiaries" />
//       </ul>
//     </div>
//   );
// };

// interface ServiceListItemProps {
//   text: string;
// }

// const ServiceListItem: React.FC<ServiceListItemProps> = ({ text}) => {
//   return (
//     <li>
//       <img src="images/greentick.svg" alt="green tick" />
//       {text}
//     </li>
//   );
// };

// export default Servicelist;
import React, { useState, useEffect } from "react";
import "./servicelist.css";

const Servicelist: React.FC = () => {
  return (
    <div className="list-wrapper">
      <ServiceDetails />
      <div className="phone-circle">
        <img src="images/group3.svg" alt="phone icon" className="phone-icon" />
      </div>
    </div>
  );
};

const ServiceDetails: React.FC = () => {
  return (
    <div className="list-list">
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
    }, Math.random() * 5000); // Change 5000 to adjust the maximum interval

    return () => clearTimeout(timeout);
  }, []);

  return (
    <li className={animationClass}>
      <img src="images/greentick.svg" alt="green tick" />
      {text}
    </li>
  );
};

export default Servicelist;

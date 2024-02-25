import React, { useState } from "react";
import "./faq.css";

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleVisibility = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div>
        <h3>If you have a question, we have an answer</h3>
        <h1>Frequently Asked Questions</h1>
        <p>
          Get answers to all questions you have and boost your knowledge on our
          services.
        </p>
        <div className="faq-rows">
          <h2 className={activeIndex === 0 ? "active" : ""} onClick={() => toggleVisibility(0)}>
            What is Paydestal?
            {activeIndex === 0 && (
            <p>We are a dedicated payment processing company, based in Nigeria.</p>
          )}

          </h2>
         
          <h2 className={activeIndex === 1 ? "active" : ""} onClick={() => toggleVisibility(1)}>
            Is it possible to integrate plugin ?
            {activeIndex === 1 && (
            <p>Yes, here is how you can get started</p>
          )}
          </h2>
         

          <h2 className={activeIndex === 2 ? "active" : ""} onClick={() => toggleVisibility(2)}>
            What services do you offer?
            {activeIndex === 2 && (
            <p>Here is a list of our<a style={{color:"#1B442A"}} href="#">services</a></p>

          )}
          </h2>
         

          <h2 className={activeIndex === 3 ? "active" : ""} onClick={() => toggleVisibility(3)}>
            Do you offer banking services?
            {activeIndex === 3 && (
            <p>Not at the moment, but we have that in the pipeline. Stay tuned!</p>
          )}
          </h2>
        

          <h2 className={activeIndex === 4 ? "active" : ""} onClick={() => toggleVisibility(4)}>
            What do I need to get started?
            {activeIndex === 4 && (
            <p>Here is a list of our <a href="#" style={{color:"#1B442A"}}>services</a></p>
          )}
          </h2>
         

          <h2 className={activeIndex === 5 ? "active" : ""} onClick={() => toggleVisibility(5)}>
            Where is Paydestal located?
            {activeIndex === 5 && (
            <p>Our Head office is located at 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria.</p>
          )}
          </h2>
         
        </div>
        
      </div>
    </div>
  );
};

export default FAQs;

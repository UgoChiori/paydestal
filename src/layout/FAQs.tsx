import React, {useState} from 'react';
import "./faq.css";



const FAQs:React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleVisibility = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  
  return (
    <div className="faq-wrapper">
        <div>
            <h3>If you have a question, we have an answer</h3>
            <h1>Frequently Asked Questions</h1>
            <p>Get answers to all questions you have and boost your knowledge on our services.</p>
            <div className="faq-rows">
      <h2 onClick={() => toggleVisibility(0)}>What is paydestal?</h2>
      {activeIndex === 0 && <p>We are a dedicated payment processing company, based in Nigeria.</p>}
      
      <h2 onClick={() => toggleVisibility(1)}>Is it possible to integrate plugin ?</h2>
      {activeIndex === 1 && <p>Yes, here is how you can get started</p>}
      
      <h2 onClick={() => toggleVisibility(2)}>What services do you offer?</h2>
      {activeIndex === 2 && <p>Here is a list of our services</p>}
      
      <h2 onClick={() => toggleVisibility(3)}>Do you offer banking services?</h2>
      {activeIndex === 3 && <p>Not at the moment, but we have that in the pipeline. Stay tuned!</p>}
      
      <h2 onClick={() => toggleVisibility(4)}>What do I need to get started?</h2>
      {activeIndex === 4 && <p>Here is a list of our services</p>}
      
      <h2 onClick={() => toggleVisibility(5)}>Where is Paydestal located?</h2>
      {activeIndex === 5 && <p>Our Head office is located at 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria.</p>}
    </div>
        </div>
    </div>
  )
}

export default FAQs
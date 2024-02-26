import React, { useState, useEffect } from "react";
import "./faq.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "What is Paydestal?",
    answer: "We are a dedicated payment processing company, based in Nigeria.",
  },
  {
    question: "Is it possible to integrate plugin?",
    answer: "Yes, here is how you can get started.",
  },
  {
    question: "What services do you offer?",
    answer: "Here is a list of our services.",
  },
  {
    question: "Do you offer banking services?",
    answer: "Not at the moment, but we have that in the pipeline. Stay tuned!",
  },
  {
    question: "What do I need to get started?",
    answer: "Here is a list of our services.",
  },
  {
    question: "Where is Paydestal located?",
    answer: "Our Head office is located at 6 Alhaji Bakinson Street, Ikeja, Lagos Nigeria.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleVisibility = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="faq-wrapper" data-aos="fade-in" data-aos-duration="500">
      <div>
        <h3>If you have a question, we have an answer</h3>
        <h1>Frequently Asked Questions</h1>
        <p>
          Get answers to all questions you have and boost your knowledge on our services.
        </p>
        <div className="faq-rows">
          {faqList.map((faq, index) => (
            <FAQItem key={index} index={index} faq={faq} activeIndex={activeIndex} toggleVisibility={toggleVisibility} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface FAQItemProps {
  index: number;
  faq: FAQItem;
  activeIndex: number | null;
  toggleVisibility: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ index, faq, activeIndex, toggleVisibility }) => {
  const isActive = index === activeIndex;
  
  return (
    <h2 className={isActive ? "active" : ""} onClick={() => toggleVisibility(index)}>
      {faq.question}
      {isActive && <p>{faq.answer}</p>}
    </h2>
  );
};

export default FAQs;

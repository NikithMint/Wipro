import React, { useState } from "react";
import "./Question.css"
const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { question: "What is the question?", answer: "This is the answer." },
    { question: "What is the question?", answer: "This is the answer." },
    { question: "What is the question?", answer: "This is the answer." },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="qa-container">
        
      {questions.map((qa, index) => (
        <div key={index} className="qa-item">
            
          <button className="qa-question" onClick={() => toggleAnswer(index)}>
            <span>Question:"{qa.question}"</span>
            <span className="arrow">{openIndex === index ? "^" : "*"}</span>
          </button>
          {openIndex === index && <div className="qa-answer"><strong>Answer:</strong> {qa.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Questions;

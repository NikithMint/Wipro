import React from "react";
import "./Card.css";

const Card = ({ title, value, bgColor }) => {
  return (
    <div className={`card ${bgColor}`}>
      <h4 className="title">{title}</h4>
      <h2 className="value">{value}</h2>
      
    </div>
  );
};

export default Card;

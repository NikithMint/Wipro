import React from "react";
import "./Card.css";

const Card = ({ owner, creator, image, price, usdPrice, color }) => {
  return (
    <div className="Complete">
      <div className="data-header">
        <div>
          <img src={owner.avatar} alt="Owner" />
          <span>Owned by {owner.name}</span>
        </div>
        <div>
          <img src={creator.avatar} alt="Creator" />
          <span>Created by {creator.name}</span>
        </div>
      </div>

      <img src={image} alt="image" className="data-image" />

      <div className="data-details">
        <p className="data-price">Price: ETH {price} ≈ ${usdPrice}</p>
      </div>

      <div className="data-actions">
        <span className="view-history">🔄 View history</span>
        <button className={`buy-now ${color}`}>Buy Now</button>
      </div>
    </div>
  );
};

export default Card;

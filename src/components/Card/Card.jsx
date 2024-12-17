import React from "react";
import "./Card.css";

const Card = ({ image, name, price, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;

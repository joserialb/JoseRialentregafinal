import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, image }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${id}`}>
        <img src={image} alt={name} className="item-image" />
        <div className="item-details">
          <h4 className="item-name">{name}</h4>
          <p className="item-price">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;


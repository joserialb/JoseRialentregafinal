import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, image, category }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <h3>{name}</h3>
      <p>Categoría: {category}</p>
      <p>Precio: ${price.toFixed(2)}</p>
      <Link to={`/item/${id}`} className="item-detail-link">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;

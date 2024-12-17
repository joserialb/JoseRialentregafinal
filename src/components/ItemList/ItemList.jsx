import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link
          to={`/item/${product.id}`}
          key={product.id}
          className="product-card"
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;



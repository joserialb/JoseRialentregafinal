import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, description, image, category }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category }, quantity);
  };

  return (
    <div className="item-detail">
      <img src={image} alt={name} className="item-detail-image" />
      <h2>{name}</h2>
      <p>Categoría: {category}</p>
      <p>Precio: ${price.toFixed(2)}</p>
      <p>{description}</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetail;


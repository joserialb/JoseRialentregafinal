import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product || !product.name || !product.image) {
    return <p>Producto no válido.</p>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success("Producto agregado al carrito con éxito!");
    console.log("Producto agregado al carrito:", product, "Cantidad:", quantity);
  };

  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} className="item-detail-image" />
      <div className="item-detail-info">
        <h2 className="item-detail-name">{product.name}</h2>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">Precio: ${product.price}</p>
        <div className="quantity-controls">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="quantity-btn">-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="quantity-btn">+</button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;











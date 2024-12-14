import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, price, image, description }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Adding product to cart:", { id, name, price, quantity });
    addToCart({ id, name, price, image }, quantity);
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ width: "200px" }} />
      <p>{description}</p>
      <p>Price: ${price}</p>
      <div>
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;








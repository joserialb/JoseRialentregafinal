import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart">
        🛒 <span>{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidget;




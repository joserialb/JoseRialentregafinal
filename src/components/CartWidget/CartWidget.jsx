import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();

  return (
    <div className="cart-widget">
      <Link to="/cart">
        🛒
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <FaShoppingCart className="cart-icon" />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        <span className="cart-label">Carrito</span>
      </Link>
    </div>
  );
};

export default CartWidget;












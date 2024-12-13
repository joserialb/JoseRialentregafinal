import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;

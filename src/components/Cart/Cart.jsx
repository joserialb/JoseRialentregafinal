import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
            <div>
              <h4>{item.name}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice().toFixed(2)}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Proceder al Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;









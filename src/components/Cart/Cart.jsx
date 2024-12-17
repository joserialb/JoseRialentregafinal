import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

  if (!cart.length) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tu Carrito</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${totalPrice().toFixed(2)}</h3>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-danger" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Proceder al Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;











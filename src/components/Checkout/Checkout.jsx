import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", confirmEmail: "" });
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (buyer.email !== buyer.confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    const order = {
      buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
      items: cart.map((item) => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden: ", error);
    }
  };

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <a href="/">Volver al inicio</a>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Nombre Completo"
          value={buyer.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={buyer.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirmar Correo Electrónico"
          value={buyer.confirmEmail}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Realizar Compra</button>
      </form>
      <div className="checkout-summary">
        <h3>Resumen del Pedido</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}: ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Checkout;

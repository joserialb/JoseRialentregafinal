import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", confirmEmail: "" });
  const [orderId, setOrderId] = useState(null);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s]+$/.test(buyer.name)) newErrors.name = "El nombre solo debe contener letras y espacios.";
    if (!/^\d+$/.test(buyer.phone)) newErrors.phone = "El teléfono solo debe contener números.";
    if (!/^\S+@\S+\.\S+$/.test(buyer.email)) newErrors.email = "El correo electrónico no es válido.";
    if (buyer.email !== buyer.confirmEmail) newErrors.confirmEmail = "Los correos electrónicos no coinciden.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const order = {
      buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
      items: cart.map((item) => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
      toast.success("Orden generada con éxito. Gracias por tu compra!");
    } catch (error) {    
      console.error("Error al generar la orden: ", error);
      toast.error("Error al generar la orden. Inténtalo de nuevo.");
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
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleInputChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={buyer.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirmar Correo Electrónico"
          value={buyer.confirmEmail}
          onChange={handleInputChange}
          required
        />
        {errors.confirmEmail && <p className="error">{errors.confirmEmail}</p>}

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
        <h3>Total: ${totalPrice()}</h3>
      </div>
    </div>
  );
};

export default Checkout;








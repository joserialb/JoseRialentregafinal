import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
        <ToastContainer autoClose={3000} position="top-right" />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);



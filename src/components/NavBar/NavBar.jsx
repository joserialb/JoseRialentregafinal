import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        Ecommerce
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/categories/cardio"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Cardio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/fuerza"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Fuerza
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/flexibilidad"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Flexibilidad
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;







import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <NavLink to="/">Deporte+45</NavLink>
      </h1>
      <ul className="navbar-links">
        <li>
          <NavLink to="/categories/cardio" activeClassName="active-link">
            Cardio
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/fuerza" activeClassName="active-link">
            Fuerza
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/flexibilidad" activeClassName="active-link">
            Flexibilidad
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;



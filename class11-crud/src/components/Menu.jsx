import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container">
        <a href="#" className="navbar-brand">
          CRUD-APP
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

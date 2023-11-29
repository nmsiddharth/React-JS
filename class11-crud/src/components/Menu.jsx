import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">
          CRUD-APP
        </NavLink>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/login`} className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/register`} className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

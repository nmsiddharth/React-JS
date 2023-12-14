import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success">
      <div className="container">
        <a to={"/"} className="navbar-brand">
          React Hooks
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                Ex1
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Ex2
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
              Ex3
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
              Ex4
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
              Ex5
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Ex6
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
              Ex7
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
              Ex8
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

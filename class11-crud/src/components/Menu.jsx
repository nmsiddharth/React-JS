import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import { logoutUser } from "../data/user";

const Menu = () => {
  let loginStatus = localStorage.getItem("loginStatus") || false;

  const logoutHandler = async () => {
    if (window.confirm("Are you sure to logout?")) {
      await logoutUser();
    }
   else {
      toast.warning("Logout Terminated");
    }
  }
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-secondary">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">
          CRUD-APP
        </NavLink>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">
          {
            loginStatus ? (
              <Fragment>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/`}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/create`}>Create</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link btn btn-danger" onClick={logoutHandler}>Logout</NavLink>
                  </li>
                </ul>
             </Fragment>
            ) : (
                <Fragment>
                 <ul className="navbar-nav">
                  <li className="navbar-item">
                    <NavLink className="nav-link" to={`/login`}>Login</NavLink>
                    </li>
                    <li className="navbar-item">
                    <NavLink className="nav-link" to={`/register`}>Register</NavLink>
                    </li>
                  </ul> 
              </Fragment>
             )
          }
        </div>
      </div>
    </div>
  );
};

export default Menu;
import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div className="px-5 bg-primary ">
        <div className="row">
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a className="navbar-brand text-dark fw-bold" href="#">OPERATORS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <NavLink to={'/addition'} className='nav-link text-white'>Addition</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/subtraction'} className='nav-link text-white'>Subtraction</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/multiplication'} className='nav-link text-white'>Multiplication</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/divison'} className='nav-link text-white'>Divison</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/exponent'} className='nav-link text-white'>Exponent</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={'/modulo'} className='nav-link text-white'>Modulo</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Menu
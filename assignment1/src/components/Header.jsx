import React from 'react'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href=""><img src="https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH8761e4e49fc44d768494d2ca68ccb94es.jpg_480x480.jpg" alt="" width="100" height="50"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-end " id="navbarNavAltMarkup">
      <div class="navbar-nav nav-link-hover">
        <a class="nav-link active" aria-current="page" href="#">HOMEPAGE</a>
        <a class="nav-link" href="#">OUR STORY</a>
        <a class="nav-link" href="#">THE WEDDING</a>
        <a class="nav-link" href="#">PEOPLE</a>
        <a class="nav-link" href="#">GALLERY</a>
        <a class="nav-link" href="#">RSVP</a>
        <a class="nav-link" href="#">CONTACT US</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header
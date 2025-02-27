import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <>
      <>
  {/* Spinner Start */}
  
  {/* Spinner End */}
  {/* Topbar Start */}
  <div className="container-fluid bg-primary px-5 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-twitter fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-facebook-f fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-linkedin-in fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
            href=""
          >
            <i className="fab fa-instagram fw-normal" />
          </a>
          <a
            className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
            href=""
          >
            <i className="fab fa-youtube fw-normal" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div
          className="d-inline-flex align-items-center"
          style={{ height: 45 }}
        >
          <a href="#">
            <small className="me-3 text-light">
              <i className="fa fa-user me-2" />
              Register
            </small>
          </a>
          <a href="#">
            <small className="me-3 text-light">
              <i className="fa fa-sign-in-alt me-2" />
              Login
            </small>
          </a>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle text-light"
              data-bs-toggle="dropdown"
            >
              <small>
                <i className="fa fa-home me-2" /> My Dashboard
              </small>
            </a>
            <div className="dropdown-menu rounded">
              <a href="#" className="dropdown-item">
                <i className="fas fa-user-alt me-2" /> My Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-comment-alt me-2" /> Inbox
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-bell me-2" /> Notifications
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-cog me-2" /> Account Settings
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-power-off me-2" /> Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Travela
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/service" className="nav-item nav-link">
            Service
          </Link>
          <Link to="/packages" className="nav-item nav-link">
          packages
          </Link>
          <Link to="/blog" className="nav-item nav-link">
            blog
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <Link to="/destination" className="dropdown-item">
                Destination
              </Link>
              <Link to="/tour" className="dropdown-item">
                Explore Tour
              </Link>
              <Link to="/booking" className="dropdown-item">
                Travel Booking
              </Link>
              <Link to="/gallery" className="dropdown-item">
                Our Gallery
              </Link>
              <Link to="/guides" className="dropdown-item">
                Travel Guides
              </Link>
              <Link to="/testmonial" className="dropdown-item">
                Testimonial
              </Link>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <a href="" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
          Book Now
        </a>
      </div>
    </nav>
    {/* Carousel Start */}
   
    {/* Carousel End */}
  </div>
</>

 
</>

    </div>
  )
}

export default Header

import React from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  const handleClick=()=>{
    toast.success('Logged out Successfully');
    localStorage.removeItem('token');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Navbar</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav">
              {!localStorage.getItem('token')?
              <><li className="nav-item">
                  <Link
                    className='nav-link'
                    to="/login"
                  >
                    <button type="button" className="btn btn-primary">
                      Login
                    </button>
                  </Link>
                </li><li className="nav-item">
                    <Link
                      className='nav-link'
                      to="/signup"
                    >
                      <button type="button" className="btn btn-primary">
                        Sign Up
                      </button>
                    </Link>
                  </li></>:
            <li className="nav-item">
            <Link
              className='nav-link'
              to="/login"
            >
              <button type="submit" className="btn btn-primary" onClick={handleClick}>
              Logout
            </button>
            </Link>
          </li> }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

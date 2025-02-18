import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieHeader = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid px-5">
        
        <NavLink to="/" className="navbar-brand">
          <h2 className="mb-0">🎬 MovieApp</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2 px-5"> 
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2  px-5">
              <NavLink
                to="/Movies"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item mx-2 px-5">
              <NavLink
                to="/Popular"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item mx-2 px-5">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink to="/signup" className="btn btn-outline-light ms-3">
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default MovieHeader;
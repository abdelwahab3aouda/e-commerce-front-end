import React from "react";
import { Link } from "react-router-dom";
import stsyels from "./Navbar.module.scss";
import openInfo from "../fun";
import { useSelector } from 'react-redux';

export default function Navbar({ userData, logout }) {
  const state = useSelector(state => state.handleCart)
  return (
    <>
      <nav className={`navbar navbar-expand-lg   ${stsyels.bgNavbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand " href="#">
            E-Comm
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="" onClick={openInfo}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Hotdeals">
                    Hot Deals
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Admin">
                    Admin Panel
                  </Link>
                </li>
                
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? (
                <>
                  <div className="social-media d-flex align-items-center me-3">
                    <Link className="nav-link" to="/Cart">
                      <i class="fa-solid fa-cart-shopping mx-3"></i>Cart ({state.length})
                    </Link>
                    <Link className="nav-link" to=" Profile">
                      <i class="fa-regular fa-user mx-1"></i>My Profile
                    </Link>
                  </div>

                  <li className="nav-item d-flex align-items-center">
                    <Link className="nav-link" to="Login" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

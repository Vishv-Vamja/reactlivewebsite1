import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
        <div className="container-fluid">
          <div className="row">
              <div className="col-10 mx-auto">        
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Software Solution</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <NavLink className="nav-link" aria-current="page" to="/" exact activeClassName="active-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Service" activeClassName="active-link">Services</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Aboutus" activeClassName="active-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/Contactus" activeClassName="active-link">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
          </div>
        </div>
        </>
    );
}

export default Navbar;

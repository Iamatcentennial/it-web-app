import React from "react";
import "./NavBar.css";
const NavBar = () => (
  <div className="navbar">
    <div className="max-width">
      <div className="logo">
        Portfo<span>lio</span>
      </div>
      <div className="menu-right">
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Skills</li>
        <li className="menu-item">Teams</li>
        <li className="menu-item">Contacts</li>
      </div>
    </div>
  </div>
);

export default NavBar;

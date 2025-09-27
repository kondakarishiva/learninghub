import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">Learning<span>Hub</span></Link>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/developers">For Developers</Link></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <Link to="/login" className="btn-link">Log In</Link>
        <Link to="/demo" className="btn-outline">Request Demo</Link>
        <Link to="/signup" className="btn-black">Create Free Account</Link>
      </div>
    </nav>
  );
}

export default Navbar;

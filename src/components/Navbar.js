// src/components/Navbar.js
import { Link } from "react-router-dom";
import  './../assets/style.css';
import { useState } from "react";

const Navbar=() =>{
      const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">R<span className="text-white">M</span></div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/users" onClick={() => setOpen(false)}>Users</Link>
      </div>
    </nav>
  );
}

export default Navbar;

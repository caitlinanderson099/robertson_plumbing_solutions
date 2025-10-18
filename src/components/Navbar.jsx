import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo & Hamburger */}
      <div className="nav-header">
        <div className="logo">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/logo-images/logo.svg"
              width="200"
              height="100"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <RxCross2 size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink 
          to="/" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>

        <NavLink 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Our services
        </NavLink>

        <NavLink 
          to="/contactus" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact us
        </NavLink>

        <button 
          className="cta" 
          onClick={() => {
          setIsOpen(false);
          navigate("/contactus");
          }}
        >
          Get a quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

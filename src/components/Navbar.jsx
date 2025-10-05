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
          to="/about" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About us
        </NavLink>

        <NavLink 
          to="/plumbing" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Plumbing
        </NavLink>

        <NavLink 
          to="/drainlaying" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Drainlaying
        </NavLink>

        <NavLink 
          to="/centralheating" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Central Heating
        </NavLink>

        <NavLink 
          to="/testimonialsandgallery" 
          onClick={() => setIsOpen(false)} 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Testimonials & Gallery
        </NavLink>

        <button 
          className="cta" 
          onClick={() => {
          setIsOpen(false);
          navigate("/contactus");
          }}
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

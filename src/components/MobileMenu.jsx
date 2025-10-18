import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MobileMenu = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="mobile-menu">
      <NavLink to="/" onClick={onClose}>
        Home
      </NavLink>

      <NavLink to="/about" onClick={onClose}>
        About Us
      </NavLink>

      <div className="mobile-dropdown">
        <span className="dropdown-title">Our Services</span>
        <div className="dropdown-items">
          <NavLink to="/residential" onClick={onClose}>
            Residential Plumbing
          </NavLink>
          <NavLink to="/commercial" onClick={onClose}>
            Commercial Plumbing
          </NavLink>
          <NavLink to="/maintenance" onClick={onClose}>
            Maintenance & Repairs
          </NavLink>
        </div>
      </div>

      <button
        className="cta"
        onClick={() => {
          onClose();
          navigate("/contactus");
        }}
      >
        Contact Us
      </button>
    </div>
  );
};

export default MobileMenu;

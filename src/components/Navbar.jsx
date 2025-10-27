import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop dropdown
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

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

        {/* ✅ Our Services Dropdown */}
        <div
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
          onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
        >
          {isMobile ? (
            <>
              {/* Mobile — show main link */}
              
              {/* Mobile — show submenu items inline */}
              <div className="dropdown-menu mobile-visible">
                <NavLink
                    to="/plumbing"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}                  
                >
                  Plumbing
                </NavLink>
                  <NavLink
                    to="/heating"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Heating
                  </NavLink>
                  <NavLink
                    to="/hotwatersystems"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Hot water systems
                  </NavLink>
                  <NavLink
                    to="/rural"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Rural
                  </NavLink>
                  <NavLink
                    to="/drainage"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Drainage
                  </NavLink>
              </div>
            </>
          ) : (
            <>
              {/* Desktop — dropdown toggle */}
              <span
                className="dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Services
              </span>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink
                    to="/plumbing"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Plumbing
                  </NavLink>
                  <NavLink
                    to="/heating"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Heating
                  </NavLink>
                  <NavLink
                    to="/hotwatersystems"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Hot water systems
                  </NavLink>
                  <NavLink
                    to="/rural"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Rural
                  </NavLink>
                  <NavLink
                    to="/drainage"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Drainage
                  </NavLink>
                </div>
              )}
            </>
          )}
        </div>

        <NavLink
          to="/testimonialsandgallery"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Testimonials & Gallery
        </NavLink>

        <NavLink
          to="/contactus"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>

        <button
          className="cta"
          onClick={() => {
            setIsOpen(false);
            navigate("/contactus");
          }}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

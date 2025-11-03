import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <img src="/logo-images/logo.svg" alt="Robertson Plumbing Solutions" />
        </div>

        {/* Center Section - Copyright */}
        <div className="footer-info">
          <h3>© 2025 Robertson Plumbing Solutions Ltd</h3>
          <p>
            Created and developed by{" "}
            <a
              href="https://caitlin-anderson-design.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caitlin Anderson Design
            </a>
          </p>
        </div>

        {/* Right Section - Quick Links or Contact (optional for future) */}
        <div className="footer-contact">
          <a href="mailto:ben@robertsonplumbing.co.nz">ben@robertsonplumbing.co.nz</a>
          <a href="tel:0273412624">027 365 1682</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

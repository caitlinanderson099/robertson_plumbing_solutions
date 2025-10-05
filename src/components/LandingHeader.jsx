import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const LandingHeader = ({ title, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F3F4F6',
  };

  const navigate = useNavigate();

  const handleContact = (e) => {
    e.preventDefault();
    navigate('/contactus');
  }

  return (
    <div className="page-header landing-header" style={headerStyle}>
      {/* Overlay */}
      <div className="overlay"></div>
      <div className="header-cta">
        <img src="/logo-images/logo2.svg" alt="Robertson Plumbing Logo" />
        {/* Title */}
      <h1 className="header-title">{title}</h1>
      <div className="icons-button">
        {/* CTA Button */}
      <button onClick={handleContact}>Get a quote today</button>
        <div className="social-icons">
          <h4>Follow us on our socials</h4>
          <div className='icons'>
            <FaFacebook/>
            <FaInstagram/>
          </div>
          
        </div>
      
      </div>
      
      </div>
      
    </div>
  );
};

export default LandingHeader;

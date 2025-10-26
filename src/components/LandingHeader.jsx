import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const LandingHeader = ({ title, subHeading, backgroundImage }) => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#F3F4F6',
  };


  return (
    <div className="page-header landing-header" style={headerStyle}>
      {/* Overlay */}
      <div className="overlay"></div>
      <div className="header-cta">
        <img src="/logo-images/logo2.svg" alt="Robertson Plumbing Logo" />
        {/* Title */}
      <h1 className="header-title">{title}</h1>
      <p className='header-subheading'>{subHeading}</p>
      </div>
      
      </div>
  );
};

export default LandingHeader;

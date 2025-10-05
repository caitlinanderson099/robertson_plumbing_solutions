import React from 'react';

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default PageHeader;

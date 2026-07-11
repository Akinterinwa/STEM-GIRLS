import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src='/logo1.png' alt="Loading..." className="loader-logo" loading="lazy" />
    </div>
  );
};

export default Loader;
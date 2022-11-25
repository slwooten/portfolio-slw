import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='title'>
        <h1>Logo here</h1>
      </div>
      <div className='nav-tabs'>
        <h2>Bio</h2>
        <h2>Projects</h2>
        <h2>Experience</h2>
      </div>
    </div>
  );
};

export default Header;

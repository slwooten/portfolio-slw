import React from 'react';

import './header.css';

import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='title'>
        <h1>Logo here</h1>
      </div>
      <div className='nav-tabs'>
        <a href='mailto:slwooten@gmail.com' target='new'>
          <EmailIcon sx={{ color: 'red' }} />
        </a>
        <a href='https://github.com/slwooten' target='new'>
          <i class="devicon-github-original colored"></i>
        </a>
        <a href='https://www.linkedin.com/in/sl-wooten/' target='new'>
          <i class="devicon-linkedin-plain colored"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;

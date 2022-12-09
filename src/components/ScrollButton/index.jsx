import React from 'react';

import './scrollButton.css';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollButton = () => {

  const scrollToToop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='scroll-btn-container'>
      <ArrowCircleUpIcon sx={{ fontSize: '3rem' }} className='scroll-btn' onClick={scrollToToop} />
    </div>
  );
};

export default ScrollButton;

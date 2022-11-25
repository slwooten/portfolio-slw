import React, { useState } from 'react';

import './whatIDo.css';
import backward from '../../images/backwardsHat.png';
import front from '../../images/frontHat.png';

const WhatIDo = () => {

  const [hat, setHat] = useState(true);

  const changeHat = () => {
    setHat(!hat);
  };

  return (
    <div className='do-container'>
      <div onClick={changeHat} className='do-title'>
        <h1>Web Developer</h1>
        <p>Something about doing what I love...</p>
        <img src={hat ? backward : front} alt='bitmoji' />
      </div>
      <div className='do-card-container'>
        <div className='card'>
          <h2>Front End Development</h2>
          <div className='do-items'>
            <p>React</p>
            <p>Vanilla JavaScript</p>
          </div>
        </div>
        <div className='card'>
          <h2>Full Stack Development</h2>
          <div className='do-items'>
            <p>React</p>
            <p>Vanilla JavaScript</p>
          </div>
        </div>
        <div className='card'>
          <h2>Back End Development</h2>
          <div className='do-items'>
            <p>React</p>
            <p>Vanilla JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

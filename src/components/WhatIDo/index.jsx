import React from 'react';

import './whatIDo.css';

const WhatIDo = () => {
  return (
    <div className='do-container'>
      <div className='do-title'>
        <h1>What I Do</h1>
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

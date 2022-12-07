import React, { useState } from 'react';

import './whatIDo.css';
import backward from '../../images/backwardsHat.png';
import front from '../../images/frontHat.png';

const WhatIDo = () => {

  // Profile image state //
  const [hat, setHat] = useState(true);
  const changeHat = () => {
    setHat(!hat);
  };

  // greeting state //
  const [greetingIndex, setGreetingIndex] = useState(0);

  const changeGreeting = () => {
    if (greetingIndex < 3) {
      setGreetingIndex(greetingIndex + 1);
      return;
    }
    setGreetingIndex(0);
  }

  return (
    <div className='do-container'>
      <div className='do-title'>
        <h1>Web Developer</h1>
        <p className='greeting' onMouseOver={changeGreeting}>
          {greetingIndex === 0 ? 'Hello, my name is Seth.' : 
          greetingIndex === 1 ? 'language 2' :
          greetingIndex === 2 ? 'language 3' :
          greetingIndex === 3 ? 'language 4' :
          'Hello, my name is Seth.'
          }
        </p>
        <img onClick={changeHat} src={hat ? backward : front} alt='bitmoji' />
      </div>
      <div className='do-card-container'>
        <div className='card'>
          <h2>Front End Development</h2>
          <div className='do-items'>
            <h3>
              <i class="devicon-html5-plain-wordmark colored"></i>
            </h3>
            <h3>
              <i class="devicon-css3-plain-wordmark colored"></i>
            </h3>
            <h3>
              <i class="devicon-javascript-plain colored"></i>
            </h3>
            <h3>
              <i class="devicon-react-original-wordmark colored"></i>
            </h3>
          </div>
        </div>
        <div className='card'>
          <h2>Full Stack Development</h2>
          <div className='do-items'>
            <h3>
              <i class="devicon-mongodb-plain-wordmark colored"></i>
            </h3>
            <h3>
              <i class="devicon-express-original colored"></i>
            </h3>
            <h3>
              <i class="devicon-react-original-wordmark colored"></i>
            </h3>
            <h3>
              <i class="devicon-nodejs-plain colored"></i>
            </h3>
          </div>
        </div>
        <div className='card'>
          <h2>Back End Development</h2>
          <div className='do-items'>
            <h3>
              <i class="devicon-express-original colored"></i>
            </h3>
            <h3>
              <i class="devicon-nodejs-plain colored"></i>
            </h3>
            <h3>
              <i class="devicon-graphql-plain-wordmark colored"></i>
            </h3>
            <h3>
              <i class="devicon-sequelize-plain colored"></i>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

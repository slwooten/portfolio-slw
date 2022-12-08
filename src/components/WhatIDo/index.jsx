import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import './whatIDo.css';
import backward from '../../images/backwardsHat.png';
import front from '../../images/frontHat.png';

const WhatIDo = () => {

  
  // intersection observer - JOB
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    onChange: (inView, entry) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  // intersection observer - FRONTEND
  const [frontEnd, setFrontEnd] = useState(false);
  const { ref2, inView2, entry2 } = useInView({
    /* Optional options */
    threshold: 0,
    onChange: (inView, entry) => {
      if (inView) {
        setFrontEnd(true);
        console.log('woohoo');
      }
    }
  });

  // Profile image state //
  const [hat, setHat] = useState(true);
  const changeHat = () => {
    setHat(!hat);
  };

  return (
    <div className='do-container'>
      <div className='do-title'>
        <h1 ref={ref} className={shown ? 'web-dev-animate' : 'none'}>Web Developer</h1>
        <p className='greeting'></p>
        <img onClick={changeHat} src={hat ? backward : front} alt='bitmoji' />
      </div>
      <div className='do-card-container'>
        <div ref2={ref2} className='card'>
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

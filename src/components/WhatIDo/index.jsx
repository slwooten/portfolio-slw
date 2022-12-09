import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import './whatIDo.css';
import backward from '../../images/backwardsHat.png';
import front from '../../images/frontHat.png';

const WhatIDo = () => {


  // intersection observer - JOB
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    onChange: (inView) => {
      if (inView) {
        setShown(true);
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
        <img className={shown ? 'web-dev-animate' : 'none'} onClick={changeHat} src={hat ? backward : front} alt='bitmoji' />
      </div>
      <div className='do-card-container'>
        <div className={shown ? 'web-dev-animate card' : 'card'}>
          <h2>Front End Development</h2>
          <div className='do-items'>
            <h3 className='doc-link'>
              <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='new'>
                <i class="devicon-html5-plain-wordmark colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='new'>
                <i class="devicon-css3-plain-wordmark colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='new'>
                <i class="devicon-javascript-plain colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://reactjs.org/' target='new'>
                <i class="devicon-react-original-wordmark colored"></i>
              </a>
            </h3>
          </div>
        </div>
        <div className={shown ? 'web-dev-animate card' : 'card'}>
          <h2>Full Stack Development</h2>
          <div className='do-items'>
            <h3 className='doc-link'>
              <a href='https://www.mongodb.com/home' target='new'>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://expressjs.com/' target='new'>
                <i class="devicon-express-original colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://reactjs.org/' target='new'>
                <i class="devicon-react-original-wordmark colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://nodejs.org/en/' target='new'>
                <i class="devicon-nodejs-plain colored"></i>
              </a>
            </h3>
          </div>
        </div>
        <div className={shown ? 'web-dev-animate card' : 'card'}>
          <h2>Back End Development</h2>
          <div className='do-items'>
            <h3 className='doc-link'>
              <a href='https://expressjs.com/' target='new'>
                <i class="devicon-express-original colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://nodejs.org/en/' target='new'>
                <i class="devicon-nodejs-plain colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://graphql.org/' target='new'>
                <i class="devicon-graphql-plain-wordmark colored"></i>
              </a>
            </h3>
            <h3 className='doc-link'>
              <a href='https://sequelize.org/docs/v6/' target='new'>
                <i class="devicon-sequelize-plain colored"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

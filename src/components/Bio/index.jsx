import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import './bio.css';

import BioIcon from '@mui/icons-material/PersonSearch';

const Bio = () => {


  // tracking bio text container //
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    rootMargin: '-50%',
    onChange: (inView, entry) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  return (
    <div ref={ref} className='bio-container'>
      <div className='image-container'>
        <BioIcon className={shown ? 'fade-in-and-up-no-delay bio-icon' : 'hidden'} sx={{ fontSize: '12rem' }} />
      </div>
      <div className='text-container'>
        <div className='text-paragraph-container'>
          <div className={shown ? 'fade-in-and-up-no-delay' : 'hidden'}>
            <h2>My Background</h2>
            <p>Hello! My name is Seth Wooten. First, I'd like to say thank you for taking the time to check out my portfolio. This is where you'll find some information about me and the projects I've worked on. Now for a little bit about me. I was born in Statesville, NC and grew up about 25 minutes north of Statesville in the town of Hamptonville. I spent my entire childhood living there with my mom, dad, and older brother. I graduated from North Iredell High School in the year of 2017 and attended Mitchell Community College where I obtained an Associate's Degree. I then transferred to the University of North Carolina at Charlotte where I graduated in the winter of 2021 with a Bachelor's Degree in Marketing. After obtaining my Bachelor’s, I attended a full-stack web development bootcamp through UNCC. This bootcamp was focused on the MERN stack.After the bootcamp, I worked as a TA for that same bootcamp for about 9 months while working on my own personal projects. I then began working as a software developer for Ally Financial in March 2023.</p>
          </div>
          <div className={shown ? 'fade-in-and-up-no-delay' : 'hidden'}>
            <h2>Why I chose Software Development</h2>
            <p>I chose to pursue software development for several different reasons. One being my interest in problem solving. With every application and every feature, a new problem will present itself. There is nothing more rewarding than working towards solving that problem and stepping back to admire the hard work put in while doing so. Being in software development also requires you to constantly be learning. Because of this, I could never find it boring and it would never get stale. There’s always new languages, technologies, and frameworks to learn and implement which makes it exciting. It also provides you with the tools to build anything you could think of. And if what you’re wanting to build requires something you haven’t learned, then you’ve found another opportunity to add to your skillset.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

import React, { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import './bio.css';

import BioIcon from '@mui/icons-material/PersonSearch';

const Bio = () => {


  // tracking bio text container //
  const [opacity, setOpacity] = useState(0);
  const [translate, setTranslate] = useState(100);
  const [finished, setFinished] = useState(false);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: [0, .01, .02, .03, .04, .05, .06, .07, .08, .09, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20, .21, .22, .23, .24, .25, .26, .27, .28, .29, .30, .31, .32, .33, .34, .35, .36, .37, .38, .39, .40, .41, .42, .43, .44, .45, .46, .47, .48, .49, .50, .51, .52, .53, .54, .55, .56, .57, .58, .59, .60, .61, .62, .63, .64, .65, .66, .67, .68, .69, .70, .71, .72, .73, .74, .75, .76, .77, .78, .79, .80, .81, .82, .83, .84, .85, .86, .87, .88, .89, .90, .91, .92, .93, .94, .95, .96, .97, .98, .99, 1,],
    onChange: (inView, entry) => {
      // getting intersection ratio
      const ratio = entry.intersectionRatio;

      // converts ratio to array
      const ratioStr = entry.intersectionRatio
        .toString()
        .split('');

      // geting first 2 numbers after decimal to subtract from 100 later  
      const wholeNumber = ratioStr[2] + ratioStr[3];

      // if ratio is 1, set translate to 0 so the element will be in it's proper place
      if (ratio === 1) {
        setTranslate(0);
        setFinished(true);
      } else if (finished === false) {
        setTranslate(100 - wholeNumber);

        // setting opcaity to the ratio
        setOpacity(ratio);
      }
    }
  });

  return (
    <div className='bio-container'>
      <div className='image-container'>
        <BioIcon sx={{ fontSize: '12rem' }} />
      </div>
      <div className='text-container'>
        {/* <h1>Bio</h1> */}
        <div className='text-paragraph-container'>
          <div ref={ref}
          style={{ transform: `translate(0, ${translate}px)` }} >
            <h2

            >
              My Background
            </h2>
            <p>Hello! My name is Seth Wooten. First, I'd like to say thank you for taking the time to check out my portfolio. This is where you'll find some information about me and the projects I've worked on. Now for a little bit about me. I was born in Statesville, NC and grew up about 25 minutes north of Statesville in a town called Hamptonville. I spent my entire childhood living there with my mom, dad, and older brother. I graduated from North Iredell High School in the year of 2017 and attended Mitchell Community College where I obtained an Associate's Degree. I then transferred to the University of North Carolina at Charlotte where I graduated in the winter of 2021 with a Bachelor's Degree in Marketing. After obtaining my Bachelor’s, I attended a full-stack web development bootcamp through UNCC. This bootcamp was focused on the MERN stack, and since then I’ve worked as a TA for the bootcamp while working on my own personal projects.</p>
          </div>
          <div>
            <h2>Why I chose Web Development</h2>
            <p>I chose to pursue web development for several different reasons. One being my interest in problem solving. With every application and every feature, a new problem will present itself. In my opinion, there is nothing more rewarding than working towards solving that problem and stepping back to admire the hard work put in while doing so. Being in web development also requires you to constantly be learning. Because of this, I could never find it boring and it would never get stale. There’s always new languages, technologies, and frameworks to learn and implement which makes it exciting. It also provides you with the tools to build anything you could think of. And if what you’re wanting to build requires something you haven’t learned, then you’ve found another opportunity to add to your skillset.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;

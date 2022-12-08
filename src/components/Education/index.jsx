import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './Education.css';

import SchoolIcon from '@mui/icons-material/School';
import TimelineItem from './TimelineItem';

const Education = () => {

  // intersection observer
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    rootMargin: '-40%',
    onChange: (inView) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  return (
    <div ref={ref} className='education-container'>
      <div className={shown ? 'ed-img-container fade-in-and-up-no-delay' : 'ed-img-container hidden'}>
        <SchoolIcon className='school-icon' sx={{ fontSize: '4.5rem', marginRight: '10px' }} />
        <h2 style={{ marginLeft: '10px' }}>Education</h2>
      </div>
      <div className='education'>
        {/* <h1>Education</h1> */}
        <div className={shown ? 'fade-in-and-up-no-delay timeline' : 'timeline hidden'}>
          <TimelineItem
            level='High School Diploma'
            institute='North Iredell High School'
            gradDate='2017'
            concentration='none'
            color='red'
            link='https://northhigh.issnc.org/'
          />
          <TimelineItem
            level="Associate's Degree"
            institute='Mitchell Community College'
            gradDate='2019'
            concentration='none'
            color='blue'
            link='https://mitchellcc.edu/'
          />
          <TimelineItem
            level="Bachelor's Degree"
            institute='University of North Carolina at Charlotte'
            gradDate='2021'
            concentration='Marketing'
            color='green'
            link='https://www.charlotte.edu/'
          />
          <TimelineItem
            level="Certification"
            institute='UNC Charlotte School of Professional Studies'
            gradDate='2022'
            concentration='Full Stack Web Development'
            color='green'
            link='https://www.credly.com/badges/e4fcdd65-a61d-40f5-b3c6-0d21d9d55942?source=linked_in_profile'
          />
        </div>
      </div>

    </div>
  );
};

export default Education;

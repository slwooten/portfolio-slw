import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// css //
import './Experience.css';

// MUI Icon //
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

// Component //
import ExperienceItem from './ExperienceItem';

const Experience = () => {

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
    <div ref={ref} className='experience-section'>
      <div className={shown ? 'ex-img-container fade' : 'ex-img-container hidden'}>
        <WorkHistoryIcon sx={{ fontSize: '5rem', marginRight: '10px' }} />
        <h1 style={{ marginLeft: '10px' }}>Experience</h1>
      </div>
      <div className='experience'>
        {/* <h1>Education</h1> */}
        <div className={shown ? 'experience-container fade' : 'experience-container hidden'}>
          <ExperienceItem
            company='edX'
            link='https://www.edx.org/'
            position='Teacher Assistant'
            startDate='Jun 2022'
            endDate='Present'
            location='Charlotte, NC'
            description={[
              'Assist in the online delivery of a modern, full stack web development curriculum (ES6+, SQL, MongoDB, RESTful APIs, PWAs, React, GraphQL',
              'Evaluate student projects and provide constructive feedback',
              'Provide accurate and concise answers to student questions'
            ]}
          />
        </div>
      </div>

    </div>
  );
};

export default Experience;

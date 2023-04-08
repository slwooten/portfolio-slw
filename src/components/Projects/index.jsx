import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './projects.css';

import ConstructionIcon from '@mui/icons-material/Construction';

import Project from './Project';

const Projects = () => {

  const [acitveIndex, setActiveIndex] = useState(4);

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
    <div ref={ref} className='projects-section'>
      <ConstructionIcon className={shown ? 'work-icon fade' : 'hidden'} sx={{ fontSize: '4.5rem', marginBottom: '10px' }} />
      <h2 className={shown ? 'project-heading fade' : 'project-heading hidden'}>Projects I've built & Contributed to</h2>
      <div className={shown ? 'projects-cards-container fade' : 'projects-cards-container hidden'}>
        <Project
          title='Over / Under'
          appLink='https://over-under.herokuapp.com/'
          gitLink='https://github.com/slwooten/over-under'
          tech={[
            'React.js',
            'Axios',
            'Material UI',
            'Express.js',
            'Node.js',
            'Express Rate Limit',
          ]}
          isActive={acitveIndex === 3}
          onShow={() => setActiveIndex(3)}
          hide={() => setActiveIndex(4)}
        >
          Over / Under is a sports app that allows you to search for 2 teams which will result in some basic statistics from their matchups this season.
        </Project>
        <Project
          title='Classroom'
          appLink='https://classroom-tracker-app.herokuapp.com/'
          gitLink='https://github.com/slwooten/classroom'
          tech={[
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js',
            'GraphQL',
            'Material UI'
          ]}
          isActive={acitveIndex === 0}
          onShow={() => setActiveIndex(0)}
          hide={() => setActiveIndex(4)}
        >
          Classroom is a rather simple application built for teachers/instructors/professors alike.
        </Project>
        <Project
          title='Pixel Mixup'
          appLink='https://bit-by-bit-2022-05-05.herokuapp.com/login'
          gitLink='https://github.com/felix1805/pixel-mixup'
          tech={[
            'MongoDB',
            'Mongoose',
            'Express.js',
            'React.js',
            'Node.js',
            'GraphQL'
          ]}
          isActive={acitveIndex === 1}
          onShow={() => setActiveIndex(1)}
          hide={() => setActiveIndex(4)}
        >
          An application where users can create, manage, and share pixel art in a 16x16 layout.
        </Project>
        <Project
          title='Color Creator'
          appLink='https://slwooten.github.io/color-creator/'
          gitLink='https://github.com/slwooten/color-creator'
          tech={[
            'React.js',
            'useState hook',
            'useEffect hook',
            'useRef hook'
          ]}
          isActive={acitveIndex === 2}
          onShow={() => setActiveIndex(2)}
          hide={() => setActiveIndex(4)}
        >
          A React application that generates color palettes and displays examples of what they would look like in use.
        </Project>
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from 'react';

import './projects.css';

import Project from './Project';

const Projects = () => {

  const [acitveIndex, setActiveIndex] = useState(null);

  return (
    <div className='projects-section'>
      <h1>Projects I've built & Contributed to</h1>
      <div className='projects-cards-container'>
        <Project
          title='Classroom'
          tech={[
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js'
          ]}
          isActive={acitveIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          Here is the description for Classroom.
        </Project>
        <Project
          title='Pixel Mixup'
          tech={[
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js'
          ]}
          isActive={acitveIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          Here is the description for Pixel Mixup.
        </Project>
        <Project
          title='Color Creator'
          tech={[
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js'
          ]}
          isActive={acitveIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          Here is the description for Color Creator.
        </Project>
        <Project
          title='Vue To Do'
          tech={[
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js'
          ]}
          isActive={acitveIndex === 3}
          onShow={() => setActiveIndex(3)}
        >
          Here is the description for Vue To Do.
        </Project>
      </div>
    </div>
  );
};

export default Projects;

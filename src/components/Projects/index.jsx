import React, { useState } from 'react';

import './projects.css';

import Project from './Project';

const Projects = () => {

  const [acitveIndex, setActiveIndex] = useState(0);

  return (
    <div className='projects-section'>
      <h1>Projects I've built & Contributed to</h1>
      <div className='projects-cards-container'>
        <Project
          title='Classroom'
          appLink='https://classroom-tracker-app.herokuapp.com/'
          gitLink='https://github.com/slwooten/classroom'
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
          appLink='https://bit-by-bit-2022-05-05.herokuapp.com/login'
          gitLink='https://github.com/felix1805/pixel-mixup'
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
          appLink='https://slwooten.github.io/color-creator/'
          gitLink='https://github.com/slwooten/color-creator'
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
          appLink='https://slwooten.github.io/vuejs-todo-list/'
          gitLink='https://github.com/slwooten/vuejs-todo-list'
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

import React from 'react';

import './projects.css';

const Projects = () => {
  return (
    <div className='projects-section'>
      <h1>Projects I've built & Contributed to</h1>
      <div className='projects-cards-container'>
        <div className='project-card'>
          <h2>Classroom Tracker</h2>
        </div>
        <div className='project-card'>
          <h2>Pixel Mixup</h2>
        </div>
        <div className='project-card'>
          <h2>Color Creator</h2>
        </div>
        <div className='project-card'>
          <h2>Vue ToDo List</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;

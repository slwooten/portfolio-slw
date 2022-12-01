import React from 'react';

const Project = ({ title, isActive, onShow, children, tech }) => {
  return (
    <div className='project-card'>
      <h1>{title}</h1>
      {isActive ? (
        <div>
          <h3>What is {title}?</h3>
          <p>{children}</p>
          <h3>Technologies Used:</h3>
          {tech.map((item) => {
            return <p key={item}>- {item}</p>
          })}
        </div>
      ) : (
        <p onClick={onShow}>V</p>
      )}
    </div>
  );
};

export default Project;

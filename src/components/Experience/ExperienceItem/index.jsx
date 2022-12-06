import React from 'react';

import './ExperienceItem.css';

const ExperienceItem = ({
  company,
  position,
  startDate,
  endDate,
  location,
  description
}) => {
  return (
    <div className='experience-item'>
      <h3>{company}</h3>
      <p>Position: {position}</p>
      <p>{startDate} - {endDate}</p>
      <p>{location}</p>
      <p>Description: </p>
      <ul>
        {description.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;

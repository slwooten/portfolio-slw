import React from 'react';

import './EducationItem.css';

const EducationItem = ({
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

export default EducationItem;

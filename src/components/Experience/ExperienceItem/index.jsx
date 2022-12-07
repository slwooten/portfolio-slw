import React from 'react';

import './ExperienceItem.css';

const ExperienceItem = ({
  company,
  position,
  startDate,
  endDate,
  location,
  description,
  link
}) => {
  return (
    <div className='experience-item'>
      <h3>Company:{' '} 
        <span>
          <a className='company-name' href={link} target='new'>
            {company}
          </a>
        </span>
      </h3>
      <p><span className='bold'>Position:</span> {position}</p>
      <p>{startDate} - {endDate}</p>
      <p>{location}</p>
      <p className='bold'>Description: </p>
      <ul>
        {description.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
};

export default ExperienceItem;

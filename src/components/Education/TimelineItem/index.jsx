import React, { useState } from 'react';

import './TimelineItem.css';

import SchoolIcon from '@mui/icons-material/School';

const TimelineItem = ({
  level,
  institute,
  gradDate,
  concentration,
  color,
  link
}) => {

  return (
    <div className='timeline-item'>
      <div className='timeline-item-img'>
        <SchoolIcon className='mini-school-icon' sx={{ color: { color } }} />
      </div>
      <div className='timeline-item-info'>
        <h3 style={{ color: color }}>{level}</h3>
        <a href={link} target='new' className='institute'>{institute}{' >'}</a>
        {concentration === 'none' ? <p></p> : <p>Concentration in {concentration}</p>}
        <p className='grad'>Graduated in {gradDate}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

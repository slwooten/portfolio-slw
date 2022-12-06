import React from 'react';

import './EdAndEx.css';

// import TimelineItem from './TimelineItem';
import EducationItem from './EducationItem';

const EdAndExp = () => {
    return (
        <div className='ed-and-ex-container'>
            {/* <div className='education'>
                <h1>Education</h1>
                <div className='timeline'>
                    <TimelineItem
                        level='High School Diploma'
                        institute='North Iredell High School'
                        gradDate='2017'
                        concentration='none'
                        color='red'
                        link='https://northhigh.issnc.org/'
                    />
                    <TimelineItem
                        level="Associate's Degree"
                        institute='Mitchell Community College'
                        gradDate='2019'
                        concentration='none'
                        color='blue'
                        link='https://mitchellcc.edu/'
                    />
                    <TimelineItem
                        level="Bachelor's Degree"
                        institute='University of North Carolina at Charlotte'
                        gradDate='2021'
                        concentration='Marketing'
                        color='green'
                        link='https://www.charlotte.edu/'
                    />
                    <TimelineItem
                        level="Certification"
                        institute='UNC Charlotte School of Professional Studies'
                        gradDate='2022'
                        concentration='Full Stack Web Development'
                        color='green'
                        link='https://www.credly.com/badges/e4fcdd65-a61d-40f5-b3c6-0d21d9d55942?source=linked_in_profile'
                    />
                </div>
            </div> */}
            <div className='experience'>
                <h1>Experience</h1>
                <div className='experience-container'>
                   <EducationItem 
                    company='edX'
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

export default EdAndExp;

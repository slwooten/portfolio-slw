import React from 'react';

import './EdAndEx.css';

import TimelineItem from './TimelineItem';

const EdAndExp = () => {
    return (
        <div className='ed-and-ex-container'>
            <div className='education'>
                <h1>Education</h1>
                <div className='timeline'>
                    <TimelineItem
                        level='High School Diploma'
                        institute='North Iredell High School'
                        gradDate='2017'
                        concentration='none'
                        color='red'
                        link='https://www.google.com'
                    />
                    <TimelineItem
                        level="Associate's Degree"
                        institute='Mitchell Community College'
                        gradDate='2019'
                        concentration='none'
                        color='blue'
                        link='https://www.google.com'
                    />
                    <TimelineItem
                        level="Bachelor's Degree"
                        institute='University of North Carolina at Charlotte'
                        gradDate='2021'
                        concentration='Marketing'
                        color='green'
                        link='https://www.google.com'
                    />
                </div>
            </div>
            <div className='experience'>
                <h1>Experience</h1>
            </div>
        </div>
    );
};

export default EdAndExp;

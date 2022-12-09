import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './contact.css';

// MUI Components //
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Contact = () => {

  // intersection observer
  const [shown, setShown] = useState(false);
  const { ref, inView, entry } = useInView({
    rootMargin: '-40%',
    onChange: (inView) => {
      if (inView) {
        setShown(true);
      }
    }
  });

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const updateSubject = (e) => {
    const newSubject = e.target.value;

    setSubject(newSubject);
  };

  const updateBody = (e) => {
    const newBody = e.target.value;

    setBody(newBody);
  };

  return (
    <div ref={ref} className='contact-container'>
      <div className={shown ? 'form-container fade' : 'form-container hidden'}>
        <h1>Let's Connect</h1>
        <div className='form'>
          <TextField
            sx={{ marginBottom: '2rem' }}
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            onChange={updateSubject}
          />
          <TextField
            className='text-field'
            sx={{ marginBottom: '2rem' }}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
            onChange={updateBody}
          />
          <a href={`mailto:slwooten14@gmail.com?subject=${subject}&body=${body}`}>
            <Button sx={{ width: '8rem', alignSelf: 'center', textTransform: 'none', backgroundColor: '#3d8fc6' }} variant="contained">Email Me</Button>
          </a>
        </div>
      </div>
      <div className={shown ? 'social-links fade' : 'social-links hidden'}>
        Built with{' '}
        <a href='https://reactjs.org/' target='new'>
          React.js
        </a>
        <i class="react-icon devicon-react-original colored"></i>
      </div>
    </div>
  );
};

export default Contact;

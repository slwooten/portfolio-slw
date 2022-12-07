import React, { useState } from 'react';

import './contact.css';

// MUI Components //
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Contact = () => {

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
    <div className='contact-container'>
      <div className='form-container'>
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
            <Button sx={{ width: '8rem', alignSelf: 'center', textTransform: 'none' }} variant="contained">Email Me</Button>
          </a>
        </div>
      </div>
      <div className='social-links'>
        hey
        hello
        hi
      </div>
    </div>
  );
};

export default Contact;

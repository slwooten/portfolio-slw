import React from 'react';

// Material UI Icons //
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ReadMore from '@mui/icons-material/ReadMore';

const Project = ({
  title,
  isActive,
  onShow,
  children,
  tech,
  appLink,
  gitLink
}) => {

  return (
    <div className='project-card'>
      <h1>{title}</h1>
      {isActive ? (
        <div>
          <h3>What is {title}?</h3>
          <p className='description'>{children}</p>
          <h3>Technologies Used:</h3>
          {tech.map((item) => {
            return <p key={item}>- {item}</p>
          })}
          <div className='project-links'>
            <div>
              <h4>Repository</h4>
              <a className='project-link-git' target='new' href={gitLink}>
                <GitHubIcon className='icon' sx={{ fontSize: '3rem' }} />
              </a>
            </div>
            <div>
              <h4>Application</h4>
              <a className='project-link-app' target='new' href={appLink}>
                <LaunchIcon className='icon' sx={{ fontSize: '3rem' }} />
              </a>
            </div>

          </div>
        </div>
      ) : (
        <ReadMore
          className='expand-icon'
          onClick={onShow}
          sx={{ fontSize: '3rem', color: 'green' }}
        />
      )}
    </div>
  );
};

export default Project;
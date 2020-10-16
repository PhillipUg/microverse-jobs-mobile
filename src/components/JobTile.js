import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/JobTile.module.css';


const JobTile = ({ job, removeJob }) => (
  <div>
    <div>{job.company}</div>
    <div>{job.position}</div>
    <div>{job.description}</div>
    <div>
      <Link to={`/jobs/${job.id}`}>
        <button type="button" className={[styles.btn, styles.btn__apply].join(' ')}>Details</button>
      </Link>
      {/* <button onClick={() => removeJob(job.id)} type="button" className={[styles.btn, styles.btn__save].join(' ')}>Delete</button> */}
    </div>
  </div>
);

export default JobTile;

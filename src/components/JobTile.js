import React from 'react';
import styles from '../assets/styles/JobTile.module.css';


const JobTile = ({ job, currentIndex }) => (
  <a className={styles.link} href={`/jobs/${job && job.id}`}>
    <div className={styles.card}>
      <div className={styles.logo}>{job && <img src={require(`../assets/images/logo${job.id}.jpg`)} alt="company logo" />}</div>
      <div>{job && job.company}</div>
      <div>{job && job.position}</div>
      <div>{job && job.salary}</div>
      <div>{job && job.location}</div>
      <p>Job Description</p>
      <div>{job && job.description}</div>
      <div>
      </div>
    </div>
  </a>
);

export default JobTile;

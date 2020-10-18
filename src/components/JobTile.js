import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/styles/JobTile.module.css';

const JobTile = ({ job }) => (
  <Link className={styles.link} to={`/jobs/${job && job.id}`}>
    <div className={styles.card}>
      <div className={styles.logo}>{job && <img src={require(`../assets/images/logo${job.id}.jpg`)} alt="company logo" />}</div> {/*eslint-disable-line*/}
      <div>{job && job.company}</div>
      <div>{job && job.position}</div>
      <div>{job && job.salary}</div>
      <div>{job && job.location}</div>
      <p>Job Description</p>
      <div>{job && job.description}</div>
    </div>
  </Link>
);

JobTile.propTypes = {
  job: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default JobTile;

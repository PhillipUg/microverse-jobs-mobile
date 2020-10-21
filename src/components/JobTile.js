import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/styles/JobTile.module.css';

const JobTile = ({ job }) => {
  const {
    id, position, description, salary, company, location,
  } = job || {};

  return (
    <Link className={styles.link} to={`/jobs/${id}`}>
      <div className={styles.card}>
        <div className={styles.logo}>{job && <img src={require(`../assets/images/logo${id}.jpg`)} alt="company logo" />}</div> {/*eslint-disable-line*/}
        <div>{company}</div>
        <div>{position}</div>
        <div>{salary}</div>
        <div>{location}</div>
        <p>Job Description</p>
        <div>{description}</div>
      </div>
    </Link>
  );
};

JobTile.propTypes = {
  job: PropTypes.objectOf(PropTypes.object),
};

JobTile.defaultProps = {
  job: undefined,
};
export default JobTile;

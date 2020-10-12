import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './JobTile.module.css';
import jobImg from './job.png';

/*eslint-disable*/
const JobTile = ({ job }) => (
  <div className={styles.card}>
    <div>
      <img src={job.company_logo ? job.company_logo : jobImg} alt="company-logo" className={styles.company_logo} />
    </div>
    <div className={styles.title}>{`${job.title.slice(0, 23)}...`}</div>
    <div>{job.type}</div>
    <div>{job.created_at.slice(0, 10)}</div>
    <div>{job.location}</div>
    <div className={styles.btn_container}>
      <Link to={`/jobs/${job.id}`}>
        <button type="button" className={[styles.btn, styles.btn__apply].join(' ')}>Apply</button>
      </Link>
      <button type="button" className={[styles.btn, styles.btn__save].join(' ')}>Save</button>
    </div>
  </div>
);
/*eslint-disable*/
JobTile.protoTypes = {
  job: PropTypes.any,
};

export default JobTile;

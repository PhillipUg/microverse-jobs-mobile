import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './JobDetails.module.css';
import jobImg from './job.png';

const JobDetails = ({ job }) => (
  <div className={styles.details}>
    <div className={styles.img}>
      <img src={job[0].company_logo ? job[0].company_logo : jobImg} alt="company-logo" width="300" />
    </div>
    <div>
      <span>Job Title:</span>
      {job[0].title}
    </div>
    <div>
      <span>Job Type:</span>
      {job[0].type}
    </div>
    <div>
      <span>Posted on:</span>
      {job[0].created_at}
    </div>
    <div>
      <span>Location:</span>
      {job[0].location}
    </div>
    <div>
      <span>Company Name:</span>
      {job[0].company}
    </div>
    <div>
      <span>Company Url:</span>
      <a href={job[0].company_url}>{job[0].company_url}</a>
    </div>
    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: job[0].description }} /> {/*eslint-disable-line*/}

    <div dangerouslySetInnerHTML={{ __html: job[0].how_to_apply }} /> {/*eslint-disable-line*/}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    job: state.jobsReducer.jobs.filter(job => job.id === id),
  };
};

JobDetails.propTypes = {
  job: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(JobDetails);

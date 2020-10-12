import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
import styles from './JobDetails.module.css';

const JobDetails = (props) => {
  const { jobs } = useContext(JobContext)
  const id = parseInt(props.match.params.id)
  const job = jobs.filter(job => job.id === id)

  return (

    <div className={styles.details}>

      <div>
        <span>Company:</span>
        {job[0].company}
      </div>
      <div>
        <span>Position:</span>
        {job[0].position}
      </div>
      <div>
        <span>Description:</span>
        {job[0].description}
      </div>

    </div>
  );
};

export default JobDetails;

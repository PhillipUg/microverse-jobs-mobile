import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import JobTile from './JobTile';
import AuthService from '../services/authService';
import authHeader from '../services/authHeader';
import styles from '../assets/styles/JobList.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../actions/jobsActions'

const JobList = () => {
  const jobs = useSelector((state) => state.jobs)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  // const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() })
  //     .then(res => setJobs(res.data));
  // }, []);

  const user = AuthService.getCurrentUser();

  if (!user) return <Redirect to="/signin" />;

  // console.log(jobs.jobs && jobs.jobs.length - 1)

  const prevSlide = () => {
    const lastIndex = jobs.jobs && jobs.jobs.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = jobs.jobs && jobs.jobs.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const loading = false;

  return (
    <section>
      {loading && <p>Loading...</p>}
      <div className={styles.wrapper}>
        <i className="fas fa-angle-left" onClick={prevSlide} />{/*eslint-disable-line*/}
        <div className={styles.carousel}>
          {jobs.jobs && jobs.jobs.map(job => <JobTile key={job.id} job={job} />)}
        </div>
        <i className="fas fa-angle-right" onClick={nextSlide} />{/*eslint-disable-line*/}
      </div>
      <div className={styles.counter}>{`${currentIndex + 1}/${jobs.jobs && jobs.jobs.length}`}</div>

    </section>
  );
};

export default JobList;

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import JobTile from './JobTile';
import styles from '../assets/styles/JobList.module.css';
import { getData } from '../actions/jobsActions';
import { getCurrentUser } from '../actions/authActions';

const JobList = () => {
  const { jobs, loading } = useSelector(state => ({
    jobs: state.jobs.jobs,
    loading: state.jobs.loading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const user = getCurrentUser();

  if (!user) return <Redirect to="/signin" />;

  const prevSlide = () => {
    const lastIndex = jobs && jobs.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = jobs && jobs.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  return (
    <section>
      {loading && (
      <div className="loading">
        <BeatLoader loading={loading} />
      </div>
      )}
      <div className={styles.wrapper}>
        <i className="fas fa-angle-left" onClick={prevSlide} />{/*eslint-disable-line*/}
        <div className={styles.carousel}>
          {jobs && jobs.map(job => <JobTile key={job.id} job={jobs[currentIndex]} />)}
        </div>
        <i className="fas fa-angle-right" onClick={nextSlide} />{/*eslint-disable-line*/}
      </div>
      <div className={styles.counter}>
        {`${currentIndex + 1}/${jobs && jobs.length}`}
      </div>

    </section>
  );
};

export default JobList;

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import JobTile from './JobTile';
import authHeader from '../services/authHeader';
import styles from '../assets/styles/JobList.module.css';
import AuthService from '../services/authService';

const Favorites = () => {
  const [jobs, setJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/user-jobs', { headers: authHeader() })
      .then(data => setJobs(data.data));
  }, []);

  const prevSlide = () => {
    const lastIndex = jobs.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = jobs.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  const user = AuthService.getCurrentUser();

  if (!user) return <Redirect to="/signin" />;

  return (
    <div>
      {!jobs.length ? (
        <p style={{ textAlign: 'center', marginTop: '50%', color: 'grey' }}>
          No favorites yet!
        </p>
      ) : (
        <div>
          <div className={styles.wrapper}>
              <i className="fas fa-angle-left" onClick={prevSlide} />{/*eslint-disable-line*/}
            <div className={styles.carousel}>
              <JobTile key={currentIndex} job={jobs[currentIndex]} />
            </div>
              <i className="fas fa-angle-right" onClick={nextSlide} />{/*eslint-disable-line*/}
          </div>
          <div className={styles.counter}>{`${currentIndex + 1}/${jobs.length}`}</div>
        </div>
      )}
    </div>
  );
};

export default Favorites;

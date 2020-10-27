import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import JobTile from './JobTile';
import styles from '../assets/styles/JobList.module.css';
import { getData } from '../actions/favoritesActions';
import { getCurrentUser } from '../actions/authActions';

const Favorites = () => {
  const { jobs, loading } = useSelector(state => ({
    jobs: state.favorites.favorites,
    loading: state.favorites.loading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const user = getCurrentUser();

  if (!user) return <Redirect to="/signin" />;

  return (
    <section>
      {loading && (
      <div className="loading">
        <BeatLoader loading={loading} />
      </div>
      )}
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
    </section>
  );
};

export default Favorites;

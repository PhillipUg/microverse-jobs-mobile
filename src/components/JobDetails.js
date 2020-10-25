import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import styles from '../assets/styles/JobDetails.module.css';
import { getJob } from '../actions/jobsActions';
import { updateFav } from '../actions/favoritesActions';
import { getCurrentUser } from '../actions/authActions';

const JobDetails = ({ match }) => {
  const dispatch = useDispatch();
  const id = parseInt(match && match.params.id, 10);
  const { job, loading, favorited } = useSelector(state => ({
    job: state.job.job,
    loading: state.job.loading,
    favorited: state.job.favorited,
  }));

  const user = getCurrentUser();

  useEffect(() => {
    dispatch(getJob(id));
  }, [dispatch, id]);

  if (!user) return <Redirect to="/signin" />;

  const handleClick = e => {
    if (e.target.value === 'favorite') {
      e.target.value = 'unfavorite';
      e.target.style.background = 'red';
      e.target.textContent = 'Remove from favorites';
      updateFav(user.user.id, id);
    } else {
      e.target.value = 'favorite';
      e.target.style.background = '#ED5C28';
      e.target.textContent = 'Add to favorites';
      updateFav(user.user.id, id);
    }
  };

  let btn;
  if (favorited === null) {
    btn = '';
  } else if (favorited === false) {
    btn = <button type="button" onClick={handleClick} style={{ background: '#ED5C28' }} value="favorite">Add to favorites</button>;
  } else {
    btn = <button type="button" onClick={handleClick} style={{ background: 'red' }} value="unfavorite">Remove from favorites</button>;
  }

  return (
    <section className={styles.details}>
      {loading && (
      <div className="loading">
        <BeatLoader loading={loading} />
      </div>
      )}
      <div className={styles.wrapper}>
        <div className={styles.img}><img src={require(`../assets/images/logo${id}.jpg`)} alt="company logo" /></div> {/*eslint-disable-line*/}
        <div>
          <span>Company:</span>
          {job && job.company}
        </div>
        <div>
          <span>Position:</span>
          {job && job.position}
        </div>
        <div>
          <span>Salary:</span>
          {job && job.salary}
        </div>
        <div>
          <span>Location:</span>
          {job && job.location}
        </div>
        <div>
          <span>
            About
            {job && job.company}
          </span>
          {job && job.description}
        </div>
        <div>
          <span>Description</span>
          {job && job.description}
        </div>
        <div>
          <span>Requirements</span>
          {job && job.description}
        </div>
        <div>
          <span>Benefits</span>
          {job && job.description}
        </div>
      </div>
      {btn}

    </section>
  );
};

JobDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string),
};

JobDetails.defaultProps = {
  match: undefined,
};

export default JobDetails;

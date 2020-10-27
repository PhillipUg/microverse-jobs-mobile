import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import styles from '../../assets/styles/auth.module.css';
import { getCurrentUser, register } from '../../actions/authActions';

function SignUp(props) {
  const dispatch = useDispatch();
  const [mystate, setMystate] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setMystate(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    dispatch(register(mystate.username, mystate.password))
      .then(res => {
        if (res.error) {
          setLoading(false);
          setError(res.error);
        } else {
          props.history.push('/');
          window.location.reload();
        }
      })
      .then(() => setLoading(false));
  };

  const user = getCurrentUser();
  if (user) return <Redirect to="/" />;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <p>Sign up</p>
        <p>Hello there! Sign up and start your job hunt</p>
        <p>{error && `! ${error}`}</p>
        {loading && (
        <div className="loading">
          <BeatLoader loading={loading} />
        </div>
        )}

        <input
          type="username"
          id="username"
          placeholder="Enter username"
          value={mystate.username}
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={mystate.password}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Sign Up</button>
          <Link to="/signin">
            <button type="button">Sign In</button>
          </Link>
        </div>

      </form>
    </div>
  );
}

SignUp.propTypes = {
  history: PropTypes.string,
};

SignUp.defaultProps = {
  history: '/',
};

export default SignUp;

import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import styles from '../../assets/styles/auth.module.css';
import { getCurrentUser, login } from '../../actions/authActions';

function SignIn(props) {
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
    setLoading(true);
    setError('');
    dispatch(login(mystate.username, mystate.password))
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
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <p>Sign in</p>
        <p>Hello there! Sign in and start your job hunt</p>
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
          <button type="submit"> Sign In </button>
          <Link to="/signup">
            <button type="button"> Sign Up </button>
          </Link>
        </div>
        <h6>Forgot Password?</h6>
      </form>
    </div>
  );
}

SignIn.propTypes = {
  history: PropTypes.string,
};

SignIn.defaultProps = {
  history: '/',
};

export default SignIn;

import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../../services/authService';
import styles from '../../assets/styles/auth.module.css';

function SignIn(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    AuthService.login(state.username, state.password)
      .then(res => {
        if (res.error) {
          setError(res.error);
        } else {
          props.history.push('/');
          window.location.reload();
        }
      });
  };

  const user = AuthService.getCurrentUser();

  if (user) return <Redirect to="/" />;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <p>Sign in</p>
        <p>Hello there! Sign in and start your job hunt</p>
        <p>{error && `! ${error}`}</p>
        <input
          type="username"
          id="username"
          placeholder="Enter username"
          value={state.username}
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div>
          <button type="button"> Sign In </button>
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
  history: PropTypes.func.isRequired,
};

export default SignIn;

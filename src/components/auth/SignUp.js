import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../../services/authService';
import styles from '../../assets/styles/auth.module.css';

function SignUp(props) {
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
    AuthService.register(state.username, state.password)
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
        <p>Sign up</p>
        <p>Hello there! Sign up and start your job hunt</p>
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
  history: PropTypes.func.isRequired,
};

export default SignUp;

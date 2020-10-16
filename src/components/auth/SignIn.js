import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { Redirect } from 'react-router-dom'
import styles from '../../assets/styles/auth.module.css'
import { Link } from 'react-router-dom';


function SignIn(props) {
  const [state, setState] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(state.username, state.password)
      .then(() => {
        props.history.push('/')
        window.location.reload();
      })
  }

  const user = AuthService.getCurrentUser();

  if (user) return <Redirect to="/" />

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p>Hello there! Sign in and start your job hunt</p>
        <input type="username"
          id="username"
          placeholder="Enter username"
          autoFocus
          value={state.username}
          onChange={handleChange}
        />

        <input type="password"
          id="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <div>
          <button> Sign In </button>
          <Link to={'/signup'}>
            <button> Sign Up </button>
          </Link>
        </div>
        <h6>Forgot Password?</h6>
      </form>
    </div>
  )
}

export default SignIn;
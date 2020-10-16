import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { Redirect } from 'react-router-dom'
import styles from '../../assets/styles/auth.module.css'
import { Link } from 'react-router-dom';


function SignUp(props) {

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
    AuthService.register(state.username, state.password)
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
        <h1>Sign up</h1>
        <p>Hello there! Sign up and start your job hunt</p>
        <input type="username"
          id="username"
          placeholder="Enter username"
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
          <button>Sign Up</button>
          <Link to={'/signin'}>
            <button>Sign In</button>
          </Link>
        </div>

      </form>
    </div>
  )
}

export default SignUp;
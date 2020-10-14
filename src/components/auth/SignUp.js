import React, { useState } from 'react';
import AuthService from '../../services/authService';
import { Redirect } from 'react-router-dom'

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
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'
import AuthService from '../services/authService';
// import { connect } from 'react-redux'

const Navbar = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) setCurrentUser(user);
  }, [])
  // const { auth } = props;
  // const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      {currentUser ? (
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              {currentUser.user.username}
            </Link>
          </li>
          <li className="nav-item">
            <a href="/signup" className="nav-link" onClick={AuthService.logout}>
              LogOut
              </a>
          </li>
        </div>
      ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}

    </nav>
  )
}

export default Navbar;
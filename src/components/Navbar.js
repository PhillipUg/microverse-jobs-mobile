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
    <nav className="navbar">
      {currentUser ? (
        <div >
          <li>
            <Link to={"/"}>
              All Jobs
            </Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              Favorites
            </Link>
          </li>
          <li>
            {currentUser.user.username}
          </li>
          <li >
            <a href="/signin" onClick={AuthService.logout}>
              LogOut
              </a>
          </li>
        </div>
      ) : (
          <div>
            <li>
              <Link to={"/signin"}>
                Login
              </Link>
            </li>

            <li>
              <Link to={"/signup"}>
                Sign Up
              </Link>
            </li>
          </div>
        )}

    </nav>
  )
}

export default Navbar;
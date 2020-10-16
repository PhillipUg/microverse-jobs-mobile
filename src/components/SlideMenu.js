import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import styles from '../assets/styles/SlideMenu.module.css'

const SlideMenu = ({ slideClass, handleClick }) => {

  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, [])
  // console.log(currentUser && currentUser.user)

  return (
    <div className={styles.sliding_menu + " " + slideClass}>
      <button type="button" onClick={handleClick}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <ul>
        <li>
          {currentUser && currentUser.user.username}
        </li>

          <Link to={"/favorites"}>
        <li>
            Favorites
        </li>
            </Link>
        <li >
          <a href="/signin" onClick={AuthService.logout}>
            LogOut
              </a>
        </li>
      </ul>
    </div>
  );
}

export default SlideMenu

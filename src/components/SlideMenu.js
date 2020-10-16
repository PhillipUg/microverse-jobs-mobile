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

  return (
    <div className={styles.sliding_menu + " " + slideClass}>
      <button type="button" onClick={handleClick}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <div>
        <div className={styles.img}></div>
        <div>
          @{currentUser && currentUser.user.username}
        </div>
      </div>
      <ul>
        <Link to={"/"}>
          <li onClick={handleClick}>
            Dashboard
        </li>
        </Link>
        <Link to={"/user-jobs"}>
          <li onClick={handleClick}>
            Favorites
        </li>
        </Link>

        <li>
          Notifications
        </li>
        <li>
          Messages
        </li>
        <hr />
        <li>
          Help
        </li>
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

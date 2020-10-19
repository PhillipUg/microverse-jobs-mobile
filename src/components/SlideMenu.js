import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../services/authService';
import styles from '../assets/styles/SlideMenu.module.css';

const SlideMenu = ({ slideClass, handleClick, currentUser }) => (
  <div className={`${styles.sliding_menu} ${slideClass}`}>
    <button type="button" onClick={handleClick}>
      <i className="fas fa-arrow-left" />
    </button>
    <div>
      <div className={styles.img} />
      <div>{currentUser && `@${currentUser.user.username}`}</div>
    </div>
    <ul>
      <Link to="/" onClick={handleClick}><li>Dashboard</li></Link>
      <Link to="/user-jobs" onClick={handleClick}><li>Favorites</li></Link>
      <li>Notifications</li>
      <li>Messages</li>
      <hr />
      <li>Help</li>
      <Link to="/signin" onClick={() => { AuthService.logout(); handleClick(); }}>
        <li>LogOut</li>
      </Link>
    </ul>
  </div>
);

SlideMenu.propTypes = {
  slideClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SlideMenu;

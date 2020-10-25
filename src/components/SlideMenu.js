import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/styles/SlideMenu.module.css';
import { logout } from '../actions/authActions';

const SlideMenu = ({
  slideClass, handleClick, currentUser,
}) => (
  <section className={`${styles.sliding_menu} ${slideClass}`}>
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
      <Link to="/signin" onClick={() => { logout(); handleClick(); }}>
        <li>LogOut</li>
      </Link>
    </ul>
  </section>
);

SlideMenu.propTypes = {
  slideClass: PropTypes.string,
  handleClick: PropTypes.func,
  currentUser: PropTypes.objectOf(PropTypes.string),
};

SlideMenu.defaultProps = {
  slideClass: '',
  handleClick: undefined,
  currentUser: null,
};

export default SlideMenu;

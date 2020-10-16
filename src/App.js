import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SlideMenu from './components/SlideMenu';
import Favorites from './components/Favorites.js';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import styles from './assets/styles/SlideMenu.module.css'
import AuthService from './services/authService';


function App() {
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, [])

  const [slideMenu, setSlideMenu] = useState({ slideMenu: false })

  let slideClass;
  slideMenu.slideMenu
    ? slideClass = styles.slide_menu
    : slideClass = '';

  let hideClass;
  !currentUser
    ? hideClass = styles.hide
    : hideClass = "";

  const handleClick = () => {
    setSlideMenu({ slideMenu: !slideMenu.slideMenu })
  }

  return (
    <div className="App">
      <div className={styles.status_bar}>
        <span><i className="fas fa-signal"></i><i className="fas fa-wifi"></i></span>
        <span>4:21 PM</span>
        <span>100% <i className="fas fa-battery-full"></i></span>
      </div>
      <BrowserRouter>

        <div className={styles.main_container + " " + hideClass}>
          <span type="button" onClick={handleClick}>
            <i className="fas fa-bars"></i>
          </span>
          <span>
            <Link to={"/"}>
              Jobs
          </Link>
          </span>
          <span>
            <i className="fas fa-search"></i>
          </span>
          <SlideMenu slideClass={slideClass} handleClick={handleClick} />
        </div>

        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={JobList} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/jobs/:id" component={JobDetails} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;

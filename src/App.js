import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
// import Navbar from './components/Navbar';
import SlideMenu from './components/SlideMenu';
import Favorites from './components/Favorites.js';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import JobContextProvider from './contexts/JobContext';
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
      <BrowserRouter>

        <div className={styles.main_container + " " + hideClass}>
          <span type="button" onClick={handleClick}>
            <i className="fas fa-bars"></i>
          </span>
          <div>
            <Link to={"/"}>
              Jobs
          </Link>
          </div>
          <div>
            <i className="fas fa-search"></i>
          </div>
          <SlideMenu slideClass={slideClass} handleClick={handleClick} />
        </div>

        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <JobContextProvider>
            <Route exact path="/" component={JobList} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/jobs/:id" component={JobDetails} />
          </JobContextProvider>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;

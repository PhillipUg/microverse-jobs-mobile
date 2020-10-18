import React, { useState, useEffect } from 'react';
import {
  Link, BrowserRouter, Switch, Route,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SlideMenu from './components/SlideMenu';
import Favorites from './components/Favorites';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import styles from './assets/styles/SlideMenu.module.css';
import AuthService from './services/authService';

function App() {
  const history = createBrowserHistory();
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  const [slideMenu, setSlideMenu] = useState({ slideMenu: false });

  let slideClass;
  slideMenu.slideMenu ? slideClass = styles.slide_menu : slideClass = ''; {/*eslint-disable-line*/}

  let hideClass;
  !currentUser ? hideClass = styles.hide : hideClass = ''; {/*eslint-disable-line*/ }

  const handleClick = () => {
    setSlideMenu({ slideMenu: !slideMenu.slideMenu });
  };

  let btn;
  if (history.location.pathname.includes('/jobs/')) {
    btn = <span onClick={history.goBack}><i className="fas fa-angle-left" /></span>; {/*eslint-disable-line*/ }
  } else {
    btn = <span onClick={handleClick}><i className="fas fa-bars" /></span>; {/*eslint-disable-line*/ }
  }

  return (
    <div className="App">
      <div className="ear-piece" />
      <div className={styles.status_bar}>
        <span>
          <i className="fas fa-signal" />
          <i className="fas fa-wifi" />
        </span>
        <span>4:21 PM</span>
        <span>
          100%
          <i className="fas fa-battery-full" />
        </span>
      </div>
      <BrowserRouter>

        <div className={`${styles.main_container} ${hideClass}`}>
          {btn}

          <span>
            <Link to="/">
              {history.location.pathname === '/' ? 'Jobs' : history.location.pathname === '/user-jobs' ? 'Favorites' : 'Job Details'} {/*eslint-disable-line*/}

            </Link>
          </span>
          <span>
            <i className="fas fa-search" />
          </span>
          <SlideMenu slideClass={slideClass} handleClick={handleClick} />
        </div>

        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={JobList} />
          <Route exact path="/user-jobs" component={Favorites} />
          <Route exact path="/jobs/:id" component={JobDetails} />
        </Switch>
      </BrowserRouter>
      <div className="navigation">
        <a href="/"></a> {/*eslint-disable-line*/}
      </div>
    </div>
  );
}

export default App;

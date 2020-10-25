import React, { useState } from 'react';
import {
  Link, BrowserRouter, Switch, Route,
} from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SlideMenu from './components/SlideMenu';
import Favorites from './components/Favorites';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import styles from './assets/styles/SlideMenu.module.css';
import { getCurrentUser } from './actions/authActions';

function App() {
  const user = getCurrentUser();

  const [slideMenu, setSlideMenu] = useState({ slideMenu: false });

  let slideClass;
  slideMenu.slideMenu ? slideClass = styles.slide_menu : slideClass = ''; {/*eslint-disable-line*/ }

  const handleClick = () => {
    setSlideMenu({ slideMenu: !slideMenu.slideMenu });
  };

  return (
    <main className="App">
      <div className="ear-piece" />
      <header className={styles.status_bar}>
        <span>
          <i className="fas fa-signal" />
          <i className="fas fa-wifi" />
        </span>
        <span>4:21 PM</span>
        <span>
          100%
          <i className="fas fa-battery-full" />
        </span>
      </header>
      <BrowserRouter>

        {
          user && (
            <nav className={styles.main_container}>
              <span onClick={handleClick}><i className="fas fa-bars" /></span> {/*eslint-disable-line*/}

              <span>
                <Link to="/">
                  Jobs
                </Link>
              </span>
              <span>
                <i className="fas fa-search" />
              </span>
              <SlideMenu
                slideClass={slideClass}
                currentUser={user}
                handleClick={handleClick}
              />
            </nav>
          )
        }

        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={JobList} />
          <Route path="/user-jobs" component={Favorites} />
          <Route path="/jobs/:id" component={JobDetails} />
        </Switch>
      </BrowserRouter>
      <div className="navigation">
        <a href="/"></a> {/*eslint-disable-line*/}
      </div>
    </main>
  );
}

export default App;

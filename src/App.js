import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites.js';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import JobContextProvider from './contexts/JobContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import Navbar from './components/Navbar';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import JobContextProvider from './contexts/JobContext';
import FavoritesContextProvider from './contexts/FavoritesContext';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <JobContextProvider>
            <FavoritesContextProvider>
              <Route exact path="/" component={JobList} />
              <Route path="/jobs/:id" component={JobDetails} />
            </FavoritesContextProvider>
          </JobContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

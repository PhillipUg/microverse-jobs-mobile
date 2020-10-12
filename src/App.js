import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobContextProvider from './contexts/JobContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <JobContextProvider>
          <Switch>
            <Route exact path="/" component={JobList} />
            <Route path="/jobs/:id" component={JobDetails} />
          </Switch>
        </JobContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

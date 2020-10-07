import React from 'react';
import JobList from './components/JobList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobDetails from './components/JobDetails';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route path="/jobs/:id" component={JobDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

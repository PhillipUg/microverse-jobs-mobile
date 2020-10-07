import React from 'react';
import SearchBar from './components/SearchBar'
import JobList from './components/JobList'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobDetails from './components/JobDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route path="/jobs/:id" component={JobDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

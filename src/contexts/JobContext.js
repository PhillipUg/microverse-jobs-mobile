import React, { Component, createContext } from 'react'

export const JobContext = createContext();

export default class JobContextProvider extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs')
      .then((res) => res.json())
      .then(data => this.setState({ jobs: data }))
  }

  addJob = job => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
      .then(() => {
        this.setState({ jobs: [...this.state.jobs, job] })
        console.log(job)
      })
      .catch(err => console.log(err))
  }

  removeJob = (id) => {
    fetch('https://microverse-jobs-api.herokuapp.com/api/v1/jobs/' + id, {
      method: 'DELETE'
    })
      .then(() => this.setState({ jobs: this.state.jobs.filter(job => job.id !== id) }))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <JobContext.Provider value={{ ...this.state, addJob: this.addJob, removeJob: this.removeJob }}>
        {this.props.children}
      </JobContext.Provider>
    )
  }
}


import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    searchTerm: null
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchJobs(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="search" id="search" onChange={this.handleChange} />
      </form>
    )
  }
}

export default SearchBar;
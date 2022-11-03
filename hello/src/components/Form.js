import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       topic: 'react'
    }
  }
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handleUpdateComments = event => {
    this.setState({
      comments: event.target.value
    })
  }
  handleSelectTopic = event => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleUpdateComments}></textarea>
          </div>
          <div>
            <label>Options</label>
            <select value={this.state.topic} onChange={this.handleSelectTopic}>
              <option value='react'>React</option>
              <option value='angular'>Angular</option>
              <option value='vue'>Vue</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      
    )
  }
}

export default Form


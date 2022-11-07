import React, { Component } from 'react'

class PostFrom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId: '',
       title: '',
       body: ''
    }
  }
  render() {
    return (
      <div>PostFrom
        <input type='text' name='userId'/>
        <input type='text' name='title'/>
        <input type='text' name='body'/>
      </div>
    )
  }
}

export default PostFrom
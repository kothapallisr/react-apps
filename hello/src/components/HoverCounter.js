import React, { Component } from 'react'

export class HoverCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  increaseCount = (prevState) => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    }
      )
  }
  render() {
    const {count} = this.state
    return (
      <div><h2 onMouseOver={this.increaseCount}>Hovered {count} times</h2></div>
    )
  }
}

export default HoverCounter
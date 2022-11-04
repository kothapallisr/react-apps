import React, { Component } from 'react'
import WithCounter from './withCounter'

export class HoverCounter extends Component {

  render() {
    const {count, increaseCount} = this.props
    return (
      <div><h2 onMouseOver={increaseCount}>{this.props.name} Hovered {count} times</h2></div>
    )
  }
}

export default WithCounter(HoverCounter, 1)
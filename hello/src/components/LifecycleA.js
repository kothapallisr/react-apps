import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Sridhar'
    }
    this.changeState = this.changeState.bind(this)
    console.log('LifecycleA constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }
  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }
  changeState() {
    this.setState(
      {
        name:'Codevolution'
      }
    )
  }
  render() {
    console.log('LifecycleA render')
    return (
      <div>LifecycleA
      <p>Name: {this.state.name}</p>
      <LifecycleB/>
      <button onClick={this.changeState}>Click Me</button>
      </div>
    )
  }
}

export default LifecycleA
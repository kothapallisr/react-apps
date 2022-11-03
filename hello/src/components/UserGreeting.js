import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  render() {
    return (
      // ternary operator
      // this.state.isLoggedIn ? <div>Welcome Sridhar</div> : <div>Welcome Guest</div>
      // short circuit operator
      this.state.isLoggedIn && <div>Welcome Sridhar</div>
    )
  }
}

export default UserGreeting
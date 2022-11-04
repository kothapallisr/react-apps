import React from 'react'

const withCounter = (WrappedComponent, countNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increaseCount = (prevState) => {
      this.setState(prevState => {
        return {count: prevState.count + countNumber}
      }
        )
    }
    render() {
      return <WrappedComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
    }
  }
  return WithCounter
}

export default withCounter
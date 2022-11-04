import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Sridhar'
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Sridhar'
      })
    }, 2000)
  }
  render() {
    console.log('*************Parent Component***********')
    return (
      <div>ParentComp
        <PureComp name={this.state.name}/>
        <RegComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
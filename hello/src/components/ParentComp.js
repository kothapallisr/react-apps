import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'
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
        <MemoComp name={this.state.name}/>
        {/* <PureComp name={this.state.name}/>
        <RegComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
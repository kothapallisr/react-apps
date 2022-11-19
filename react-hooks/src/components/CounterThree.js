import React, {useReducer} from 'react'
const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state  
  }
}
function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countThree, dispatchThree] = useReducer(reducer, initialState)
  return (
    <div>
    <p>Count - {count}</p>
    <button onClick={() => dispatch('increment')}>Increment</button>
    <button onClick={() => dispatch('decrement')}>Decrement</button>
    <button onClick={() => dispatch('reset')}>Reset</button>
    <p>Count - {countThree}</p>
    <button onClick={() => dispatchThree('increment')}>Increment</button>
    <button onClick={() => dispatchThree('decrement')}>Decrement</button>
    <button onClick={() => dispatchThree('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree
import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 2)
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
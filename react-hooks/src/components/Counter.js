import React, {useState, useMemo} from 'react'

function Counter() {
  const [counterOne, setCounerOne] = useState(0)
  const [counterTwo, setCounerTwo] = useState(0)

  const incrementOne = () => {
    setCounerOne(counterOne + 1)
  }
  const incrementTwo = () => {
    setCounerTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while(i < 200000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
    <div>
      <button onClick={incrementOne}>Counter one - {counterOne}</button>
      <span> {isEven ? 'Even' : 'Odd'}</span>
    </div>
    <div>
      <button onClick={incrementTwo}>Counter two - {counterTwo}</button>
    </div>
    </div>
  )
}

export default Counter
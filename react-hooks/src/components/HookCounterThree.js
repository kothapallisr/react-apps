import React from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <form>
      <input type='text' value={name.firstName} />
      <input type='text' value={name.lastName} />
      <h3>Your first name is: {name.firstName}</h3>
      <h3>Your last name is: {name.lastName}</h3>
    </form>
  )
}

export default HookCounterThree
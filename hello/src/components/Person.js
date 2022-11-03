import React from 'react'

function Person({person}) {
  return (
    <div><h2>I'm {person.name} of age {person.age} and know {person.skill}</h2></div>
  )
}

export default Person
import React from 'react'

function NameList() {
  const names = ['Rob', 'Van', 'Sar'];
  const persons = [{id:1, name:'Rob', age: 25, skill:'React'}, {id:2, name:'Dan', age: 28, skill:'Angular'}, {id:3, name:'Sar', age: 35, skill:'Vue'}]
  //const namesList = names.map(name => <h2>{name}</h2>)
  const personList = persons.map(person => <h2>I'm {person.name} of {person.age} and I'm {person.skill} developer</h2>)
  return (
    <div>{personList}</div>
  )
}

export default NameList
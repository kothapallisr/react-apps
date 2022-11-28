import React from 'react'

function Job(props) {
  return (
    <div>
      <h3>Company: {props.company}</h3>
      <p>Position: {props.position}</p>
      <p>Salary: {props.salary}</p>
    </div>
  )
}

export default Job
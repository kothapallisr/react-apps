import React from 'react'
import Columns from './Columns'

function Table() {
  return (
    <div>
      <h3>Table</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th><th>Id</th>
          </tr>
          <tr>
            <Columns/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
import React, {useContext} from 'react'
import {UserContext, ChannelContext} from '../App'

function ComponentF() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <div>
      <h3>ComponentF</h3>
      {user} - {channel}
    </div>
  )
}

export default ComponentF
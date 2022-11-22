import React, {useEffect, useRef} from 'react'

function FocusInput() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })
  return (
    <div>
      <h3>FocusInput</h3>
      <input ref={inputRef} type='text'></input>
    </div>
  )
}

export default FocusInput
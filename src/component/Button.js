import React from 'react'
import { withFormContext } from './withFormContext'

const Button = ({state, onSubmit}) => {
  const onClick = ev => {
    ev.preventDefault()
    for(const key in state) {
      typeof state[key] === 'function' && state[key](true)
    }
    const complete = Object.values(state).every(state => state)
    console.log(complete)
    // Object.values(state).every(state => state === null)
    typeof onSubmit === 'function' && onSubmit()
  }
  return <>
    <button type="button" onClick={onClick}>등록</button>
  </>
}

export default withFormContext(Button)
import React from 'react'
import { withFormContext } from './FormContext'

const Submit = ({state, onSubmit}) => {
  const onClick = ev => {
    ev.preventDefault()
    for(const field in state) {
      typeof state[field] === 'function' && state[field](true)
    }
    const complete = Object.values(state).every(state => state === null)
    complete && onSubmit()
  }
  return <button type="button" onClick={onClick}>등록</button>
}

export default withFormContext(Submit)
import React from 'react'
import { withFormContext } from './FormContext'

const Input = ({type, label, name, invalid, setInvalid, validate, feedback}) => {
  return <>
    <label htmlFor={name}>{label}</label>
    <input 
      type={type}
      name={name}
      id={label}
      onBlur={({target}) => setInvalid(!validate(target.value))}
    />
    {invalid && <div>{feedback}</div>}
  </>
}

export default withFormContext(Input)
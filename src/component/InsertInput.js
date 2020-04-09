import React from 'react'
import styled from 'styled-components'
import { withFormContext } from './withFormContext'

const Filed = styled.div`
  background-color: #fff;
` 

const Input = ({type, name, label, invalid, setInvalid, validate, feedback}) => {
  return <Filed>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      onBlur={({target}) => setInvalid(!validate(target.value))}
      autoComplete="off"
    />
    {invalid && <div>{feedback}</div>}
  </Filed>
}

export default withFormContext(Input)
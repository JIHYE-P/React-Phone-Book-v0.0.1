import React from 'react'
import styled from 'styled-components'
import { withFormContext } from './withFormContext'

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  margin: 5px 0;
  padding: 12px 18px;
  box-sizing: border-box;
  border: 1px solid #ececec;
  background: #fff;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #888;
  }
  & + span {
    display: block;
    margin-top: 3px;
    font-size: 12px;
    padding-left: 18px;
    box-sizing: border-box;
    color: #d84444;
    text-align: left;
  }
` 
const Input = ({invalid, setInvalid, validate, feedback, ...props}) => {
  return <>
    <InputStyled {...props} onBlur={({target}) => setInvalid(!validate(target))} autoComplete="off"></InputStyled>
    {invalid && <span>{feedback}</span>}
  </>
}

export default withFormContext(Input)
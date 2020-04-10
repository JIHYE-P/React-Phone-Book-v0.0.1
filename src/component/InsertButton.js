import React from 'react'
import { withFormContext } from './withFormContext'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-block;
  width: 100%;
  height: 45px;
  margin: 10px 0;
  border: none;
  color: #000;
  background: #51cf66;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.15);
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease-in-out;
  &:hover, &:active {
    background-color: #37b24d;
  }
`
const Button = ({datas, onSubmit}) => {
  const onClick = ev => {
    ev.preventDefault()
    for(const key in datas) typeof datas[key].valid === 'function' && datas[key].valid(true)
    
    const complete = Object.values(datas).every(({valid}) => valid === true)
    if(!complete) return
    
    Object.keys(datas).forEach(key => datas[key].target.value = '')
    const currentData = Object.keys(datas).map(key => Object.assign({[key]: datas[key].value}))
    typeof onSubmit === 'function' && onSubmit(Object.assign(...currentData))
  }
  return <ButtonStyled type="button" onClick={onClick}>등록</ButtonStyled>
}

export default withFormContext(Button)
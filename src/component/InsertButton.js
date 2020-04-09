import React, { useState } from 'react'
import { withFormContext } from './withFormContext'

const Button = ({state, onSubmit, insertData}) => {
  const [data, setData] = useState([insertData])
  const onClick = ev => {
    ev.preventDefault()
    for(const key in state) {
      typeof state[key] === 'function' && state[key](true)
    }
    const complete = Object.values(state).every(state => state === true)
    if(!complete) return
    setData(data.concat({...insertData}))
    localStorage.setItem('information', JSON.stringify(data))
    typeof onSubmit === 'function' && onSubmit()
  }
  return <>
    <button type="button" onClick={onClick}>등록</button>
  </>
}

export default withFormContext(Button)
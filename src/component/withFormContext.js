import React, { useState } from 'react'
import { FormConsumer } from './FormContext'
// HOC (Higher-order Component)
// 리액트 컴포넌트를 인자로 받아서 다른 리액트 컴포넌트를 반환하는 함수를 고차함수라고 한다.
// 컴포넌트 로직을 재사용하기 위한 리액트의 고급기술이다. 함수로서 컴포넌트를 인자로 받아 새로운 컴포넌트를 리턴합니다.
// 첫번째 파라미터는 wrapped 컴포넌트이며, 두 번째 파라미터로 DataSource와 현재 props값을 받습니다
// 리액트 컴포넌트를 작성하게 될 때 반복될 수 있는 코드들을 HoC를 만들어서 해결할 수 있다.

export const withFormContext = WrapperComponents => props => {
  const [invalid, setInvalid] = useState(false)
  return (
    <FormConsumer>
      {
        ({state, setState}) => {
          const validate = props.validate 
          ? (value) => {
            const valid = props.validate(value)
            setState({[props.name] : valid ? true : setInvalid})
          }
          : () => null

          !(props.name in state) && validate('')
          return <WrapperComponents 
            {...props}
            validate={validate}
            invalid={invalid}
            setInvalid={setInvalid}
            state={state}
          />
        }
      }
    </FormConsumer>
  )
}
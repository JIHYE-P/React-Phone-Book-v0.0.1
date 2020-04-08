import React, { createContext, useState } from 'react'
// contextAPI란
// 데이터를 전역적으로 사용되어야 할 때 사용된다. root 컴포넌트의 value 값과 value 값을 변경하는 handleChangeValue 함수가 있다면
// value라는 값을 컴포넌트 F와 J에서 보여주고 있고, value 값을 변경시키는 함수는 G컴포넌트에 있다고 가정하면
// value와 함수는 props로 하위 컴포넌트에게 전달해주게 된다.
// value값은 Root->A->B->F, Root->H->J  / 함수는 Root->A->B->E->G 전달
// 컴포넌트의 깊이가 깊어질수록 다루는 데이터도 많아지고, 유지보수가 어렵다. 
// 이를 contextAPI 를 통하여 글로벌 전역 상태로 관리할 수 있으면 꽤나 편리하다.
// 여러 컴포넌트를 거쳐 전달하는것이 아니라 context를 통해서 원하는 값이나 함수를 전달할 수 있게된다.

const FormContext = createContext()
const {Consumer: FormConsumer} = FormContext

export const FormProvider = (props) => {
  const [state, setState] = useState({})
  const value = {
    state,
    setState: data => setState(Object.assign(state, data))
  }
  return <FormContext.Provider {...props} value={value}></FormContext.Provider>
}

export {FormConsumer}
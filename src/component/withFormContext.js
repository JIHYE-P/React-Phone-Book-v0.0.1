import React, { useState, createContext } from 'react'

const FormContext = createContext()

export const FormProvider = (props) => {
  const [datas, setDatas] = useState({})
  const value = {
    datas,
    setDatas: data => setDatas(Object.assign(datas, data))
  }
  return <FormContext.Provider {...props} value={value}></FormContext.Provider>
}

export const withFormContext = WrapperComponents => props => {
  const [invalid, setInvalid] = useState(false)
  return (
    <FormContext.Consumer>
      {
        ({datas, setDatas}) => {
          const validate = props.validate 
          ? (target) => {
            const valid = Boolean(props.validate(target))
            setDatas({[props.name] : {valid: valid ? true : setInvalid, value: target.value, target: target}})
            return valid
          }
          : () => null;
          !(props.name in datas) && validate('')
          return <WrapperComponents 
            {...props}
            validate={validate}
            invalid={invalid}
            setInvalid={setInvalid}
            datas={datas}
          />
        }
      }
    </FormContext.Consumer>
  )
}
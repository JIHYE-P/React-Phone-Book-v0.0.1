import React, { useState } from 'react';
import './App.css';
import Input from './component/InsertInput';
import Button from './component/InsertButton';
import { FormProvider } from './component/withFormContext';
import { ItemsList } from './component/Items';
import styled from 'styled-components';

const AppStyled = styled.div`
  width: 400px;
  margin: 20px auto;
  text-align: center;
  h1 {
    font-size: 30px;
    color: #343a40;
    margin-bottom: 10px;
  }
`

function App() {
  const [data, setData] = useState([])
  const onSubmit = currentData => {
    setData(data.concat(currentData))
    // localStorage.setItem('information', JSON.stringify(data))
  }
  return ( 
    <AppStyled>
      <h1>React Phone Book</h1>
      <FormProvider>
        <Input
          type="text"
          name="name"
          placeholder="이름"
          feedback="이름를 입력하세요."
          validate={(target) => target.value}
        />
        <Input
          type="text"
          name="phone"
          placeholder="연락처"
          feedback="연락처를 입력하세요."
          validate={(target) => target.value}
        />
        <Button onSubmit={onSubmit} />
      </FormProvider>
      <ItemsList data={data} />
    </AppStyled>
  );
}

export default App;

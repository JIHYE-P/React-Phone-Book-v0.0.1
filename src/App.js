import React from 'react';
import './App.css';
import Input from './component/InsertInput';
import Button from './component/InsertButton';
import { FormProvider } from './component/withFormContext';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <form>
          <Input
            type="text"
            label="이름"
            name="name"
            feedback="이름를 입력하세요."
            validate={(value) => Boolean(value.length)}
          />
          <Input
            type="text"
            label="연락처"
            name="phone"
            feedback="연락처를 입력하세요."
            validate={(value) => Boolean(value.length)}
          />
          <Button />
        </form>
      </FormProvider>
    </div>
  );
}

export default App;

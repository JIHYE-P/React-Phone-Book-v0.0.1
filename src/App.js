import React from 'react';
import './App.css';
import { FormProvider } from './component/FormContext';
import Input from './component/Input';
import Submit from './component/Submit';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <form>
          <Input type="text" label="이름" name="name" feedback="이름을 입력하세요." validate={(value) => Boolean(value.length)} />
          <Input type="text" label="연락처" name="phone" feedback="연락처을 입력하세요." validate={(value) => Boolean(value.length)} />
          <Submit onSubmit={() => console.log('등록')} />
        </form>
      </FormProvider>
    </div>
  );
}

export default App;

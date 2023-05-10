import NavBar from './Components/NavBar';
import './App.css';
import * as React from 'react';
import Page from './Components/Page';
import Help from './Components/Help';
import Parent from './Components/Parent';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Todo from './FunctionalTodoComponents/Todo';
import Child1 from './ClassTodoComponents/Inheritance';
import Calculator from './Components/Calculator';
import { SayHello, SayBye } from './Components/Border';

function App() {

  return (
    <>
      <NavBar />

      {/* all my contents goes here */}
      <div className='container page-css main-content'>
        <Todo />
        {/* <ChildClass name="sheldon" /> */}
        <SayHello />
        {/* <SayBye /> */}
        {/* <Child1 /> */}
      </div>

    </>
  );
}

export default App;
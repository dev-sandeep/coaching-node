import NavBar from './Components/NavBar';
import './App.css';
import * as React from 'react';
import Page from './Components/Page';
import Help from './Components/Help';
import Parent from './Components/Parent';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Todo from './FunctionalTodoComponents/Todo';

function App() {

  return (
    <>
      <NavBar />

      {/* all my contents goes here */}
      <div className='container page-css main-content'>
        <Todo />
      </div>

    </>
  );
}

export default App;
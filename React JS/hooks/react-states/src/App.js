import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Child1 from './components/Child1';
import MainContext from './components/context';
import { Route, Routes } from 'react-router-dom';
import { Factorial } from './components/Factorial';
import Callback from './components/Callback';
import DebounceComp from './components/Debounce';
import ThrottleComp from './components/Throttle';

function App() {
  return (
    <div className="App">
      <MainContext.Provider value={{ theme: 'black' }}>
        <div className='container'>
          <Routes>
            <Route path='drill' element={<Child1 data={"Hello Child3"} />} />
            <Route path='fact' element={<Factorial />} />
            <Route path='call' element={<Callback />} />
            <Route path='debounce' element={<DebounceComp />} />
            <Route path='throttle' element={<ThrottleComp />} />
          </Routes>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default App;

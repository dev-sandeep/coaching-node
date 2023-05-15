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
import { Main } from './redux-components/main'
import {Home} from './ecommerce/home';
import {NavBar} from './ecommerce/navbar';
import Loader from './ecommerce/loader';
import {reducer} from './ecommerce/redux/reducer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function App() {
  const store = createStore(reducer, compose(applyMiddleware(thunk)));
  return (
    <div className="App">
      <Provider store={store}>
      <MainContext.Provider value={{ theme: 'black' }}>
        <NavBar />
        {/* <Loader /> */}
        <div className='container m-body-container'>
          <Routes>
            <Route path='drill' element={<Child1 data={"Hello Child3"} />} />
            <Route path='fact' element={<Factorial />} />
            <Route path='call' element={<Callback />} />
            <Route path='debounce' element={<DebounceComp />} />
            <Route path='throttle' element={<ThrottleComp />} />
            <Route path='redux' element={<Main />} />
            <Route path='ecomm/home' element={<Home />} />
          </Routes>
        </div>
      </MainContext.Provider>
      </Provider>
    </div>
  );
}

export default App;

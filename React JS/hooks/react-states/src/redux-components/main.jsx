import { create } from 'lodash';
import React from 'react';
import { 
    Provider, 
    useDispatch, 
    useSelector 
} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducer';
import {getMessage, loadItems, setMessage} from './actions';
import thunk from 'redux-thunk';

export const Main = ()=>{
    const mainStore = createStore(reducer, compose(applyMiddleware(thunk)));
    
    return (<div className='main-redux redux-box'>
        <Provider store={mainStore}>
            <h4>Main</h4>
            <div className='row'>
                <div className='col-lg-6'>
                    <LeftA />        
                </div>
                <div className='col-lg-6'>
                    <RightA />
                </div>
            </div>
        </Provider>
    </div>);
}

const LeftA = ()=>{
    return (<div className='left1-redux redux-box'>
    <h4>Left A</h4>
    <LeftB />
</div>);
}

const LeftB = ()=>{
    const dispatch = useDispatch();
    const clickHandler = ()=>{
        dispatch(setMessage('Hello World '+Date.now()));
    }

    const loadItemsHandler = async ()=>{
        const resp = await fetch('https://fakestoreapi.com/products')
        const data = await resp.json();
        dispatch(loadItems(data));
    }
    
    return (<div className='left2-redux redux-box'>
    <h4>Left B</h4>
    <button onClick={clickHandler} className='btn btn-primary'>Click Me</button>
    <button onClick={loadItemsHandler} className='btn btn-primary'>Load Items</button>
</div>);
}

const RightA = ()=>{
    return (<div className='right1-redux redux-box'>
    <h4>Right A</h4>
    <RightB />
</div>);
}

const RightB = ()=>{
    const selector = useSelector(state=>state);

    return (<div className='right2-redux redux-box'>
    <h4>Right B</h4>
    {selector.message}
    {JSON.stringify(selector)}
</div>);
}
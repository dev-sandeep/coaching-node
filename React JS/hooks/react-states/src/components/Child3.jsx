import * as React from 'react';
import MainContext from './context';

const Child3 = ({data})=>{
    const {theme} = React.useContext(MainContext);

    return (
        <>
            <h2>Child 3</h2>
            <p>|</p>
            <div>Data from App.js: {data}</div>
            <div>From context data: { theme }</div>
        </>
    );
}

export default Child3;
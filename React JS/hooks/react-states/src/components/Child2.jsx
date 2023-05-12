import * as React from 'react';
import Child3 from './Child3';

const Child2 = ({data})=>{
    return (
        <>
            <h2>Child 2</h2>
            <p>|</p>
            <Child3 data={data} />
        </>
    );
}

export default Child2;
import * as React from 'react';
import Child2 from './Child2';

const Child1 = ({data})=>{
    return (
        <>
            <h2>Child 1</h2>
            <p>|</p>
            <Child2 data={data} />
        </>
    );
}

export default Child1;
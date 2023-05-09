import * as React from 'react';
import {Outlet} from 'react-router-dom';


const Parent = ()=>{
    return (
        <>
            <h1>Parent Heading</h1>
            <hr />
            <Outlet />
        </>
    );
}

export default Parent;
import React from "react";
import LiveContext from './LiveContext'

const PropsDrill = ()=>{
    // const x = 1998;
    const obj = {
        name: 'Iron-Man'
    }
    return (
        <LiveContext.Provider value={obj}>
            <div className="props-drill">
                <h2>Parent 1</h2>
                <Child1 />
            </div>
        </LiveContext.Provider>
    );
}

const Child1 = ()=>{
    return (
        <div>
            <h5>Child 1</h5>
            <Child2 />
        </div>
    );
}

const Child2 = ()=>{
    return (
        <div>
            <h5>Child 2</h5>
            <Child3 />
        </div>
    );
}

const Child3 = ()=>{
    const contextData = React.useContext(LiveContext);
    console.log(contextData);
    // data
    return (
        <div>
            <h5>Child 3</h5>

            <br />
            {contextData.name}
        </div>
    );
}

export default PropsDrill;
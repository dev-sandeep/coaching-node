import * as React from 'react';


const ChildComp = ({click})=>{
    const localHandler = ()=>{
        console.log("child handler called");
        click();
    }
    console.log("child component re-rendered");
    return <button onClick={localHandler} className='btn btn-primary'>
        Child Btn
    </button>
}

const Callback = ()=>{
    const [num, setNum] = React.useState(0);
    const clickHandle = ()=>{setNum(num+1)}
    // React.useCallback(()=>{
    //     setNum(num+1);
    // }, [setNum]);
 
    return (
        <div className='card'>
            <h5>Parent Component</h5>
            {/* <button className='btn btn-warning' onClick={clickHandle}>
                Parent Btn
            </button> */}
            <ChildComp click={clickHandle} />
        </div>
    );    
}

export default Callback;

import * as React from 'react';

const ChildComp = ({handler})=>{//child
    console.log('Child component rendering');
    const localHandler = ()=>{
        console.log("local handler called");
        handler();
    }
    return (<>
        <h3>This is Child</h3>
        <button onClick={()=>localHandler}>Click here</button>
    </>);
};

const DumbComponent = React.memo(()=>{
    console.log('Dumb hild component rendering');
    return (<>
        <h3>This is Dumb Child</h3>
    </>);
});

const Callback = ()=>{//parent
    const [val, setVal] = React.useState('');
    const [num, setNum] = React.useState('');
    console.log("parent rendering");

    const clickHandler = React.useCallback((text)=>{
        setVal(text);
    },[setVal]);

    const parentClickHandler = ()=>{
        setNum(Number(num)+1);
    }
    
    return (<>
        <h3>This is Parent</h3>
        {num}
        <p>{val}</p>
        <ChildComp handler={clickHandler} />
        <DumbComponent />
        <button onClick={parentClickHandler}>Click from parent</button>
    </>);
}

export default Callback;

// const ChildComp = ({click})=>{
//     const localHandler = ()=>{
//         console.log("child handler called");
//         click();
//     }
//     console.log("child component re-rendered");
//     return <button onClick={localHandler} className='btn btn-primary'>
//         Child Btn
//     </button>
// }

// const Callback = ()=>{
//     const [num, setNum] = React.useState(0);
//     // const clickHandle = ()=>{
//     //     setNum(num+1)
//     // }

//     const clickHandle = React.useCallback(()=>{
//         setNum(num+1);
//     }, [setNum]);
 
//     return (
//         <div className='card'>
//             <h5>Parent Component</h5>
//             <ChildComp click={clickHandle} />
//         </div>
//     );    
// }

// export default Callback;

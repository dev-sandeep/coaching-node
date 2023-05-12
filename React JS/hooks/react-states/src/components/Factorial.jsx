import React from 'react';

export const Factorial = ()=>{
    const [num, setNum] = React.useState(0);
    const [fact, setFact] = React.useState(0);
    
    React.useMemo(()=>{
        setFact(factorialOf(num));
    },[num]);

    const onChangeHandler = (e)=>{    
        setNum(e.target.value);
    }
    return (
        <div>
            <input type='number' onChange={onChangeHandler} />
            <br />
            <h4>{fact}</h4>
        </div>
    );
}

// export function Factorial() {
//   const [number, setNumber] = useState(1);
//   const [inc, setInc] = useState(0);

//   const factorial = factorialOf(number);

//   const onChange = event => {
//     setNumber(Number(event.target.value));
//   };
//   const onClick = () => setInc(i => i + 1);
  
//   return (
//     <div>
//       Factorial of 
//       <input type="number" value={number} onChange={onChange} />
//       is {factorial}
//       <button onClick={onClick}>Re-render</button>
//     </div>
//   );
// }

function factorialOf(n) {
    const p1 = Date.now();
    const res = calc(n);
    const p2 = Date.now();
    console.log(p2-p1);
    return res;
}

const calc = (n)=>{
    return n <= 0 ? 1 : n * calc(n - 1);
}
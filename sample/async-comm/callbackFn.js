const sum = (a, b)=>{
    return a+b;
}

const subtract = (a, b)=>{
    return a-b;
}

let az = 1;

const calculate = (a, b, callbackFn)=>{
    const result = callbackFn(a, b);
    console.log(result);
}

calculate(10,19, sum);
const countingSort = (arr, min, max) => {
    const count = {};
    // First populate the count object
    for (let i = 0; i < arr.length; i++) {
        if(count[arr[i]]){
            count[arr[i]]++;
        }else{
            count[arr[i]] = 1;
        }
        
    }

    let finalArr = [];
    for(let key in count){
        while(count[key] != 0){
            finalArr.push(key);
            count[key]--;
        }
    }

    return finalArr;
};

console.log(countingSort([3, 6, 5, 5, 9]));
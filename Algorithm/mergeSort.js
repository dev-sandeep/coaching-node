function swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};

function merge(leftArr, rightArr){
    //merging 2 
    let i = 0, j = 0;
    const finalArr = [];
    
    while(j < rightArr.length && i < leftArr.length){
        if(leftArr[i] < rightArr[j]){
            finalArr.push(leftArr[i]);
            i++;
        }else{
            finalArr.push(rightArr[j]);
            j++;
        }
    }
    
    //concatenate the arrays in condition - when 1 of them still have some data
    let re1 = leftArr.slice(i);//[]
    let re2 = rightArr.slice(j);//[1.2.3.4.5]

    return finalArr.concat(re1).concat(re2);
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    //call recursively
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const arr = [10,9,8,7,6,5];
console.log(mergeSort(arr));
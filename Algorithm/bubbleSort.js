function swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
};

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            //check condition for swap
            if(arr[j] > arr[j+1]){
                arr = swap(arr, j, j+1);
            }
        }
    }
    
    console.log(arr);
}

const arr = [10,9,8,7,6,5];
bubbleSort(arr);
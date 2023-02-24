/**
 * QuickSort
 * refer: https://www.youtube.com/watch?v=SLauY6PpjW4
 */
// let input = [1, 5, 3, 2, 5, 8, 2, 4, 6, 7, 3, 11];
let input = [10,1,17,5,2];

/**
 * The swapping logic here
 */
var swap = (arr, l, h) => {
    let temp = arr[l];
    arr[l] = arr[h];
    arr[h] = temp;
}

/**
 * divide and consquering  - by using recursion
 */
const quickSort = (arr, start, end) => {
    if (start < end) {
        const pointOfPartition = partition(arr, start, end);
        quickSort(arr, start, pointOfPartition - 1);// selectting left of partition
        quickSort(arr, pointOfPartition, end);// selectting right of partition
    }
}

const partition = (arr, leftPivot, rightPivot) => {
    // selecting a pivot element - the middle one!
    var pivot = arr[Math.floor((leftPivot + rightPivot) / 2)];

    // keep moving leftPivot towards right - such that it would "stop" when it gets a number > pivot
    // keep moving rightPivot towards left - such that it would "stop" when it gets a number < pivot
    while (leftPivot <= rightPivot) {
        while (arr[leftPivot] < pivot)
            leftPivot++;

        while (arr[rightPivot] > pivot)
            rightPivot--;

        // point of "stop"
        if (leftPivot <= rightPivot) {
            swap(arr, leftPivot, rightPivot);
            leftPivot++;
            rightPivot--;
        }
    }

    return leftPivot;
}

quickSort(input, 0, input.length - 1);
console.log(input);
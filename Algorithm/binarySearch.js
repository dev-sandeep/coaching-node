/** 
 * Binary Search
 */
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 function binarySearch(array, search) {
     let low = 0, high = array.length - 1;
 
     while (low <= high) {
         let mid = Math.floor((high + low) / 2);
         if (array[mid] == search)
             return mid;
         else if (search > array[mid]) {
             low = mid;
         } else {
             high = mid;
         }
     }
 
     return -1;
 }
 
 let res = binarySearch(arr, 8);
 console.log(res);
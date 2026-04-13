let arr = [1, 2, 3, 4];
// arr.reverse(arr);   
// console.log(arr); 
arr[0] = arr[arr.length-1];
arr[1] = arr[2];
arr[2] = arr[1];
arr[arr.length-1] = arr[0];   
console.log(arr);                                                                          
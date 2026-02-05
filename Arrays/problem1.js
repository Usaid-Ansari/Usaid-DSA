// Left rotation by 1 Element 

let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
for(let i=0; i<arr.length; i++) {
    arr[i] = arr[i+1];
}
arr[arr.length -1] = copy;
console.log(arr);




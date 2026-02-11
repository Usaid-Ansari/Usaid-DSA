// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);
// let  j = 0;
// for(let i = arr.length -1; i >= 0; i--) {
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);


let newarr = [10, 20, 30, 40, 50];

let i = 0; 
let j = newarr.length - 1;

while (i < j) {
    let temp = newarr[i];
    newarr[i] = newarr[j];
    newarr[j] = temp;
    i++;
    j--;
}

console.log(newarr);